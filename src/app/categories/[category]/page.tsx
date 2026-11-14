import CategoriesDropdown from "@/components/categories/CategoriesDropdown";
import EmptyState from "@/components/categories/EmptyState";
import { toBnPrice } from "@/lib/format";
import { getData } from "@/lib/getData";
import { IFoodCategory, IFoodPrice } from "@/types/types";

type Props = {
	params: Promise<{ category: string }>;
};

const CategoryDetailsPage = async ({ params }: Props) => {
	const { category } = await params;

	const categories = await getData<IFoodPrice[]>(
		`/products?category=${category}`,
		[],
	);

	const categoryData = await getData<IFoodCategory | null>(
		`/categories/${category}`,
		null,
	);

	if (!categoryData || categories.length === 0) {
		return <EmptyState />;
	}

	return (
		<section className="w-11/12 mx-auto mt-10 max-w-7xl">
			<div className="flex items-center gap-2 p-6 border border-gray-200 rounded-3xl bg-white/70">
				<h1 className="text-3xl font-bold">{categoryData.icon}</h1>
				<div>
					<h2 className="text-gray-600 text-3xl font-bold">
						{categoryData.nameBn}
					</h2>
					<p className="text-gray-500">
						{toBnPrice(categories.length)}টি পণ্যের আজকের দাম ও পরিবর্তন
					</p>
				</div>
			</div>

			<CategoriesDropdown categories={categories} />
		</section>
	);
};

export default CategoryDetailsPage;
