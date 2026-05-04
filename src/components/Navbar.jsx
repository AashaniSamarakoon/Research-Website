export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-primary/80 backdrop-blur">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-6 py-4 md:px-8 md:py-5">
        <a href="#home" className="shrink-0 pr-2 lg:pr-8">
          <img
            src="/logo no bg.png"
            alt="FreshRoute logo"
            className="h-10 w-auto md:h-12"
            loading="eager"
            decoding="async"
          />
        </a>

        <div className="hidden min-w-0 flex-1 items-center px-2 md:flex lg:px-4">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a className="nav-link" href="#home">
              Home
            </a>
            <a className="nav-link" href="#domain">
              Domain
            </a>
            <a className="nav-link" href="#milestones">
              Milestones
            </a>
            <a className="nav-link" href="#documents">
              Documents
            </a>
            <a className="nav-link" href="#slides">
              Slides
            </a>
            <a className="nav-link" href="#team">
              About us
            </a>
            <a className="nav-link" href="#contact">
              Contact us
            </a>
          </div>
        </div>

        <a
          href="#documents"
          className="hidden shrink-0 items-center whitespace-nowrap rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary hover:bg-secondary/20 md:inline-flex"
        >
          Documents
        </a>

        <a
          href="#documents"
          className="shrink-0 inline-flex items-center rounded-lg bg-secondary px-3 py-2 text-sm font-semibold text-slate-950 hover:opacity-90 md:hidden"
        >
          Documents
        </a>
      </div>
    </nav>
  );
}
