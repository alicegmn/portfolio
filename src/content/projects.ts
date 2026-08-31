import type { Locale } from "./content";

export const projectSlugs = [
	"pax",
	"dynamic-dog",
	"logivance",
	"dara",
	"divido",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export const selectedProjectSlugs = [
	"divido",
	"dynamic-dog",
	"pax",
] as const satisfies readonly ProjectSlug[] & { length: 1 | 2 | 3 };

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
				src: "https://raw.githubusercontent.com/alicegmn/paxdb/refs/heads/main/PAX.png",
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
				github: "https://github.com/alicegmn/paxdb",
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
		"dynamic-dog": {
			title: "Optimering av dynamicdog.se",
			summary:
				"Migrering från Next.js och styled components till TanStack Start och CSS modules samt prestandaoptimering med Lighthouse.",
			category: "Examensarbete",
			period: "2026",
			role: "Frontendutveckling",
			image: {
				src: "/images/projects/dynamic-dog.png",
				alt: "Skärmbild av Dynamic Dogs webbplats",
			},
			technologies: ["TanStack Start", "Storyblok", "TypeScript", "Lighthouse"],
			links: {},
			problem:
				"Projektet undersöker hur en ny frontend-arkitektur i TanStack Start kan jämföras med den nuvarande lösningen, med särskilt fokus på prestandaoptimering mot Lighthouse.",
			solution:
				"Resultatet blev en ny frontendarkitektur byggd med TanStack Start, en Lighthouse-rapport där lösningen uppnådde över 90 poäng i samtliga kategorier samt en dokumenterad jämförelse mellan den befintliga och den nya lösningen.",
			responsibilities: [
				"Bygga upp en ny frontend-arkitektur i TanStack Start.",
				"Behålla integration med Storyblok.",
				"Optimering mot Lighthouse på desktop och mobil.",
				"Jämföra nuvarande och ny lösning.",
				"Föreslå förbättringar och nya features.",
			],
			technicalHighlights: [
				"TanStack Start.",
				"Storyblok-integration.",
				"Lighthouse-optimering för desktop och mobil.",
			],
			challenges: [],
			result:
				"Resultatet blev en ny frontendarkitektur byggd med TanStack Start, en Lighthouse-rapport där lösningen uppnådde över 90 poäng i samtliga kategorier samt en dokumenterad jämförelse mellan den befintliga och den nya lösningen.",
			learnings: [
				"Att arbeta med TanStack Start.",
				"Att utvärdera frontendlösningar med Lighthouse.",
				"Att behålla en befintlig Storyblok-integration vid arkitekturarbete.",
			],
		},
		logivance: {
			title: "Logivance",
			summary:
				"En logistikplattform för klimatkontrollerade leveranser med rollanpassade gränssnitt för administratörer, kunder och förare.",
			category: "Skolprojekt",
			period: "2025",
			role: "Frontendutvecklare",
			team: "Tvärfunktionellt team med UX-designer samt backend-, frontend- och embeddedutvecklare.",
			image: {
				src: "/images/projects/logivance.png",
				alt: "Skärmbild av Logivances inloggningssida",
			},
			technologies: [
				"React",
				"TypeScript",
				"React Router",
				"Tailwind CSS",
				"Vite",
				"Vitest",
				"React Testing Library",
				"GitHub Actions",
				"Azure Static Web Apps",
			],
			links: {
				github: "https://github.com/orgs/Chas-Advance-Grupp-4/repositories",
			},
			problem:
				"Transporter av temperatur- och fuktkänsliga varor kräver att leveransstatus, leveransinformation och aktuella klimatvärden kan följas genom logistikkedjan. Olika användargrupper behöver samtidigt tillgång till olika delar av informationen.",
			solution:
				"Vi utvecklade tre rollanpassade frontendapplikationer för administratörer, kunder och förare. Plattformen gör det möjligt att följa leveranser, visa aktuell temperatur och luftfuktighet, se leveranshistorik, skanna QR-koder och uppdatera paketstatus genom logistikflödet.",
			responsibilities: [
				"Utvecklade funktionalitet i React-applikationerna för administratörer, kunder och förare.",
				"Arbetade med autentisering, JWT-hantering, skyddade routes och rollbaserade användarflöden.",
				"Byggde vyer för paketöversikter, leveranser, leveransdetaljer, historik och tilldelade transporter.",
				"Integrerade frontendapplikationerna med backend-API:er för användare, leveranser, klimatvärden och statusuppdateringar.",
				"Implementerade funktionalitet för QR-koder och QR-skanning i kund- och förarflöden.",
				"Arbetade med automatiserade tester med Vitest och React Testing Library.",
				"Bidrog till GitHub Actions-workflows för linting, typkontroll, testning och build.",
				"Bidrog till ett gemensamt Azure Static Web Apps-workflow för distribution av samtliga frontendapplikationer.",
				"Samarbetade med backend-, embedded- och UX-kompetenser för att koppla samman användargränssnittet med resten av systemet.",
			],
			technicalHighlights: [
				"Tre separata React- och TypeScript-applikationer för administratörer, kunder och förare.",
				"Rollbaserad routing och skyddade routes med React Router.",
				"Responsiva gränssnitt byggda med Tailwind CSS.",
				"Visning av aktuell temperatur och luftfuktighet med kontroll mot tillåtna gränsvärden.",
				"Leveransstatusar för bland annat skapad, tilldelad, pågående, levererad och avbruten leverans.",
				"QR-koder och QR-skanning för identifiering och statusuppdatering av försändelser.",
				"Automatiserade komponent- och användartester med Vitest och React Testing Library.",
				"Ett gemensamt GitHub Actions-workflow med matrix-strategi för samtliga frontendapplikationer.",
				"Automatiserad distribution till staging-, produktions- och förhandsgranskningsmiljöer i Azure Static Web Apps.",
				"Automatisk stängning av förhandsgranskningsmiljöer när en pull request avslutades.",
			],
			challenges: [
				{
					title: "Gemensam leveransprocess för tre frontendapplikationer",
					description:
						"Admin-, kund- och förargränssnittet behövde byggas och distribueras separat. Flera fristående workflowfiler hade skapat duplicerad kod och ökat risken för att apparna hanterades olika.",
					solution:
						"Vi skapade ett gemensamt GitHub Actions-workflow med en matrix-strategi där varje frontend byggdes och distribuerades i en isolerad körning. Workflowet stödde staging, produktion och pull request-baserade förhandsgranskningar samt stängde preview-miljöer automatiskt när en pull request avslutades.",
				},
				{
					title: "Olika användarroller och arbetsflöden",
					description:
						"Administratörer, kunder och förare behövde olika vyer, behörigheter och funktioner inom samma logistikkedja.",
					solution:
						"Vi använde gemensam autentiseringslogik och rollbaserade skyddade routes, samtidigt som varje frontend fick egna vyer och användarflöden anpassade efter sin roll.",
				},
			],
			result:
				"Resultatet blev tre rollanpassade frontendapplikationer som stödjer olika delar av logistikflödet, från paketöversikter och leveranshistorik till tilldelade transporter, QR-skanning och statusuppdateringar. Den gemensamma CI/CD-strukturen gjorde distributionen mer enhetlig och enklare att underhålla.",
			learnings: [
				"Att strukturera och vidareutveckla flera sammanhängande React-applikationer.",
				"Att bygga rollbaserade användarflöden med autentisering och skyddade routes.",
				"Att integrera frontend med API:er för leverans-, status- och klimatdata.",
				"Att implementera QR-baserade flöden för identifiering av försändelser.",
				"Att skriva tester med Vitest och React Testing Library.",
				"Att automatisera build och distribution med GitHub Actions och Azure Static Web Apps.",
				"Att samarbeta i ett tvärfunktionellt system med frontend, backend, embedded och UX.",
			],
		},
		dara: {
			title: "Dara Music App",
			summary:
				"En modern musikapplikation byggd med Spotify API:t, med realtidssökning, favorithantering och användarvänlig navigering.",
			category: "Skolprojekt",
			period: "2025",
			role: "Frontendutvecklare",
			image: {
				src: "/images/projects/dara.png",
				alt: "Dara Music App",
			},
			technologies: [
				"React",
				"TypeScript",
				"React Router",
				"Zustand",
				"Tailwind CSS",
				"Spotify API",
			],
			links: {
				github: "https://github.com/alicegmn/dara",
			},
			problem:
				"Användare behöver kunna upptäcka musik, söka efter artister och låtar samt spara favoriter i en sammanhängande och lättanvänd applikation.",
			solution:
				"Vi byggde en responsiv musikapplikation med Spotify OAuth, debounced realtidssökning, visning av topplistor och favorithantering som sparas i localStorage.",
			responsibilities: [
				"Utvecklade användargränssnittet i React och TypeScript.",
				"Implementerade routing för startsida, favoriter, artistvyer och inloggning.",
				"Byggde realtidssökning för artister och låtar med debouncing.",
				"Implementerade Spotify OAuth 2.0 för autentisering.",
				"Byggde funktionalitet för att lägga till och ta bort favoritlåtar.",
				"Samarbetade i ett gemensamt projekt med fokus på en modulär och skalbar struktur.",
			],
			technicalHighlights: [
				"React och TypeScript med komponentbaserad arkitektur.",
				"Spotify OAuth 2.0 och Spotify Web API.",
				"React Router för navigering mellan applikationens vyer.",
				"Zustand för autentiseringsstatus och global favorithantering.",
				"Tailwind CSS för ett responsivt och tillgängligt gränssnitt.",
				"localStorage för att spara användarens favoritlåtar mellan sessioner.",
			],
			challenges: [],
			result:
				"Resultatet blev en fungerande musikapplikation där användare kan logga in med Spotify, söka efter musik, utforska artister och låtar samt hantera sina favoriter.",
			learnings: [
				"Att integrera en extern API-tjänst med OAuth-autentisering.",
				"Att hantera global state med Zustand.",
				"Att bygga responsiva och tillgängliga React-gränssnitt.",
				"Att strukturera en större frontendapplikation med återanvändbara komponenter.",
			],
		},
		divido: {
			title: "Divido",
			summary:
				"En mobilapp för att dela gemensamma utgifter och hålla reda på vem som är skyldig vem.",
			category: "Mobilapplikation",
			period: "Pågående",
			role: "Fullstackutvecklare & produktutvecklare",
			image: {
				src: "/images/projects/divido.png",
				alt: "Översikt av Divido-appen för delade utgifter",
			},
			technologies: [
				"React Native",
				"Expo",
				"Expo Router",
				"TypeScript",
				"Supabase",
				"PostgreSQL",
				"Supabase Auth",
				"Row Level Security",
				"React Hook Form",
				"Zod",
			],
			links: {
				github: "https://github.com/alicegmn/divido",
			},
			problem:
				"Att dela kostnader i en grupp blir snabbt svårt att hålla reda på när olika personer betalar olika utgifter. Utmaningen är inte bara att registrera kostnader, utan att modellera deltagare, betalningar och fördelningar på ett sätt som gör att saldot alltid kan räknas fram korrekt.",
			solution:
				"Jag utvecklar Divido som en mobilapp där användare kan skapa grupper, hantera medlemmar och registrera gemensamma utgifter. React Native och Expo används för klienten medan Supabase tillhandahåller autentisering, API och PostgreSQL-databas. Behörighet hanteras med Row Level Security så att användare endast kan komma åt grupper och data de har rätt till.",
			responsibilities: [
				"Ansvarar för produktidé och användarflöden.",
				"Utvecklar frontend och datamodell.",
				"Implementerar autentisering och databasarkitektur.",
				"Arbetar med API-integration och behörighetsregler.",
				"Implementerar formulärvalidering och versionshanterade databasmigrationer.",
			],
			technicalHighlights: [
				"Supabase Auth används tillsammans med en separat profiles-modell för applikationsdata.",
				"PostgreSQL Row Level Security begränsar åtkomst till grupper och medlemskap.",
				"En PostgreSQL-funktion skapar gruppen och det första medlemskapet atomärt i samma transaktion.",
				"React Hook Form och Zod används för formulär och validering.",
				"Expo Router används för navigationen.",
			],
			challenges: [],
			result:
				"Projektet har hittills resulterat i en fungerande mobilgrund med registrering, inloggning, användarprofiler, gruppskapande och visning av gruppmedlemmar kopplat till en produktionsnära backend. Nästa steg är medlemsinbjudningar och den centrala modellen för utgifter, fördelningar och saldon.",
			learnings: [
				"Arbeta mer produktionsnära med mobilutveckling och backendarkitektur.",
				"Skilja autentisering från applikationsdata och inte förlita sig på klienten för säkerhet eller kritisk affärslogik.",
				"Arbeta praktiskt med PostgreSQL-relationer, RLS, databasfunktioner och atomiska operationer.",
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
				src: "https://raw.githubusercontent.com/alicegmn/paxdb/refs/heads/main/PAX.png",
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
				github: "https://github.com/alicegmn/paxdb",
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
		"dynamic-dog": {
			title: "Optimization of dynamicdog.se",
			summary:
				"Migration from Next.js and styled-components to TanStack Start and CSS Modules, along with performance optimisation using Lighthouse.",
			category: "Degree project",
			period: "2026",
			role: "Frontend development",
			image: {
				src: "/images/projects/dynamic-dog.png",
				alt: "Dynamic Dog website screenshot.",
			},
			technologies: ["TanStack Start", "Storyblok", "TypeScript", "Lighthouse"],
			links: {},
			problem:
				"The project explores how a new frontend architecture in TanStack Start can be compared with the current solution, with a particular focus on performance optimisation for Lighthouse.",
			solution:
				"The new architecture retains the Storyblok integration and is optimised for Lighthouse on both desktop and mobile.",
			responsibilities: [
				"Build a new frontend architecture with TanStack Start.",
				"Retain the Storyblok integration.",
				"Lighthouse optimisation for desktop and mobile.",
				"Compare the current and new solutions.",
				"Suggest improvements and new features.",
			],
			technicalHighlights: [
				"TanStack Start.",
				"Storyblok integration.",
				"Lighthouse optimisation for desktop and mobile.",
			],
			challenges: [],
			result:
				"The result was a new frontend architecture built with TanStack Start, a Lighthouse report in which the solution scored above 90 in every category, and a documented comparison between the existing and the new solution.",
			learnings: [
				"Working with TanStack Start.",
				"Evaluating frontend solutions with Lighthouse.",
				"Retaining an existing Storyblok integration during architectural work.",
			],
		},
		logivance: {
			title: "Logivance",
			summary:
				"A logistics platform for climate-controlled deliveries with role-based interfaces for administrators, customers and drivers.",
			category: "School project",
			period: "2025",
			role: "Frontend developer",
			team: "Cross-functional team with a UX designer and backend, frontend and embedded developers.",
			image: {
				src: "/images/projects/logivance.png",
				alt: "Logivance login page.",
			},
			technologies: [
				"React",
				"TypeScript",
				"React Router",
				"Tailwind CSS",
				"Vite",
				"Vitest",
				"React Testing Library",
				"GitHub Actions",
				"Azure Static Web Apps",
			],
			links: {
				github: "https://github.com/orgs/Chas-Advance-Grupp-4/repositories",
			},
			problem:
				"Transporting temperature- and humidity-sensitive goods requires delivery status, delivery information and current climate data to be tracked throughout the logistics chain. Different user groups also need access to different parts of the information.",
			solution:
				"We developed three role-based frontend applications for administrators, customers and drivers. The platform makes it possible to track deliveries, view current temperature and humidity, review delivery history, scan QR codes and update package status throughout the logistics flow.",
			responsibilities: [
				"Developed functionality in the React applications for administrators, customers and drivers.",
				"Worked with authentication, JWT handling, protected routes and role-based user flows.",
				"Built views for package overviews, deliveries, delivery details, history and assigned transports.",
				"Integrated the frontend applications with backend APIs for users, deliveries, climate data and status updates.",
				"Implemented QR code and QR scanning functionality in customer and driver flows.",
				"Worked with automated testing using Vitest and React Testing Library.",
				"Contributed to GitHub Actions workflows for linting, type-checking, testing and builds.",
				"Contributed to a shared Azure Static Web Apps workflow for deploying all frontend applications.",
				"Collaborated with backend, embedded and UX specialists to connect the user interface with the rest of the system.",
			],
			technicalHighlights: [
				"Three separate React and TypeScript applications for administrators, customers and drivers.",
				"Role-based routing and protected routes with React Router.",
				"Responsive interfaces built with Tailwind CSS.",
				"Display of current temperature and humidity with checks against permitted threshold values.",
				"Delivery statuses including created, assigned, in progress, delivered and cancelled.",
				"QR codes and QR scanning for identifying shipments and updating their status.",
				"Automated component and user tests with Vitest and React Testing Library.",
				"A shared GitHub Actions workflow with a matrix strategy for all frontend applications.",
				"Automated deployment to staging, production and preview environments in Azure Static Web Apps.",
				"Automatic closure of preview environments when a pull request was closed.",
			],
			challenges: [
				{
					title: "A shared delivery process for three frontend applications",
					description:
						"The admin, customer and driver interfaces needed to be built and deployed separately. Several independent workflow files would have created duplicated code and increased the risk of handling the applications differently.",
					solution:
						"We created a shared GitHub Actions workflow with a matrix strategy where each frontend was built and deployed in an isolated run. The workflow supported staging, production and pull request-based previews, and automatically closed preview environments when a pull request was closed.",
				},
				{
					title: "Different user roles and workflows",
					description:
						"Administrators, customers and drivers needed different views, permissions and functionality within the same logistics chain.",
					solution:
						"We used shared authentication logic and role-based protected routes, while giving each frontend its own views and user flows tailored to its role.",
				},
			],
			result:
				"The result was three role-based frontend applications supporting different parts of the logistics flow, from package overviews and delivery history to assigned transports, QR scanning and status updates. The shared CI/CD structure made deployment more consistent and easier to maintain.",
			learnings: [
				"Structuring and further developing several interconnected React applications.",
				"Building role-based user flows with authentication and protected routes.",
				"Integrating frontend applications with APIs for delivery, status and climate data.",
				"Implementing QR-based flows for identifying shipments.",
				"Writing tests with Vitest and React Testing Library.",
				"Automating builds and deployment with GitHub Actions and Azure Static Web Apps.",
				"Collaborating in a cross-functional system involving frontend, backend, embedded and UX.",
			],
		},
		dara: {
			title: "Dara Music App",
			summary:
				"A modern music application built with the Spotify API, focused on real-time search, favourites management and user-friendly navigation.",
			category: "School project",
			period: "2025",
			role: "Frontend developer",
			image: {
				src: "/images/projects/dara.png",
				alt: "Dara Music App",
			},
			technologies: [
				"React",
				"TypeScript",
				"React Router",
				"Zustand",
				"Tailwind CSS",
				"Spotify API",
			],
			links: {
				github: "https://github.com/alicegmn/dara",
			},
			problem:
				"Users need to discover music, search for artists and tracks, and save favourites in a cohesive and easy-to-use application.",
			solution:
				"We built a responsive music application with Spotify OAuth, debounced real-time search, top artist and track displays, and favourites persisted in localStorage.",
			responsibilities: [
				"Developed the user interface with React and TypeScript.",
				"Implemented routing for the home, favourites, artist and sign-in views.",
				"Built debounced real-time search for artists and tracks.",
				"Implemented Spotify OAuth 2.0 authentication.",
				"Built functionality for adding and removing favourite tracks.",
				"Collaborated on a modular and scalable application structure.",
			],
			technicalHighlights: [
				"React and TypeScript with a component-based architecture.",
				"Spotify OAuth 2.0 and the Spotify Web API.",
				"React Router for navigation between application views.",
				"Zustand for authentication state and global favourites management.",
				"Tailwind CSS for a responsive and accessible interface.",
				"localStorage for persisting favourite tracks between sessions.",
			],
			challenges: [],
			result:
				"The result was a working music application where users can sign in with Spotify, search for music, explore artists and tracks, and manage their favourites.",
			learnings: [
				"Integrating an external API with OAuth authentication.",
				"Managing global state with Zustand.",
				"Building responsive and accessible React interfaces.",
				"Structuring a larger frontend application with reusable components.",
			],
		},
		divido: {
			title: "Divido",
			summary:
				"A mobile app for splitting shared expenses and keeping track of who owes whom.",
			category: "Mobile application",
			period: "Ongoing",
			role: "Fullstack Developer & Product Developer",
			image: {
				src: "/images/projects/divido.png",
				alt: "Overview of the Divido shared-expenses app",
			},
			technologies: [
				"React Native",
				"Expo",
				"Expo Router",
				"TypeScript",
				"Supabase",
				"PostgreSQL",
				"Supabase Auth",
				"Row Level Security",
				"React Hook Form",
				"Zod",
			],
			links: {
				github: "https://github.com/alicegmn/divido",
			},
			problem:
				"Shared expenses quickly become difficult to track when different people pay for different things. The challenge is not only recording expenses, but modelling participants, payments and splits in a way that allows balances to be calculated reliably.",
			solution:
				"I am developing Divido as a mobile app where users can create groups, manage members and register shared expenses. React Native and Expo are used for the client, while Supabase provides authentication, APIs and a PostgreSQL database. Access is controlled with Row Level Security so users can only access groups and data they are authorised to view.",
			responsibilities: [
				"Responsible for the product concept and user flows.",
				"Developing the frontend and data model.",
				"Implementing authentication and database architecture.",
				"Working with API integration and access-control policies.",
				"Implementing form validation and version-controlled database migrations.",
			],
			technicalHighlights: [
				"Supabase Auth is used together with a separate profiles model for application data.",
				"PostgreSQL Row Level Security controls access to groups and memberships.",
				"A PostgreSQL function creates the group and its initial membership atomically within the same transaction.",
				"React Hook Form and Zod are used for forms and validation.",
				"Expo Router is used for navigation.",
			],
			challenges: [],
			result:
				"The project currently includes a working mobile foundation with registration, login, user profiles, group creation and group member views connected to a production-oriented backend. The next stage focuses on invitations and the core expense, split and balance models.",
			learnings: [
				"Working more production-oriented with mobile development and backend architecture.",
				"Separating authentication from application data and avoiding reliance on the client for security or critical business logic.",
				"Working practically with PostgreSQL relationships, RLS, database functions and atomic operations.",
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
