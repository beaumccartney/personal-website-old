import "~/styles/globals.css";

import Link from "next/link";

// TODO: font
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Beau McCartney",
  description: "TODO",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="container mx-auto max-w-2xl">
        <header>
          <nav>
            <ul className="flex flex-row flex-wrap">
              <li className="pr-4">
                <Link href="/">About</Link>
              </li>
              <li className="pr-4">
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
              <li className="ml-auto">
                <Link href="beaumccartney-resume.pdf" target="_blank">
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
