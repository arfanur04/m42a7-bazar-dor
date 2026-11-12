export interface IFoodCategory {
	id: string;
	slug: string;
	nameBn: string;
	icon: string;
}

export interface IFoodPrice {
	id: number;
	slug: string;
	nameBn: string;
	category: string;
	categoryNameBn: string;
	categoryIcon: string;
	unit: string;
	image: string;
	today: number;
	yesterday: number;
	lastWeek: number;
	lastMonth: number;
	change: {
		dir: "up" | "down" | "flat";
		pct: number;
	};
	markets: {
		market: string;
		division: string;
		min: number;
		max: number;
	}[];
}
