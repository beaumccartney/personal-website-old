import "~/styles/globals.css";

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
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="container mx-auto max-w-xl text-neutral-700 antialiased">
        {children}
      </body>
    </html>
  );
}
