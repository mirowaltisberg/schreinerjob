// SEO-DECISION: Per-page editorial content for the highest-traffic role × canton
// combinations. Keyed by `${roleSlug}::${cantonSlug}`. The category page renders
// EditorialIntro only when an entry exists here — pages without an entry fall back
// to the default short layout. Word target per section: ~80 words. Total per
// page: 320+. Swiss orthography only — never use Eszett, always "ss".

export interface EditorialContent {
  /** "Was macht ein/e ROLE in CANTON?" — concrete day-to-day, regional context */
  whatDoes: string;
  /** "Lohn & Aufstiegschancen" — salary band + progression. Deep-links to /#loehne */
  salary: string;
  /** "Welche Betriebe stellen ein?" — anonymized, never names specific companies */
  employers: string;
  /** "Bewerbungs-Tipps" — practical, regional (ÖV, Pendlerregion, Sprache) */
  applicationTips: string;
}

const ENTRIES: Record<string, EditorialContent> = {
  "schreiner-efz::zh": {
    whatDoes:
      "Ein Schreiner EFZ in Zürich wechselt täglich zwischen Werkstatt und Baustelle: in der Werkstatt zugeschnittene Küchenkorpusse, Einbauschränke und Innentüren aus Massivholz und Plattenwerkstoffen, auf der Baustelle die Montage in sanierten Altbauten in den Stadtkreisen 1 bis 6. Im Kanton Zürich prägt die hohe Sanierungsdichte den Auftragsmix — viel Innenausbau in Wohnungen, gelegentlich Ladenbau in Zürich-West und im Hochschulquartier. CNC-Vorfertigung in der Werkstatt und präzise Massaufnahme vor Ort gehören gleichermassen zum Alltag. Sauberes Verleimen, Furnieren und das Verständnis für Holzfeuchte sind die täglichen Grundkompetenzen.",
    salary:
      "Ein Schreiner EFZ verdient in Zürich typisch CHF 70'000 bis 82'000 pro Jahr — am oberen Schweizer Band. Mit Vorarbeiterverantwortung in der Werkstatt oder auf der Montage steigt das Salär um 8 bis 12 Prozent. Der berufsbegleitende Abschluss als dipl. Schreiner HF (3 Jahre) oder die Höhere Fachprüfung zum eidg. dipl. Möbel- oder Innenausbau-Schreinermeister öffnet das Band CHF 95'000 bis 120'000. Wer den Schritt in die Selbstständigkeit als Kleinschreinerei macht, bewegt sich projektabhängig in einem deutlich breiteren Bereich. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Zürich besetzen vor allem Schreiner-KMU mit 5 bis 30 Mitarbeitenden Stellen — typische Bauschreinereien für Innenausbau, Türen und Küchen. Daneben suchen Möbelmanufakturen mit eigener Werkstatt im Limmattal regelmässig Fachkräfte für Möbel- und Korpusbau. Innenausbauer mit Architekturbezug rekrutieren für gehobene Wohnungs- und Geschäftsausbauten in der Innenstadt. Industrieschreinereien und Türenwerke am Stadtrand sowie im Glattal besetzen Produktions- und Montagestellen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf schreinerjob.ch sind anonymisiert, der Arbeitgeber wird im Vorgespräch offengelegt.",
    applicationTips:
      "Lege Wert auf einen kompakten Lebenslauf mit klar gelisteten Materialkenntnissen (Massivholz, MDF, Spanplatte furniert, Mineralwerkstoff) und konkreten Referenzobjekten — etwa «Wohnungsumbau Zürich-Wiedikon, 4 Zimmer, Einbauschränke und Küche, Vollausführung». Im Kanton Zürich rechnen Arbeitgeber mit täglichem Pendeln: ÖV-Knotenpunkt statt nur Wohnort angeben, weil Baustellen wechseln. CAD/CAM-Erfahrung mit gängiger Branchensoftware prominent erwähnen. Füge ein Foto deiner EFZ-Urkunde sowie zwei bis drei Werkbilder oder Lehrproben als PDF bei — viele Betriebe filtern Bewerbungen ohne sichtbares Dossier aus. Führerausweis Kategorie B und Pendelbereitschaft im Erstgespräch parat haben.",
  },

  "moebelschreiner::be": {
    whatDoes:
      "Ein Möbelschreiner im Kanton Bern entwirft und fertigt Einzelmöbel und kleine Serien — Tische, Sideboards, Einbauschränke und Designstücke aus Massivholz, kombiniert mit Plattenwerkstoffen, Metall oder Glas. Der Werkstattalltag wechselt zwischen Massaufnahme beim Kunden, CAD-Konstruktion am Bildschirm, CNC-Programmierung und sauberer Handarbeit am Werkstück. Im Kanton Bern prägen viele inhabergeführte Manufakturen im Mittelland und Emmental das Berufsbild — kleine Betriebe mit hohem gestalterischem Anspruch. Das Beherrschen klassischer Verbindungen (Zinken, Zapfen, Gratleisten) sowie das Verständnis für Holzbewegung und Oberflächenbehandlung sind tägliches Kerngeschäft.",
    salary:
      "Möbelschreiner verdienen im Kanton Bern CHF 65'000 bis 78'000 pro Jahr, je nach Erfahrung und Spezialisierungsgrad. Wer eigenständig konstruiert, am CNC programmiert und kundennah berät, erreicht das obere Drittel. Spezialisierungen auf Restaurierung, hochwertige Furniertechniken oder Mineralwerkstoff bringen Zulagen. Der Aufstieg zum Werkstattleiter, dipl. Schreiner HF oder eidg. dipl. Möbelschreinermeister öffnet das Band CHF 85'000 bis 110'000. Mit dem Schritt in die eigene kleine Manufaktur sind individuell höhere Honorare möglich, aber projekt- und auslastungsabhängig. Berufsbegleitende Weiterbildungen werden von vielen Berner Betrieben mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Bern besetzen vor allem inhabergeführte Möbelmanufakturen und kleine Schreinerbetriebe mit 3 bis 20 Mitarbeitenden Stellen für Möbelschreiner. Daneben suchen Innenausbauer mit Architekturbezug Fachkräfte für hochwertige Einzelanfertigungen — typisch sind Aufträge im gehobenen Wohnungsbau in Bern, Thun und im Berner Oberland. Restauratoren-Werkstätten mit Fokus auf Antikmöbel rekrutieren erfahrene Möbelschreiner. Auch Industrieschreinereien für Möbelserien im Mittelland besetzen regelmässig Produktionsstellen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf schreinerjob.ch sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Möbelschreiner werden für ihr handwerkliches Geschick und ihren gestalterischen Blick eingestellt — füge dem Bewerbungsdossier zwingend zwei bis vier hochauflösende Werkbilder oder Lehrproben mit kurzer Beschreibung der Konstruktion bei. Materialkenntnis (Massivholzarten, Furniere, Plattenwerkstoffe, Beschläge) sowie CAD/CAM-Erfahrung gehören in den Lebenslauf. Im Kanton Bern werden Pendelbereitschaft und Mundartverständnis geschätzt — gib ÖV-Knotenpunkt und Wohnort an. Die EFZ-Urkunde als PDF beifügen, das beschleunigt die Vorauswahl. Im Erstgespräch fragen Werkstattleiter gezielt nach Verbindungstechniken, Erfahrung mit Oberflächenbehandlung (Öl, Wachs, Lack) und nach deiner Bereitschaft zu Massaufnahmen beim Kunden.",
  },

  "innenausbauer::ag": {
    whatDoes:
      "Ein Innenausbauer im Kanton Aargau plant und montiert Einbauschränke, Wandverkleidungen, Trennwände, Akustikdecken und massgefertigte Korpusse für Wohnungen, Büros und öffentliche Bauten. Der Alltag teilt sich auf zwischen Massaufnahme beim Kunden, CAD-Konstruktion in der Werkstatt, CNC-gestützter Vorfertigung und präziser Montage vor Ort. Im Kanton Aargau prägen Wohnungsbau in den Agglomerationsgemeinden Baden, Aarau und Wettingen sowie Sanierungen kommunaler Liegenschaften das Auftragsportfolio. Daneben besetzen Industriestandorte entlang von Aare und Limmat regelmässig Aufträge für Bürotrennwände, Empfangsbereiche und Schulungsräume — sauberes Arbeiten und Zeitdisziplin sind hier täglich gefragt.",
    salary:
      "Innenausbauer verdienen im Kanton Aargau CHF 68'000 bis 82'000 pro Jahr, je nach Erfahrung und Vorarbeiterverantwortung. Mit Routine in CAD/CAM, eigenständiger Massaufnahme und Bauleitungserfahrung verschiebt sich der Marktwert ins obere Drittel. Spezialisierungen auf Mineralwerkstoff, hochwertige Furniertechniken oder Akustikbau bringen Zulagen von 5 bis 10 Prozent. Der Aufstieg zum Werkstatt- oder Projektleiter Innenausbau öffnet das Band CHF 85'000 bis 105'000. Mit dem Abschluss als dipl. Schreiner HF oder eidg. dipl. Innenausbau-Schreinermeister werden CHF 95'000 bis 115'000 realistisch. Berufsbegleitende Weiterbildungen werden im Aargau von vielen Arbeitgebern mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Aargau besetzen vor allem mittelgrosse Schreiner-KMU und spezialisierte Innenausbauer mit 10 bis 60 Mitarbeitenden Stellen. Daneben suchen Generalunternehmer und Bauleitungsbüros für kommunale Bauten und Schulhausprojekte regelmässig nach erfahrenen Montageteams. Industriestandorte in Aarau, Baden und Wettingen besetzen Aufträge für Büro- und Empfangsausbauten. Auch Türenhersteller und Trennwand-Spezialisten mit eigenem Werk im Aargau rekrutieren laufend. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf schreinerjob.ch sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Hänge eine kompakte Auswahl bearbeiteter Projekte an — Bauherrschaft anonymisiert, dafür mit Nutzungsart, Bauvolumen und deinem konkreten Anteil an Konstruktion und Montage. Im Kanton Aargau prüfen Personalverantwortliche Lebensläufe explizit auf Materialkenntnisse (Massivholz, MDF, beschichtete Plattenwerkstoffe, Mineralwerkstoff), CAD/CAM-Routine und saubere Montagedokumentation. Da Aargauer Betriebe oft auch in Solothurn, Zürich und Luzern montieren, wird Pendelbereitschaft sehr geschätzt — gib Pendelradius und Führerausweis Kategorie B an. EFZ-Urkunde als PDF beifügen, dazu ein bis zwei Werkbilder oder Lehrproben. Im Erstgespräch werden Termintreue, Massaufnahme-Routine und Koordinationsfähigkeit mit anderen Gewerken vertieft abgefragt.",
  },

  "cnc-holzbearbeiter::zg": {
    whatDoes:
      "Ein CNC-Holzbearbeiter im Kanton Zug programmiert, rüstet und bedient computergesteuerte Bearbeitungszentren — typischerweise 5-Achs-Maschinen für Korpusbau, Möbelteile und komplexe Zuschnitte. Der Alltag wechselt zwischen CAD/CAM-Programmierung am Bildschirm, Maschineneinrichtung mit Werkzeugwechsel und Nullpunktdefinition sowie laufender Qualitätskontrolle der gefertigten Teile. Im Kanton Zug prägen industriell aufgestellte Schreinereien, Türenwerke und Möbelmanufakturen das Berufsbild — moderne Maschinenparks, oft im Zweischichtbetrieb. Plattenwerkstoffe (MDF, Spanplatte beschichtet) dominieren neben Massivholz, das Verständnis für Faserrichtung, Werkzeuggeometrie und Vorschub ist täglich gefragt. Saubere Schnittkanten und kurze Rüstzeiten sind die Kernkennzahlen.",
    salary:
      "CNC-Holzbearbeiter verdienen im Kanton Zug CHF 72'000 bis 90'000 pro Jahr — am oberen Schweizer Durchschnitt. Mit Routine in CAD/CAM (typisch AlphaCAM, WoodWOP, hsbCAD oder Cabinet Vision), eigenständiger Werkzeugauswahl und schichtleitender Verantwortung verschiebt sich der Marktwert ins obere Drittel. Der Aufstieg zum CNC-Schichtleiter oder Fertigungsleiter Schreinerei öffnet das Band CHF 90'000 bis 110'000. Mit dem berufsbegleitenden Abschluss als dipl. Schreiner HF oder als Spezialist für CAD/CAM-Engineering werden CHF 100'000 bis 120'000 realistisch. Industriearbeitgeber im Kanton Zug zahlen oft marktführend, dafür wird auch Schichtbereitschaft erwartet. Die Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton Zug besetzen industriell aufgestellte Schreinereien, Türenwerke und Möbelmanufakturen mit 30 bis 200 Mitarbeitenden den Grossteil der CNC-Stellen. Daneben suchen Hersteller von Akustik- und Möbelelementen sowie Zulieferer für den Innenausbau im Raum Rotkreuz und Baar regelmässig CNC-Operateure. Industrieschreinereien für Serienteile und Spezialanfertigungen für Architekturprojekte runden das Bild ab. Auch innovative Mittelbetriebe mit eigener CAD/CAM-Abteilung und 5-Achs-Bearbeitungszentren besetzen laufend Stellen. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf schreinerjob.ch sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Liste im Lebenslauf konkrete CNC-Plattformen, CAD/CAM-Software und Materialarten auf, mit denen du gearbeitet hast — Personalverantwortliche im Kanton Zug filtern sehr genau danach. Prominent erwähnen: 5-Achs-Erfahrung, Werkzeugbibliotheks-Pflege, eigenständige Programmierung. Schichtbereitschaft (Zwei- oder Dreischicht) gehört in den Lebenslauf, weil viele Industrieschreinereien getaktet produzieren. Bring dokumentierte Programmbeispiele oder Fotos gefertigter Teile mit. Im Vorstellungsgespräch werden Rüstzeit-Optimierung, Werkzeugverschleiss-Verständnis und Qualitätskontrolle vertieft abgefragt. EFZ-Urkunde als PDF beifügen, dazu Belege für absolvierte Hersteller-Schulungen (etwa Homag, Biesse, SCM, Felder) — sie erhöhen die Trefferquote in der Vorauswahl deutlich.",
  },

  "kuechenbauer::sg": {
    whatDoes:
      "Ein Küchenbauer im Kanton St. Gallen plant, fertigt und montiert individuelle Küchen für Privatkunden, Wohnüberbauungen und gelegentlich Gastronomieobjekte. Der Alltag wechselt zwischen Beratungsgespräch beim Kunden mit Massaufnahme, CAD-Planung im Büro, Fertigung der Korpusse in der Werkstatt (oft CNC-gestützt) und der Montage vor Ort inklusive Koordination der Anschlüsse für Wasser, Strom und Lüftung. In der Ostschweiz prägen viele inhabergeführte Schreiner-KMU sowie regional verankerte Küchenstudios das Berufsbild — von Rapperswil bis ins Rheintal. Saubere Massaufnahme, präzise Fugenbilder und Materialkenntnis bei Korpus, Front und Arbeitsplatten sind tägliches Kerngeschäft.",
    salary:
      "Küchenbauer verdienen im Kanton St. Gallen CHF 68'000 bis 82'000 pro Jahr, je nach Erfahrung und Kundenverantwortung. Wer eigenständig berät, plant und montiert (Allrounder-Profil), erreicht das obere Drittel. Spezialisierungen auf hochwertige Massivholzküchen, Mineralwerkstoff-Arbeitsplatten oder die Integration von Smart-Home-Komponenten bringen Zulagen. Der Aufstieg zum Küchenplaner, Verkaufs- oder Studioleiter öffnet das Band CHF 85'000 bis 105'000. Mit dem Abschluss als dipl. Schreiner HF oder eidg. dipl. Möbelschreinermeister werden CHF 95'000 bis 115'000 realistisch. Berufsbegleitende Weiterbildungen werden in der Ostschweiz von vielen Arbeitgebern mitfinanziert. Die vollständige Lohnübersicht steht auf der Startseite.",
    employers:
      "Im Kanton St. Gallen besetzen vor allem inhabergeführte Schreiner-KMU mit 5 bis 30 Mitarbeitenden und spezialisierte Küchenbauer Stellen — typische Betriebe mit eigener Werkstatt und Ausstellungsraum. Daneben suchen regional verankerte Küchenstudios und Möbelmanufakturen Fachkräfte für Beratung, Planung und Montage. Generalunternehmer für Wohnüberbauungen rund um St. Gallen, Wil und im Rheintal besetzen Stellen für Serienküchenmontage. Industrieschreinereien für vorgefertigte Küchenelemente runden das Bild ab. Wir nennen aus Datenschutz- und Vermittlungsgründen keine Firmennamen — die Inserate auf schreinerjob.ch sind anonymisiert, den konkreten Arbeitgeber lernst du im persönlichen Erstgespräch kennen.",
    applicationTips:
      "Küchenbauer werden für die Kombination aus handwerklichem Geschick, Kundennähe und Planungsroutine eingestellt. Beton im Lebenslauf konkrete Erfahrung mit Massaufnahme, CAD-Küchenplanungssoftware und Montageleitung. Materialkenntnis (Massivholz, beschichtete Platten, Mineralwerkstoff, Naturstein) gehört prominent in das Dossier. Im Kanton St. Gallen werden Pendelbereitschaft ins gesamte Ostschweizer Einzugsgebiet (Thurgau, Appenzell, Rheintal) sowie Führerausweis Kategorie B vorausgesetzt — gib ÖV-Knotenpunkt und Wohnort an. Füge zwei bis drei Werkbilder gefertigter Küchen mit Kurzbeschrieb bei. Im Erstgespräch werden Beratungs- und Konfliktsituationen, Termintreue sowie Schnittstellen zu Sanitär- und Elektroinstallateuren vertieft abgefragt.",
  },
};

export function getEditorialContent(
  roleSlug: string,
  cantonSlug: string
): EditorialContent | null {
  return ENTRIES[`${roleSlug}::${cantonSlug}`] ?? null;
}

export const EDITORIAL_BYLINE = {
  name: "Redaktion schreinerjob.ch",
  href: "/team",
  /** ISO date — formatted at render time */
  publishedAt: "2026-05-02",
} as const;
