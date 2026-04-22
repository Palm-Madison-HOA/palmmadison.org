import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/payments", label: "Payments" },
  { href: "/announcements", label: "Announcements" },
  { href: "/documents", label: "Documents" },
  { href: "/board", label: "Board" },
  { href: "/contact", label: "Contact" },
];

export const metadata: Metadata = {
  title: "Palm Madison Apartments HOA",
  description: "Official website for Palm Madison Apartments HOA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <h1 className="site-title">Palm Madison Apartments HOA</h1>
            <nav aria-label="Main navigation">
              <ul className="nav-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
        <main className="container site-main">{children}</main>
      </body>
    </html>
  );
}
