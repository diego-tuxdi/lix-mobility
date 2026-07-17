"use client";
import { useState } from "react";

export function Accordion({ items }: { items: readonly { question: string; answer: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => (
        <div key={item.question}>
          <h3>
            <button
              type="button"
              onClick={() => setOpen(open === index ? null : index)}
              aria-expanded={open === index}
              className="flex w-full items-center justify-between gap-6 py-6 text-left text-lg font-semibold text-ink-deep hover:text-ink transition-colors outline-none"
            >
              <span>{item.question}</span>
              <span aria-hidden className="text-2xl font-light select-none">
                {open === index ? "−" : "+"}
              </span>
            </button>
          </h3>
          {open === index && (
            <div className="pb-6 text-muted text-base leading-7" role="region">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
