import CtaButton from "./CtaButton";
import FadeIn from "./FadeIn";
import { PRODUCT } from "../constants";

export default function PricingCard() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20">
      <FadeIn className="mx-auto max-w-lg">
        <div className="rounded-3xl bg-ink p-8 text-center text-white shadow-2xl sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-DEFAULT">
            Limited-time launch price
          </p>
          <h2 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl">
            Everything above, one-time
          </h2>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="text-xl text-white/50 line-through">
              {PRODUCT.priceOriginal}
            </span>
            <span className="font-heading text-5xl font-extrabold text-orange-DEFAULT">
              {PRODUCT.priceCurrent}
            </span>
          </div>
          <p className="mt-2 text-sm text-white/60">Lifetime access, no subscriptions</p>

          <CtaButton pixelEvent="InitiateCheckout" className="mt-8 w-full">
            Download the 50 Stories Now
          </CtaButton>

          <div className="mt-6 flex flex-col items-center gap-2 text-xs text-white/60 sm:flex-row sm:justify-center sm:gap-4">
            <span className="inline-flex items-center gap-1">
              <span aria-hidden="true">🛡️</span> 7-day money-back guarantee
            </span>
            <span className="inline-flex items-center gap-1">
              <span aria-hidden="true">🔒</span> Secure checkout
            </span>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
