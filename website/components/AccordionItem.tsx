"use client";
import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
}

export default function AccordionItem({ question, answer }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid var(--gray-soft)",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex items-center justify-between gap-3"
        style={{ background: "none", border: "none", cursor: "pointer" }}
        aria-expanded={open}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
            fontSize: "0.95rem",
            color: "var(--charcoal)",
            lineHeight: 1.4,
          }}
        >
          {question}
        </span>
        <span
          style={{
            color: "var(--sage)",
            fontSize: "1.25rem",
            flexShrink: 0,
            transition: "transform 0.3s ease",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.3s ease",
          opacity: open ? 1 : 0,
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            color: "#555",
            lineHeight: 1.65,
            paddingBottom: "1rem",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}
