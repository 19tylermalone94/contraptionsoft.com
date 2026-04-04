'use client';

import { useState, useEffect } from 'react';

interface StreamTextProps {
  children: string;
  speed?: number;      // ms per word
  startDelay?: number; // ms before streaming begins
}

export default function StreamText({ children, speed = 28, startDelay = 0 }: StreamTextProps) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(startDelay === 0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    setStarted(startDelay === 0);
  }, [children, startDelay]);

  useEffect(() => {
    if (startDelay === 0) return;
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;
    const words = children.split(' ');
    let i = 0;
    const t = setInterval(() => {
      i++;
      setDisplayed(words.slice(0, i).join(' '));
      if (i >= words.length) {
        clearInterval(t);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(t);
  }, [started, children, speed]);

  return (
    <>
      {displayed}
      {started && !done && (
        <span
          className="inline-block w-[2px] h-[0.85em] align-middle ml-[2px] rounded-sm animate-pulse"
          style={{ backgroundColor: 'var(--accent)' }}
        />
      )}
    </>
  );
}
