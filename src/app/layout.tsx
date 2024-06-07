import "~/styles/globals.css";

import Link from "next/link";

// TODO: font
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Beau McCartney",
  description: "My personal website",
};

function TopLink(props: { href: string; name: string }) {
  return (
    <Link className="hover:underline" href={props.href} target="_blank">
      {props.name}
    </Link>
  );
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className=" text-neutral-700 antialiased">
        <div className="container mx-auto grid min-h-screen max-w-xl grid-rows-[auto,1fr] gap-2">
          <header className="flex flex-wrap items-center justify-between border-b-2 p-4 text-xl">
            <div className="font-bold">
              <TopLink href="beaumccartney-resume.pdf" name="Resume" />
            </div>
            <div className="flex flex-row flex-wrap items-center gap-10">
              <TopLink href="https://github.com/BeauSLM" name="GitHub" />
              <TopLink
                href="https://www.linkedin.com/in/beau-mccartney-247b0820a/"
                name="LinkedIn"
              />
            </div>
          </header>
          <main>{props.children}</main>
        </div>
      </body>
    </html>
  );
}
