import "./globals.css";
import { Inter } from "next/font/google";
import AnimatedLayout from "@/components/AnimatedLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Users Dashboard",
  description: "JSONPlaceholder Users Dashboard",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        {/* Page transition wrapper */}
        <AnimatedLayout>{children}</AnimatedLayout>
      </body>
    </html>
  );
}
