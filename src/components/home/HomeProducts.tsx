import { IFoodPrice } from "@/types/types";
import { getData } from "@/lib/getData";
import { toBnPrice } from "@/lib/format";
import ProductSection from "./ProductSection";

// Server component: fetches ONCE, then makes the 3 sections from the same data
const HomeProducts = async () => {
	const products = await getData<IFoodPrice[]>("/products", []);

	if (products.length === 0) {
		return (
			<p className="py-20 text-center text-gray-500">
				পণ্যের তথ্য লোড করা যায়নি। একটু পরে আবার চেষ্টা করুন।
			</p>
		);
	}

	// Section A: top 6 risers (biggest % increase first)
	const risers = products
		.filter((p) => p.change.dir === "up")
		.sort((a, b) => b.change.pct - a.change.pct)
		.slice(0, 6);

	// Section B: top 6 fallers (pct is negative, so smallest number = biggest drop)
	const fallers = products
		.filter((p) => p.change.dir === "down")
		.sort((a, b) => a.change.pct - b.change.pct)
		.slice(0, 6);

	return (
		<>
			<ProductSection
				title={
					<>
						<span className="text-red-600">▲</span> আজ দাম বেড়েছে
					</>
				}
				products={risers}
			/>

			<ProductSection
				title={
					<>
						<span className="text-green-600">▼</span> আজ দাম কমেছে
					</>
				}
				products={fallers}
			/>

			<ProductSection
				id="সব-পণ্য"
				title="সব পণ্য"
				subtitle={`মোট ${toBnPrice(products.length)}টি পণ্য দেখানো হচ্ছে`}
				products={products}
			/>
		</>
	);
};

export default HomeProducts;
