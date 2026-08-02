import FadeIn from "./FadeIn";
import Divider from "./Divider";

export default function ProblemSolution() {
  return (
    <section className="bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <FadeIn>
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            Bedtime shouldn't be a battle.
          </h2>
          <Divider className="my-5" />
        </FadeIn>

        <div className="grid gap-8 sm:grid-cols-2 sm:text-left">
          <FadeIn delayMs={80}>
            <div className="h-full rounded-2xl border border-white/10 bg-surface p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-white/50">
                The problem
              </p>
              <p className="mt-3 text-base text-white/70">
                Kids are glued to screens, good bedtime stories are hard to find, and
                every night turns into the same tired negotiation over "just five more
                minutes."
              </p>
            </div>
          </FadeIn>

          <FadeIn delayMs={160}>
            <div className="h-full rounded-2xl border border-orange-DEFAULT/30 bg-orange-DEFAULT/10 p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-orange-from">
                The solution
              </p>
              <p className="mt-3 text-base text-white/80">
                50 ready-made, beautifully illustrated stories your child will actually
                ask for — screen-free, easy to read aloud or print, and packed with
                gentle life lessons.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
