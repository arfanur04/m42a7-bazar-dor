import Image from "next/image";
import Link from "next/link";
import {
	ArrowRightFromSquare,
	ArrowRightToSquare,
	Gear,
	Person,
	PersonPlus,
} from "@gravity-ui/icons";
import logo from "@/assets/logo-icon.png";
import { buttonVariants } from "@heroui/styles";

const Navbar = () => {
	const date = new Date().toLocaleDateString("bn-BD", {
		dateStyle: "full",
	});

	return (
		<nav className="shadow-xs">
			<section className="flex items-center justify-between w-11/12 mx-auto min-h-16 max-w-7xl">
				<Link
					className="inline-flex items-center gap-2"
					href="/"
				>
					<Image
						className="bg-green-700 rounded-lg"
						src={logo}
						alt="logo"
						width={40}
						height={40}
					/>
					<div>
						<h2 className="p-0 text-xl font-black">বাজার দর</h2>
						<p className="text-sm text-gray-600">{date}</p>
					</div>
				</Link>

				<div className="flex items-center gap-2">
					{/* Profile dropdown (hidden, as in your original). Remove "hidden" to enable. */}
					<div>
						<details className="relative hidden group">
							<summary className="flex items-center justify-center w-10 h-10 text-gray-600 list-none bg-gray-100 rounded-full cursor-pointer hover:bg-gray-200 [&::-webkit-details-marker]:hidden">
								<Person
									width={20}
									height={20}
								/>
							</summary>
							<ul className="absolute right-0 z-10 p-2 mt-3 bg-white border border-gray-100 shadow-lg rounded-xl w-52">
								<li>
									<Link
										href="/profile"
										className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100"
									>
										<Person
											width={16}
											height={16}
										/>
										প্রোফাইল
										<span className="px-2 ml-auto text-xs text-green-700 bg-green-100 rounded-full">
											New
										</span>
									</Link>
								</li>
								<li>
									<Link
										href="/settings"
										className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100"
									>
										<Gear
											width={16}
											height={16}
										/>
										সেটিংস
									</Link>
								</li>
								<li>
									<button
										type="button"
										className="flex items-center w-full gap-2 px-3 py-2 text-sm text-left text-red-600 rounded-lg hover:bg-red-50"
									>
										<ArrowRightFromSquare
											width={16}
											height={16}
										/>
										লগআউট
									</button>
								</li>
							</ul>
						</details>
					</div>
					<Link
						href="/sign-in"
						className={buttonVariants({ variant: "ghost", size: "sm" })}
					>
						<ArrowRightToSquare
							width={16}
							height={16}
						/>
						সাইন ইন
					</Link>
					<Link
						href="/sign-up"
						className={`${buttonVariants({ variant: "primary", size: "sm" })} bg-green-700 hover:bg-green-800`}
					>
						<PersonPlus
							width={16}
							height={16}
						/>
						সাইন আপ
					</Link>{" "}
				</div>
			</section>
		</nav>
	);
};

export default Navbar;
