import { content, type Locale } from "@/content/content";
import Link from "next/link";

type ContactPageProps = Readonly<{
	locale: Locale;
}>;

export function ContactPage({ locale }: ContactPageProps) {
	const contact = content[locale].contact;

	return (
		<section>
			<h1>{contact.heading}</h1>
			<ul>
				<li>
					<Link href={content.shared.email}>Email</Link>
				</li>
				<li>
					<Link href={content.shared.github}>GitHub</Link>
				</li>
				<li>
					<Link href={content.shared.linkedin}>LinkedIn</Link>
				</li>

				<li>
					<Link href={content.shared.discord}>Discord</Link>
				</li>
			</ul>
		</section>
	);
}
