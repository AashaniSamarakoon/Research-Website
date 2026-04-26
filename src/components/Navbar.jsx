import logo from './image/Logo.jpeg'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-primary/80 backdrop-blur">
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-6 py-4 md:px-8 md:py-5">
        <a href="#home" className="shrink-0 whitespace-nowrap pr-2 text-xl font-semibold tracking-tight lg:pr-8">
          <span className="inline-flex items-center gap-3">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white md:h-16 md:w-16">
              <img
                src={logo}
                alt="FreshRoute logo"
                className="h-full w-full rounded-full object-cover"
                loading="eager"
                decoding="async"
              />
            </span>
            <span>
              <span className="font-serif-display text-secondary">FreshRoute</span>
              <span className="text-slate-300">.research</span>
            </span>
          </span>
        </a>

        <div className="hidden min-w-0 flex-1 items-center px-2 md:flex lg:px-4">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#problems">Problems</a>
            <a className="nav-link" href="#methodology">Approach</a>
            <a className="nav-link" href="#interviews">Validation</a>
            <a className="nav-link" href="#comparison">Compare</a>
            <a className="nav-link" href="#documents">Resources</a>
            <a className="nav-link" href="#commercialization">Business</a>
            <a className="nav-link" href="#team">Team</a>
            <a className="nav-link" href="#contact">Contact</a>
          </div>
        </div>

        <a
          href="#documents"
          className="hidden shrink-0 items-center whitespace-nowrap rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary hover:bg-secondary/20 md:inline-flex"
        >
          Downloads
        </a>

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
