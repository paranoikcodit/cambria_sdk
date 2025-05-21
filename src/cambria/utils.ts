export let inventoryOrder: { [key: string]: number } = {};
export let lastValidWeightPercentage = 0;

export function orderInventory(ln: any[]) {
	return ln.slice().sort((sn, cn) => {
		const pn = inventoryOrder[sn.id] ?? 1 / 0;
		const hn = inventoryOrder[cn.id] ?? 1 / 0;

		return pn - hn;
	});
}

export function setInventoryOrder(order: { id: string }[]) {
	const sn: { [key: string]: number } = {};
	for (let cn = 0; cn < order.length; cn++) {
		const pn = order[cn];

		if (pn) sn[pn.id] = cn;
	}

	inventoryOrder = sn;
}

export function difference<T>(ln: T[], sn: T[]): T[] {
	const cn = new Set(ln);
	for (const pn of sn) cn.delete(pn);

	return Array.from(cn);
}

export function capitalize(ln: string): string {
	return ln && ln.charAt(0).toUpperCase() + ln.slice(1);
}
