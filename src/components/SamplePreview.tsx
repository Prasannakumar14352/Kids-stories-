import FadeIn from "./FadeIn";
import Divider from "./Divider";

const samples = Array.from({ length: 6 }, (_, i) => ({
  src: `/sample-${i + 1}.png`,
  alt: `Sample illustrated page ${i + 1} from the 50 Kids Stories Mega Bundle`,
}));

export default function SamplePreview() {
  return (
    <section id="sample-stories" className="bg-ink py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn className="text-center">
          <h2 className="font-heading text-2xl font-extrabold text-white sm:text-3xl">
            A peek inside the bundle
          </h2>
          <Divider className="my-5" />
        </FadeIn>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-6">
          {samples.map((sample, i) => (
            <FadeIn
              key={sample.src}
              delayMs={i * 60}
              className="w-40 flex-shrink-0 snap-start sm:w-auto"
            >
              <img
                src={sample.src}
                alt={sample.alt}
                loading="lazy"
                width={640}
                height={800}
                className="aspect-[4/5] w-full rounded-xl border border-white/10 object-cover shadow-lg shadow-black/40 transition-transform hover:-translate-y-1 hover:border-orange-DEFAULT/40"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
