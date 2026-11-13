import { IFoodPrice } from "@/types/types";
import ProductCard from "./ProductCard";

interface Props {
	title: React.ReactNode;
	subtitle?: string;
	id?: string; // for the "সব পণ্য দেখুন" scroll link
	products: IFoodPrice[];
}

const ProductSection = ({ title, subtitle, id, products }: Props) => {
	return (
		<section
			id={id}
			className="w-11/12 mx-auto mt-10 max-w-7xl scroll-mt-40"
		>
			<h2 className="flex items-center gap-2 text-xl font-black sm:text-2xl">
				{title}
			</h2>
			{subtitle && <p className="mt-1 text-sm text-gray-500">{subtitle}</p>}

			{/* 1 column on mobile, 2 on tablet, 3 on desktop */}
			<div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</section>
	);
};

export default ProductSection;
