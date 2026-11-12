import NavCategories from "./NavCategories";
import NavMarquee from "./NavMarquee";
import NavTop from "./NavTop";

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 shadow-xs bg-white/80 backdrop-blur-sm">
			<NavTop />
			<hr className="border-t border-gray-100" />
			<NavCategories />
			<hr className="border-t border-gray-100" />
			<NavMarquee />
		</nav>
	);
};

export default Navbar;
