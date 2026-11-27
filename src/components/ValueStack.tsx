import CtaButton from "./CtaButton";
import Divider from "./Divider";
import FadeIn from "./FadeIn";
import { PRODUCT } from "../constants";

const items = [
  { icon: "📖", title: "50 original illustrated stories", desc: "Warm, whimsical artwork on every page." },
  { icon: "🖨️", title: "Print-friendly PDF for every story", desc: "Ink-saving layout, ready for your home printer." },
  { icon: "📱", title: "Tablet/phone-friendly PDF for every story", desc: "Bright, full-screen version for bedtime reading." },
  { icon: "🗂️", title: "Age-organized index", desc: "Grouped by 3–5, 6–8, and 8–10 for easy picking." },
  { icon: "💛", title: "A moral or lesson in every story", desc: "Kindness, courage, honesty, and more." },
  { icon: "♾️", title: "Lifetime access + future updates free", desc: "Download once, keep forever — new stories on us." },
];

export default function ValueStack() {
  return (
    <section id="whats-inside" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            Everything inside the bundle
          </h2>
          <Divider className="my-5" />
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delayMs={i * 60}>
              <div className="h-full rounded-2xl border border-white/10 bg-ink p-6 transition-colors hover:border-orange-DEFAULT/40">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-DEFAULT/10 text-2xl" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-white/60">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <span className="text-lg font-medium text-white/50 line-through">
              {PRODUCT.priceOriginal}
            </span>
            <span className="font-heading text-3xl font-extrabold text-orange-from">
              {PRODUCT.priceCurrent}
            </span>
          </div>
          <CtaButton pixelEvent="Lead">Get Instant Access – ₹299</CtaButton>
        </FadeIn>
      </div>
    </section>
  );
}
