import { Skeleton } from "@heroui/react";

// Next.js shows this automatically while the category page is fetching data
const Loading = () => {
	return (
		<section className="w-11/12 mt-10 mx-auto max-w-7xl">
			{/* title card */}
			<Skeleton className="h-32 rounded-3xl" />

			{/* sort bar */}
			<Skeleton className="h-20 mt-6 rounded-3xl" />

			{/* count line */}
			<Skeleton className="w-48 h-5 mt-6 rounded" />

			{/* 6 card placeholders */}
			<div className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 6 }).map((_, i) => (
					<Skeleton
						key={i}
						className="h-36 rounded-2xl"
					/>
				))}
			</div>
		</section>
	);
};

export default Loading;
