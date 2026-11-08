import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Toast } from "@heroui/react";

const notoSerifBengali = Noto_Serif_Bengali({
	subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
	title: "Bazar Dor",
	description: "Daily Bazar Information",
	icons: {
		icon: "/logo-icon.png",
		apple: "/logo-icon.png",
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={`${notoSerifBengali.className}  h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-[#f0f5f0]">
				<Navbar />
				<main className="flex-1">{children}</main>
				<Footer />
				<Toast.Provider />
			</body>
		</html>
	);
}
