// SEO-DECISION: Comprehensive landing page matrix covering 12 roles x 12 cantons = 144 combinations.
// Each page has unique title, description, intro text, and FAQs for content depth and
// geographic targeting without keyword cannibalization.

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingPageConfig {
  role: string;
  canton: string;
  title: string;
  description: string;
  intro: string;
  faqs: LandingFaq[];
}

// --- Role-specific content templates ---
// Used to generate unique content per role x canton combination.

interface RoleContent {
  /** Short role label for titles */
  label: string;
  /** Longer description of what this role does */
  roleDescription: string;
  /** Typical salary range string */
  salaryRange: string;
  /** Key requirements */
  requirements: string;
  /** Career progression options */
  career: string;
  /** Related roles */
  related: string[];
}

const ROLE_CONTENT: Record<string, RoleContent> = {
  "Schreiner EFZ": {
    label: "Schreiner EFZ",
    roleDescription: "Schreiner EFZ planen, fertigen und montieren Möbel, Innenausbauten, Fenster und Türen aus Holz und Holzwerkstoffen. Sie arbeiten sowohl in der Werkstatt als auch auf Baustellen.",
    salaryRange: "CHF 65'000 – 80'000",
    requirements: "Abgeschlossene 4-jährige Lehre als Schreiner EFZ, Kenntnisse in Holzbearbeitung und Oberflächenbehandlung, Fahrausweis Kategorie B.",
    career: "Weiterbildung zum Schreinermeister, Projektleiter oder Betriebsleiter. Spezialisierung auf Möbelbau, Innenausbau oder Fensterbau.",
    related: ["Zimmermann EFZ", "Innenausbauer", "Möbelschreiner"],
  },
  "Zimmermann EFZ": {
    label: "Zimmermann EFZ",
    roleDescription: "Zimmerleute EFZ bauen Holzkonstruktionen für Dächer, Wände und Brücken. Sie arbeiten hauptsächlich auf Baustellen und fertigen tragende Holzstrukturen.",
    salaryRange: "CHF 65'000 – 82'000",
    requirements: "Abgeschlossene 4-jährige Lehre als Zimmermann EFZ, körperliche Fitness, Schwindelfreiheit, Fahrausweis.",
    career: "Weiterbildung zum Zimmermeister, Holzbau-Vorarbeiter oder Polier. Spezialisierung auf Holzhausbau oder Sanierung.",
    related: ["Holzbauer", "Schreiner EFZ", "Bauleiter Holzbau"],
  },
  "Innenausbauer": {
    label: "Innenausbauer",
    roleDescription: "Innenausbauer sind spezialisiert auf den Ausbau von Innenräumen — von Einbauschränken und Wandverkleidungen über Deckenverkleidungen bis zu Trennwänden. Sie arbeiten präzise nach Plänen und Kundenwünschen.",
    salaryRange: "CHF 65'000 – 80'000",
    requirements: "Ausbildung als Schreiner EFZ oder vergleichbar, Erfahrung im Innenausbau, genaues Arbeiten nach Plan.",
    career: "Spezialisierung auf hochwertige Innenausbauten, Ladenbau oder Messebau. Weiterbildung zum Projektleiter.",
    related: ["Schreiner EFZ", "Möbelschreiner", "Montageschreiner"],
  },
  "Möbelschreiner": {
    label: "Möbelschreiner",
    roleDescription: "Möbelschreiner entwerfen und fertigen individuelle Möbel — von Massivholzmöbeln über Designmöbel bis zu Einbauküchen. Sie beherrschen traditionelle Handwerkstechniken und moderne CNC-Fertigung.",
    salaryRange: "CHF 62'000 – 78'000",
    requirements: "Ausbildung als Schreiner EFZ, Gespür für Design und Materialien, handwerkliches Geschick.",
    career: "Eigene Möbelwerkstatt, Spezialisierung auf Designmöbel oder Restaurierung. Weiterbildung in Gestaltung.",
    related: ["Schreiner EFZ", "Innenausbauer", "Küchenbauer"],
  },
  "Küchenbauer": {
    label: "Küchenbauer",
    roleDescription: "Küchenbauer planen, fertigen und montieren individuelle Küchen. Sie beraten Kunden, erstellen Massaufnahmen und koordinieren die Montage inklusive Anschlüsse für Wasser und Elektro.",
    salaryRange: "CHF 65'000 – 80'000",
    requirements: "Ausbildung als Schreiner EFZ, Erfahrung im Küchenbau, Kundenberatungskompetenz, Fahrausweis.",
    career: "Aufstieg zum Küchenplaner, Verkaufsleiter oder Filialleiter bei einem Küchenhersteller.",
    related: ["Schreiner EFZ", "Innenausbauer", "Montageschreiner"],
  },
  "Fensterbauer": {
    label: "Fensterbauer",
    roleDescription: "Fensterbauer fertigen und montieren Fenster, Türen und Fassadenelemente aus Holz, Holz-Metall oder Kunststoff. Sie sind Spezialisten für Wärmedämmung und Schallschutz.",
    salaryRange: "CHF 62'000 – 78'000",
    requirements: "Ausbildung als Schreiner EFZ oder Fensterbauer, Kenntnisse in Bautechnik und Isolierung.",
    career: "Spezialisierung auf Holz-Metall-Fenster, Weiterbildung zum Fensterbau-Techniker oder Produktionsleiter.",
    related: ["Schreiner EFZ", "Holzbauer", "Montageschreiner"],
  },
  "Holzbauer": {
    label: "Holzbauer",
    roleDescription: "Holzbauer errichten Holzkonstruktionen aller Art — von Holzhäusern und Aufstockungen über Dachstühle bis zu Holzbrücken. Sie arbeiten sowohl im Werk als auch auf der Baustelle.",
    salaryRange: "CHF 62'000 – 80'000",
    requirements: "Ausbildung als Zimmermann EFZ oder Holzbauer, Erfahrung im konstruktiven Holzbau, Teamfähigkeit.",
    career: "Weiterbildung zum Holzbau-Polier, Holzbau-Meister oder Projektleiter. Spezialisierung auf nachhaltiges Bauen.",
    related: ["Zimmermann EFZ", "Bauleiter Holzbau", "Schreiner EFZ"],
  },
  "Werkstattleiter": {
    label: "Werkstattleiter",
    roleDescription: "Werkstattleiter führen das Team in der Schreinerei, planen die Produktionsabläufe, überwachen die Qualität und sorgen für effiziente Nutzung von Maschinen und Material.",
    salaryRange: "CHF 80'000 – 100'000",
    requirements: "Ausbildung als Schreiner EFZ mit Weiterbildung, Führungserfahrung, Kenntnisse in Produktionsplanung und Arbeitssicherheit.",
    career: "Aufstieg zum Betriebsleiter oder Geschäftsführer. Spezialisierung auf Lean Production oder Digitalisierung.",
    related: ["Schreinermeister", "CNC-Holzbearbeiter", "Schreiner EFZ"],
  },
  "CNC-Holzbearbeiter": {
    label: "CNC-Holzbearbeiter",
    roleDescription: "CNC-Holzbearbeiter programmieren und bedienen computergesteuerte Holzbearbeitungsmaschinen. Sie erstellen CNC-Programme, richten Maschinen ein und überwachen die Fertigung.",
    salaryRange: "CHF 68'000 – 85'000",
    requirements: "Ausbildung als Schreiner EFZ, CNC-Programmierkenntnisse, technisches Verständnis für CAD/CAM-Systeme.",
    career: "Spezialisierung auf komplexe CNC-Bearbeitung, Weiterbildung zum Fertigungsleiter oder CAD/CAM-Spezialisten.",
    related: ["Werkstattleiter", "Schreiner EFZ", "Möbelschreiner"],
  },
  "Montageschreiner": {
    label: "Montageschreiner",
    roleDescription: "Montageschreiner montieren vorgefertigte Elemente wie Küchen, Schränke, Türen und Fenster direkt beim Kunden. Sie arbeiten selbstständig und haben direkten Kundenkontakt.",
    salaryRange: "CHF 60'000 – 75'000",
    requirements: "Ausbildung als Schreiner EFZ, handwerkliches Geschick, Kundenorientierung, Fahrausweis.",
    career: "Weiterbildung zum Serviceleiter, Spezialisierung auf Küchenmontage oder Fenstermontage.",
    related: ["Schreiner EFZ", "Küchenbauer", "Fensterbauer"],
  },
  "Schreinermeister": {
    label: "Schreinermeister",
    roleDescription: "Schreinermeister leiten Schreinereien oder Abteilungen, verantworten Auftragsabwicklung, Mitarbeiterführung, Kalkulation und Qualitätssicherung. Sie sind die höchste fachliche Qualifikation im Schreinerhandwerk.",
    salaryRange: "CHF 85'000 – 110'000",
    requirements: "Eidg. dipl. Schreinermeister oder gleichwertige Weiterbildung, Führungserfahrung, betriebswirtschaftliche Kenntnisse.",
    career: "Geschäftsführung, Gründung einer eigenen Schreinerei, Beratungstätigkeit oder Expertenfunktionen bei Verbänden.",
    related: ["Werkstattleiter", "Bauleiter Holzbau", "Schreiner EFZ"],
  },
  "Bauleiter Holzbau": {
    label: "Bauleiter Holzbau",
    roleDescription: "Bauleiter Holzbau koordinieren und überwachen Holzbauprojekte auf Baustellen. Sie sind verantwortlich für Terminplanung, Kostenkontrolle, Qualitätssicherung und die Führung von Montageteams.",
    salaryRange: "CHF 85'000 – 110'000",
    requirements: "Weiterbildung zum Holzbau-Polier oder Bauleiter, mehrjährige Berufserfahrung im Holzbau, Führungskompetenz.",
    career: "Aufstieg zum Gesamtprojektleiter, Niederlassungsleiter oder Geschäftsführer eines Holzbaubetriebs.",
    related: ["Zimmermann EFZ", "Schreinermeister", "Holzbauer"],
  },
};

// --- Canton-specific content ---

interface CantonContent {
  /** Full canton name for titles */
  name: string;
  /** Short canton abbreviation */
  abbr: string;
  /** Brief economic context for the carpentry/woodworking industry */
  context: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: {
    name: "Zürich",
    abbr: "ZH",
    context:
      "Der Kanton Zürich ist der grösste Arbeitsmarkt der Schweiz mit zahlreichen Neubauprojekten, Innenausbau-Aufträgen und einer hohen Dichte an Schreinereien und Holzbaubetrieben.",
  },
  BE: {
    name: "Bern",
    abbr: "BE",
    context:
      "Im Kanton Bern gibt es eine starke Nachfrage nach Schreiner-Fachkräften, besonders in der Bundesstadt und im Berner Oberland — von Möbelbau über Innenausbau bis zu Holzhausprojekten.",
  },
  BS: {
    name: "Basel",
    abbr: "BS",
    context:
      "Basel-Stadt und die Region Nordwestschweiz bieten attraktive Arbeitsbedingungen mit zahlreichen Schreinereien, Innenausbau-Firmen und grossen Bauprojekten im Holzbau.",
  },
  AG: {
    name: "Aargau",
    abbr: "AG",
    context:
      "Der Kanton Aargau ist ein wichtiger Standort für Schreinereien und Holzbaubetriebe mit einer hohen Nachfrage nach Schreiner-Fachkräften in Produktion und Montage.",
  },
  SG: {
    name: "St. Gallen",
    abbr: "SG",
    context:
      "Die Ostschweiz mit dem Kanton St. Gallen bietet vielfältige Möglichkeiten für Schreiner-Fachkräfte — von traditionellen Schreinereien bis zu modernen Holzbauunternehmen.",
  },
  LU: {
    name: "Luzern",
    abbr: "LU",
    context:
      "Im Kanton Luzern wächst die Nachfrage nach Schreiner-Fachkräften stetig — getrieben durch Neubauprojekte, Tourismus-Infrastruktur und den Trend zu nachhaltigem Holzbau.",
  },
  SO: {
    name: "Solothurn",
    abbr: "SO",
    context:
      "Der Kanton Solothurn bietet als Standort zwischen Bern und Basel gute Karrierechancen für Schreiner-Fachkräfte in Schreinereien, Küchenbau und Holzkonstruktion.",
  },
  ZG: {
    name: "Zug",
    abbr: "ZG",
    context:
      "Der Kanton Zug bietet als wirtschaftsstarker Standort überdurchschnittliche Löhne und spannende Projekte im Bereich hochwertiger Innenausbau und Möbelfertigung.",
  },
  TG: {
    name: "Thurgau",
    abbr: "TG",
    context:
      "Der Kanton Thurgau bietet als wachsender Wirtschaftsstandort in der Ostschweiz zunehmend Chancen für Schreiner-Fachkräfte — besonders in Holzbau, Möbelfertigung und Fensterbau.",
  },
  GR: {
    name: "Graubünden",
    abbr: "GR",
    context:
      "Im Kanton Graubünden sind Schreiner-Fachkräfte gefragt — von Chalet-Ausbau und Tourismusinfrastruktur über Holzhausprojekte bis zu traditionellem Handwerk in den Ferienorten.",
  },
  SH: {
    name: "Schaffhausen",
    abbr: "SH",
    context:
      "Der Kanton Schaffhausen bietet als kompakter Standort attraktive Stellen für Schreiner-Fachkräfte, insbesondere in Schreinereien, Innenausbau und Küchenbau.",
  },
  FR: {
    name: "Fribourg",
    abbr: "FR",
    context:
      "Der zweisprachige Kanton Fribourg wächst dynamisch und bietet Schreiner-Fachkräften vielfältige Möglichkeiten in Holzbau, Innenausbau und Möbelfertigung.",
  },
};

// --- All role keys ---
const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

// --- Content generation ---

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const relatedRolesList = role.related.join(", ");

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Aktuelle ${role.label} Stellen im Kanton ${canton.name}. ${role.roleDescription.split(".")[0]}. Jetzt bewerben auf schreinerjob.ch.`,
    intro: `Als ${role.label} in ${canton.name} findest du auf schreinerjob.ch alle aktuellen Stellenangebote in deiner Region. ${role.roleDescription} ${canton.context} Die Nachfrage nach qualifizierten ${role.label}-Fachkräften im Kanton ${canton.name} ist hoch — Arbeitgeber suchen gezielt nach Kandidaten mit ${role.requirements.split(",")[0].toLowerCase()}. Das durchschnittliche Jahresgehalt für ${role.label} in der Schweiz liegt bei ${role.salaryRange}. Verwandte Berufe wie ${relatedRolesList} bieten zusätzliche Karrieremöglichkeiten in der Schreinerbranche. ${role.career} Nutze unsere smarte Filterung nach Pensum, Umkreis und Anstellungsart, um die passende Stelle zu finden. Bewirb dich direkt online und lade deinen Lebenslauf hoch.`,
    faqs: [
      {
        question: `Was verdient ein ${role.label} im Kanton ${canton.name}?`,
        answer: `Ein ${role.label} verdient in der Schweiz durchschnittlich ${role.salaryRange} pro Jahr. Im Kanton ${canton.name} können die Löhne je nach Arbeitgeber, Erfahrung und Spezialisierung variieren.`,
      },
      {
        question: `Welche Voraussetzungen braucht man als ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Welche Karrieremöglichkeiten hat ein ${role.label}?`,
        answer: role.career,
      },
      {
        question: `Wie viele ${role.label} Jobs gibt es in ${canton.name}?`,
        answer: `Auf schreinerjob.ch findest du aktuelle ${role.label} Stellen im Kanton ${canton.name}. Die Anzahl verfügbarer Jobs variiert — nutze unsere Suche für die aktuellsten Ergebnisse.`,
      },
    ],
  };
}

// --- Build full matrix ---
export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

// --- Slug helpers ---

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function toRoleSlug(role: string): string {
  return normalizeSlug(role);
}

export function toCantonSlug(canton: string): string {
  return normalizeSlug(canton);
}

export function getLandingPath(config: LandingPageConfig): string {
  return `/schreinerjobs/${toRoleSlug(config.role)}/${toCantonSlug(config.canton)}`;
}

export function findLandingPageBySlug(roleSlug: string, cantonSlug: string): LandingPageConfig | null {
  return (
    TOP_LANDING_PAGES.find(
      (item) => toRoleSlug(item.role) === roleSlug && toCantonSlug(item.canton) === cantonSlug
    ) ?? null
  );
}

/**
 * Get landing pages for the same canton (different roles) or same role (different cantons).
 * Used for cross-linking on landing pages.
 */
export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (p) => p.canton === config.canton && p.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (p) => p.role === config.role && p.canton !== config.canton
  );

  // Mix: take some from same canton, some from same role
  const mixed: LandingPageConfig[] = [];
  const maxPerGroup = Math.ceil(limit / 2);
  mixed.push(...sameCantonDifferentRole.slice(0, maxPerGroup));
  mixed.push(...sameRoleDifferentCanton.slice(0, maxPerGroup));
  return mixed.slice(0, limit);
}
