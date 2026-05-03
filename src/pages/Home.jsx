import { useEffect, useMemo, useState } from "react";
import HeroBackground from "../components/HeroBackground";
import imgAashani from "../components/image/Aashani.jpg";
import imgAkalanka from "../components/image/Akalanka.jpg";
import imgSavindu from "../components/image/Savindu.jpg";
import imgSudarshan from "../components/image/Sudarshan.jpg";
import {
  aboutCards,
  comparisonRows,
  commercialization,
  contact,
  documents,
  interviewMedia,
  interviews,
  methodologySteps,
  paper,
  problems,
  project,
  researchComponents,
  stats,
  supervisors,
  teamMembers,
  testing,
  uiDemo,
  uiDesigns,
} from "../content/freshrouteContent";

const docTabs = [
  { key: "all", label: "All Documents" },
  { key: "taf", label: "TAF" },
  { key: "proposals", label: "Proposals" },
  { key: "reports", label: "Reports" },
  { key: "other", label: "Other" },
];

function SectionHeader({ label, title, sub }) {
  return (
    <div className="mx-auto max-w-6xl px-6">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
        {label}
      </div>
      <h2 className="mt-2 font-serif-display text-3xl tracking-tight text-slate-50 md:text-4xl">
        {title}
      </h2>
      {sub ? <p className="mt-3 max-w-2xl text-slate-300">{sub}</p> : null}
    </div>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="text-base font-semibold text-slate-50">{title}</div>
      <div className="mt-2 text-sm leading-6 text-slate-300">{children}</div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [activeMemberId, setActiveMemberId] = useState(null);
  const [activeInterviewSlide, setActiveInterviewSlide] = useState(0);
  const [isInterviewVideoPlaying, setIsInterviewVideoPlaying] = useState(false);

  const memberPhotos = useMemo(
    () =>
      new Map([
        ["member-a", imgAashani],
        ["member-b", imgAkalanka],
        ["member-c", imgSavindu],
        ["member-d", imgSudarshan],
      ]),
    [],
  );

  const componentsById = useMemo(() => {
    const map = new Map();
    for (const c of researchComponents) map.set(c.id, c);
    return map;
  }, []);

  const documentsById = useMemo(() => {
    const map = new Map();
    for (const d of documents) map.set(d.id, d);
    return map;
  }, []);

  const activeMember = useMemo(() => {
    if (!activeMemberId) return null;
    return teamMembers.find((m) => m.id === activeMemberId) ?? null;
  }, [activeMemberId]);

  const activeComponent = useMemo(() => {
    if (!activeMember) return null;
    return componentsById.get(activeMember.componentId) ?? null;
  }, [activeMember, componentsById]);

  useEffect(() => {
    if (!activeMemberId) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveMemberId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeMemberId]);

  useEffect(() => {
    if (interviewMedia.slides.length <= 1) return undefined;
    const intervalId = window.setInterval(() => {
      setActiveInterviewSlide((current) =>
        (current + 1) % interviewMedia.slides.length,
      );
    }, 3000);
    return () => window.clearInterval(intervalId);
  }, []);

  const filteredDocs = useMemo(() => {
    if (activeTab === "all") return documents;
    return documents.filter((d) => d.category === activeTab);
  }, [activeTab]);

  return (
    <main>
      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-slate-950" />
        <HeroBackground />
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center">
          <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
            Final Year Research Project · 2025/26
          </div>
          <h1 className="mt-6 max-w-4xl font-serif-display text-4xl tracking-tight text-slate-50 sm:text-5xl md:text-6xl">
            {project.name}:{" "}
            <span className="text-secondary">{project.tagline}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            A complete research showcase including TAF, proposals, reports,
            methodology, UI designs, interviews, testing, comparison, and the
            research paper.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {project.highlights.map((h) => (
              <span
                key={h}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300"
              >
                {h}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              className="inline-flex items-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-slate-950 hover:opacity-90"
              href="#documents"
            >
              View Documents
            </a>
            <a
              className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-50 hover:bg-white/10"
              href="#paper"
            >
              Research Paper
            </a>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="border-y border-white/10 bg-slate-950/20">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 text-center sm:grid-cols-3 md:grid-cols-5">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif-display text-3xl text-secondary">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="bg-primary py-20">
        <SectionHeader
          label="About"
          title="About Our Research Group"
          sub="We are a team of four final-year undergraduate researchers building FreshRoute — a smart fruit supply chain platform emphasizing traceability, insight, and usability."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="font-serif-display text-2xl text-slate-50">
              What we’re building
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              FreshRoute connects stakeholders in the fruit supply chain using
              structured batch tracking, AI-assisted decision support, and an
              integrity-focused event log to reduce disputes and improve
              operational outcomes.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="pill">Clean + Academic</span>
              <span className="pill">Bold + Modern</span>
              <span className="pill">User-Centred</span>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {aboutCards.map((c) => (
              <Card key={c.title} title={c.title}>
                {c.body}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PROBLEMS */}
      <section id="problems" className="bg-primary py-20">
        <SectionHeader
          label="Problem Space"
          title="Real-World Problems Identified"
          sub="Based on stakeholder input and domain analysis, these challenges shaped our research questions and solution scope."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          <div className="space-y-4">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="badge">{p.severity}</span>
                  <div className="text-sm font-semibold text-slate-50">
                    {p.title}
                  </div>
                </div>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <div className="text-base font-semibold text-slate-50">
              Impact snapshot
            </div>
            <p className="mt-2 text-sm leading-7 text-slate-300">
              We evaluate FreshRoute against baseline workflows using measurable
              indicators like traceability completeness, task success rate, and
              response time.
            </p>
            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Traceability Coverage</span>
                  <span className="text-secondary">91%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[91%] rounded-full bg-secondary" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Workflow Efficiency</span>
                  <span className="text-secondary">78%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[78%] rounded-full bg-secondary" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>User Satisfaction</span>
                  <span className="text-secondary">64%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div className="h-2 w-[64%] rounded-full bg-secondary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* METHODOLOGY */}
      <section id="methodology" className="bg-primary py-20">
        <SectionHeader
          label="Research Design"
          title="Methodology"
          sub="A structured approach combining qualitative insight and quantitative evaluation across the full build lifecycle."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          <div className="space-y-4">
            {methodologySteps.map((s, idx) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-secondary/30 bg-secondary/10 text-xs font-bold text-secondary">
                  {idx + 1}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-50">
                    {s.title}
                  </div>
                  <p className="mt-1 text-sm leading-7 text-slate-300">
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <Card title="Research Philosophy">
              Grounded in pragmatism: we select methods based on what best
              answers our research questions and fits real operational
              constraints.
            </Card>
            <Card title="Data Collection Tools">
              <div className="mt-1 flex flex-wrap gap-2">
                <span className="pill">Surveys</span>
                <span className="pill">Interviews</span>
                <span className="pill">Observations</span>
                <span className="pill">System Logs</span>
                <span className="pill">Analytics</span>
              </div>
            </Card>
            <Card title="Ethics & Security">
              Informed consent, anonymization of interview data, access control,
              and secure storage practices applied throughout the study.
            </Card>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* TEAM */}
      <section id="team" className="bg-slate-950/20 py-20">
        <SectionHeader
          label="Group Members"
          title="Meet the Research Team"
          sub="Each member leads a primary research component. Click a member to view details about the component and related documents."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((m) => (
            <button
              key={m.id}
              type="button"
              onClick={() => setActiveMemberId(m.id)}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:bg-white/10"
            >
              {memberPhotos.get(m.id) ? (
                <img
                  src={memberPhotos.get(m.id)}
                  alt={m.name}
                  className="mx-auto h-16 w-16 rounded-full border border-white/10 object-cover"
                  loading="lazy"
                />
              ) : (
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary/20 font-serif-display text-xl text-secondary">
                  {m.initials}
                </div>
              )}
              <div className="mt-4 text-sm font-semibold text-slate-50">
                {m.name}
              </div>

              <div className="mt-3 inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary">
                {componentsById.get(m.componentId)?.title ??
                  "Research Component"}
              </div>

              <p className="mt-3 text-sm leading-6 text-slate-300">{m.bio}</p>
            </button>
          ))}
        </div>

        {activeMember && activeComponent ? (
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Member and component details"
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            <button
              type="button"
              aria-label="Close"
              className="absolute inset-0 bg-slate-950/70"
              onClick={() => setActiveMemberId(null)}
            />

            <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-primary shadow-2xl">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 bg-white/5 p-6">
                <div className="flex items-center gap-4">
                  {memberPhotos.get(activeMember.id) ? (
                    <img
                      src={memberPhotos.get(activeMember.id)}
                      alt={activeMember.name}
                      className="h-14 w-14 flex-none rounded-full border border-white/10 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-secondary/20 font-serif-display text-lg text-secondary">
                      {activeMember.initials}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-semibold text-slate-50">
                      {activeMember.name}
                    </div>
                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                      {activeComponent.title}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveMemberId(null)}
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10"
                >
                  Close
                </button>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Member overview
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {activeMember.bio}
                    </p>

                    <div className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Component tags
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {activeComponent.tags.map((t) => (
                        <span key={t} className="pill">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Component summary
                    </div>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      {activeComponent.body}
                    </p>

                    <div className="mt-4">
                      <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                        Key points
                      </div>
                      <ul className="mt-2 space-y-2 text-sm text-slate-300">
                        {activeComponent.keyPoints.map((p) => (
                          <li key={p} className="flex items-start gap-2">
                            <span className="mt-2 h-2 w-2 flex-none rounded-full bg-secondary" />
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                    Related documents
                  </div>
                  <div className="mt-3 space-y-2">
                    {activeComponent.relatedDocIds.map((docId) => {
                      const doc = documentsById.get(docId);
                      if (!doc) return null;
                      return (
                        <a
                          key={docId}
                          href={doc.href}
                          target="_blank"
                          rel="noreferrer"
                          className="block rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
                        >
                          <div className="text-sm font-semibold text-slate-50">
                            {doc.title}
                          </div>
                          <div className="mt-0.5 text-xs text-slate-400">
                            {doc.meta}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </section>

      <div className="divider" />

      {/* SUPERVISORS */}
      <section id="supervisors" className="bg-primary py-20">
        <SectionHeader
          label="Academic Guidance"
          title="Supervisors & Co-Supervisors"
          sub="Academic guidance shaping the research quality, methodology, and evaluation rigor."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          {supervisors.map((s) => (
            <div
              key={s.name}
              className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              {s.photo ? (
                <img
                  src={s.photo}
                  alt={s.name}
                  className="h-16 w-16 flex-none rounded-full border border-white/10 object-cover sm:h-20 sm:w-20"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-16 w-16 flex-none items-center justify-center rounded-full bg-white/10 font-serif-display text-lg text-slate-50 sm:h-20 sm:w-20">
                  {s.initials}
                </div>
              )}
              <div className="min-w-0">
                <div className="text-sm font-semibold text-slate-50">
                  {s.name}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                  {s.title}
                </div>
                {s.email ? (
                  <a
                    href={`mailto:${s.email}`}
                    className="mt-2 block text-sm text-slate-200 underline decoration-white/20 underline-offset-4 hover:decoration-secondary"
                  >
                    {s.email}
                  </a>
                ) : null}
                {/* <p className="mt-2 text-sm leading-7 text-slate-300">
                  {s.body}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* DOCUMENTS */}
      <section id="documents" className="bg-slate-950/20 py-20">
        <SectionHeader
          label="Research Deliverables"
          title="Documents & Reports"
          sub="TAF, proposals, progress reports, interview artefacts, and the research paper draft."
        />

        <div className="mx-auto mt-10 max-w-6xl px-6">
          <div className="flex flex-wrap gap-2">
            {docTabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setActiveTab(t.key)}
                className={
                  activeTab === t.key
                    ? "rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-slate-950"
                    : "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 hover:bg-white/10"
                }
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {filteredDocs.map((d) => (
              <div
                key={d.id}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-50">
                    {d.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-300">{d.meta}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="pill">{d.badge}</span>
                  {d.href ? (
                    <>
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-100 hover:bg-white/10"
                      >
                        View
                      </a>
                      <a
                        href={d.href}
                        download
                        className="rounded-lg border border-secondary/30 bg-secondary/10 px-3 py-2 text-xs font-semibold text-secondary hover:bg-secondary/20"
                      >
                        Download
                      </a>
                    </>
                  ) : (
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-slate-400">
                      Not uploaded
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* UI DESIGNS */}
      <section id="ui-designs" className="bg-primary py-20">
        <SectionHeader
          label="Design Artefacts"
          title="UI/UX Designs"
          sub="Design iterations informed by stakeholder feedback, accessibility principles, and workflow constraints."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          {uiDesigns.map((u) => (
            <div
              key={u.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <img
                src={u.image}
                alt={u.alt}
                className="h-[420px] w-full object-cover object-top"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-50">
                  {uiDemo.label}
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Watch the UI/UX walkthrough and prototype demo.
                </p>
              </div>
              <a
                href={uiDemo.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-slate-950 hover:opacity-90"
              >
                View Demo Video
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* INTERVIEWS */}
      <section id="interviews" className="bg-slate-950/20 py-20">
        <SectionHeader
          label="Qualitative Research"
          title="Research Interviews"
          sub="Key quotes and themes from semi-structured stakeholder interviews."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="p-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/30">
                {isInterviewVideoPlaying ? (
                  <video
                    src={interviewMedia.video.src}
                    poster={interviewMedia.video.poster}
                    controls
                    autoPlay
                    className="h-[420px] w-full object-cover"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setIsInterviewVideoPlaying(true)}
                    className="group relative block h-[420px] w-full"
                    aria-label="Play interview video"
                  >
                    <img
                      src={interviewMedia.video.poster}
                      alt={interviewMedia.video.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-slate-950/35 transition group-hover:bg-slate-950/25" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl text-white backdrop-blur">
                        ▶
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="p-6">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-slate-950/30">
                <img
                  src={interviewMedia.slides[activeInterviewSlide].src}
                  alt={interviewMedia.slides[activeInterviewSlide].alt}
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex justify-center gap-2">
                {interviewMedia.slides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    onClick={() => setActiveInterviewSlide(index)}
                    className={
                      index === activeInterviewSlide
                        ? "h-2.5 w-8 rounded-full bg-secondary"
                        : "h-2.5 w-2.5 rounded-full bg-white/20"
                    }
                    aria-label={`Show interview slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto mt-6 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          {interviews.map((i) => (
            <div
              key={i.who}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="font-serif-display text-lg italic text-slate-50">
                “{i.quote}”
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-400">
                {i.who}
              </div>
            </div>
          ))}
        </div> */}
      </section>

      <div className="divider" />

      {/* TESTING */}
      <section id="testing" className="bg-primary py-20">
        <SectionHeader
          label="Evaluation"
          title="Testing & Evaluation"
          sub="Functional correctness, usability, performance benchmarks, and expert validation."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-4 px-6 sm:grid-cols-4">
          {testing.metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
            >
              <div className="font-serif-display text-3xl text-secondary">
                {m.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          <Card title="Testing phases">
            <ul className="mt-1 space-y-2">
              {testing.phases.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-secondary" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Key findings">
            <ul className="mt-1 space-y-2">
              {testing.findings.map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-secondary" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mx-auto mt-8 max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="text-sm font-semibold text-slate-50">
                  {testing.download.title}
                </div>
                <p className="mt-2 text-sm text-slate-300">
                  Download the detailed test cases sheet.
                </p>
              </div>
              <a
                href={testing.download.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-slate-950 hover:opacity-90"
              >
                Open Excel Sheet
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* COMPARISON */}
      <section id="comparison" className="bg-slate-950/20 py-20">
        <SectionHeader
          label="Comparative Analysis"
          title="Solution Comparison"
          sub="A structured comparison against baseline and alternative approaches across key criteria."
        />

        <div className="mx-auto mt-10 max-w-6xl overflow-x-auto px-6">
          <div className="min-w-[780px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-white/5">
                <tr className="text-xs uppercase tracking-[0.16em] text-slate-400">
                  <th className="px-5 py-4">Criteria</th>
                  <th className="px-5 py-4">Existing A</th>
                  <th className="px-5 py-4">Existing B</th>
                  <th className="px-5 py-4">Open-Source</th>
                  <th className="px-5 py-4 text-secondary">Our Solution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonRows.map((r) => (
                  <tr key={r.criteria} className="hover:bg-white/5">
                    <td className="px-5 py-4 font-semibold text-slate-100">
                      {r.criteria}
                    </td>
                    <td className="px-5 py-4 text-slate-300">{r.a}</td>
                    <td className="px-5 py-4 text-slate-300">{r.b}</td>
                    <td className="px-5 py-4 text-slate-300">{r.os}</td>
                    <td className="px-5 py-4 font-semibold text-secondary">
                      {r.ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* PAPER */}
      <section id="paper" className="bg-primary py-20">
        <SectionHeader
          label="Publication"
          title="Research Paper"
          sub="Draft paper summarizing our problem, solution, methodology, results, and contributions."
        />

        <div className="mx-auto mt-12 max-w-6xl px-6">
          <div className="rounded-2xl border border-secondary/30 bg-secondary/5 p-7">
            <span className="pill">{paper.statusBadge}</span>
            <h3 className="mt-4 font-serif-display text-2xl tracking-tight text-slate-50 md:text-3xl">
              {paper.title}
            </h3>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-300">
              <span>👥 {paper.authors}</span>
              <span>🏛 {paper.org}</span>
              <span>📅 {paper.year}</span>
              <span>🎯 {paper.target}</span>
            </div>
            <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-slate-300">
              {paper.abstract}
            </div>
            {paper.downloadHref ? (
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-slate-950 hover:opacity-90"
                  href={paper.downloadHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Download Draft PDF
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* COMMERCIALIZATION */}
      <section id="commercialization" className="bg-slate-950/20 py-20">
        <SectionHeader
          label="Industry & Growth"
          title="Commercialization"
          sub="Business-facing artefacts and channels for outreach, partnerships, and future rollout."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4">
              <div className="text-sm font-semibold text-slate-50">
                Business Poster
              </div>
            </div>
            <div className="p-6">
              <img
                src={commercialization.poster.src}
                alt={commercialization.poster.alt}
                className="w-full rounded-xl border border-white/10 bg-slate-950/30"
                loading="lazy"
              />
            </div>
          </div>

          <div className="space-y-6">
            {commercialization.businessAccounts.length ? (
              <Card title="Business Accounts">
                <div className="mt-3 space-y-3">
                  {commercialization.businessAccounts.map((a) => (
                    <a
                      key={a.label}
                      href={a.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10"
                    >
                      <div className="text-sm font-semibold text-slate-50">
                        {a.label}
                      </div>
                      <div className="mt-1 text-sm text-slate-300">
                        {a.handle}
                      </div>
                    </a>
                  ))}
                </div>
              </Card>
            ) : null}

            <Card title={commercialization.pro.title}>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                {commercialization.pro.body}
              </p>
              <ul className="mt-4 space-y-2">
                {commercialization.pro.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-secondary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CONTACT */}
      <section id="contact" className="bg-primary py-20">
        <SectionHeader
          label="Get in Touch"
          title="Contact"
          sub="Reach out for research collaboration, project discussions, or academic inquiries."
        />

        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2">
          <Card title="General Email">
            <a
              className="text-slate-100 underline decoration-white/20 underline-offset-4 hover:decoration-secondary"
              href={`mailto:${contact.generalEmail}`}
            >
              {contact.generalEmail}
            </a>
          </Card>

          <Card title={contact.phone.label}>
            <a
              className="text-slate-100 underline decoration-white/20 underline-offset-4 hover:decoration-secondary"
              href={`tel:${contact.phone.phone}`}
            >
              {contact.phone.phone}
            </a>
          </Card>

          <Card title="Team Emails">
            <div className="mt-2 space-y-2">
              {contact.teamEmails.map((email) => (
                <a
                  key={email}
                  className="block text-slate-100 underline decoration-white/20 underline-offset-4 hover:decoration-secondary"
                  href={`mailto:${email}`}
                >
                  {email}
                </a>
              ))}
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
