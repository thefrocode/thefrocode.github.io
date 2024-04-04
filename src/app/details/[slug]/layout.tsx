import Header from "@/app/(root)/components/header";
import "../../../app/globals.css";
import Footer from "@/app/(root)/components/footer";
export default function DetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
