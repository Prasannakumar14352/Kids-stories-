import { useState } from "react";
import FadeIn from "./FadeIn";
import Divider from "./Divider";

const faqs = [
  {
    q: "How do I get the stories after I pay?",
    a: "Right after checkout you'll get instant access to download all 50 stories as PDFs — no waiting, no shipping, no app to install.",
  },
  {
    q: "What formats are included?",
    a: "Every story comes in two formats: a print-friendly PDF (ink-friendly layout for your home printer) and a tablet/phone-friendly PDF (bright, full-screen reading).",
  },
  {
    q: "What ages is this for?",
    a: "The bundle is organized into three age bands — 3–5, 6–8, and 8–10 — so you can easily pick stories that match your child's stage.",
  },
  {
    q: "Can I print it?",
    a: "Yes! The print-friendly PDFs are made for exactly that. Print as many copies as you like for your own children.",
  },
  {
    q: "Is this a one-time payment?",
    a: "Yes — ₹299 one time. No subscriptions, no recurring charges, and you keep lifetime access plus any future story updates for free.",
  },
  {
    q: "Can I use it in my classroom?",
    a: "The bundle is licensed for personal, family use. If you'd like to use it in a classroom or with multiple families, please reach out to us for a group license.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <FadeIn className="text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            Frequently asked questions
          </h2>
          <Divider className="my-5" />
        </FadeIn>

        <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-surface">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading text-sm font-bold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-DEFAULT sm:text-base"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span
                      className={`shrink-0 text-xl text-orange-from transition-transform ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid overflow-hidden transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden px-5 pb-4 text-sm text-white/65">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
