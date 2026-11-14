"use client";

import Image from "next/image";
import Link from "next/link";
import {
	ArrowRightFromSquare,
	ArrowRightToSquare,
	Person,
	PersonPlus,
} from "@gravity-ui/icons";
import logo from "@/assets/logo-icon.png";
import { signOut, useSession } from "@/lib/auth-client";
import { ghostButton, greenButton } from "@/buttons/Button.tsx";
import { usePathname, useRouter } from "next/navigation";

const NavTop = () => {
	const date = new Date().toLocaleDateString("bn-BD", {
		dateStyle: "full",
	});

	const pathname = usePathname();
	const sessionData = useSession();
	const router = useRouter();
	const user = sessionData?.data?.user;
	// if (user) {
	// 	console.log(`🚀 ~ user:`, user);
	// }

	const handleSignOut = async () => {
		await signOut({
			fetchOptions: {
				onSuccess: () => {
					// router.replace("/");
					router.refresh();
				},
			},
		});
	};

	return (
		<section
			id="nav-top"
			className="flex items-center justify-between w-11/12 mx-auto min-h-16 max-w-7xl"
		>
			<Link
				className="inline-flex items-center gap-2"
				href="/"
				onClick={() => {
					if (pathname === "/") {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}
				}}
			>
				<Image
					className="bg-green-200 p-1 rounded-lg"
					src={logo}
					alt="logo"
					width={40}
					height={40}
				/>
				<div>
					<h2 className="p-0 text-xl font-black">বাজার দর</h2>
					<p className="text-xs text-gray-600">{date}</p>
				</div>
			</Link>

			<div className="flex items-center gap-2">
				{user ? (
					<details
						onBlur={(e) => {
							if (!e.currentTarget.contains(e.relatedTarget))
								e.currentTarget.removeAttribute("open");
						}}
						className="relative group"
					>
						<summary className="flex items-center justify-center text-gray-800 list-none bg-gray-100 rounded-lg px-2 py-1 cursor-pointer hover:bg-gray-200 [&::-webkit-details-marker]:hidden">
							{user?.image ? (
								<>
									<Image
										className="rounded-full"
										src={user?.image}
										alt="profile"
										width={30}
										height={30}
									/>
								</>
							) : (
								<Person
									width={30}
									height={30}
								/>
							)}
							<p className="text-sm font-bold ml-2">{user?.name}</p>
						</summary>
						<ul className="absolute right-0 z-10 p-2 mt-3 bg-white border border-gray-100 shadow-lg rounded-xl w-52">
							<li className="px-3 py-2">
								<p className="text-sm font-bold">{user?.name}</p>
								<p className="text-xs text-gray-600">{user?.email}</p>
							</li>
							<li>
								<Link
									href="/profile"
									className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-gray-100"
								>
									{user?.image ? (
										<>
											<Image
												className="rounded-full"
												src={user?.image}
												alt="profile"
												width={24}
												height={24}
											/>
										</>
									) : (
										<Person
											width={16}
											height={16}
										/>
									)}
									<span>আমার প্রোফাইল</span>
								</Link>
							</li>
							<li>
								<button
									type="button"
									onClick={() => handleSignOut()}
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
				) : (
					<div>
						<Link
							href="/sign-in"
							className={ghostButton}
						>
							<ArrowRightToSquare
								width={16}
								height={16}
							/>
							সাইন ইন
						</Link>
						<Link
							href="/sign-up"
							className={greenButton}
						>
							<PersonPlus
								width={16}
								height={16}
							/>
							সাইন আপ
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default NavTop;
