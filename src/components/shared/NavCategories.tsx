import { IFoodCategory } from "@/types/types";
import NavCategory from "./NavCategory";
import { getData } from "@/lib/getData";

const NavCategories = async () => {
	const categories = await getData<IFoodCategory[]>("/categories", []);

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
