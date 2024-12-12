"use client";
import Script from "next/script";
import "../../../public/index.css";

export default function BookingForm() {
  return (
    <>
      <div className="w-full max-w-[1460px] flex flex-col gap-20 items-center px-4 py-16 md:px-10 md:py-20">
        <div className="w-full max-w-[1000px] flex flex-col gap-8 md:gap-12">
          <h1>Bestill time</h1>
          <div className="coptikk-booking-embed max-w-[1400px] h-full px-4 py-10 md:px-10" data-member-no="5099" data-member-id="644" data-domain-name="https://www.coptikk.no"></div>
        </div>
      </div>
      <Script src={`/index-1.1.js?v=${Math.random() * 999}`} />
    </>
  );
}
