import "./globals.css";

// Components
import Header from "./components/Header";

export const metadata = {
  title: "Bøler Synssenter",
  description: "---",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
