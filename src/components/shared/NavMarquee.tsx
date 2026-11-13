import { toBnPercent, toBnPrice, unitLabel } from "@/lib/format";
import { getData } from "@/lib/getData";
import { IFoodPrice } from "@/types/types";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

// text color for each direction: price up = red, down = green, no change = gray
const changeColor: Record<string, string> = {
	up: "text-red-500",
	down: "text-green-500",
	flat: "text-gray-500",
};

// arrow for each direction
const changeArrow: Record<string, string> = {
	up: "▲",
	down: "▼",
	flat: "—",
};

const NavMarquee = async () => {
	const products = await getData<IFoodPrice[]>("/products", []);

	return (
		<section className="my-2">
			<MarqueeText
				duration={20}
				direction="right"
				pauseOnHover
			>
				{products.map((product) => {
					const { dir, pct } = product.change;
					return (
						<span
							key={product.id}
							className="mx-4 text-sm font-medium space-x-1"
						>
							<span>{product.image}</span>
							<span className="font-bold">{product.nameBn}</span>
							<span>
								{toBnPrice(product.today)} টাকা/
								{unitLabel(product.unit).replace("প্রতি ", "")}
							</span>
							<span className={changeColor[dir]}>
								{changeArrow[dir]}
								{toBnPercent(pct)}%
							</span>
						</span>
					);
				})}
			</MarqueeText>
		</section>
	);
};

export default NavMarquee;
