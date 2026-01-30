"use client";

import { useEffect, useState } from "react";

export function GoToTop() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onScroll = () => setActive(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`gototop js-top ${active ? "active" : ""}`}>
      <a
        href="#"
        className="js-gotop"
        onClick={scrollTop}
        aria-label="Go to top"
      >
        <i className="icon-arrow-up" />
      </a>
    </div>
  );
}
