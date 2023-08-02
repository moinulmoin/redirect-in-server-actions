"use client"

import { usePathname } from "next/navigation";
import { redirectHome } from "./action";
import { useTransition } from "react";

export default function GoHome() {
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  if (pathname === "/") return null;

  const handleClick = () => {
    startTransition(async () => {
      await redirectHome()
    }
    );
  }
  return (
    <button onClick={handleClick} className=" border">
    Go Home
  </button>
  )
}
