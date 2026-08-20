import { NextResponse, type NextRequest } from "next/server";

const locales = ["sv", "en"];
const defaultLocale = "en";

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
	);

	if (pathnameHasLocale) {
		return NextResponse.next();
	}

	request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
	return NextResponse.redirect(request.nextUrl);
}

export const config = {
	matcher: ["/((?!_next|.*\\..*).*)"],
};
