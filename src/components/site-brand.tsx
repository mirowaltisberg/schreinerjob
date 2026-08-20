import { cn } from "@/lib/utils";

interface SiteBrandProps {
  className?: string;
  inverse?: boolean;
}

/** A compact dovetail-joint lockup drawn in SVG; no external brand asset. */
export function SiteBrand({ className, inverse = false }: SiteBrandProps) {
  return (
    <span
      className={cn("site-brand", inverse && "site-brand--inverse", className)}
      role="img"
      aria-label="schreinerjob.ch"
    >
      <svg
        className="site-brand__mark"
        viewBox="0 0 42 42"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M5 9h13l3 7 3-7h13v24H24l-3-7-3 7H5z" />
        <path d="M9 14h8M25 14h8M9 28h8M25 28h8" />
      </svg>
      <span className="site-brand__type">
        <strong>schreiner</strong>
        <span>job.ch</span>
      </span>
    </span>
  );
}
