// Import styles and other modules
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

config.autoAddCss = false;

// Layout utils
import ClientLayout from "./ClientLayout";

// Static metadata
export const metadata = {
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <GoogleTagManager gtmId="GTM-MJF75MS2" />
      <GoogleAnalytics gaId="G-TDR2BFWGD4" />

      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
