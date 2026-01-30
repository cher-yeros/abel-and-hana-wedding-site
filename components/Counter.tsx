"use client";

import { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

function AnimatedNumber({
  from,
  to,
  duration = 2000,
  active,
}: {
  from: number;
  to: number;
  duration?: number;
  active: boolean;
}) {
  const [value, setValue] = useState(from);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!active) return;
    let raf: number;
    const step = (ts: number) => {
      if (startRef.current == null) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const t = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(from + (to - from) * easeOut));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active, from, to, duration]);

  return <span>{value}</span>;
}

const counters = [
  { to: 500, label: "Estimated Guest", icon: "icon-users" },
  { to: 1000, label: "We Catter", icon: "icon-user" },
  { to: 402, label: "Events Done", icon: "icon-calendar" },
  { to: 2345, label: "Hours Spent", icon: "icon-clock" },
];

export function Counter() {
  const { ref, inView } = useInView();

  return (
    <div
      id="fh5co-counter"
      className="fh5co-bg fh5co-counter"
      style={{ backgroundImage: "url(/images/img_bg_5.jpg)" }}
    >
      <div className="overlay" />
      <div className="container" ref={ref}>
        <div className="row">
          <div className="display-t">
            <div className="display-tc">
              {counters.map((c) => (
                <div key={c.label} className="col-md-3 col-sm-6 animate-box">
                  <div className="feature-center">
                    <span className="icon">
                      <i className={c.icon} />
                    </span>
                    <span className="counter js-counter">
                      <AnimatedNumber from={0} to={c.to} active={inView} />
                    </span>
                    <span className="counter-label">{c.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
