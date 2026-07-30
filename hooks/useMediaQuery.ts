"use client";

import { useCallback, useEffect, useState } from "react";

/** Media query helper for responsive behavior */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  const onChange = useCallback((e: MediaQueryListEvent) => {
    setMatches(e.matches);
  }, []);

  useEffect(() => {
    const mql = window.matchMedia(query);
    setMatches(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query, onChange]);

  return matches;
}
