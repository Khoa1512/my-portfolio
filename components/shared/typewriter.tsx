'use client';

import { useEffect, useState } from 'react';


export function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 1400,
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;
    const word = words[index % words.length];

    if (!deleting && text === word) {
      const timeout = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(timeout);
    }
    if (deleting && text === '') {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }
    const timeout = setTimeout(
      () =>
        setText((prev) =>
          deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1),
        ),
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, pause, typingSpeed, deletingSpeed]);

  return (
    <span>
      {text}
      <span className="ml-0.5 animate-pulse text-primary">|</span>
    </span>
  );
}
