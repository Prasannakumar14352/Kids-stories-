import CtaButton from "./CtaButton";
import FadeIn from "./FadeIn";

export default function FinalCta() {
  return (
    <section className="bg-orange-gradient py-14 sm:py-16">
      <FadeIn className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-4 text-center sm:px-6">
        <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
          50 bedtime stories, one tiny price. Start reading tonight.
        </h2>
        <CtaButton variant="dark" pixelEvent="InitiateCheckout">
          Get Instant Access – ₹299
        </CtaButton>
      </FadeIn>
    </section>
  );
}
