import { useState } from "react";


export default function CookieBanner(){
    const [isVisible, setIsVisible] = useState(true);

  const acceptCookies = () => {
    document.cookie = "cookies_accepted=true; path=/; max-age=31536000"; 
    setIsVisible(false);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cookies_accepted" });
  };

  return (
    isVisible && (
      <div style={{ position: "fixed", bottom: 0, width: "100%", background: "#000", color: "#fff", padding: "1rem", textAlign: "center" }}>
        <p>Vi bruker cookies for å forbedre opplevelsen din. <a href="/personvern" style={{ color: "#4caf50" }}>Les mer</a></p>
        <button onClick={acceptCookies} style={{ margin: "0.5rem", padding: "0.5rem 1rem", background: "#4caf50", color: "#fff", border: "none", cursor: "pointer" }}>
          Godta
        </button>
      </div>
    )
  );
}
