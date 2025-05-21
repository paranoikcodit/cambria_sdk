import { SHA256 } from "bun";

// Интерфейс, описывающий данные задачи для доказательства выполнения работы.
export interface ChallengeData {
	problem: string; // Исходная строка задачи
	difficulty: number; // Требуемое количество нулей в начале хеша
	salt: string; // Дополнительная строка (соль)
	expirationAt: number; // Таймштамп истечения вызова (в миллисекундах)
}

// Тип возвращаемого значения: либо строка с результатом, либо null при неудаче.
type ChallengeResult = string | null;

/**
 * Функция, последовательно применяющая SHA-256 хеширование заданное число раз.
 *
 * @param input - Исходная строка, которую необходимо хешировать.
 * @param rounds - Количество раундов хеширования (неотрицательное число).
 * @returns Итоговая хекс-строка после последовательного применения хеширования.
 * @throws Error, если rounds меньше 0.
 */
function vm(input: string, rounds: number): string {
	if (rounds < 0) {
		throw new Error("Количество раундов должно быть неотрицательным.");
	}

	let result: string = input;
	for (let i = 0; i < rounds; i++) {
		// Создаём новый объект для хеширования на каждом раунде.
		const hasher = new SHA256();
		// Обновляем хешировщик входной строкой, используя кодировку UTF-8.
		hasher.update(result);
		// Вычисляем хеш и преобразуем его в шестнадцатеричный формат.
		result = hasher.digest("hex");
	}
	return result;
}

/**
 * Функция для вычисления доказательства работы.
 *
 * @param challenge - объект с данными задачи.
 * @param maxIterations - максимальное число итераций для поиска решения (по умолчанию 5e6).
 * @returns Строка вида "итерация|соль", если задача решена, или null в случае неудачи.
 */
export function solveChallenge(
	challenge: ChallengeData,
	maxIterations = 5e6,
): ChallengeResult {
	const { problem, difficulty, salt, expirationAt } = challenge;
	const startTime: number = performance.now();

	if (Date.now() > expirationAt) {
		console.error("Challenge has expired.");
		return null;
	}

	for (let iteration = 0; iteration < maxIterations; iteration++) {
		// Формирование строки для хеширования.
		const input: string = `${problem}-${iteration}-${salt}`;
		// Функция vm должна вычислять хеш строки input.
		// Второй параметр (число 3) можно заменить на константу или дополнительный аргумент, если потребуется.
		const hashResult: string = vm(input, 3);

		// Проверка: соответствует ли хеш требуемой сложности
		if (hashResult.startsWith("0".repeat(difficulty))) {
			const elapsedTime: number = performance.now() - startTime;
			console.log(
				`Solved challenge in ${iteration} iterations. Took: ${elapsedTime.toFixed(2)}ms`,
			);
			return `${iteration}|${salt}`;
		}
	}

	// Если решение не найдено в пределах максимального числа итераций.
	const totalTime: number = performance.now() - startTime;
	console.error(
		`Failed to solve challenge within max iterations. Took: ${totalTime.toFixed(2)}ms`,
	);
	return null;
}
