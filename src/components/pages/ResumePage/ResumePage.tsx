import { content, type Locale } from "@/content/content";

type ResumePageProps = Readonly<{
	locale: Locale;
}>;

export function ResumePage({ locale }: ResumePageProps) {
	const resume = content[locale].projects;

	return (
		<section>
			<h1>Resume / CV</h1>
			<p>...</p>
		</section>
	);
}
