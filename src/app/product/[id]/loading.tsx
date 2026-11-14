import { Skeleton } from "@heroui/react";

// Shown while /product/[id] is loading
const Loading = () => {
	return (
		<section
			className="w-11/12 py-6 mx-auto max-w-5xl"
			role="status"
			aria-busy="true"
			aria-label="লোড হচ্ছে"
		>
			{/* Breadcrumb */}
			<Skeleton className="w-56 h-4 rounded" />

			{/* Top summary card */}
			<div className="flex flex-col gap-5 p-5 mt-4 border border-gray-200 sm:flex-row sm:items-center sm:justify-between rounded-3xl bg-white/70 sm:p-8">
				<div className="flex items-center gap-4">
					<Skeleton className="size-20 rounded-2xl" />
					<div className="space-y-3">
						<Skeleton className="w-48 h-8 rounded" />
						<Skeleton className="w-36 h-4 rounded" />
						<Skeleton className="w-64 h-4 rounded" />
					</div>
				</div>

				{/* price box */}
				<Skeleton className="h-32 rounded-2xl sm:w-40" />
			</div>

			{/* Price summary + market table */}
			<div className="flex flex-col gap-8 p-5 mt-6 border border-gray-200 rounded-3xl bg-white/70 sm:p-8">
				{/* 3 summary cards */}
				<div>
					<Skeleton className="w-40 h-6 rounded" />
					<div className="grid gap-3 mt-4 sm:grid-cols-3">
						{Array.from({ length: 3 }).map((_, i) => (
							<div
								key={i}
								className="p-4 space-y-3 border border-gray-200 rounded-2xl"
							>
								<Skeleton className="w-20 h-4 rounded" />
								<Skeleton className="w-28 h-7 rounded" />
								<Skeleton className="w-32 h-3 rounded" />
							</div>
						))}
					</div>
				</div>

				{/* table */}
				<div>
					<Skeleton className="w-48 h-6 rounded" />
					<div className="mt-4 space-y-2">
						<Skeleton className="h-10 rounded-xl" />
						{Array.from({ length: 6 }).map((_, i) => (
							<Skeleton
								key={i}
								className="h-10 rounded-xl"
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Loading;
