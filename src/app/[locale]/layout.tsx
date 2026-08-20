import type { Metadata } from "next";
import type { ReactNode } from "react";
import { content, getLocale, routes } from "@/content/content";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import styles from "./layout.module.css";
import "../globals.css";

/* eslint-disable @next/next/no-page-custom-font -- Google Fonts are intentionally loaded at runtime. */

const siteUrl = "https://aliceeriksson.se";

type LocaleLayoutProps = Readonly<{
	children: ReactNode;
	params: Promise<{
		locale: string;
	}>;
}>;

export async function generateMetadata({
	params,
}: LocaleLayoutProps): Promise<Metadata> {
	const { locale } = await params;
	const currentLocale = getLocale(locale);
	const meta = content[currentLocale].meta;

	return {
		metadataBase: new URL(siteUrl),
		title: meta.title,
		description: meta.description,
		openGraph: {
			title: meta.title,
			description: meta.description,
			url: routes[currentLocale].home,
			siteName: "Alice Eriksson",
			locale: meta.openGraphLocale,
			type: "website",
			images: [
				{
					url: "/og-image.svg",
					width: 1200,
					height: 630,
					alt: meta.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: meta.title,
			description: meta.description,
			images: ["/og-image.svg"],
		},
	};
}

export default async function LocaleLayout({
	children,
	params,
}: LocaleLayoutProps) {
	const { locale } = await params;
	const currentLocale = getLocale(locale);

	return (
		<html lang={currentLocale}>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&family=Rock+3D&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body>
				<div className={styles.layout}>
					<Header
						name={content.shared.name}
						currentLocale={currentLocale}
						homeHref={routes[currentLocale].home}
					/>

					<main className={styles.main}>{children}</main>
					<Footer locale={currentLocale} />
				</div>
			</body>
		</html>
	);
}
