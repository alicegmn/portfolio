import type { Metadata } from "next";
import type { ReactNode } from "react";
import { content, getLocale, routes } from "@/content/content";
import { Header } from "@/components/layout/Header/Header";
import { Footer } from "@/components/layout/Footer/Footer";
import styles from "./layout.module.css";

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
	};
}

export default async function LocaleLayout({
	children,
	params,
}: LocaleLayoutProps) {
	const { locale } = await params;
	const currentLocale = getLocale(locale);

	return (
		<div className={styles.layout}>
					<Header
						name={content.shared.name}
						currentLocale={currentLocale}
						homeHref={routes[currentLocale].home}
					/>

					<main className={styles.main}>{children}</main>
					<Footer locale={currentLocale} />
		</div>
	);
}
