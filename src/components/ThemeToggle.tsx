// "use client";
// import { useState } from "react";
// import { lightTheme, darkTheme } from "../styles/theme.css";

// export function ThemeToggle({ children }: { children: React.ReactNode }) {
// 	const [isDark, setIsDark] = useState(false);

// 	return (
// 		<body className={isDark ? darkTheme : lightTheme}>
// 			<button
// 				onClick={() => setIsDark((prev) => !prev)}
// 				style={{ position: "fixed", top: 16, right: 16 }}
// 			>
// 				Toggle theme
// 			</button>
// 			{children}
// 		</body>
// 	);
// }
