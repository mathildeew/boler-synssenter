import "./globals.css";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Bøler Synssenter",
  description: "---",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>
        <Header />
        <main className="flex flex-col gap-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
