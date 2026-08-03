import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Rock_3D, DM_Sans } from "next/font/google";
import { clsx } from "clsx";
import { content, getLocale, routes } from "@/content";
import { Header } from "@/components/layout/Header/Header";
import { MainNav } from "@/components/MainNav/MainNav";
import styles from "./layout.module.css";
import "../globals.css";

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
		title: meta.title,
		description: meta.description,
		alternates: {
			canonical: routes[currentLocale].home,
			languages: {
				sv: routes.sv.home,
				en: routes.en.home,
			},
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
		<html
			lang={currentLocale}
			className={clsx(rock3d.variable, dmSans.variable)}
		>
			<body>
				<div className={styles.layout}>
					<Header
						name={content.shared.name}
						currentLocale={currentLocale}
						homeHref={routes[currentLocale].home}
					/>

					<main className={styles.main}>{children}</main>

					<MainNav items={content[currentLocale].nav} />
				</div>
			</body>
		</html>
	);
}
