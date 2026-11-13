import Link from "next/link";
import { notFound } from "next/navigation";
import { IFoodPrice } from "@/types/types";
import { getData } from "@/lib/getData";
import { toBnPercent, toBnPrice, unitLabel } from "@/lib/format";
import PriceSummary from "@/components/product/PriceSummary";
import MarketTable from "@/components/product/MarketTable";

// Next.js 16: params is a Promise, so we await it
type Props = {
	params: Promise<{ id: number }>;
};

const changeColor: Record<string, string> = {
	up: "text-red-500",
	down: "text-green-500",
	flat: "text-gray-500",
};

const ProductDetailsPage = async ({ params }: Props) => {
	const { id } = await params;

	const product = await getData<IFoodPrice | null>(`/products/${id}`, null);
	// unknown id -> 404 page
	if (!product) notFound();

	const { dir, pct } = product.change;
	const diff = Math.abs(product.today - product.yesterday);

	return (
		<section className="w-11/12 py-6 mx-auto max-w-5xl">
			{/* Breadcrumb: হোম › চাল › পণ্যের নাম */}
			<nav
				aria-label="breadcrumb"
				className="flex items-center gap-2 text-sm text-gray-500"
			>
				<Link
					href="/"
					className="hover:text-gray-900"
				>
					হোম
				</Link>
				<span>›</span>
				<Link
					href={`/categories/${product.category}`}
					className="hover:text-gray-900"
				>
					{product.categoryNameBn}
				</Link>
				<span>›</span>
				<span className="text-gray-900">{product.nameBn}</span>
			</nav>

			{/* Top summary card */}
			<div className="flex flex-col gap-5 p-5 mt-4 border border-gray-200 sm:flex-row sm:items-center sm:justify-between rounded-3xl bg-white/70 sm:p-8">
				<div className="flex items-center gap-4">
					<div className="grid text-4xl bg-gray-100 size-20 place-items-center rounded-2xl">
						{product.image}
					</div>

					<div>
						<h1 className="text-2xl font-black sm:text-3xl">
							{product.nameBn}
						</h1>

						{/* Unit + category tag */}
						<div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-gray-500">
							<span>{unitLabel(product.unit)}</span>
							<span>·</span>
							<Link
								href={`/categories/${product.category}`}
								className="px-2.5 py-0.5 text-green-700 bg-green-100 rounded-full hover:bg-green-200"
							>
								{product.categoryIcon} {product.categoryNameBn}
							</Link>
						</div>

						{/* Market summary line */}
						<p className="mt-2 text-sm">
							{dir === "flat" ? (
								"গতকালের তুলনায় আজ দাম অপরিবর্তিত"
							) : (
								<>
									গতকালের তুলনায় আজ দাম{" "}
									<strong>{dir === "up" ? "বেড়েছে" : "কমেছে"}</strong> ·{" "}
									{toBnPrice(diff)} টাকা
								</>
							)}
						</p>
					</div>
				</div>

				{/* Today's price box */}
				<div className="p-4 text-center bg-gray-100 rounded-2xl sm:min-w-40">
					<p className="text-sm text-gray-500">আজকের দাম</p>
					<p className="text-3xl font-black">{toBnPrice(product.today)}</p>
					<p className="text-sm text-gray-500">
						টাকা / {unitLabel(product.unit).replace("প্রতি ", "")}
					</p>
					<p className={`mt-1 text-sm font-semibold ${changeColor[dir]}`}>
						{dir === "up" && `▲ ${toBnPercent(pct)}%`}
						{dir === "down" && `▼ ${toBnPercent(pct)}%`}
						{dir === "flat" && "— ০.০%"}
					</p>
				</div>
			</div>

			{/* Price summary + market table */}
			<div className="flex flex-col gap-8 p-5 mt-6 border border-gray-200 rounded-3xl bg-white/70 sm:p-8">
				<PriceSummary
					markets={product.markets}
					unit={product.unit}
				/>
				<MarketTable markets={product.markets} />
			</div>
		</section>
	);
};

export default ProductDetailsPage;
