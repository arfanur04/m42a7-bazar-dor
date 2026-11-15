import { Skeleton } from "@heroui/react";

// Shown while /profile/update is loading (same layout as UpdateProfileForm)
const Loading = () => {
	return (
		<section
			className="w-11/12 py-10 mx-auto max-w-2xl"
			role="status"
			aria-busy="true"
			aria-label="লোড হচ্ছে"
		>
			{/* Title + subtitle */}
			<Skeleton className="h-8 rounded w-52" />
			<Skeleton className="w-40 h-4 mt-2 rounded" />

			{/* Form card: label, input, button */}
			<div className="p-5 mt-6 space-y-5 border border-gray-200 rounded-3xl bg-white/70 sm:p-6">
				<div className="space-y-2">
					<Skeleton className="w-10 h-4 rounded" />
					<Skeleton className="w-full h-11 rounded-xl" />
				</div>
				<Skeleton className="w-full h-12 rounded-xl" />
			</div>

			{/* Back link */}
			<Skeleton className="w-32 h-4 mx-auto mt-6 rounded" />
		</section>
	);
};

export default Loading;
