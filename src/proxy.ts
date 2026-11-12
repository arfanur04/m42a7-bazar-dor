import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

const authPages = ["/sign-in", "/sign-up"];

export async function proxy(request: NextRequest) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	const { pathname } = request.nextUrl;
	const isAuthPage = authPages.includes(pathname);

	// logged in user opened sign-in / sign-up -> send to home
	if (session && isAuthPage) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	// logged out user opened a protected page -> send to sign-in
	if (!session && !isAuthPage) {
		return NextResponse.redirect(
			new URL("/sign-in?message=login-required", request.url),
		);
	}

	return NextResponse.next();
}

export const config = {
	// auth pages + protected pages
	matcher: ["/sign-in", "/sign-up", "/profile/:path*", "/product/:path*"],
};
