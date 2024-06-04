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
      <body className="container box-border max-w-2xl mx-auto">
        <header>
          <nav>
            <ul className="flex flex-wrap flex-row">
              <li className="py-0 pr-4"><Link href="/">About</Link></li>
              <li className="py-0 pr-4"><Link href="/projects">Projects</Link></li>
              <li className="py-0"><Link href="/#contact">Contact</Link></li>
              <li className="py-0 ml-auto"><Link href="TODO: resume">Resume</Link></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <div className="text-center"><p><small>&copy; {new Date().getFullYear()} Beau McCartney</small></p></div>
        </footer>
      </body>
    </html>
  );
}
