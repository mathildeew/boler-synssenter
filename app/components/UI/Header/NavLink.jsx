import Link from "next/link";

export const NavLink = ({ to, text, animationOrder, isMobile = false, onClick }) => (
  <Link href={to} className="text-xl font-sans tracking-wider hover:underline hover:underline-offset-2" data-animate-in="true" data-animation-order={animationOrder} onClick={isMobile ? onClick : undefined}>
    {text}
  </Link>
);
