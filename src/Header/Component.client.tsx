"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo/Logo";

import type { Header } from "@/payload-types";
import { useHeaderTheme } from "@/providers/HeaderTheme";
import { HeaderNav } from "./Nav";

interface HeaderClientProps {
  data: Header;
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null);
  const { headerTheme, setHeaderTheme } = useHeaderTheme();
  const pathname = usePathname();

  // biome-ignore lint/correctness/useExhaustiveDependencies: Need further investigation
  useEffect(() => {
    setHeaderTheme(null);
  }, [pathname]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Need further investigation
  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme);
  }, [headerTheme]);

  return (
    <header
      className="container relative z-20   "
      {...(theme ? { "data-theme": theme } : {})}
    >
      <div className="py-8 flex justify-between">
        <Link href="/">
          <Logo loading="eager" priority="high" className="invert dark:invert-0" />
        </Link>
        <HeaderNav data={data} />
      </div>
    </header>
  );
};
