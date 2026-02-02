import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Benjamin KALOMBO MUKENA | Ingénieur Logiciel Backend & Core Banking",
  description: "Expert en intégration d'API (REST, SOAP), sécurité (OAuth2) et systèmes bancaires distribués. Spécialiste Backend avec Symfony, ASP.NET Core, RabbitMQ et PostgreSQL.",
  keywords: ["Backend Developer", "Software Engineer", "Core Banking", "Symfony", "ASP.NET Core", "RabbitMQ", "PostgreSQL", "API Development", "Microservices", "OAuth2"],
  authors: [{ name: "Benjamin KALOMBO MUKENA" }],
  creator: "Benjamin KALOMBO MUKENA",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://benjaminkalombo.netlify.app",
    title: "Benjamin KALOMBO MUKENA | Ingénieur Logiciel Backend",
    description: "Expert en intégration d'API et systèmes bancaires distribués",
    siteName: "Benjamin KALOMBO MUKENA Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin KALOMBO MUKENA | Ingénieur Logiciel Backend",
    description: "Expert en intégration d'API et systèmes bancaires distribués",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
