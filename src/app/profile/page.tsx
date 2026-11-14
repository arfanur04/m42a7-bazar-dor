import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import SignOutButton from "@/components/profile/SignOutButton";

// Server component: reads the session on the server, so there is no loading flash
const ProfilePage = async () => {
	const session = await auth.api.getSession({ headers: await headers() });

	// the proxy already blocks this, but check again to be safe
	if (!session) redirect("/sign-in");

	const { user } = session;

	return (
		<section className="w-11/12 py-10 mx-auto max-w-2xl">
			{/* Title */}
			<h1 className="text-2xl font-black sm:text-3xl">আমার প্রোফাইল</h1>
			<p className="mt-1 text-gray-500">আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>

			{/* User card: avatar, name, email, sign out */}
			<div className="flex flex-col gap-4 p-5 mt-6 border border-gray-200 sm:flex-row sm:items-center sm:justify-between rounded-3xl bg-white/70 sm:p-6">
				<div className="flex items-center gap-4">
					{user.image ? (
						// eslint-disable-next-line @next/next/no-img-element
						<img
							src={user.image}
							alt={user.name}
							referrerPolicy="no-referrer"
							className="object-cover size-20 rounded-2xl"
						/>
					) : (
						<div className="grid text-3xl font-bold text-green-700 bg-green-100 size-20 place-items-center rounded-2xl">
							{user.name.charAt(0).toUpperCase()}
						</div>
					)}

					<div>
						<h2 className="text-xl font-bold">{user.name}</h2>
						<p className="text-gray-500">{user.email}</p>
					</div>
				</div>

				<SignOutButton />
			</div>

			{/* Info card */}
			<div className="p-5 mt-6 border border-gray-200 rounded-3xl bg-white/70 sm:p-6">
				<h2 className="text-lg font-bold">তথ্য</h2>

				<dl className="mt-4 space-y-4">
					<div>
						<dt className="text-sm text-gray-500">নাম</dt>
						<dd className="font-medium">{user.name}</dd>
					</div>
					<div>
						<dt className="text-sm text-gray-500">ইমেইল</dt>
						<dd className="font-medium">{user.email}</dd>
					</div>
				</dl>

				{/* goes to a separate page with the update form */}
				<Link
					href="/profile/update"
					className="block w-full px-6 py-3 mt-6 font-semibold text-center text-white transition bg-green-700 shadow-md rounded-xl shadow-green-700/30 hover:bg-green-800"
				>
					তথ্য আপডেট করুন
				</Link>
			</div>
		</section>
	);
};

export default ProfilePage;
