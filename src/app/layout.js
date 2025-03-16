import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Employees Information",
  description: "Created employee information form convert data in table format",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
