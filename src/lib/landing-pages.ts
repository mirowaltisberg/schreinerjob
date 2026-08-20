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
  roleDescription: string;
  requirements: string;
  career: string;
  cantonContext: string;
  faqs: LandingFaq[];
}

interface RoleContent {
  label: string;
  roleDescription: string;
  requirements: string;
  career: string;
}

// Schreiner-only search labels. Broad or neighbouring trades are deliberately
// excluded from public SEO navigation.
const ROLE_CONTENT: Record<string, RoleContent> = {
  "Schreiner EFZ": {
    label: "Schreiner EFZ",
    roleDescription:
      "Schreinerinnen und Schreiner EFZ fertigen je nach Fachrichtung Möbel, Küchen, Türen, Fenster oder weitere Bauteile aus Holz und Holzwerkstoffen und montieren sie in Werkstatt oder Bauprojekt.",
    requirements:
      "Für Stellen mit dem geschützten EFZ-Titel ist in der Regel ein entsprechender Abschluss oder eine im Inserat als gleichwertig bezeichnete Qualifikation erforderlich.",
    career:
      "Das offizielle Berufsprofil nennt Projektleiter/in Schreinerei BP, Produktionsleiter/in Schreinerei BP, Schreinermeister/in HFP und Holztechniker/in HF Schreinerei/Innenausbau als mögliche Weiterbildungen.",
  },
  Montageschreiner: {
    label: "Montageschreiner",
    roleDescription:
      "Montageschreinerinnen und Montageschreiner bauen Möbel, Küchen, Türen und Innenausbauteile auf der Baustelle ein, passen Bauteile an und kontrollieren Funktion und Abschluss.",
    requirements:
      "Massgebend sind die im Inserat verlangte Schreinergrundbildung, Montagepraxis, Planverständnis und gegebenenfalls ein Führerausweis.",
    career:
      "Weiterbildungen in Projektleitung, Produktionsleitung oder Holztechnik hängen vom vorhandenen Abschluss und der Berufspraxis ab.",
  },
  Bankschreiner: {
    label: "Bankschreiner",
    roleDescription:
      "Bankschreinerinnen und Bankschreiner fertigen Einzelteile und Baugruppen in der Werkstatt, bearbeiten Massivholz und Plattenwerkstoffe und prüfen Masse, Oberflächen und Beschläge.",
    requirements:
      "Massgebend sind die verlangte Schreinerqualifikation sowie Erfahrung mit Werkstattmaschinen, Zeichnungen und den ausgeschriebenen Materialien.",
    career:
      "Mögliche Entwicklungsschritte führen je nach Praxis in Werkstattleitung, AVOR, Produktion oder eine formale Weiterbildung.",
  },
  "CNC-Maschinist Schreinerei": {
    label: "CNC-Maschinist Schreinerei",
    roleDescription:
      "CNC-Funktionen in Schreinereien umfassen das Einrichten, Programmieren oder Bedienen von Bearbeitungszentren sowie die Kontrolle von Werkzeugen, Werkstücken und Masshaltigkeit.",
    requirements:
      "Die verlangte Schreiner- oder Holztechnikpraxis, Maschinenkenntnis und Softwareerfahrung ergibt sich aus dem konkreten Inserat.",
    career:
      "Je nach Vorbildung kommen Vertiefungen in CNC, Produktion, AVOR oder Holztechnik infrage; die Zulassung ist beim Anbieter zu prüfen.",
  },
  "AVOR Schreinerei": {
    label: "AVOR Schreinerei",
    roleDescription:
      "AVOR-Stellen bereiten Aufträge für Werkstatt und Montage vor, erstellen Stücklisten und Produktionsunterlagen und koordinieren Materialien, Beschläge und Termine.",
    requirements:
      "Ausbildung, Schreinerpraxis, CAD- oder ERP-Kenntnisse und Erfahrung mit Produktionsunterlagen sind je nach Inserat unterschiedlich gewichtet.",
    career:
      "Eine AVOR-Funktion kann je nach Abschluss zu Projektleitung, Produktionsleitung oder Holztechnik führen; daraus folgt keine pauschale Aufstiegszusage.",
  },
  "Projektleiter Schreinerei": {
    label: "Projektleiter Schreinerei",
    roleDescription:
      "Projektleitungsstellen in der Schreinerei können Beratung, Kalkulation, Planung, Termin- und Kostensteuerung sowie die Abstimmung zwischen Kundschaft, Werkstatt und Montage umfassen.",
    requirements:
      "Massgebend sind die ausgeschriebene Schreinergrundbildung, Fachpraxis und gegebenenfalls Führungserfahrung oder eine Berufsprüfung.",
    career:
      "Projektleiter/in Schreinerei mit eidgenössischem Fachausweis ist ein offizieller Weiterbildungsabschluss; Zulassungsbedingungen sind beim Bildungsträger zu prüfen.",
  },
};

interface CantonContent {
  name: string;
  abbr: string;
}

const CANTON_CONTENT: Record<string, CantonContent> = {
  ZH: { name: "Zürich", abbr: "ZH" },
  BE: { name: "Bern", abbr: "BE" },
  BS: { name: "Basel-Stadt", abbr: "BS" },
  AG: { name: "Aargau", abbr: "AG" },
  SG: { name: "St. Gallen", abbr: "SG" },
  LU: { name: "Luzern", abbr: "LU" },
  SO: { name: "Solothurn", abbr: "SO" },
  ZG: { name: "Zug", abbr: "ZG" },
  TG: { name: "Thurgau", abbr: "TG" },
  GR: { name: "Graubünden", abbr: "GR" },
  SH: { name: "Schaffhausen", abbr: "SH" },
  FR: { name: "Freiburg", abbr: "FR" },
};

const ALL_ROLES = Object.keys(ROLE_CONTENT);
const ALL_CANTONS = Object.keys(CANTON_CONTENT);

function buildLandingConfig(roleKey: string, cantonKey: string): LandingPageConfig {
  const role = ROLE_CONTENT[roleKey];
  const canton = CANTON_CONTENT[cantonKey];

  if (!role || !canton) {
    throw new Error(`Invalid role "${roleKey}" or canton "${cantonKey}"`);
  }

  const cantonContext = `Der Ortsfilter verwendet den Kanton ${canton.name} (${canton.abbr}). Der genaue Arbeitsort und ein allfälliger Einsatzradius ergeben sich aus dem jeweiligen Inserat.`;

  return {
    role: roleKey,
    canton: cantonKey,
    title: `${role.label} Jobs in ${canton.name}`,
    description: `Stelleninserate mit Bezug zu ${role.label} im Kanton ${canton.name}. Aufgaben, Anforderungen und Arbeitsort im jeweiligen Inserat prüfen.`,
    intro: `Diese Suchseite zeigt Treffer für ${role.label} mit Ortsbezug zum Kanton ${canton.name}. Sie erhebt keinen Anspruch auf Vollständigkeit. ${cantonContext}`,
    roleDescription: role.roleDescription,
    requirements: role.requirements,
    career: role.career,
    cantonContext,
    faqs: [
      {
        question: `Wie viele ${role.label} Stellen gibt es in ${canton.name}?`,
        answer: `Die Zahl der Treffer wird auf dieser Seite aus dem aktuellen öffentlichen Bestand berechnet und kann sich ändern. schreinerjob.ch verspricht keine vollständige Marktabdeckung.`,
      },
      {
        question: `Welche Voraussetzungen gelten für ${role.label}?`,
        answer: role.requirements,
      },
      {
        question: `Was verdient ein ${role.label} in ${canton.name}?`,
        answer: `Massgebend ist eine Lohnangabe im konkreten Inserat oder Arbeitsvertrag. Für statistische Vergleiche verweist schreinerjob.ch auf Salarium des Bundesamts für Statistik; eigene pauschale Lohnbänder werden nicht ergänzt.`,
      },
      {
        question: `Wo befindet sich die Stelle im Kanton ${canton.name}?`,
        answer: cantonContext,
      },
    ],
  };
}

export const TOP_LANDING_PAGES: LandingPageConfig[] = ALL_ROLES.flatMap((roleKey) =>
  ALL_CANTONS.map((cantonKey) => buildLandingConfig(roleKey, cantonKey))
);

function normalizeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/\u00df/g, "ss")
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

export function getRelatedLandingPages(config: LandingPageConfig, limit = 8): LandingPageConfig[] {
  const sameCantonDifferentRole = TOP_LANDING_PAGES.filter(
    (page) => page.canton === config.canton && page.role !== config.role
  );
  const sameRoleDifferentCanton = TOP_LANDING_PAGES.filter(
    (page) => page.role === config.role && page.canton !== config.canton
  );
  const maxPerGroup = Math.ceil(limit / 2);
  return [
    ...sameCantonDifferentRole.slice(0, maxPerGroup),
    ...sameRoleDifferentCanton.slice(0, maxPerGroup),
  ].slice(0, limit);
}
