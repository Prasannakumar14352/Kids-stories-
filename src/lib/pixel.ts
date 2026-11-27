declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    META_PIXEL_ID?: string;
  }
}

/** Fires a Meta Pixel event, no-op (and no console errors) if the pixel was never initialized. */
export function trackPixelEvent(event: "Lead" | "InitiateCheckout") {
  if (typeof window === "undefined") return;
  if (!window.META_PIXEL_ID || typeof window.fbq !== "function") return;
  window.fbq("track", event);
}
