import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

/* eslint-disable @next/next/no-page-custom-font -- Google Fonts are intentionally loaded at runtime. */

const siteUrl = "https://aliceeriksson.se";

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: "Alice Eriksson – Fullstackutvecklare i Malmö",
	description: "Fullstackutvecklare, kommunikatör och digital problemlösare.",
};

type RootLayoutProps = Readonly<{
	children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
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
			<body>{children}</body>
		</html>
	);
}
