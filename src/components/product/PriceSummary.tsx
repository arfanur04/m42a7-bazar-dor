import { toBnPrice, unitLabel } from "@/lib/format";

type Market = {
	market: string;
	division: string;
	min: number;
	max: number;
};

type Props = {
	markets: Market[];
	unit: string;
};

const PriceSummary = ({ markets, unit }: Props) => {
	if (markets.length === 0) return null;

	// lowest of all lowest prices, highest of all highest prices
	const min = Math.min(...markets.map((m) => m.min));
	const max = Math.max(...markets.map((m) => m.max));

	// average of every market's own average ((min + max) / 2), rounded
	const avg = Math.round(
		markets.reduce((sum, m) => sum + (m.min + m.max) / 2, 0) / markets.length,
	);

	const cards = [
		{
			label: "সর্বনিম্ন দাম",
			value: min,
			color: "text-green-600",
			hint: "সবচেয়ে কম দামের বাজার",
		},
		{
			label: "সর্বাধিক দাম",
			value: max,
			color: "text-red-600",
			hint: "সবচেয়ে বেশি দামের বাজার",
		},
		{
			label: "গড় দাম",
			value: avg,
			color: "text-green-600",
			hint: `${unitLabel(unit)}-এর হিসাবে`,
		},
	];

	return (
		<div>
			<h2 className="text-lg font-black sm:text-xl">দামের সারসংক্ষেপ</h2>

			<div className="grid gap-3 mt-4 sm:grid-cols-3">
				{cards.map((card) => (
					<div
						key={card.label}
						className="p-4 border border-gray-200 rounded-2xl"
					>
						<p className="text-sm text-gray-500">{card.label}</p>
						<p className={`mt-1 text-2xl font-black ${card.color}`}>
							{toBnPrice(card.value)}{" "}
							<span className="text-base font-normal">টাকা</span>
						</p>
						<p className="mt-1 text-xs text-gray-500">{card.hint}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default PriceSummary;
