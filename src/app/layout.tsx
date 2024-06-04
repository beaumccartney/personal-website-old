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
      <body className="container mx-auto max-w-xl antialiased">
        {children}
      </body>
    </html>
  );
}
