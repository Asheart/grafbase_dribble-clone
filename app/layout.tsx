import Navbar from "@/components/Navbar";
import "./global.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dribble Clone",
  description: "Mostra e scopri developer project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
