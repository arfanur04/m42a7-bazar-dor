import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "পেজ পাওয়া যায়নি | বাজার দর",
};

// Shown automatically for any URL that does not exist,
// and when a page calls notFound()
const NotFound = () => {
	return (
		<section className="flex items-center justify-center flex-1 w-11/12 py-16 mx-auto max-w-7xl">
			<div className="w-full max-w-xl p-8 text-center border border-gray-200 rounded-3xl bg-white/70 sm:p-12">
				{/* Big 404 in Bangla digits */}
				<p className="text-7xl font-black text-green-700 sm:text-8xl">৪০৪</p>

				<div
					className="mt-4 text-5xl"
					aria-hidden="true"
				>
					🧺
				</div>

				<h1 className="mt-6 text-2xl font-black sm:text-3xl">
					দুঃখিত, পেজটি খুঁজে পাওয়া যায়নি
				</h1>
				<p className="mt-3 text-gray-500">
					আপনি যে লিংকটি খুঁজছেন তা হয়তো সরানো হয়েছে, নাম বদলে গেছে, অথবা
					ঠিকানাটি ভুল লেখা হয়েছে।
				</p>

				{/* Buttons */}
				<div className="flex flex-col justify-center gap-3 mt-8 sm:flex-row">
					<Link
						href="/"
						className="px-6 py-3 font-semibold text-white transition bg-green-700 shadow-md rounded-xl shadow-green-700/30 hover:bg-green-800"
					>
						হোম পেজে ফিরে যান
					</Link>
					<Link
						href="/#সব-পণ্য"
						className="px-6 py-3 font-semibold text-gray-700 transition bg-white border border-gray-200 rounded-xl hover:bg-gray-50"
					>
						সব পণ্য দেখুন
					</Link>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
