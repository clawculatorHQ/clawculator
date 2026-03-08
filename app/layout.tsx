import type { Metadata } from "next";
import "./globals.css";

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

export const metadata: Metadata = {
  title: "Clawculator | Stateless Utility Engine",
  description:
    "The ultimate minimalist hack-proof toolkit for executing daily web tasks.",
  icons: {
    icon: "/clawculator.webp",
    shortcut: "/clawculator.webp",
    apple: "/clawculator.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex flex-col min-h-screen">
            <AppHeader />
            <main className="flex-1 overflow-auto">{children}</main>
            <footer className="py-6 mt-auto text-center text-sm text-foreground/70 border-t border-foreground/10 bg-background/50 backdrop-blur-md">
              <p>2026. Acquire Domain: <a href="mailto:hello@clawculator.com" className="hover:text-foreground transition-colors">hello@clawculator.com</a></p>
            </footer>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
