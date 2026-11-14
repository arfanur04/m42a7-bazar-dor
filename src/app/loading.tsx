import { Skeleton } from "@heroui/react";

// One product card placeholder (same shape as the real ProductCard)
const CardSkeleton = () => (
	<div className="p-4 border border-gray-200 rounded-2xl bg-white/70">
		<div className="flex items-center gap-3">
			<Skeleton className="size-12 rounded-xl" />
			<div className="flex-1 space-y-2">
				<Skeleton className="w-3/5 h-4 rounded" />
				<Skeleton className="w-2/5 h-3 rounded" />
			</div>
		</div>

		<div className="flex items-end justify-between mt-4">
			<div className="space-y-2">
				<Skeleton className="w-16 h-3 rounded" />
				<Skeleton className="w-24 h-6 rounded" />
			</div>
			<Skeleton className="w-16 h-6 rounded-full" />
		</div>
	</div>
);

// A section: title (+ optional subtitle) and a grid of cards
const SectionSkeleton = ({ subtitle = false }: { subtitle?: boolean }) => (
	<section className="w-11/12 mx-auto mt-10 max-w-7xl">
		<Skeleton className="w-48 h-7 rounded" />
		{subtitle && <Skeleton className="w-40 h-4 mt-2 rounded" />}

		<div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
			{Array.from({ length: 6 }).map((_, i) => (
				<CardSkeleton key={i} />
			))}
		</div>
	</section>
);

// Shown automatically while the home page is loading
const Loading = () => {
	return (
		<div
			role="status"
			aria-busy="true"
			aria-label="লোড হচ্ছে"
		>
			{/* Banner */}
			<section className="w-11/12 py-6 mx-auto max-w-7xl mt-2">
				<div className="grid items-center gap-8 p-6 border border-gray-200 rounded-3xl bg-white/70 md:grid-cols-2 md:p-10">
					<div className="space-y-4">
						<Skeleton className="w-40 h-7 rounded-full" />
						<Skeleton className="w-full h-10 rounded-lg" />
						<Skeleton className="w-4/5 h-10 rounded-lg" />
						<Skeleton className="w-full h-4 rounded" />
						<Skeleton className="w-3/4 h-4 rounded" />
						<Skeleton className="w-40 h-12 mt-2 rounded-xl" />
					</div>

					<div className="flex justify-center md:justify-end">
						<Skeleton className="w-full h-56 max-w-xs rounded-3xl sm:max-w-sm" />
					</div>
				</div>
			</section>

			{/* আজ দাম বেড়েছে, আজ দাম কমেছে, সব পণ্য */}
			<SectionSkeleton />
			<SectionSkeleton />
			<SectionSkeleton subtitle />
		</div>
	);
};

export default Loading;
