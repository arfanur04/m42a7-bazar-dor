import Image from "next/image";
import heroImage from "@/assets/bazar-hero.png";

// Server component: no hooks needed
const Banner = () => {
	const date = new Date().toLocaleDateString("bn-BD", {
		dateStyle: "full",
		timeZone: "Asia/Dhaka",
	});

	return (
		<section className="w-11/12 mx-auto max-w-7xl py-6">
			<div className="grid items-center gap-8 p-6 border border-gray-200 rounded-3xl bg-white/70 md:grid-cols-2 md:p-10">
				{/* Left: text */}
				<div>
					{/* Eyebrow: today's date */}
					<span className="inline-block px-3 py-1 text-sm font-medium text-green-700 bg-green-100 rounded-full">
						{date}
					</span>

					{/* Heading */}
					<h1 className="mt-4 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
						আজকের বাজারের দাম এক নজরে
					</h1>

					{/* Subtitle */}
					<p className="mt-4 text-sm text-gray-500 sm:text-base">
						চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
						বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
					</p>

					{/* CTA: scrolls to the "সব পণ্য" section on the same page */}
					<a
						href="#সব-পণ্য"
						className="inline-block px-6 py-3 mt-6 font-semibold text-white transition bg-green-700 shadow-md rounded-xl shadow-green-700/30 hover:bg-green-800"
					>
						সব পণ্য দেখুন
					</a>
				</div>
				{/* Right: image */}
				<div className="flex justify-center md:justify-end">
					<Image
						src={heroImage}
						alt="বাজারের সবজির ঝুড়ি"
						priority
						className="w-full h-auto max-w-xs sm:max-w-sm lg:max-w-md"
					/>
				</div>
			</div>
		</section>
	);
};

export default Banner;
