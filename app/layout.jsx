// Import styles and other modules
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";

config.autoAddCss = false;

// Layout utils
import ClientLayout from "./ClientLayout";
import Script from "next/script";

// Static metadata
export const metadata = {
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <Script id="Cookiebot" src="https://consent.cookiebot.com/uc.js" data-cbid="3e8b55b0-f4fe-4e1c-bcc9-4a6cb218491d" data-blockingmode="auto" type="text/javascript"></Script>

      <GoogleTagManager gtmId="GTM-MJF75MS2" />
      <GoogleAnalytics gaId="G-TDR2BFWGD4" />
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
