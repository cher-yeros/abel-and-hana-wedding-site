"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0)
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
    done: false,
  };
}

export function Countdown() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setMounted(true);
    const target = new Date();
    target.setDate(target.getDate() + 200);
    const update = () => setTime(getTimeLeft(target));
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <div className="simply-countdown simply-countdown-one">
        <div className="simply-section">
          <span className="simply-amount">0</span>
          <span className="simply-word">Days</span>
        </div>
        <div className="simply-section">
          <span className="simply-amount">0</span>
          <span className="simply-word">Hours</span>
        </div>
        <div className="simply-section">
          <span className="simply-amount">0</span>
          <span className="simply-word">Minutes</span>
        </div>
        <div className="simply-section">
          <span className="simply-amount">0</span>
          <span className="simply-word">Seconds</span>
        </div>
      </div>
    );
  }

  return (
    <div className="simply-countdown simply-countdown-one">
      <div className="simply-section">
        <span className="simply-amount">{time.days}</span>
        <span className="simply-word">Days</span>
      </div>
      <div className="simply-section">
        <span className="simply-amount">{time.hours}</span>
        <span className="simply-word">Hours</span>
      </div>
      <div className="simply-section">
        <span className="simply-amount">{time.minutes}</span>
        <span className="simply-word">Minutes</span>
      </div>
      <div className="simply-section">
        <span className="simply-amount">{time.seconds}</span>
        <span className="simply-word">Seconds</span>
      </div>
    </div>
  );
}
