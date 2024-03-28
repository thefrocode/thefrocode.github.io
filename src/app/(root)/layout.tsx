import type { Metadata } from "next";
import "../../app/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Footer from "./components/footer";
import Header from "./components/header";

export const metadata: Metadata = {
  title: "The Fro Code",
  description: "Portfolio website for Christine Mukiri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
