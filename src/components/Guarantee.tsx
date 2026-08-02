import FadeIn from "./FadeIn";

export default function Guarantee() {
  return (
    <section className="bg-ink/[0.02] py-14 sm:py-16">
      <FadeIn className="mx-auto max-w-2xl px-4 text-center sm:px-6">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-orange-DEFAULT/10 text-2xl">
          <span aria-hidden="true">🛡️</span>
        </div>
        <h2 className="mt-4 font-heading text-xl font-extrabold text-ink sm:text-2xl">
          Try it risk-free
        </h2>
        <p className="mt-3 text-base text-ink/70">
          We're confident your family will love these stories. If the bundle isn't the
          right fit within 7 days of purchase, just reach out and we'll refund you in
          full — no questions asked.
        </p>
      </FadeIn>
    </section>
  );
}
