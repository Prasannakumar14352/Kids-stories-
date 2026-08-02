const badges = [
  { icon: "⚡", label: "Instant Download" },
  { icon: "📚", label: "50 Stories" },
  { icon: "🖨️", label: "Print + Tablet" },
  { icon: "🧒", label: "Ages 3–10" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-white/10 bg-surface py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 sm:px-6">
        {badges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-2 text-sm font-semibold text-white/80">
            <span aria-hidden="true">{badge.icon}</span>
            <span>{badge.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
