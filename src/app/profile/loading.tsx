import { Skeleton } from "@heroui/react";

// Shown while /profile is loading (same layout as ProfilePage)
const Loading = () => {
	return (
		<section
			className="w-11/12 py-10 mx-auto max-w-2xl"
			role="status"
			aria-busy="true"
			aria-label="লোড হচ্ছে"
		>
			{/* Title + subtitle */}
			<Skeleton className="w-48 h-8 rounded" />
			<Skeleton className="h-4 mt-2 rounded w-72" />

			{/* User card: avatar, name, email, sign out button */}
			<div className="flex flex-col gap-4 p-5 mt-6 border border-gray-200 sm:flex-row sm:items-center sm:justify-between rounded-3xl bg-white/70 sm:p-6">
				<div className="flex items-center gap-4">
					<Skeleton className="size-20 rounded-2xl" />
					<div className="space-y-2">
						<Skeleton className="w-40 h-6 rounded" />
						<Skeleton className="h-4 rounded w-52" />
					</div>
				</div>

				<Skeleton className="w-28 h-10 rounded-xl" />
			</div>

			{/* Info card: heading, name, email, update button */}
			<div className="p-5 mt-6 border border-gray-200 rounded-3xl bg-white/70 sm:p-6">
				<Skeleton className="w-12 h-6 rounded" />

				<div className="mt-4 space-y-4">
					<div className="space-y-2">
						<Skeleton className="w-10 h-4 rounded" />
						<Skeleton className="h-5 rounded w-44" />
					</div>
					<div className="space-y-2">
						<Skeleton className="w-14 h-4 rounded" />
						<Skeleton className="w-56 h-5 rounded" />
					</div>
				</div>

				<Skeleton className="w-full h-12 mt-6 rounded-xl" />
			</div>
		</section>
	);
};

export default Loading;
