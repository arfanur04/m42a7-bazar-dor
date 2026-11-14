// mt-auto pushes the footer to the bottom when the page is short
// pt-16 keeps a minimum gap above it on long pages
const Footer = () => {
	return (
		<div className="pt-16 mt-auto">
			<footer className="border-t border-gray-200 bg-white/60">
				<div className="flex flex-col gap-2 py-6 mx-auto text-sm w-11/12 max-w-7xl md:flex-row md:items-center md:justify-between">
					<p>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</p>
					<p className="md:text-right">
						সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
