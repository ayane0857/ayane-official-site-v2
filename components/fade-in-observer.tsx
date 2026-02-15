"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function FadeInObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Query elements after render; slight delay ensures child content mounted
    const run = () => {
      const els = Array.from(
        document.querySelectorAll<HTMLElement>(".fade-in"),
      );

      if (!("IntersectionObserver" in window)) {
        els.forEach((el) => el.classList.add("is-visible"));
        return null;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 },
      );

      els.forEach((el) => {
        // If already visible, skip
        if (!el.classList.contains("is-visible")) io.observe(el);
      });

      return io;
    };

    // allow browser to paint the new route content first
    const t = window.setTimeout(() => run(), 20);

    return () => window.clearTimeout(t);
    // re-run when pathname changes so newly mounted elements are observed
  }, [pathname]);

  return null;
}
