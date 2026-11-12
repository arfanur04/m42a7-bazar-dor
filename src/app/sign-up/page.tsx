"use client";

import { signUp } from "@/lib/auth-client";
import {
	Button,
	Card,
	FieldError,
	Form,
	Input,
	InputGroup,
	Label,
	Separator,
	TextField,
	toast,
} from "@heroui/react";
import { ArrowLeft, Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import SocialSignIn from "@/components/sign-in/SocialSignIn";
import Link from "next/link";

const SignUpPage = () => {
	const router = useRouter();
	const [password, setPassword] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const data = Object.fromEntries(formData.entries());

		setIsLoading(true);
		const { error } = await signUp.email({
			name: data.name as string,
			email: data.email as string,
			password: data.password as string,
		});
		setIsLoading(false);

		if (error) {
			toast.danger(
				error.message || "অ্যাকাউন্ট তৈরি করা যায়নি, আবার চেষ্টা করুন",
			);
			return;
		}

		toast.success("অ্যাকাউন্ট তৈরি হয়েছে, এবার সাইন ইন করুন");
		router.push("/sign-in");
	};

	return (
		<section className="w-11/12 max-w-lg py-10 mx-auto sm:py-14">
			{/* Heading */}
			<header className="text-center">
				<h1 className="text-2xl font-black sm:text-3xl">
					অ্যাকাউন্ট তৈরি করুন
				</h1>
				<p className="mt-2 text-sm text-gray-500 sm:text-base">
					বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
				</p>
			</header>

			{/* Card */}
			<Card className="mt-6 border border-gray-200 shadow-none rounded-2xl bg-white/70">
				<Card.Content className="flex flex-col gap-5 p-5 sm:p-7">
					<Form
						className="flex flex-col gap-5"
						onSubmit={onSubmit}
					>
						<TextField
							className="w-full"
							isRequired
							name="name"
							validate={(value) => {
								if (value.trim().length < 2) {
									return "সঠিক নাম লিখুন";
								}
								return null;
							}}
						>
							<Label>নাম</Label>
							<Input
								className="rounded-xl"
								placeholder="যেমন: রহিম উদ্দিন"
							/>
							<FieldError />
						</TextField>

						<TextField
							className="w-full"
							isRequired
							name="email"
							type="email"
							validate={(value) => {
								if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
									return "সঠিক ইমেইল ঠিকানা দিন";
								}
								return null;
							}}
						>
							<Label>ইমেইল</Label>
							<Input
								className="rounded-xl"
								placeholder="you@example.com"
							/>
							<FieldError />
						</TextField>

						<TextField
							className="w-full"
							isRequired
							minLength={8}
							name="password"
							type={isVisible ? "text" : "password"}
							onChange={setPassword}
							validate={(value) => {
								if (value.length < 8) {
									return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
								}
								return null;
							}}
						>
							<Label>পাসওয়ার্ড</Label>
							<InputGroup className="rounded-xl">
								<InputGroup.Input
									className="w-full"
									placeholder="কমপক্ষে ৮ অক্ষর"
								/>
								<InputGroup.Suffix className="pe-0">
									<Button
										isIconOnly
										aria-label={
											isVisible ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখান"
										}
										size="sm"
										variant="ghost"
										onPress={() => setIsVisible(!isVisible)}
									>
										{isVisible ? (
											<Eye className="size-4" />
										) : (
											<EyeSlash className="size-4" />
										)}
									</Button>
								</InputGroup.Suffix>
							</InputGroup>
							<FieldError />
						</TextField>

						<TextField
							className="w-full"
							isRequired
							name="confirmPassword"
							type={isVisible ? "text" : "password"}
							validate={(value) => {
								if (value !== password) {
									return "পাসওয়ার্ড দুটি মিলছে না";
								}
								return null;
							}}
						>
							<Label>পাসওয়ার্ড নিশ্চিত করুন</Label>
							<Input
								className="rounded-xl"
								placeholder="আবার লিখুন"
							/>
							<FieldError />
						</TextField>

						<Button
							type="submit"
							fullWidth
							isPending={isLoading}
							className="font-semibold text-white bg-green-700 shadow-md rounded-xl shadow-green-700/30 hover:bg-green-800"
						>
							অ্যাকাউন্ট তৈরি করুন
						</Button>
					</Form>

					{/* Divider */}
					<div className="flex items-center gap-4">
						<Separator className="flex-1" />
						<span className="text-xs text-gray-500">অথবা</span>
						<Separator className="flex-1" />
					</div>

					<SocialSignIn />

					<p className="text-sm text-center">
						অ্যাকাউন্ট আছে?{" "}
						<Link
							href="/sign-in"
							className="font-medium text-green-700 hover:underline"
						>
							সাইন ইন করুন
						</Link>
					</p>
				</Card.Content>
			</Card>

			{/* Back home */}
			<Link
				href="/"
				className="mt-6 flex items-center justify-center gap-1.5 text-sm text-gray-500 hover:text-gray-900"
			>
				<ArrowLeft
					width={16}
					height={16}
				/>
				হোম পেজে ফিরে যান
			</Link>
		</section>
	);
};

export default SignUpPage;
