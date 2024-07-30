// Styles
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
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
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
