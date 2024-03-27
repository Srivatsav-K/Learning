import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import { Metadata } from "next";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/Navbar";

type RootLayoutProps = {
  children: React.ReactNode;
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
  icons: {
    icon: [
      {
        url: "/images/favicon.ico", // /public path
        href: "/images/favicon.ico", // /public path
      },
    ],
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <div className="bg-muted/40">
            <main className="container flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
