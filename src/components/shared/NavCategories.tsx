import { IFoodCategory } from "@/types/types";
import NavCategory from "./NavCategory";

const NavCategories = async () => {
	const res = await fetch(
		"https://openapi.programming-hero.com/api/bazardor/categories",
	);
	const categories: IFoodCategory[] = await res.json();

	return (
		<section className="w-11/12 mx-auto max-w-7xl py-2">
			<div className="flex gap-x-4 flex-wrap">
				{categories.map((category) => (
					<NavCategory
						key={category.id}
						category={category}
					/>
				))}
			</div>
		</section>
	);
};

export default NavCategories;
