import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/Theme_Provider";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Employees Information",
  description: "Created employee information form convert data in table format",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <main className="max-w-[1500px] m-auto relative">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            enableColorScheme
            storageKey="theme"
          >
            <div className="absolute top-0 left-0 w-full">
              <Header />
            </div>
            {children}
          </ThemeProvider>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
