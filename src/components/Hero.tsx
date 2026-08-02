import CtaButton from "./CtaButton";
import { PRODUCT } from "../constants";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white pb-14 pt-10 sm:pb-20 sm:pt-16">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-DEFAULT">
            Printable + Tablet-Ready • Ages 3–10
          </p>
          <h1 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            50 Magical Bedtime Stories Your Kids Will Ask For Every Night
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-ink/70 sm:text-lg lg:mx-0">
            Less screen time, more cuddles. 50 original illustrated stories that teach
            kindness, courage, and good values — ready to read or print in seconds.
          </p>

          <div className="mt-6 flex flex-col items-center gap-3 lg:items-start">
            <div className="flex items-center gap-3 rounded-full bg-ink/5 px-4 py-2">
              <span className="text-sm font-medium text-ink/60 line-through">
                {PRODUCT.priceOriginal}
              </span>
              <span className="font-heading text-xl font-extrabold text-orange-DEFAULT">
                {PRODUCT.priceCurrent}
              </span>
              <span className="rounded-full bg-orange-DEFAULT/10 px-2 py-0.5 text-xs font-bold text-orange-DEFAULT">
                {PRODUCT.discountLabel}
              </span>
            </div>

            <CtaButton size="lg" pixelEvent="Lead" className="w-full sm:w-auto">
              Get Instant Access – ₹299
            </CtaButton>
            <p className="text-xs text-ink/60">
              Instant download • Works on any device • One-time payment
            </p>
          </div>
        </div>

        <div className="mx-auto w-full max-w-md lg:max-w-none">
          <img
            src="/hero-mockup.png"
            alt="Fanned-out preview of the 50 illustrated storybook covers included in the bundle"
            className="w-full rounded-3xl shadow-2xl shadow-orange-500/20"
            width={900}
            height={700}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
