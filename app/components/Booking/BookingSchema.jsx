"use client";
import { useEffect, useRef } from "react";
import Script from "next/script";
import "../../../public/index.css";

export default function BookingSchema() {
  const topRef = useRef(null);

  useEffect(() => {
    const handleScrollToTop = (event) => {
      if (event.target.textContent === "Bestill time") {
        topRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.addEventListener("click", handleScrollToTop);

    return () => {
      document.removeEventListener("click", handleScrollToTop);
    };
  }, []);

  return (
    <>
      <div className="w-full max-w-[1460px] flex flex-col gap-20 items-center px-4 py-16 md:px-10 md:py-20" data-animate-in="true" ref={topRef}>
        <div className="w-full max-w-[1000px] flex flex-col gap-8 items-center md:gap-12">
          <h1>Bestill time</h1>
          <div className="coptikk-booking-embed" data-member-no="5099" data-member-id="644" data-domain-name="https://www.coptikk.no"></div>
        </div>
      </div>

      <Script strategy="afterInteractive" src="/index-1.1.js" />
    </>
  );
}
