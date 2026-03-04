/**
 * Approximate annual CHF salary ranges for Swiss carpentry/woodworking trade roles.
 * Used when no salary data is available from the job source.
 */

export interface SalaryRange {
  min: number;
  max: number;
}

/**
 * Pattern -> salary range mapping.
 * Checked top-to-bottom; first match wins, so put specific roles before generic ones.
 */
const ROLE_SALARY_MAP: { patterns: string[]; range: SalaryRange }[] = [
  // Leadership / senior roles
  { patterns: ["schreinermeister", "meister"], range: { min: 85_000, max: 110_000 } },
  { patterns: ["bauleiter"], range: { min: 85_000, max: 110_000 } },
  { patterns: ["werkstattleiter", "produktionsleiter"], range: { min: 80_000, max: 100_000 } },
  // Specialized roles
  { patterns: ["cnc", "cnc-holz"], range: { min: 68_000, max: 85_000 } },
  { patterns: ["küchenbauer", "küchenmonteur"], range: { min: 65_000, max: 80_000 } },
  { patterns: ["zimmermann", "zimmerfrau"], range: { min: 65_000, max: 82_000 } },
  // Core trades
  { patterns: ["schreiner"], range: { min: 65_000, max: 80_000 } },
  { patterns: ["innenausbau"], range: { min: 65_000, max: 80_000 } },
  { patterns: ["fensterbau", "fenstermonteur"], range: { min: 62_000, max: 78_000 } },
  { patterns: ["möbelschreiner", "möbelbau"], range: { min: 62_000, max: 78_000 } },
  { patterns: ["montageschreiner", "montage"], range: { min: 60_000, max: 75_000 } },
  { patterns: ["holzbau", "holzbauer"], range: { min: 62_000, max: 80_000 } },
  // Broad fallbacks
  { patterns: ["holz", "schreinerei"], range: { min: 62_000, max: 78_000 } },
  { patterns: ["tischler"], range: { min: 62_000, max: 78_000 } },
  { patterns: ["monteur"], range: { min: 58_000, max: 72_000 } },
];

/**
 * Estimate an annual CHF salary range from a job title.
 * Returns `null` when no pattern matches.
 */
export function estimateSalary(title: string): SalaryRange | null {
  const lower = title.toLowerCase();

  for (const entry of ROLE_SALARY_MAP) {
    for (const pattern of entry.patterns) {
      if (lower.includes(pattern)) {
        return entry.range;
      }
    }
  }

  return null;
}

/**
 * Format a salary range as a Swiss-locale string, e.g. "75'000 – 95'000".
 */
export function formatSalaryRange(range: SalaryRange): string {
  const fmt = (n: number) =>
    n.toLocaleString("de-CH", { maximumFractionDigits: 0 });
  return `${fmt(range.min)} – ${fmt(range.max)}`;
}
