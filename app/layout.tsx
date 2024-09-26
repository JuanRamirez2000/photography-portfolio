import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import "react-photo-album/columns.css";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "react-photo-album/masonry.css";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider themes={["pastel", "forest"]}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
