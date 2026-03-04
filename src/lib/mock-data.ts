export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string; // e.g. "Full-time", "Part-time"
  workload: string; // e.g. "80-100%"
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  datePosted: string;
  isUrgent?: boolean;
  isNew?: boolean;
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Schreiner EFZ (m/w/d)",
    company: "Holzwerk Müller AG",
    location: "Zürich, ZH",
    type: "Full-time",
    workload: "100%",
    description: "Wir suchen einen engagierten Schreiner für vielseitige Möbelbau- und Innenausbau-Projekte im Raum Zürich.",
    responsibilities: [
      "Fertigung von Möbeln und Einbauschränken nach Mass",
      "Montage von Innenausbauten beim Kunden",
      "Arbeiten an konventionellen und CNC-Maschinen",
      "Dokumentation der ausgeführten Arbeiten"
    ],
    requirements: [
      "Abgeschlossene Lehre als Schreiner EFZ",
      "Einige Jahre Berufserfahrung von Vorteil",
      "Gute Deutschkenntnisse",
      "Führerausweis Kategorie B"
    ],
    benefits: [
      "Überdurchschnittliches Gehalt",
      "Moderne Werkstatt mit CNC-Maschinen",
      "5 Wochen Ferien",
      "Weiterbildungsmöglichkeiten"
    ],
    datePosted: "2026-02-24",
    isNew: true,
  },
  {
    id: "2",
    title: "Zimmermann EFZ",
    company: "Alpin Holzbau GmbH",
    location: "Bern, BE",
    type: "Full-time",
    workload: "80-100%",
    description: "Unterstützen Sie unser Team bei der Umsetzung von modernen Holzbauprojekten in der Region Bern.",
    responsibilities: [
      "Errichten von Holzkonstruktionen und Dachstühlen",
      "Montage von Holzhauselementen",
      "Abbund und Vorfertigung im Werk",
      "Allgemeine Zimmerarbeiten auf Baustellen"
    ],
    requirements: [
      "Abgeschlossene Ausbildung als Zimmermann EFZ",
      "Körperliche Fitness und Schwindelfreiheit",
      "Teamfähigkeit und genaue Arbeitsweise"
    ],
    benefits: [
      "Junges und dynamisches Team",
      "Flache Hierarchien",
      "Gute Sozialleistungen"
    ],
    datePosted: "2026-02-20",
  },
  {
    id: "3",
    title: "Werkstattleiter Schreinerei (w/m)",
    company: "Eiche Möbel AG",
    location: "Basel, BS",
    type: "Full-time",
    workload: "100%",
    description: "Leiten Sie unsere Schreinerei-Werkstatt und koordinieren Sie die Produktion von hochwertigen Möbeln und Innenausbauten.",
    responsibilities: [
      "Führung und Organisation des Werkstatt-Teams",
      "Produktionsplanung und Qualitätskontrolle",
      "Koordination mit Projektleitung und Kunden",
      "Optimierung der Arbeitsabläufe"
    ],
    requirements: [
      "Ausbildung als Schreiner EFZ mit Weiterbildung",
      "Führungserfahrung in einer ähnlichen Position",
      "Kenntnisse in Produktionsplanung und CNC-Technik",
      "Organisationsgeschick und souveränes Auftreten"
    ],
    benefits: [
      "Attraktives Bonusmodell",
      "Moderne Maschinenausstattung",
      "Flexible Arbeitszeiten"
    ],
    datePosted: "2026-02-23",
    isUrgent: true,
  },
  {
    id: "4",
    title: "Küchenbauer / Küchenmonteur",
    company: "Swiss Küchen GmbH",
    location: "Luzern, LU",
    type: "Full-time",
    workload: "100%",
    description: "Sie planen und montieren hochwertige Küchen bei unseren Kunden in der Zentralschweiz.",
    responsibilities: [
      "Montage von Küchen inklusive Geräte-Einbau",
      "Massaufnahmen und Kundenberatung vor Ort",
      "Anpassungsarbeiten und Nachbesserungen",
      "Koordination mit Sanitär- und Elektro-Installateuren"
    ],
    requirements: [
      "Berufsabschluss als Schreiner EFZ oder vergleichbar",
      "Erfahrung im Küchenbau und -montage",
      "Selbständige und kundenorientierte Arbeitsweise"
    ],
    benefits: [
      "Firmenfahrzeug",
      "Geregelte Arbeitszeiten",
      "Gute Anbindung an den ÖV"
    ],
    datePosted: "2026-02-18",
  },
  {
    id: "5",
    title: "Montageschreiner",
    company: "Kern Innenausbau AG",
    location: "St. Gallen, SG",
    type: "Part-time",
    workload: "60-80%",
    description: "Als Montageschreiner montieren Sie vorgefertigte Möbel und Innenausbauten direkt bei unseren Kunden.",
    responsibilities: [
      "Montage von Einbauschränken, Türen und Verkleidungen",
      "Anpassungsarbeiten vor Ort beim Kunden",
      "Kontrolle der gelieferten Elemente",
      "Kundenberatung und Übergabe"
    ],
    requirements: [
      "Ausbildung als Schreiner EFZ",
      "Freude am Kundenkontakt und gepflegtes Auftreten",
      "Handwerkliches Geschick und Genauigkeit",
      "Gültiger Fahrausweis"
    ],
    benefits: [
      "Hohe Selbständigkeit",
      "Firmenfahrzeug mit Werkzeug",
      "Leistungsgerechte Entlöhnung"
    ],
    datePosted: "2026-02-25",
    isNew: true,
  }
];
