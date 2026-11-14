"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import {
	Button,
	Card,
	FieldError,
	Form,
	Input,
	Label,
	TextField,
	toast,
} from "@heroui/react";
import { ArrowLeft } from "@gravity-ui/icons";
import { updateUser } from "@/lib/auth-client";

const UpdateProfileForm = ({ defaultName }: { defaultName: string }) => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const onSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = (formData.get("name") as string).trim();

		setIsLoading(true);
		const { error } = await updateUser({ name });
		setIsLoading(false);

		if (error) {
			toast.danger(error.message || "তথ্য আপডেট করা যায়নি, আবার চেষ্টা করুন");
			return;
		}

		toast.success("তথ্য সফলভাবে আপডেট হয়েছে");
		router.push("/profile");
		router.refresh(); // so the new name shows everywhere
	};

	return (
		<section className="w-11/12 py-10 mx-auto max-w-2xl">
			<h1 className="text-2xl font-black sm:text-3xl">তথ্য আপডেট করুন</h1>
			<p className="mt-1 text-gray-500">আপনার নাম পরিবর্তন করুন।</p>

			<Card className="mt-6 border border-gray-200 shadow-none rounded-3xl bg-white/70">
				<Card.Content className="p-5 sm:p-6">
					<Form
						className="flex flex-col gap-5"
						onSubmit={onSubmit}
					>
						<TextField
							className="w-full"
							isRequired
							name="name"
							defaultValue={defaultName}
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
								placeholder="আপনার নাম"
							/>
							<FieldError />
						</TextField>

						<Button
							type="submit"
							fullWidth
							isPending={isLoading}
							className="font-semibold text-white bg-green-700 shadow-md rounded-xl shadow-green-700/30 hover:bg-green-800"
						>
							তথ্য আপডেট করুন
						</Button>
					</Form>
				</Card.Content>
			</Card>

			<NextLink
				href="/profile"
				className="flex items-center justify-center gap-1.5 mt-6 text-sm text-gray-500 hover:text-gray-900"
			>
				<ArrowLeft
					width={16}
					height={16}
				/>
				প্রোফাইলে ফিরে যান
			</NextLink>
		</section>
	);
};

export default UpdateProfileForm;
