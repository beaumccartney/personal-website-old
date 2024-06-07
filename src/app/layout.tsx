import "~/styles/globals.css";

import Link from "next/link";

// TODO: font
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Beau McCartney",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const toplinks: [string, string][] = [
    ["https://github.com/BeauSLM", "GitHub"],
    ["https://www.linkedin.com/in/beau-mccartney-247b0820a/", "LinkedIn"],
    ["beaumccartney-resume.pdf", "Resume"],
  ];

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className=" text-neutral-700 antialiased">
        <div className="container mx-auto grid min-h-screen max-w-xl grid-rows-[auto,1fr] gap-2">
          <header className="border-b p-4 text-xl">
            <ul className="flex flex-row flex-wrap items-center gap-10">
              {toplinks.map(([link, str]) => (
                <li className="last:ml-auto hover:underline" key={str}>
                  <Link href={link} target="_blank">
                    {str}
                  </Link>
                </li>
              ))}
            </ul>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
