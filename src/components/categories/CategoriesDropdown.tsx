"use client";

import { IFoodPrice } from "@/types/types";
import { Select, Label, ListBox } from "@heroui/react";
import type { Key } from "@heroui/react";
import { useState } from "react";
import ProductCard from "../home/ProductCard";
import { toBnPrice } from "@/lib/format";

const CategoriesDropdown = ({ categories }: { categories: IFoodPrice[] }) => {
	// which option is selected ("default" | "ascending" | "descending")
	const [sort, setSort] = useState<Key | null>("default");

	// build the list to show from the selected option
	const categoriesState =
		sort === "ascending"
			? [...categories].sort((a, b) => a.today - b.today)
			: sort === "descending"
				? [...categories].sort((a, b) => b.today - a.today)
				: categories;

	return (
		<>
			<div className="p-6 my-6 border border-gray-200 rounded-3xl bg-white/70 flex justify-end items-center gap-2 font-bold">
				<span className="border text-md pt-0.5 border-transparent text-gray-500">
					সাজান
				</span>
				<Select
					className="w-[256px] text-black"
					placeholder="ডিফল্ট"
					value={sort}
					onChange={setSort}
				>
					<Label></Label>
					<Select.Trigger>
						{/* data-[placeholder=true]: only applies while the placeholder is showing */}
						<Select.Value className="data-[placeholder=true]:text-black" />
						<Select.Indicator />
					</Select.Trigger>
					<Select.Popover>
						<ListBox>
							<ListBox.Item
								id="default"
								textValue="ডিফল্ট"
							>
								ডিফল্ট
								<ListBox.ItemIndicator />
							</ListBox.Item>
							<ListBox.Item
								id="ascending"
								textValue="কম থেকে বেশি"
							>
								কম থেকে বেশি
								<ListBox.ItemIndicator />
							</ListBox.Item>
							<ListBox.Item
								id="descending"
								textValue="বেশি থেকে কম"
							>
								বেশি থেকে কম
								<ListBox.ItemIndicator />
							</ListBox.Item>
						</ListBox>
					</Select.Popover>
				</Select>
			</div>
			<span className="text-md my-6 text-gray-500">
				মোট {toBnPrice(categoriesState.length)}টি পণ্য দেখানো হচ্ছে
			</span>
			<div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
				{categoriesState.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
					/>
				))}
			</div>
		</>
	);
};

export default CategoriesDropdown;
