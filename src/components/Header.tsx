import CtaButton from "./CtaButton";

const navLinks = [
  { href: "#whats-inside", label: "What's Inside" },
  { href: "#sample-stories", label: "Sample Stories" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center">
          <img
            src="/logo-compact.svg"
            alt="ProdX Store"
            className="h-8 w-auto sm:h-9"
            width={500}
            height={118}
          />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <CtaButton
          size="md"
          className="md:hidden"
          aria-label="Get the bundle now for ₹299"
        >
          Get it – ₹299
        </CtaButton>

        <CtaButton size="md" className="hidden md:inline-flex">
          Get Instant Access – ₹299
        </CtaButton>
      </div>
    </header>
  );
}
