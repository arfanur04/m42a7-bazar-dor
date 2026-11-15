import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
	/** The base URL of the server (optional if you're using the same domain) */
	// baseURL: "http://localhost:3000",
	// baseURL: "https://m42a7-bazar-dor.vercel.app",
});

export const { signIn, signUp, signOut, updateUser, useSession } =
	createAuthClient();
