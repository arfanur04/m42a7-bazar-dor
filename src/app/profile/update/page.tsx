import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import UpdateProfileForm from "@/components/profile/UpdateProfileForm";

// Server component: gets the current name, passes it to the client form
const UpdateProfilePage = async () => {
	const session = await auth.api.getSession({ headers: await headers() });
	if (!session) redirect("/sign-in");

	return <UpdateProfileForm defaultName={session.user.name} />;
};

export default UpdateProfilePage;
