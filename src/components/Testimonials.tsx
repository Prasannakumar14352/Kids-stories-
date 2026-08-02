import FadeIn from "./FadeIn";
import Divider from "./Divider";

const testimonials = [
  {
    quote:
      "My daughter now asks for 'one more story' instead of 'one more episode.' Best ₹299 I've spent this year.",
    name: "Priya S.",
    city: "Bengaluru",
  },
  {
    quote:
      "The tablet versions are a lifesaver on flights, and I print the favorites for her room. Gorgeous illustrations.",
    name: "Ankit M.",
    city: "Pune",
  },
  {
    quote:
      "Bedtime used to be a fight. Now it's the calmest part of our day and he's learning real lessons too.",
    name: "Fatima R.",
    city: "Hyderabad",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 text-orange-DEFAULT" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="text-center">
          <h2 className="font-heading text-2xl font-extrabold text-ink sm:text-3xl">
            Loved by parents everywhere
          </h2>
          <Divider className="my-5" />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delayMs={i * 80}>
              <figure className="flex h-full flex-col rounded-2xl border border-black/5 bg-ink/[0.02] p-6">
                <Stars />
                <blockquote className="mt-3 flex-1 text-sm text-ink/75">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold text-ink">
                  {t.name}{" "}
                  <span className="font-normal text-ink/60">— {t.city}</span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
