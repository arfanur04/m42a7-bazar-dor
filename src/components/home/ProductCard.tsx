import Link from "next/link";
import { IFoodPrice } from "@/types/types";
import { toBnPercent, toBnPrice, unitLabel } from "@/lib/format";

// badge colors: price up = red, price down = green, no change = gray
const badgeStyle: Record<string, string> = {
	up: "bg-red-50 text-red-600",
	down: "bg-green-50 text-green-600",
	flat: "bg-gray-100 text-gray-500",
};

const ProductCard = ({ product }: { product: IFoodPrice }) => {
	const { dir, pct } = product.change;

	return (
		<Link
			href={`/product/${product.slug}`}
			className="block p-4 transition border border-gray-200 rounded-2xl bg-white/70 hover:shadow-md"
		>
			{/* Top: emoji + name + unit */}
			<div className="flex items-center gap-3">
				<div className="grid text-2xl bg-gray-100 size-12 place-items-center rounded-xl">
					{product.image}
				</div>
				<div>
					<h3 className="font-bold">{product.nameBn}</h3>
					<p className="text-sm text-gray-500">{unitLabel(product.unit)}</p>
				</div>
			</div>

			{/* Bottom: price + change badge */}
			<div className="flex items-end justify-between mt-4">
				<div>
					<p className="text-sm text-gray-500">আজকের দাম</p>
					<p className="text-xl font-black">
						{toBnPrice(product.today)}{" "}
						<span className="text-base font-normal">টাকা</span>
					</p>
				</div>

				<span
					className={`px-2.5 py-1 text-xs font-semibold rounded-full ${badgeStyle[dir]}`}
				>
					{dir === "up" && `▲ ${toBnPercent(pct)}%`}
					{dir === "down" && `▼ ${toBnPercent(pct)}%`}
					{dir === "flat" && "— ০.০%"}
				</span>
			</div>
		</Link>
	);
};

export default ProductCard;
