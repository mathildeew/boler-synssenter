"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollToTop component that scrolls the window to the top whenever the pathname changes.
 *
 * @component
 * @example
 * Use at high level in the app, such as main layout.
 * return (
 *   <ScrollToTop />
 *   <YourOtherComponents />
 * );
 *
 * @returns {null} - Does not render anything visually.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
