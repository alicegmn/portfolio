import type { Locale } from "./content";

export const projectSlugs = ["pax"] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export type Project = {
	title: string;
	summary: string;
	category: string;
	period: string;
	role: string;
	team?: string;
	image: {
		src: string;
		alt: string;
	};
	technologies: string[];
	links: {
		github?: string;
		live?: string;
	};
	problem: string;
	solution: string;
	responsibilities: string[];
	technicalHighlights: string[];
	challenges: {
		title: string;
		description: string;
		solution: string;
	}[];
	result: string;
	learnings: string[];
};

export const projects = {
	sv: {
		pax: {
			title: "PAX",
			summary:
				"Ett automatiserat rumsbokningssystem som använder sensordata för att boka och avboka rum.",
			category: "Skolprojekt",
			period: "2025",
			role: "Backendutvecklare",
			team: "Tvärfunktionellt team med backend, frontend och IoT",
			image: {
				src: "/projects/pax/hero.webp",
				alt: "Översikt av PAX rumsbokningssystem",
			},
			technologies: [
				"TypeScript",
				"Node.js",
				"Express",
				"PostgreSQL",
				"Docker",
				"Swagger",
			],
			links: {
				github: "https://github.com/...",
			},
			problem:
				"Mötesrum kan vara bokade trots att ingen använder dem, samtidigt som andra användare inte hittar ett ledigt rum.",
			solution:
				"PAX kombinerar bokningsdata med sensordata för att automatiskt hantera tillgängligheten för rum.",
			responsibilities: [
				"Utformade och implementerade REST-API:t.",
				"Byggde CRUD-funktionalitet för rum, användare och bokningar.",
				"Arbetade med databasstruktur och PostgreSQL.",
				"Dokumenterade API:t med Swagger.",
				"Implementerade felhantering, loggning och rate limiting.",
			],
			technicalHighlights: [
				"Node.js och Express med TypeScript.",
				"PostgreSQL i Docker för lokal utveckling.",
				"Separering av routes, controllers och databaslogik.",
				"Global felhantering och strukturerad loggning med Winston.",
			],
			challenges: [
				{
					title: "Samarbete mellan flera delar av systemet",
					description:
						"Backend behövde fungera tillsammans med webbgränssnitt, mobilapp och IoT-enheter.",
					solution:
						"Vi definierade API-kontrakt tidigt och dokumenterade endpoints och datamodeller med Swagger.",
				},
			],
			result:
				"Resultatet blev ett fungerande API som kunde användas av projektets olika klienter för att hantera rum och bokningar.",
			learnings: [
				"Att strukturera ett större TypeScript-API.",
				"Att samarbeta över flera tekniska delsystem.",
				"Att dokumentera och kommunicera API-kontrakt.",
			],
		},
	},

	en: {
		pax: {
			title: "PAX",
			summary:
				"An automated room-booking system that uses sensor data to manage room availability.",
			category: "School project",
			period: "2025",
			role: "Backend developer",
			team: "Cross-functional backend, frontend and IoT team",
			image: {
				src: "/projects/pax/hero.webp",
				alt: "Overview of the PAX room-booking system",
			},
			technologies: [
				"TypeScript",
				"Node.js",
				"Express",
				"PostgreSQL",
				"Docker",
				"Swagger",
			],
			links: {
				github: "https://github.com/...",
			},
			problem:
				"Meeting rooms can remain booked even when they are not being used.",
			solution:
				"PAX combines booking information and sensor data to manage room availability automatically.",
			responsibilities: [
				"Designed and implemented the REST API.",
				"Built CRUD functionality for rooms, users and bookings.",
				"Worked with the PostgreSQL database structure.",
				"Documented the API using Swagger.",
			],
			technicalHighlights: [
				"Node.js and Express with TypeScript.",
				"PostgreSQL running in Docker.",
				"Separated routes, controllers and database logic.",
			],
			challenges: [
				{
					title: "Connecting several parts of the system",
					description:
						"The backend needed to support web, mobile and IoT clients.",
					solution:
						"We defined API contracts and documented endpoints and data models using Swagger.",
				},
			],
			result:
				"The project produced a working API that supported room and booking management across the system.",
			learnings: [
				"Structuring a larger TypeScript API.",
				"Working across several technical areas.",
				"Documenting and communicating API contracts.",
			],
		},
	},
} satisfies Record<Locale, Record<ProjectSlug, Project>>;

export function isProjectSlug(slug: string): slug is ProjectSlug {
	return projectSlugs.includes(slug as ProjectSlug);
}

export function getProject(locale: Locale, slug: string) {
	if (!isProjectSlug(slug)) {
		return undefined;
	}

	return projects[locale][slug];
}
