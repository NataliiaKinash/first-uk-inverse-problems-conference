import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Event",
          name: "First UK Conference on Inverse Problems",
          startDate: "2027-03-22",
          endDate: "2027-03-23",
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: "Department of Applied Mathematics, University of Leeds",
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

const deadlines: { date: string; text: string }[] = [
  { date: "1 October 2026", text: "Abstract (≈100 words) submission by email to D.Lesnic@leeds.ac.uk" },
  { date: "15 October 2026", text: "Notification of acceptance of abstracts" },
  { date: "15 December 2026", text: "Submission of full paper for possible publication in the Conference Proceedings" },
  { date: "15 January 2027", text: "Notification of acceptance / revision of papers" },
  { date: "15 February 2027", text: "Final papers due" },
  { date: "1 March 2027", text: "Deadline for payment of the conference registration fee" },
];

function Index() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 pt-16 pb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
            University of Leeds · School of Mathematics
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-semibold leading-[1.05] text-primary">
            First UK Conference on Inverse Problems
          </h1>
          <p className="mt-5 text-lg text-foreground/80">
            22–23 March 2027 · Department of Applied Mathematics, University of Leeds
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#registration"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            >
              Registration £90
            </a>
            <a
              href="/downloads/Surname.tex"
              className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition"
              download
            >
              LaTeX template (.tex)
            </a>
            <a
              href="/downloads/Surname.pdf"
              className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-primary hover:bg-muted transition"
              target="_blank"
              rel="noreferrer"
            >
              Template preview (.pdf)
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14 space-y-14">
        <section>
          <h2 className="text-2xl font-semibold text-primary">About the conference</h2>
          <div className="mt-4 space-y-4 text-foreground/85 leading-relaxed">
            <p>
              The use of and interest in Inverse Problems and their applications have been growing at
              an ever-increasing rate over the last three decades. There are now well-established
              annual meetings both internationally and within the EU. Much of the research centres
              around the substantial contributions being made by UK researchers, and it was thought
              appropriate to launch the First UK Conference on Inverse Problems in the School of
              Mathematics at the University of Leeds, with subsequent series held biennially at
              rotating centres of excellence in inverse problems.
            </p>
            <p>
              The main aim of the Conference is for all researchers in the UK (senior academics,
              research staff and postgraduate students) and elsewhere, working on Inverse Problems,
              to meet in an informal way to present their current research work. Conference
              Proceedings will be published (with ISB number) and distributed at the conference.
              Only papers presented at the conference by registered authors will be included in the
              proceedings. Presentation- or attendance-only participation is also possible.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary">Scientific committee</h2>
          <p className="mt-4 italic text-foreground/85 leading-relaxed">
            Simon Arridge (UCL), Carola Bibiane-Schönlieb (Cambridge), Romina Gaburro (Limerick),
            Paul Ledger (Leicester), Daniel Lesnic (Leeds), Bill Lionheart (Manchester) and
            Marco Marletta (Cardiff).
          </p>
          <h3 className="mt-6 text-lg font-semibold text-primary">Local organising committee</h3>
          <p className="mt-2 text-foreground/85">Daniel Lesnic and Nataliia Kinash.</p>
        </section>

        <section id="deadlines">
          <h2 className="text-2xl font-semibold text-primary">Key dates</h2>
          <ol className="mt-6 divide-y divide-border border-y border-border">
            {deadlines.map((d) => (
              <li key={d.date} className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-1 sm:gap-6 py-4">
                <span className="font-medium text-accent">{d.date}</span>
                <span className="text-foreground/85">{d.text}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="registration">
          <h2 className="text-2xl font-semibold text-primary">Registration & costs</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            The purpose of this series is to keep fees as low as possible, covering lunches,
            conference dinner, refreshments, proceedings publication and advertisement. The
            registration fee is <strong>£90</strong>. The payment link will be provided here.
          </p>
          <p className="mt-3 text-foreground/85 leading-relaxed">
            Participants make their own travel and accommodation arrangements. Suggested: IBIS
            Hotel, Marlborough Street, Leeds LS1 4PB — a 10-minute walk from both the University
            and Leeds train station.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-primary">Proceedings & template</h2>
          <p className="mt-4 text-foreground/85 leading-relaxed">
            Full papers for the Conference Proceedings should be prepared using the LaTeX template
            below (maximum 10 pages, black-and-white figures with clear line styles or markers).
          </p>
          <ul className="mt-4 space-y-2 text-primary">
            <li>
              <a className="underline underline-offset-4 hover:text-accent" href="/downloads/Surname.tex" download>
                Download LaTeX source — Surname.tex
              </a>
            </li>
            <li>
              <a className="underline underline-offset-4 hover:text-accent" href="/downloads/Surname.pdf" target="_blank" rel="noreferrer">
                View compiled example — Surname.pdf
              </a>
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold text-primary">Contact</h2>
          <div className="mt-4 space-y-1 text-foreground/85">
            <p>
              Professor Daniel Lesnic —{" "}
              <a className="underline underline-offset-4 text-primary hover:text-accent" href="mailto:D.Lesnic@leeds.ac.uk">
                D.Lesnic@leeds.ac.uk
              </a>
            </p>
            <p>
              Dr Nataliia Kinash —{" "}
              <a className="underline underline-offset-4 text-primary hover:text-accent" href="mailto:N.Kinash@leeds.ac.uk">
                N.Kinash@leeds.ac.uk
              </a>
            </p>
            <p className="pt-2">Department of Applied Mathematics, University of Leeds, Leeds LS2 9JT, UK</p>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-8 text-sm text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© 2026–2027 First UK Conference on Inverse Problems</span>
          <span>University of Leeds</span>
        </div>
      </footer>
    </div>
  );
}
