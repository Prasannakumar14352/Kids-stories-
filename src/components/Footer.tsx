export default function Footer() {
  return (
    <footer className="bg-ink py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <div className="rounded-lg bg-white px-3 py-2">
          <img
            src="/logo.png"
            alt="ProdX Store"
            className="h-7 w-auto"
            width={144}
            height={48}
            loading="lazy"
          />
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Digital Products Marketplace
        </p>

        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/70">
          <a href="#terms" className="hover:text-white">
            Terms
          </a>
          <a href="#refund-policy" className="hover:text-white">
            Refund Policy
          </a>
          <a href="mailto:hello@prodxstore.com" className="hover:text-white">
            Contact
          </a>
        </nav>

        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} ProdX Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
