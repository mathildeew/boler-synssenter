export default function ServerLayout({ children }) {
  return (
    <html lang="no">
      <head>
        <link rel="icon" href="/icon.png" />
        <title>Bøler Synssenter</title>
        <meta name="description" content="" />
      </head>
      <body>{children}</body>
    </html>
  );
}
