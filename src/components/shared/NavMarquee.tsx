import { toBnPercent, toBnPrice } from "@/lib/format";
import { IFoodPrice } from "@/types/types";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

const NavMarquee = async () => {
	const res = await fetch(
		"https://openapi.programming-hero.com/api/bazardor/products",
	);
	const productsData: IFoodPrice[] = await res.json();
	return (
		<section className="py-2">
			<MarqueeText
				duration={20}
				direction="right"
				pauseOnHover={true}
			>
				{productsData.map((product) => (
					<span
						key={product.id}
						className="mx-4 text-sm font-medium space-x-1"
					>
						<span>{product.image}</span>
						<span>{product.nameBn}</span>
						<span>{toBnPrice(product.today)} টাকা/কেজি</span>
						<span>
							{product.change.dir === "up" && (
								<span className="text-red-500">
									▲{toBnPercent(product.change.pct)}%
								</span>
							)}
							{product.change.dir === "down" && (
								<span className="text-green-500">
									▼{toBnPercent(product.change.pct)}%
								</span>
							)}
						</span>
					</span>
				))}
			</MarqueeText>
		</section>
	);
};

export default NavMarquee;
