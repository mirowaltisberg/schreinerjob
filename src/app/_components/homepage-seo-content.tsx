import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";
import { JsonLd } from "@/components/json-ld";

// SEO-DECISION: Server-rendered content for homepage crawlability.
// This content is always visible to search engines even though the
// main job search is client-rendered.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://schreinerjob.ch";

const HOMEPAGE_FAQS = [
  {
    question: "Welche Schreinerjobs gibt es auf schreinerjob.ch?",
    answer:
      "Auf schreinerjob.ch findest du offene Stellen für Schreiner EFZ, Zimmermann EFZ, Innenausbauer, Möbelschreiner, Küchenbauer, Fensterbauer, Holzbauer, Werkstattleiter, CNC-Holzbearbeiter, Montageschreiner, Schreinermeister und Bauleiter Holzbau — in der ganzen Schweiz.",
  },
  {
    question: "Was verdient ein Schreiner in der Schweiz?",
    answer:
      "Ein Schreiner EFZ verdient in der Schweiz durchschnittlich zwischen CHF 65'000 und CHF 80'000 pro Jahr. Das Gehalt variiert je nach Kanton, Berufserfahrung und Arbeitgeber. In Zürich und Basel liegen die Löhne tendenziell höher als in ländlicheren Regionen.",
  },
  {
    question: "Wie finde ich einen Job als Schreiner in der Schweiz?",
    answer:
      "Auf schreinerjob.ch kannst du gezielt nach Schreinerjobs in deiner Region suchen. Nutze die Filteroptionen nach Beruf, Kanton, Pensum und Umkreis. Du kannst dich direkt über die Plattform bewerben — einfach Lebenslauf hochladen und abschicken.",
  },
  {
    question: "Welche Kantone haben die meisten Schreinerjobs?",
    answer:
      "Die meisten offenen Stellen für Schreiner-Fachkräfte gibt es in den Kantonen Zürich, Bern, Aargau, Basel und St. Gallen. Diese Regionen haben eine hohe Dichte an Schreinereien und Holzbauprojekten.",
  },
  {
    question: "Was ist der Unterschied zwischen Schreiner EFZ und Zimmermann EFZ?",
    answer:
      "Der Schreiner EFZ (4-jährige Lehre) arbeitet vorwiegend mit Möbeln, Innenausbauten, Fenstern und Türen — sowohl in der Werkstatt als auch auf der Baustelle. Der Zimmermann EFZ (4-jährige Lehre) arbeitet hauptsächlich im konstruktiven Holzbau mit tragenden Strukturen wie Dachstühlen, Wänden und Holzhäusern. Beide Berufe sind in der Schweiz sehr gefragt.",
  },
  {
    question: "Gibt es auf schreinerjob.ch auch Teilzeitstellen?",
    answer:
      "Ja, auf schreinerjob.ch findest du sowohl Vollzeit- als auch Teilzeitstellen. Nutze den Pensum-Filter, um Stellen mit 60–80% oder 80–100% Arbeitspensum zu finden.",
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOMEPAGE_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const SALARY_TABLE = [
  { role: "Schreinermeister", range: "CHF 85'000 – 110'000" },
  { role: "Bauleiter Holzbau", range: "CHF 85'000 – 110'000" },
  { role: "Werkstattleiter", range: "CHF 80'000 – 100'000" },
  { role: "CNC-Holzbearbeiter", range: "CHF 68'000 – 85'000" },
  { role: "Schreiner EFZ", range: "CHF 65'000 – 80'000" },
  { role: "Zimmermann EFZ", range: "CHF 65'000 – 82'000" },
  { role: "Küchenbauer", range: "CHF 65'000 – 80'000" },
  { role: "Innenausbauer", range: "CHF 65'000 – 80'000" },
  { role: "Fensterbauer", range: "CHF 62'000 – 78'000" },
  { role: "Möbelschreiner", range: "CHF 62'000 – 78'000" },
  { role: "Montageschreiner", range: "CHF 60'000 – 75'000" },
  { role: "Holzbauer", range: "CHF 62'000 – 80'000" },
];

/**
 * Server-rendered SEO content for the homepage.
 * Crawlable by search engines even when JS is disabled.
 * Includes: intro text, FAQ section, salary table, landing page links.
 */
export function HomepageSeoContent() {
  return (
    <section className="bg-white border-t" aria-label="Informationen für Schreiner-Fachkräfte">
      <JsonLd data={faqPageSchema} />

      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 max-w-5xl">
        {/* SEO intro paragraph — AI-citeable, entity-rich */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Schreinerjobs in der Schweiz finden
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
            Auf schreinerjob.ch finden Schreiner-Fachkräfte aktuelle offene Stellen in der ganzen Schweiz
            — von Schreiner EFZ über Zimmermann und Innenausbauer bis hin zu
            Möbelschreiner, Küchenbauer und Bauleiter Holzbau. Ob du deinen nächsten Schreinerjob
            in Zürich, Bern oder Basel suchst — unsere spezialisierte Jobbörse
            richtet sich an alle Berufsleute der Schreinerbranche.
          </p>
          <p className="text-slate-600 text-base leading-relaxed">
            Ob du in Zürich, Bern, Basel, Luzern, St. Gallen oder einem anderen Schweizer Kanton
            suchst — mit unserer smarten Filterung nach Beruf, Ort, Umkreis und Pensum findest du
            schnell die passende Stelle. Bewirb dich direkt über die Plattform mit wenigen Klicks.
          </p>
        </div>

        {/* Salary table — highly citeable by AI */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Lohnübersicht Schreinerberufe Schweiz
          </h2>
          <p className="text-slate-500 text-sm mb-4">
            Durchschnittliche Jahresgehälter für Schreiner-Fachkräfte in der Schweiz (2025/2026, Richtwerte).
            Quellen:{" "}
            <a href="https://www.vssm.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">VSSM</a>,{" "}
            <a href="https://www.holzbau-schweiz.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">Holzbau Schweiz</a>,{" "}
            <a href="https://www.bfs.admin.ch" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">BFS</a>.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="py-3 pr-4 text-sm font-semibold text-slate-900">Beruf</th>
                  <th className="py-3 text-sm font-semibold text-slate-900">Jahreslohn (CHF)</th>
                </tr>
              </thead>
              <tbody>
                {SALARY_TABLE.map((row) => (
                  <tr key={row.role} className="border-b border-slate-100">
                    <td className="py-2.5 pr-4 text-sm text-slate-700">{row.role}</td>
                    <td className="py-2.5 text-sm font-medium text-slate-900">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ section — conversational query targets */}
        <div className="mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            Häufig gestellte Fragen
          </h2>
          <div className="space-y-4">
            {HOMEPAGE_FAQS.map((faq, index) => (
              <details
                key={index}
                className="group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
                  {faq.question}
                  <span
                    className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>
                <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Landing page links — crawlable internal links */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
            Alle Schreinerjobs nach Beruf und Kanton
          </h2>
          <nav aria-label="Beliebte Stellenangebote nach Beruf und Kanton">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {TOP_LANDING_PAGES.map((item) => (
                <Link
                  key={`${item.role}-${item.canton}`}
                  href={getLandingPath(item)}
                  className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:border-primary/40 hover:text-primary transition-colors"
                >
                  {item.role} in {item.canton}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </section>
  );
}
