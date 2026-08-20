import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content/content";
import styles from "./global-not-found.module.css";
import "./globals.css";

/* eslint-disable @next/next/no-page-custom-font -- Google Fonts are intentionally loaded at runtime. */

const siteUrl = "https://aliceeriksson.se";

const notFoundContent = content.en.notFound;

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: notFoundContent.title,
	description: notFoundContent.description,
};

export default function GlobalNotFound() {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&family=Rock+3D&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<main className={styles.page}>
					<p className={styles.code}>404</p>
					<h1>{notFoundContent.headline}</h1>
					<p>{notFoundContent.message}</p>
					<Link href="/en">{notFoundContent.linkText}</Link>
				</main>
			</body>
		</html>
	);
}
