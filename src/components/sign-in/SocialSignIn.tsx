import { signIn } from "@/lib/auth-client";
import GoogleSvg from "@/svg/GoogleSvg";
import { LogoGithub } from "@gravity-ui/icons";
import { Button, toast } from "@heroui/react";

const SocialSignIn = () => {
	const onSocialSignIn = async (provider: "google" | "github") => {
		const { error } = await signIn.social({
			provider,
			callbackURL: "/",
		});

		if (error) {
			toast.danger(error.message || "সোশ্যাল লগইন করা যায়নি");
			return;
		}
		toast.success("সফলভাবে সাইন ইন হয়েছে");
	};

	return (
		<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 justify-items-center">
			<Button
				variant="outline"
				className="font-medium rounded-xl"
				onPress={() => onSocialSignIn("google")}
			>
				<GoogleSvg />
				Google দিয়ে চালিয়ে যান
			</Button>
			<Button
				variant="outline"
				className="font-medium rounded-xl"
				onPress={() => onSocialSignIn("github")}
			>
				<LogoGithub
					width={18}
					height={18}
				/>
				GitHub দিয়ে চালিয়ে যান
			</Button>
		</div>
	);
};

export default SocialSignIn;
