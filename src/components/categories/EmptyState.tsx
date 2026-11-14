import Link from "next/link";

// 404-style message: used when the category is invalid or has no products
const EmptyState = () => {
	return (
		<section className="w-11/12 max-w-md py-20 mx-auto text-center">
			<p className="text-6xl">🧺</p>
			<h1 className="mt-4 text-2xl font-black">কিছু খুঁজে পাওয়া যায়নি</h1>
			<p className="mt-2 text-gray-500">
				এই ক্যাটাগরিতে কোনো পণ্য নেই, অথবা লিংকটি সঠিক নয়।
			</p>
			<Link
				href="/"
				className="inline-block px-6 py-3 mt-6 font-semibold text-white transition bg-green-700 shadow-md rounded-xl shadow-green-700/30 hover:bg-green-800"
			>
				হোম পেজে ফিরে যান
			</Link>
		</section>
	);
};

export default EmptyState;
