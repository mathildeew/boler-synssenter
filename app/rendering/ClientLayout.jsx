"use client";
import { useEffect } from "react";
import { useLocation } from "react-use";

export default function ClientLayout({ children }) {
  const location = useLocation();

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location]);

  return <>{children}</>;
}
