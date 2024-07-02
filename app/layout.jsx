import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  icons: {
    icon: "/icon.png",
  },

  title: "Bøler Synssenter",
  description: "---",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>
        <Header />
        <main className="flex flex-col items-center">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
