import type { Metadata } from "next";
import Header from "../components/Header";
import { fontSans } from "../config/fonts";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Estudo apis pagamento",
  description: "Estudando apis de pagamento",
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
          <main className="w-screen flex">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
