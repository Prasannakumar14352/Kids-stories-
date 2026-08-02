import CtaButton from "./CtaButton";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="ProdX Store"
            className="h-8 w-auto sm:h-9"
            width={144}
            height={48}
          />
        </a>

        <CtaButton
          size="md"
          className="sm:hidden"
          aria-label="Get the bundle now for ₹299"
        >
          Get it – ₹299
        </CtaButton>

        <CtaButton size="md" className="hidden sm:inline-flex">
          Get Instant Access – ₹299
        </CtaButton>
      </div>
    </header>
  );
}
