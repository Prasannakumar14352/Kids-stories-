import FadeIn from "./FadeIn";
import Divider from "./Divider";

const benefits = [
  {
    icon: "🌙",
    title: "Screen-Free Bonding",
    desc: "Trade tablets for together-time. Reading aloud becomes the highlight of your child's day.",
  },
  {
    icon: "🌱",
    title: "Teaches Real Values",
    desc: "Every story carries a gentle lesson — kindness, honesty, courage, and more.",
  },
  {
    icon: "⏱️",
    title: "Ready in Seconds",
    desc: "No planning, no searching. Pick a story, tap to open or print, and start reading.",
  },
];

export default function WhyParents() {
  return (
    <section className="bg-ink/[0.02] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="text-center">
          <h2 className="font-heading text-2xl font-extrabold text-ink sm:text-3xl">
            Why parents love it
          </h2>
          <Divider className="my-5" />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-3">
          {benefits.map((b, i) => (
            <FadeIn key={b.title} delayMs={i * 80} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-gradient text-3xl text-white shadow-md">
                <span aria-hidden="true">{b.icon}</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-ink">{b.title}</h3>
              <p className="mt-2 text-sm text-ink/65">{b.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
