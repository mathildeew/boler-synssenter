"use client";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Rendering
import ServerLayout from "./rendering/ServerLayout";
import ClientLayout from "./rendering/ClientLayout";

export default function RootLayout({ children }) {
  return (
    <ServerLayout>
      <ClientLayout>
        <Header />
        <main className="flex flex-col items-center">{children}</main>
        <Footer />
      </ClientLayout>
    </ServerLayout>
  );
}
