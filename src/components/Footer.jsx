export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-primary px-6 py-10 text-center">
      <div className="mx-auto max-w-6xl">
        <div className="font-serif-display text-xl text-secondary">FreshRoute.research</div>
        <p className="mt-2 text-sm text-slate-300">Final Year Research Project · 2024/25</p>
        <p className="mt-1 text-sm text-slate-400">AI · Blockchain · Smart Fruit Supply Chain Management</p>
        <div className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} FreshRoute Research Group</div>
      </div>
    </footer>
  )
}
