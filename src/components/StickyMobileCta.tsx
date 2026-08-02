import { CHECKOUT_URL } from "../constants";
import { trackPixelEvent } from "../lib/pixel";

export default function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md sm:hidden">
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackPixelEvent("InitiateCheckout")}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-gradient px-6 py-3.5 font-heading text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-transform active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-DEFAULT"
      >
        <span aria-hidden="true">₹299</span> · Get Instant Access
      </a>
    </div>
  );
}
