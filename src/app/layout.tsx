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
        <div className="container mx-auto grid max-w-xl gap-1">
          <header className="flex justify-between border-b-2 p-4 text-xl">
            <div className="font-bold">
              {/* TODO: link to new resume */}
              <TopLink href="https://utfs.io/f/27ac9f65-0d4c-4076-817c-a63b6032cb62-eyyx7p.pdf" name="Resume" />
            </div>
            <div className="flex gap-10">
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
