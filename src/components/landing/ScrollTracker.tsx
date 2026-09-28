import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/** Envía scroll_50 y scroll_90 una sola vez por sesión de página. */
export function ScrollTracker() {
  useEffect(() => {
    const fired = new Set<number>();
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
      for (const mark of [50, 90]) {
        if (pct >= mark && !fired.has(mark)) {
          fired.add(mark);
          trackEvent(`scroll_${mark}`);
        }
      }
      if (fired.size === 2) window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
