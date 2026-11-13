import { toBnDecimal, toBnPrice } from "@/lib/format";

type Market = { market: string; division: string; min: number; max: number };

const MarketTable = ({ markets }: { markets: Market[] }) => {
	// add an average to every market, then show the cheapest market first
	const rows = markets
		.map((m) => ({ ...m, avg: (m.min + m.max) / 2 }))
		.sort((a, b) => a.avg - b.avg);

	return (
		<div>
			<h2 className="text-lg font-black sm:text-xl">বাজারভিত্তিক আজকের দাম</h2>

			{/* overflow-x-auto: the table scrolls sideways on small screens */}
			<div className="mt-4 overflow-x-auto border border-gray-200 rounded-2xl">
				<table className="w-full text-sm text-left whitespace-nowrap">
					<thead className="text-gray-500 bg-gray-50">
						<tr>
							<th className="px-4 py-3 font-medium">বাজার</th>
							<th className="px-4 py-3 font-medium">বিভাগ</th>
							<th className="px-4 py-3 font-medium text-right">সর্বনিম্ন</th>
							<th className="px-4 py-3 font-medium text-right">সর্বাধিক</th>
							<th className="px-4 py-3 font-medium text-right">গড়</th>
						</tr>
					</thead>
					<tbody className="divide-y divide-gray-200">
						{rows.map((row) => (
							<tr key={row.market}>
								<td className="px-4 py-3">{row.market}</td>
								<td className="px-4 py-3">{row.division}</td>
								<td className="px-4 py-3 text-right">
									{toBnPrice(row.min)} টাকা
								</td>
								<td className="px-4 py-3 text-right">
									{toBnPrice(row.max)} টাকা
								</td>
								<td className="px-4 py-3 font-bold text-right">
									{toBnDecimal(row.avg)} টাকা
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default MarketTable;
