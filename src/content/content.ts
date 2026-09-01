import { experience } from "./experience";
import { about } from "./about";

export const locales = ["sv", "en"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(locale: string): locale is Locale {
	return locales.includes(locale as Locale);
}

export function getLocale(locale: string): Locale {
	return isLocale(locale) ? locale : "en";
}

export const routes = {
	sv: {
		home: "/sv",
		projects: "/sv/projekt",
		about: "/sv/om",
		experience: "/sv/cv",
		contact: "/sv/kontakt",
	},
	en: {
		home: "/en",
		projects: "/en/projects",
		about: "/en/about",
		experience: "/en/experience",
		contact: "/en/contact",
	},
} as const;

export type PageKey = "projects" | "about" | "experience" | "contact";

export const pageSlugs = {
	sv: {
		projekt: "projects",
		om: "about",
		cv: "experience",
		kontakt: "contact",
	},
	en: {
		projects: "projects",
		about: "about",
		experience: "experience",
		contact: "contact",
	},
} as const satisfies Record<Locale, Record<string, PageKey>>;

export function getPageKey(locale: Locale, slug: string): PageKey | undefined {
	const slugs = pageSlugs[locale] as Record<string, PageKey | undefined>;
	return slugs[slug];
}

export function getLocalizedPath(
	pathname: string,
	currentLocale: Locale,
	targetLocale: Locale,
): string {
	const segments = pathname.split("/").filter(Boolean);
	const pageSlug = segments[1];

	if (!pageSlug) {
		return routes[targetLocale].home;
	}

	const pageKey = getPageKey(currentLocale, pageSlug);

	if (!pageKey) {
		return routes[targetLocale].home;
	}

	const targetSlug = Object.entries(pageSlugs[targetLocale]).find(
		([, key]) => key === pageKey,
	)?.[0];

	if (!targetSlug) {
		return routes[targetLocale].home;
	}

	const trailingSegments = segments.slice(2);

	return `/${targetLocale}/${targetSlug}${trailingSegments.length ? `/${trailingSegments.join("/")}` : ""}`;
}

export const content = {
	shared: {
		name: "Alice Eriksson",
		email: "alice.eriksson.561@gmail.com",
		github: "https://github.com/alicegmn",
		linkedin: "https://www.linkedin.com/in/alice-eriksson-malmo/",
	},

	sv: {
		meta: {
			title: "Alice Eriksson – Fullstackutvecklare i Malmö",
			description:
				"Fullstackutvecklare, kommunikatör och digital problemlösare.",
			openGraphLocale: "sv_SE",
		},
		breadcrumbs: {
			home: "Hem",
			projects: "Projekt",
			about: "Om mig",
			experience: "CV",
			contact: "Kontakt",
		},

		home: {
			headline: "Digital problemlösare med människan i fokus.",
			description:
				"Fullstackutvecklare med IT- och kommunikationsbakgrund. Jag drivs av digitalisering som gör skillnad – när det förenklar, effektiviserar och skapar värde för människor.",
			sections: {
				selectedProjects: {
					heading: "Utvalda projekt",
					intro:
						"Ett urval av lösningar där teknik, struktur och användare möts.",
					linkText: "Visa alla projekt",
				},
				skills: {
					heading: "Kompetensområden",
					items: [
						{
							title: "Frontend och fullstack",
							text: "TypeScript, JavaScript, React, Next.js och Node.js.",
						},
						{
							title: "Backend & data",
							text: "Express, PostgreSQL, REST-API:er och integrationer.",
						},
						{
							title: "Innehåll & leverans",
							text: "Headless CMS, Docker, Azure, GitHub Actions och CI/CD.",
						},
					],
				},
				about: {
					heading: "Om mig",
					linkText: "Läs mer om mig",
				},
				experience: {
					heading: "Erfarenhet",
					linkText: "Se hela erfarenheten",
				},
				contact: {
					heading: "Söker nya möjligheter!",
					text: "Jag söker jobb eller uppdrag i Malmö med omnejd inom utveckling, IT och digital kommunikation. Jag trivs bäst där teknik, kommunikation och användarbehov möts och är öppen för både specialist- och bredare tekniknära roller.",
					linkText: "Hör av dig",
				},
			},
		},

		projects: {
			title: "Projekt",
			intro:
				"Ett urval av projekt där jag har arbetat med frontend, backend, API:er och molnbaserad leverans.",
		},

		about: {
			...about.sv,
		},

		contact: {
			heading: "Hör gärna av dig",
			description:
				"Jag söker jobb eller uppdrag i Malmö med omnejd inom utveckling, IT och digital kommunikation. Jag är särskilt intresserad av roller där teknik, kommunikation och användarbehov möts, exempelvis inom systemutveckling, IT- och systemsupport, digital kommunikation, webb, UX och digitalisering. Jag är också öppen för andra roller där min bakgrund inom kommunikation, support och digitala projekt är relevant. Jag är tillgänglig omgående.",
		},

		experience: experience.sv,

		nav: [
			{ label: "/hem", href: routes.sv.home },
			{ label: "/projekt", href: routes.sv.projects },
			{ label: "/cv", href: routes.sv.experience },
			{ label: "/om", href: routes.sv.about },
			{ label: "/kontakt", href: routes.sv.contact },
		],

		notFound: {
			title: "404 – Sidan kunde inte hittas",
			description: "Sidan du letar efter finns inte.",
			headline: "Sidan kunde inte hittas",
			message: "Sidan du letar efter finns inte.",
			linkText: "Till startsidan",
		},
	},

	en: {
		meta: {
			title: "Alice Eriksson - Full-stack developer in Malmö",
			description:
				"Full-stack developer, communicator, and digital problem solver.",
			openGraphLocale: "en_US",
		},
		breadcrumbs: {
			home: "Home",
			projects: "Projects",
			about: "About",
			experience: "Experience",
			contact: "Contact",
		},

		home: {
			headline: "Digital problem solver with a human-first approach.",
			description:
				"Full-stack developer with a background in IT and communications. I’m motivated by digitalisation that makes a difference – when it simplifies, streamlines, and creates value for people.",
			sections: {
				selectedProjects: {
					heading: "Selected projects",
					intro:
						"A selection of solutions where technology, structure and people meet.",
					linkText: "View all projects",
				},
				skills: {
					heading: "Areas of expertise",
					items: [
						{
							title: "Frontend & full-stack",
							text: "TypeScript, JavaScript, React, Next.js and Node.js.",
						},
						{
							title: "Backend & data",
							text: "Express, PostgreSQL, REST APIs and integrations.",
						},
						{
							title: "Content & delivery",
							text: "Headless CMS, Docker, Azure, GitHub Actions and CI/CD.",
						},
					],
				},
				about: {
					heading: "About me",
					linkText: "Read more about me",
				},
				experience: {
					heading: "Experience",
					linkText: "View full experience",
				},
				contact: {
					heading: "Looking for new opportunities!",
					text: "I’m looking for jobs or project opportunities in Malmö and the surrounding area within development, IT and digital communication. I thrive in roles where technology, communication and user needs come together, and I’m open to both specialist and broader technology-focused roles.",
					linkText: "Get in touch",
				},
			},
		},

		projects: {
			title: "Projects",
			intro:
				"A selection of projects where I have worked with frontend, backend, APIs and cloud delivery.",
		},

		about: {
			...about.en,
		},

		contact: {
			heading: "Get in touch",
			description:
				"I’m looking for a job or project opportunity in Malmö and the surrounding area within development, IT or digital communication. I’m particularly interested in roles where technology, communication and user needs come together, such as software development, IT and system support, digital communication, web, UX and digitalisation. I’m also open to other opportunities where my background in communication, support and digital projects is relevant. I’m available immediately.",
		},

		experience: experience.en,

		nav: [
			{ label: "/home", href: routes.en.home },
			{ label: "/projects", href: routes.en.projects },
			{ label: "/experience", href: routes.en.experience },
			{ label: "/about", href: routes.en.about },
			{ label: "/contact", href: routes.en.contact },
		],

		notFound: {
			title: "404 – Page not found",
			description: "The page you are looking for does not exist.",
			headline: "Page not found",
			message: "The page you are looking for does not exist.",
			linkText: "Back to homepage",
		},
	},
} as const;
