"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, toast } from "@heroui/react";
import { signOut } from "@/lib/auth-client";

const SignOutButton = () => {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const handleSignOut = async () => {
		setIsLoading(true);
		const { error } = await signOut();
		setIsLoading(false);

		if (error) {
			toast.danger("সাইন আউট করা যায়নি, আবার চেষ্টা করুন");
			return;
		}

		toast.success("সফলভাবে সাইন আউট হয়েছে");
		router.replace("/"); // leave the protected page
		router.refresh(); // clear cached server data
	};

	return (
		<Button
			variant="outline"
			isPending={isLoading}
			onPress={handleSignOut}
			className="text-red-600 border-red-500 rounded-xl hover:bg-red-50"
		>
			↩ সাইন আউট
		</Button>
	);
};

export default SignOutButton;
