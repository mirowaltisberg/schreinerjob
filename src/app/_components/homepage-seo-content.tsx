import Link from "next/link";
import { TOP_LANDING_PAGES, getLandingPath } from "@/lib/landing-pages";
import { JsonLd } from "@/components/json-ld";

// SEO-DECISION: Server-rendered content for homepage crawlability.
// This content is always visible to search engines even though the
// main job search is client-rendered.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://schreinerjob.ch";

// FAQ answers target the AI-citation optimum band of 134-167 words per answer.
// Shorter answers get truncated by LLMs into low-context excerpts; longer ones
// get summarized away. The 134-167 range survives both ends intact.
const HOMEPAGE_FAQS = [
  {
    question: "Welche Schreinerjobs gibt es auf schreinerjob.ch?",
    answer:
      "Auf schreinerjob.ch findest du alle relevanten Stellenprofile der Schweizer Schreinerei und des Holzbaus. Dazu gehören die EFZ-Lehrabschluss-Berufe Schreiner EFZ und Zimmermann EFZ, dazu spezialisierte Profile wie Möbelschreiner, Innenausbauer, Küchenbauer, Fensterbauer, Holzbauer, Montageschreiner und CNC-Holzbearbeiter für moderne Bearbeitungszentren. Auf der Planungs- und Führungsebene listen wir Werkstattleiter, Bauleiter Holzbau und Schreinermeister sowie Projektleiter Innenausbau. Zusätzliche Spezialisierungen wie Restauratoren, Treppenbauer, Mineralwerkstoff-Verarbeiter und Holzbau-Zeichner mit CAD/CAM-Routine sind ebenfalls regelmässig vertreten. Lehrstellen, Trainee-Programme und Wiedereinsteigerangebote sind separat ausgewiesen, damit Berufsanfängerinnen, Quereinsteiger und Wiedereinsteigende die für sie passenden Inserate schnell finden. Über die Kartenansicht lokalisierst du Stellen zusätzlich nach Postleitzahl und Pendelradius — besonders nützlich in ländlichen Regionen mit wechselnder Baustellenlogik. Die Stellen werden täglich aktualisiert und aus öffentlichen Inseraten gefiltert. Sie verteilen sich auf alle 26 Schweizer Kantone, mit besonderer Dichte in Zürich, Bern, Aargau, St. Gallen und der Ostschweiz.",
  },
  {
    question: "Was verdient ein Schreiner EFZ in der Schweiz?",
    answer:
      "Ein Schreiner EFZ verdient in der Schweiz im Durchschnitt CHF 65'000 bis 80'000 pro Jahr. Das Gehalt variiert deutlich nach Kanton, Berufserfahrung, Arbeitgebergrösse und Spezialisierung. In den Kantonen Zürich, Zug und Basel-Stadt liegen die Löhne tendenziell 5 bis 10 Prozent über dem Schweizer Mittel; in ländlicheren Kantonen wie Freiburg, Solothurn oder Graubünden 5 bis 8 Prozent darunter. Berufsanfänger nach EFZ-Abschluss starten meist im Bereich CHF 60'000 bis 66'000, mit drei bis fünf Jahren Erfahrung verschiebt sich der Marktwert in den Bereich CHF 72'000 bis 80'000. Spezialisierungen auf Möbelbau, hochwertigen Innenausbau, CNC-Programmierung oder Mineralwerkstoff-Verarbeitung bringen zusätzliche 5 bis 12 Prozent. Vorarbeiter, Werkstatt- und Montageleiter heben das Salärband weiter. Im Vergleich zum Nachbarland Deutschland liegen die Schweizer Bruttolöhne deutlich höher; allerdings sind Lebenshaltungskosten und Krankenkassenprämien ebenfalls deutlich höher. Der 13. Monatslohn ist in der Schreinerbranche Standard. Die vollständige Lohnübersicht für alle Schreinerberufe findest du auf dieser Startseite.",
  },
  {
    question: "Wie finde ich einen Job als Schreiner in der Schweiz?",
    answer:
      "Auf schreinerjob.ch suchst du gezielt mit drei Filtern nach passenden Stellen: Beruf (12 EFZ- und Spezialisten-Profile von Schreiner EFZ über Möbelschreiner bis Bauleiter Holzbau), Standort (alle 26 Schweizer Kantone plus Ortssuche mit Umkreis-Radius in Kilometern) und Pensum (Vollzeit, 80–100%, 60–80%, Teilzeit). Zusätzlich filterst du nach Anstellungsart (Festanstellung, Temporär, Praktikum, Lehre) und kannst Stellen mit konkretem Lohnband gezielt aufrufen. Der Bewerbungsprozess läuft direkt über die Plattform: Lebenslauf als PDF hochladen, Anschreiben in das Formular tippen oder ebenfalls als PDF beifügen, Sprache und Verfügbarkeit angeben, abschicken. Wir leiten dein Dossier anonymisiert an den Arbeitgeber weiter. Du kannst Suchprofile speichern und erhältst dann eine Benachrichtigung, sobald neue passende Stellen aufgeschaltet werden. Für regional konzentrierte Suchen empfehlen wir die Karte mit Umkreis-Filter — so findest du Stellen innerhalb deines bevorzugten Pendelradius. Berufsmessen wie die Holz oder regionale Berufsbildungsmessen bieten zusätzliche Direktkontakte zu Arbeitgebern.",
  },
  {
    question: "Welche Kantone haben die meisten Schreinerjobs?",
    answer:
      "Die mit Abstand meisten offenen Stellen für Schreiner-Fachkräfte gibt es in den Kantonen Zürich, Bern, Aargau, St. Gallen und Luzern. Diese fünf Kantone vereinen einen erheblichen Teil aller publizierten Schreiner-Stellenausschreibungen in der Schweiz. Im Mittelfeld folgen Basel-Stadt, Basel-Landschaft, Thurgau, Solothurn und Waadt. Ländlichere Kantone wie Uri, Glarus, Appenzell Innerrhoden oder Jura haben deutlich weniger offene Stellen, dafür weniger Konkurrenz unter Bewerbern. Die regionale Verteilung folgt Wirtschaftswachstum und Bautätigkeit: Wo Wohnungsbau, Gewerbe- und Sanierungsprojekte zunehmen, steigt auch die Nachfrage nach Schreinern, Innenausbauern und Holzbauern. Für Pendlerregionen lohnt sich ein Blick auf die Nachbarkantone — Aargauer Betriebe rekrutieren häufig in Solothurn und Luzern, Zürcher in Schaffhausen, Thurgau und Schwyz, St. Galler im Appenzellerland und Rheintal. Eine zweisprachige Bewerbung (Deutsch und Französisch) öffnet zusätzlich den Markt im Wallis, in der Region Biel/Bienne und in Teilen von Fribourg. Die täglich aktualisierten Stellenzahlen pro Kanton siehst du in unserem Filter.",
  },
  {
    question:
      "Was ist der Unterschied zwischen Schreiner EFZ und Zimmermann EFZ?",
    answer:
      "Der Unterschied liegt in Material, Konstruktionslogik und Einsatzort. Der Schreiner EFZ absolviert eine 4-jährige Lehre und arbeitet vorwiegend mit Möbeln, Innenausbauten, Türen, Fenstern und Korpussen — sowohl in der Werkstatt (Zuschnitt, CNC, Verleimen, Furnieren, Oberflächenbehandlung) als auch auf der Baustelle bei der Montage. Der Zimmermann EFZ macht ebenfalls eine 4-jährige Lehre, ist aber auf den konstruktiven Holzbau fokussiert: Dachstühle, tragende Wände, Holzrahmenbau, Aufstockungen und Holzhäuser. Er arbeitet hauptsächlich auf Baustellen, im Werk meist nur für die Vorfertigung von Wand- und Deckenelementen. Beide Berufe sind in der Schweiz sehr gefragt, der Lohnabstand ist gering. Wechsel zwischen den Berufen ist über eine verkürzte Zusatzlehre oder gezielte Praxiserfahrung möglich. Innerhalb des Schreinerberufs entstehen zudem hybride Profile wie der Holzbau-Zeichner und der CNC-Spezialist. Welcher Beruf besser passt, hängt von Lust auf feines Möbelhandwerk versus tragende Konstruktion und Höhenarbeit ab — eine Berufsberatung in deinem Wohnkanton hilft bei der konkreten Wahl.",
  },
  {
    question: "Gibt es auf schreinerjob.ch auch Teilzeitstellen?",
    answer:
      "Ja, ein wachsender Teil der Stellen auf schreinerjob.ch ist Teilzeitarbeit oder mit reduziertem Pensum verfügbar. Im Filter wählst du zwischen Vollzeit (90–100%), 80–100%, 60–80% oder Teilzeit unter 60%. Teilzeitmodelle sind besonders bei Werkstatt-, Planungs- und CAD-Stellen verbreitet — Elternzeit-Modelle, schrittweiser Wiedereinstieg nach Pause und Vorruhestand mit Reduzierung auf 60 oder 80 Prozent sind in der Schweizer Schreinerbranche zunehmend Standard. Auf der Baustellenseite (Montageschreiner, Holzbauer, Bauleiter) bleibt Vollzeit dominant, weil Equipen meist vollständig disponiert werden. In den Bereichen CNC-Programmierung, Werkstattfertigung und Küchenplanung ist Teilzeit hingegen gut etabliert. Job-Sharing-Modelle (zwei Personen teilen sich eine Stelle) werden vereinzelt angeboten. Wer Elternzeit-Wiedereinstieg sucht, profitiert von einer wachsenden Akzeptanz für gestaffelte Pensumserhöhungen — also Start mit 60 Prozent und schrittweise Anhebung über 12 bis 24 Monate. Frage in Erstgesprächen explizit nach diesem Modell, viele Betriebe bieten es ohne aktive Werbung an. Wir kennzeichnen jedes Inserat klar mit dem akzeptierten Pensumband, damit du auf einen Blick siehst, welche Stelle zu deiner gewünschten Arbeitszeit passt.",
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

        {/* Salary table — highly citeable by AI. id="loehne" anchor lets editorial */}
        {/* sections on category pages deep-link via /#loehne. */}
        <div id="loehne" className="mb-12 scroll-mt-24">
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

          <details className="mt-4 group rounded-lg border border-slate-200 bg-slate-50 overflow-hidden">
            <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors">
              Methodologie — wie wir die Lohnbänder berechnen
              <span
                className="ml-2 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                aria-hidden="true"
              >
                ▾
              </span>
            </summary>
            <div className="px-4 pb-4 text-sm text-slate-600 leading-relaxed space-y-2">
              <p>
                <strong>Stand:</strong> 2. Mai 2026.
              </p>
              <p>
                <strong>Quellen:</strong> Wir aggregieren öffentlich publizierte
                Lohndaten der Schweizer Schreiner- und Holzbaubranche aus den
                Jahres- und Branchenstatistiken von{" "}
                <a
                  href="https://www.vssm.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  VSSM
                </a>{" "}
                (Verband Schweizerischer Schreinermeister und Möbelfabrikanten),{" "}
                <a
                  href="https://www.holzbau-schweiz.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  Holzbau Schweiz
                </a>{" "}
                und dem{" "}
                <a
                  href="https://www.bfs.admin.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-slate-800"
                >
                  Bundesamt für Statistik (BFS)
                </a>
                . Ergänzend werten wir die täglich auf schreinerjob.ch indexierten
                öffentlichen Stellenausschreibungen aus.
              </p>
              <p>
                <strong>Bandbreite und Mittelwert:</strong> Die Tabelle zeigt
                Richtbänder. Der konkrete Lohn wird im Bewerbungsprozess
                individuell verhandelt und hängt von Erfahrung, Spezialisierung,
                Arbeitgebergrösse, Branche und Region ab. Innerhalb eines Bands
                liegt die Mehrheit (rund zwei Drittel) der ausgewerteten
                Vergleichswerte.
              </p>
              <p>
                <strong>Aktualisierung:</strong> Wir überarbeiten die Lohnbänder
                jährlich beziehungsweise sofort, sobald ein Branchenverband neue
                Empfehlungen veröffentlicht oder sich die Marktlage in einer
                Region merklich verändert. Korrekturhinweise nehmen wir gerne
                über die Kontaktseite entgegen.
              </p>
            </div>
          </details>
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
