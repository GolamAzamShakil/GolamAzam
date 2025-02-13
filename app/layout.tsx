import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { itemsIndex } from "./data";
import FooterPage from "@/components/FooterPage";
import { twMerge } from "tailwind-merge";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggleButton } from "@/components/ui/theme-toggle-button";

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});

export const metadata: { title: string; description: string } = {
    title: "Golam Azam's Portfolio",
    description: "Modern and Minimal Portfolio",
};

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body
          className={twMerge(
            jetbrainsMono.variable,
            'font-jetbrainsMono antialiased'
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <FloatingNav navItems={itemsIndex} />
            <ThemeToggleButton variant="circle-blur" start="top-right" />
            {children}
            <FooterPage />
          </ThemeProvider>
        </body>
      </html>
    );
}


//{`${jetbrainsMono.variable} bg-gray-900 text-white antialiased`}

/*export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}*/
