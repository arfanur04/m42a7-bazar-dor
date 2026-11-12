"use client";

import { ghostButton, greenButton } from "@/buttons/Button.tsx";
import { IFoodCategory } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavCategory = ({ category }: { category: IFoodCategory }) => {
	const pathname = usePathname();
	const isActive = pathname === `/categories/${category.id}`;

	// if (isActive) {
	// 	console.log(`🚀 ~ pathname:`, pathname);
	// }

	return (
		<Link
			href={`/categories/${category.id}`}
			key={category.id}
			className={`flex gap-2 items-center ${isActive ? greenButton : ghostButton}`}
		>
			<span>{category.icon}</span>
			<span>{category.nameBn}</span>
		</Link>
	);
};

export default NavCategory;
