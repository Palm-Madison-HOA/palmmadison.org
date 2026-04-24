import type { Metadata } from "next";
import Image from "next/image";
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
          <div className="header-container">
            <div className="header-left">
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
            <Image
              src="/logo.png"
              alt="Palm Madison HOA logo"
              width={80}
              height={80}
              className="header-logo"
            />
          </div>
        </header>
        <main className="content-container">{children}</main>
        <footer className="footer">
  <p><strong>Palm Madison Apartments HOA</strong></p>
  <p>1710 Madison St., Hollywood, FL 33020</p>
  <p>hoa@palmmadison.org</p>
  <p className="footer-copy">© {new Date().getFullYear()} Palm Madison Apartments HOA</p>
</footer>

      </body>
    </html>
  );
}
