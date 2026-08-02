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
    <section className="bg-ink/[0.02] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="text-center">
          <h2 className="font-heading text-2xl font-extrabold text-ink sm:text-3xl">
            Everything inside the bundle
          </h2>
          <Divider className="my-5" />
        </FadeIn>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.title} delayMs={i * 60}>
              <div className="h-full rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="text-3xl" aria-hidden="true">
                  {item.icon}
                </span>
                <h3 className="mt-3 font-heading text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-ink/65">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-12 flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-3">
            <span className="text-lg font-medium text-ink/60 line-through">
              {PRODUCT.priceOriginal}
            </span>
            <span className="font-heading text-3xl font-extrabold text-orange-DEFAULT">
              {PRODUCT.priceCurrent}
            </span>
          </div>
          <CtaButton pixelEvent="Lead">Get Instant Access – ₹299</CtaButton>
        </FadeIn>
      </div>
    </section>
  );
}
