import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { fontSans } from "../config/fonts";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Agendamento-Saas",
  description: "Plataforma de agendamento de serviços",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.className} min-h-screen`}>
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <Header />
          <main className="w-screen flex flex-col items-center justify-center px-4 md:px-0">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
