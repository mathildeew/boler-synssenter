// Styles
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Layout utils
import ScrollToTop from "./utils/ScrollToTop";

// Context & components
import { StoreInfoProvider } from "./context/StoreInfoProvider";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

// Static metadata
export const metadata = {
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>
        <StoreInfoProvider>
          <ScrollToTop />
          <Header />
          <main className="flex flex-col items-center pb-20">{children}</main>
          <Footer />
        </StoreInfoProvider>
      </body>
    </html>
  );
}
