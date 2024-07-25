import SEOHead from "../components/SEOHead/SEOHead";

export default function ServerLayout({ children }) {
  return (
    <html lang="no">
      <head>
        <SEOHead />
      </head>
      <body>{children}</body>
    </html>
  );
}
