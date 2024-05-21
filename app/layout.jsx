import "./globals.css";

export const metadata = {
  title: "Bøler Synssenter",
  description: "---",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}
