import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Himpreet Kaur | Senior Quality & Test Automation Engineer",
  description: "Portfolio of Himpreet Kaur, a results-driven Quality Engineering professional specialising in test automation, Shift-Left strategies, and CI/CD-driven delivery.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
