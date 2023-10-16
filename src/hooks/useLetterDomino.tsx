'use client';

import React, { useEffect, useRef, useState } from 'react';

interface LetterDominoProps {
  text: string;
  max?: number;
  factor?: number;
}

export const LetterDomino = ({ text, max = 73, factor = 1.2 }: LetterDominoProps) => {
  const [childSpans, setChildSpans] = useState<React.JSX.Element[]>([]);
  const spanRefs = useRef<null[] | HTMLSpanElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const letters = text.split('');
  const ratio = max / factor ** (letters.length - 1);

  useEffect(() => {
    letters.map((letter: string, index: number) => {
      const newSpan = (
        <span
          key={Math.random()}
          ref={(el) => {
            spanRefs.current[index] = el;
          }}
        >
          {letter}
        </span>
      );

      return setChildSpans((prev) => [...prev, newSpan]);
    });

    return () => {
      setChildSpans([]);
    };
  }, [text]);

  useEffect(() => {
    if (childSpans.length === letters.length) {
      const currentSpan = spanRefs.current[currentIndex];
      const rotation = factor ** currentIndex * ratio;
      if (currentSpan) {
        setTimeout(
          () => {
            currentSpan.style.transform = `rotate(${rotation}deg)`;
          },
          2000 + currentIndex * 70,
        );
      }
      if (currentIndex < letters.length) {
        setCurrentIndex((prev) => prev + 1);
      }
    }
  }, [currentIndex, childSpans]);

  return { childSpans };
};
