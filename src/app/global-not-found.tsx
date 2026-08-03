import type { Metadata } from "next";
import { Rock_3D, DM_Sans } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";
import { content } from "@/content/content";
import "./globals.css";

const rock3d = Rock_3D({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-rock-3d",
	display: "swap",
});

const dmSans = DM_Sans({
	subsets: ["latin"],
	variable: "--font-dm-sans",
	display: "swap",
});

const notFoundContent = content.en.notFound;

export const metadata: Metadata = {
	title: notFoundContent.title,
	description: notFoundContent.description,
};

export default function GlobalNotFound() {
	return (
		<html lang="en" className={clsx(rock3d.variable, dmSans.variable)}>
			<body className={dmSans.className}>
				<main>
					<p className={rock3d.className}>404</p>
					<h1>{notFoundContent.headline}</h1>
					<p>{notFoundContent.message}</p>
					<Link href="/en">{notFoundContent.linkText}</Link>
				</main>
			</body>
		</html>
	);
}
