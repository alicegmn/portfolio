import type { Metadata } from "next";
import { Rock_3D, DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";
import Link from "next/link";

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

export const metadata: Metadata = {
	title: "404 – Page not found",
	description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
	return (
		<html lang="en" className={clsx(rock3d.variable, dmSans.variable)}>
			<body>
				<main>
					<p style={{ fontFamily: "var(--font-display)" }}>404</p>
					<h1>Page not found</h1>
					<p>The page you are looking for does not exist.</p>
					<Link href="/sv">Till startsidan</Link>
				</main>
			</body>
		</html>
	);
}
