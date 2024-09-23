import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "react-photo-album/columns.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "react-photo-album/masonry.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juan's Pics",
  description: "A place to showcase my favorite pics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-blue-50 flex flex-col items-center ">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
