export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-primary/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-6">
        <a href="#home" className="shrink-0 whitespace-nowrap pr-2 text-lg font-semibold tracking-tight lg:pr-6">
          <span className="font-serif-display text-secondary">FreshRoute</span>
          <span className="text-slate-300">.research</span>
        </a>

        <div className="hidden min-w-0 flex-1 items-center px-2 md:flex lg:px-4">
          {/* Large screens: show everything (no scroll, no clipping) */}
          <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#problems">Problems</a>
            <a className="nav-link" href="#methodology">Method</a>
            <a className="nav-link" href="#ui-designs">UI</a>
            <a className="nav-link" href="#interviews">Interviews</a>
            <a className="nav-link" href="#testing">Testing</a>
            <a className="nav-link" href="#comparison">Compare</a>
            <a className="nav-link" href="#paper">Paper</a>
            <a className="nav-link" href="#commercialization">Business</a>
            <a className="nav-link" href="#team">Team</a>
            <a className="nav-link" href="#supervisors">Supervisors</a>
            <a className="nav-link" href="#documents">Documents</a>
            <a
              href="#documents"
              className="whitespace-nowrap rounded-full border border-secondary/30 bg-secondary/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary hover:bg-secondary/20"
            >
              Downloads
            </a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>

          {/* Medium screens: horizontal scroll (left-aligned so words don't clip) */}
          <div className="nav-scroll flex-1 lg:hidden">
            <div className="flex w-full flex-nowrap items-center gap-5 overflow-x-auto whitespace-nowrap py-1 pl-6 pr-8">
              <a className="nav-link" href="#about">About</a>
              <a className="nav-link" href="#problems">Problems</a>
              <a className="nav-link" href="#methodology">Method</a>
              <a className="nav-link" href="#ui-designs">UI</a>
              <a className="nav-link" href="#interviews">Interviews</a>
              <a className="nav-link" href="#testing">Testing</a>
              <a className="nav-link" href="#comparison">Compare</a>
              <a className="nav-link" href="#paper">Paper</a>
              <a className="nav-link" href="#commercialization">Business</a>
              <a className="nav-link" href="#team">Team</a>
              <a className="nav-link" href="#supervisors">Supervisors</a>
              <a className="nav-link" href="#documents">Documents</a>
              <a
                href="#documents"
                className="whitespace-nowrap rounded-full border border-secondary/30 bg-secondary/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary hover:bg-secondary/20"
              >
                Downloads
              </a>
              <a className="nav-link" href="#contact">Contact</a>
            </div>
          </div>
        </div>

        <a
          href="#documents"
          className="shrink-0 inline-flex items-center rounded-lg bg-secondary px-3 py-2 text-sm font-semibold text-slate-950 hover:opacity-90 md:hidden"
        >
          Downloads
        </a>
      </div>
    </nav>
  )
}
