/**
 * use client :: 백엔드에서 render 되고 hydrate 및 interactive 됨
 */
"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link> {path === "/" ? "🔥" : ""} </li>
        <li><Link href="/about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""} </li>
      </ul>
    </nav>
  );
}