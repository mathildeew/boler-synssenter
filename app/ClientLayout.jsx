"use client";

// Layout utils
import { usePathname } from "next/navigation";
import ScrollToTop from "./utils/ScrollToTop";

// Context & components
import { StoreInfoProvider } from "./context/StoreInforProvider";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/admin");

  return (
    <>
      {isStudio ? (
        <main>{children}</main>
      ) : (
        <StoreInfoProvider>
          <ScrollToTop />
          <Header />
          <main className="h-full min-h-screen flex flex-col items-center pb-20">{children}</main>
          <Footer />
        </StoreInfoProvider>
      )}
    </>
  );
}
