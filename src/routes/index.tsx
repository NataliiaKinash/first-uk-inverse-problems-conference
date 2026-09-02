import { createFileRoute } from "@tanstack/react-router";
import heroAsset from "@/assets/hero-conference.png.asset.json";
import logoAsset from "@/assets/logo.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "First UK Inverse Problems Conference",
          startDate: "2027-03-22",
          endDate: "2027-03-23",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "School of Mathematics, University of Leeds",
            address: "Leeds LS2 9JT, UK",
          },
          organizer: [
            { "@type": "Person", name: "Daniel Lesnic", email: "D.Lesnic@leeds.ac.uk" },
            { "@type": "Person", name: "Nataliia Kinash", email: "N.Kinash@leeds.ac.uk" },
          ],
        }),
      },
    ],
  }),
});

const deadlines = [
  { date: "1 Oct 2026", text: "Abstract submission (≈100 words) by email to D.Lesnic@leeds.ac.uk" },
  { date: "15 Oct 2026", text: "Notification of acceptance of abstracts" },
  { date: "15 Dec 2026", text: "Full paper submission (optional) for the Proceedings" },
  { date: "15 Jan 2027", text: "Notification of acceptance / revision of papers" },
  { date: "15 Feb 2027", text: "Final papers due" },
  { date: "1 Mar 2027", text: "Deadline for payment of the £90 registration fee" },
];

const scientific = [
  "Simon Arridge — UCL",
  "Carola-Bibiane Schönlieb — Cambridge",
  "Romina Gaburro — Limerick",
  "Paul Ledger — Leicester",
  "Daniel Lesnic — Leeds",
  "Bill Lionheart — Manchester",
  "Marco Marletta — Cardiff",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3 font-display text-lg text-ink">
          <img
            src={logoAsset.url}
            alt="First UK Conference on Inverse Problems logo"
            className="h-12 w-12 rounded-full"
          />
          First UK Conference on&nbsp;
          <br />
          Inverse Problems
        </div>
        <div className="hidden gap-6 text-sm text-muted-foreground md:flex">
          <a href="#about" className="hover:text-ink">About</a>
          <a href="#dates" className="hover:text-ink">Key dates</a>
          <a href="#template" className="hover:text-ink">Template &amp; Fee</a>
          <a href="#committee" className="hover:text-ink">Committee</a>
          <a href="#contact" className="hover:text-ink">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "var(--ink)" }}>
        <img
          src={heroAsset.url}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, var(--ink) 0%, color-mix(in oklch, var(--ink) 85%, transparent) 60%, color-mix(in oklch, var(--ink) 40%, transparent) 100%)" }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="max-w-3xl text-paper">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-paper/25 px-3 py-1 text-xs uppercase tracking-[0.18em] text-paper/85">
              Preliminary announcement
            </div>
            <h1 className="font-display text-4xl leading-[1.05] md:text-6xl">
              First UK
              <br />
              <span style={{ color: "var(--saffron)" }}>Conference on&nbsp;Inverse Problems</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-paper/85">
              22–23 March 2027 · School of Mathematics, the Mall Room (level 8), University of Leeds. A new biennial meeting
              for the UK inverse problems community — senior academics, postdocs and PhD students
              presenting current work.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#template"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition hover:opacity-90"
              >
                Registration &amp; template →
              </a>
              <a
                href="https://store.leeds.ac.uk/product-catalogue/faculty-of-engineering-and-physical-sciences/school-of-maths/first-uk-conference-on-inverse-problems"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-paper/30 bg-transparent px-8 text-sm font-medium text-paper transition hover:bg-paper/10"
              >
                Pay registration fee
              </a>
              <a
                href="mailto:D.Lesnic@leeds.ac.uk?subject=Abstract%20submission%20—%20First%20UK%20Inverse%20Problems%20Conference"
                className="inline-flex h-10 items-center justify-center rounded-md border border-paper/30 bg-transparent px-8 text-sm font-medium text-paper transition hover:bg-paper/10"
              >
                Submit an abstract
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 text-sm text-paper/80 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--peak)" }}>
                  <path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" />
                </svg>
                22–23 March 2027
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: "var(--peak)" }}>
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" />
                </svg>
                University of Leeds
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-primary">About</div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">
              {"\n"}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Interest in inverse problems and their applications has grown steadily over the last
                three decades. While well-established annual meetings exist internationally and within
                the EU, much of the underlying research is driven by UK groups. This conference launches
                a biennial UK series, hosted at rotating centres of excellence.
              </p>
              <p>
                The aim is informal: bring together researchers in the UK and beyond — senior
                academics, research staff and postgraduate students — to present current work.
                Selected papers will appear in Conference Proceedings published with an ISBN and
                distributed at the conference.
              </p>
            </div>
          </div>
          <aside className="rounded-lg border border-border bg-card p-6">
            <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--saffron)" }}>Fee</div>
            <div className="mt-2 font-display text-3xl">£90</div>
            <p className="mt-3 text-sm text-muted-foreground">
              The purpose of this series of conferences is to keep the fees accessible and as low as possible to top-up expenses related to the provided lunches, conference dinner, refreshments, proceedings publication, advertisement, etc. The link for paying the £90 conference registration fee can be found{" "}
              <a className="text-primary underline underline-offset-4" href="https://store.leeds.ac.uk/product-catalogue/faculty-of-engineering-and-physical-sciences/school-of-maths/first-uk-conference-on-inverse-problems" target="_blank" rel="noreferrer">here</a>.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Participants will need to make their own arrangements for travel and accommodation (suggestion: IBIS Hotel in Marlborough Street, Leeds LS1 4PB, which is situated 10-minute walk from both Leeds University and Leeds train station).&nbsp;
            </p>
          </aside>
        </div>
      </section>

      {/* Deadlines */}
      <section id="dates" className="border-y border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-xs uppercase tracking-[0.18em] text-primary">Key dates</div>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">Deadlines</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {deadlines.map((d) => (
              <div key={d.date} className="bg-card p-6">
                <div className="font-display text-xl text-primary">{d.date}</div>
                <div className="mt-1 text-sm text-muted-foreground">{d.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template */}
      <section id="template" className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--saffron)" }}>
              Proceedings template
            </div>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">LaTeX paper template</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Full papers for the Conference Proceedings should be prepared with the LaTeX template
              below. Maximum 10 pages. Figures should be black and white — use different line styles
              or markers, with large axis labels.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/downloads/Surname.tex"
                download
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
              >
                Download Surname.tex
              </a>
              <a
                href="/downloads/Surname.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium text-ink hover:bg-muted"
              >
                View compiled PDF
              </a>
              <a
                href="https://store.leeds.ac.uk/product-catalogue/faculty-of-engineering-and-physical-sciences/school-of-maths/first-uk-conference-on-inverse-problems"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-6 text-sm font-medium text-ink hover:bg-muted"
              >
                Pay registration fee →
              </a>
            </div>
          </div>
          <div className="rounded-lg bg-secondary p-6">
            <div className="font-display text-xl">Registration fee</div>
            <p className="mt-2 text-sm text-muted-foreground">
              The £90 registration fee covers lunches, the conference dinner, refreshments and the
              published proceedings.&nbsp;
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Presentation-only or attendance-only participation (without submitting a paper) is
              possible. Please register and pay the fees as early as possible using the payment link available{" "}
              <a className="text-primary underline underline-offset-4" href="https://store.leeds.ac.uk/product-catalogue/faculty-of-engineering-and-physical-sciences/school-of-maths/first-uk-conference-on-inverse-problems" target="_blank" rel="noreferrer">here</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Committee */}
      <section id="committee" className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-primary">Scientific Committee</div>
              <ul className="mt-4 space-y-0 text-base">
                {scientific.map((m) => (
                  <li key={m} className="border-b border-border py-2 text-ink">{m}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.18em]" style={{ color: "var(--saffron)" }}>
                Local Organising Committee
              </div>
              <ul className="mt-4 space-y-0 text-base">
                <li className="border-b border-border py-2 text-ink">Daniel Lesnic — Leeds</li>
                <li className="border-b border-border py-2 text-ink">Nataliia Kinash — Leeds</li>
              </ul>
              <div id="contact" className="mt-10 rounded-lg bg-secondary p-6">
                <div className="font-display text-xl">Contacts</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {"\n"}
                </p>
                <ul className="mt-3 space-y-1 text-sm">
                  <li>
                    Prof Daniel Lesnic —{" "}
                    <a className="text-primary underline underline-offset-4" href="mailto:D.Lesnic@leeds.ac.uk">
                      D.Lesnic@leeds.ac.uk
                    </a>
                  </li>
                  <li>
                    Dr Nataliia Kinash —{" "}
                    <a className="text-primary underline underline-offset-4" href="mailto:N.Kinash@leeds.ac.uk">
                      N.Kinash@leeds.ac.uk
                    </a>
                  </li>
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">
                  Department of Applied Mathematics, University of Leeds, Leeds LS2 9JT, UK
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-6 py-8 text-sm text-muted-foreground">
          <span>© 2026–2027 First UK Inverse Problems Conference</span>
          <span>University of Leeds</span>
        </div>
      </footer>
    </div>
  );
}
