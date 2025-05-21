import ky, { type Options, type KyInstance as RawKyInstance } from "ky";
import { Cookie, CookieJar, MemoryCookieStore } from "tough-cookie";
import { FileStore } from "./file_store";
import type { Logger } from "pino";

export type KyInstance = Omit<RawKyInstance, "extend"> & {
	jar: CookieJar;
	extend: (
		defaultOptions: Options | ((parentOptions: Options) => Options),
	) => KyInstance;
};

// Create a ky instance with cookie-handling hooks
export const createClient = (
	path: string,
	headers?: Record<string, string>,
	proxyUrl?: string,
): KyInstance => {
	console.log(proxyUrl);

	// Create a cookie jar to store all cookies
	const jar = new CookieJar(new FileStore(path));
	const originalKy = ky.create({
		headers,
		proxy: proxyUrl,
		retry: {
			limit: 100,
			methods: ["get", "post", "put", "delete", "options", "head"],
			backoffLimit: 1000,
			statusCodes: [429],
		},
		hooks: {
			beforeRetry: [
				async ({ request, options, error, retryCount }) => {
					// console.log("beforeRetry", retryCount, error);
				},
			],
			// After response hook: extract and store cookies
			afterResponse: [
				async (request, options, response) => {
					// Extract Set-Cookie headers
					const setCookieHeaders = response.headers.getSetCookie();

					// Store each cookie in the jar
					if (setCookieHeaders.length) {
						const url = new URL(request.url).origin;

						for (const cookieStr of setCookieHeaders) {
							const cookie = Cookie.parse(cookieStr);
							if (cookie) {
								await jar.setCookie(cookie, url);
							}
						}
					}

					return response;
				},
			],

			// Before request hook: add cookies to request
			beforeRequest: [
				async (request) => {
					// Get cookies for this URL and add them to the request
					const url = request.url;
					const cookieString = await jar.getCookieString(url);
					if (cookieString) {
						request.headers.set("cookie", cookieString);
					}
				},
			],
		},
	});

	// Сохраняем оригинальную функцию extend из ky
	const originalExtend = originalKy.extend.bind(originalKy);

	// Создаем нашу функцию extend, которая обертывает оригинальную
	const customExtend = (
		defaultOptions: Options | ((parentOptions: Options) => Options),
	) => {
		// Вызываем оригинальный extend из ky
		const extendedKy = originalExtend(defaultOptions);

		// Возвращаем обогащенный объект с нашими дополнительными свойствами
		return enhanceKy(extendedKy, jar);
	};

	// Функция для добавления наших специальных свойств к инстансу ky
	const enhanceKy = (
		kyInstance: RawKyInstance,
		cookieJar: CookieJar,
	): KyInstance => {
		return Object.assign(kyInstance, {
			jar: cookieJar,
			extend: customExtend,
		});
	};

	// Возвращаем обогащенный инстанс ky
	return enhanceKy(originalKy, jar);
};
