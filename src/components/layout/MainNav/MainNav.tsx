"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./MainNav.module.css";

type NavItem = {
	readonly label: string;
	readonly href: string;
};

type MainNavProps = Readonly<{
	items: readonly NavItem[];
}>;

export function MainNav({ items }: MainNavProps) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const menuButtonRef = useRef<HTMLButtonElement>(null);
	const navRef = useRef<HTMLElement>(null);
	const wasOpen = useRef(false);

	const isSwedish = pathname.startsWith("/sv");

	const openLabel = isSwedish ? "Öppna meny" : "Open menu";
	const closeLabel = isSwedish ? "Stäng meny" : "Close menu";

	useEffect(() => {
		if (!isOpen) {
			return;
		}

		const previousOverflow = document.body.style.overflow;
		const firstLink = navRef.current?.querySelector<HTMLAnchorElement>("a");
		firstLink?.focus();

		function handleKeyDown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				setIsOpen(false);
				return;
			}

			if (event.key !== "Tab" || !navRef.current) {
				return;
			}

			const links = Array.from(
				navRef.current.querySelectorAll<HTMLAnchorElement>("a"),
			);
			const focusableElements = [menuButtonRef.current, ...links].filter(
				(element): element is HTMLButtonElement | HTMLAnchorElement =>
					element !== null,
			);
			const first = focusableElements[0];
			const last = focusableElements[focusableElements.length - 1];

			if (!first || !last) {
				return;
			}

			if (event.shiftKey && document.activeElement === first) {
				event.preventDefault();
				last.focus();
			} else if (!event.shiftKey && document.activeElement === last) {
				event.preventDefault();
				first.focus();
			}
		}

		document.body.style.overflow = "hidden";
		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = previousOverflow;
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen]);

	useEffect(() => {
		if (isOpen) {
			wasOpen.current = true;
			return;
		}

		if (wasOpen.current) {
			menuButtonRef.current?.focus();
			wasOpen.current = false;
		}
	}, [isOpen]);

	return (
		<div className={styles.mainNavContainer}>
			<button
				type="button"
				ref={menuButtonRef}
				className={`${styles.menuButton} ${
					isOpen ? styles.menuButtonOpen : ""
				}`}
				aria-label={isOpen ? closeLabel : openLabel}
				aria-expanded={isOpen}
				aria-controls="main-navigation"
				onClick={() => setIsOpen((current) => !current)}
			>
				<span className={styles.menuIcon} aria-hidden="true">
					<span />
					<span />
					<span />
				</span>
			</button>

			<nav
				ref={navRef}
				id="main-navigation"
				className={`${styles.mainNav} ${isOpen ? styles.open : ""}`}
				aria-label={isSwedish ? "Huvudnavigation" : "Main navigation"}
			>
				{items.map((item) => {
					const isHome = item.href === (isSwedish ? "/sv" : "/en");
					const isActive = isHome
						? pathname === item.href
						: pathname === item.href || pathname.startsWith(`${item.href}/`);

					return (
						<Link
							key={item.href}
							href={item.href}
							className={isActive ? styles.active : undefined}
							aria-current={isActive ? "page" : undefined}
							onClick={() => setIsOpen(false)}
						>
							{item.label}
						</Link>
					);
				})}
			</nav>
		</div>
	);
}
