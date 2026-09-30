import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
  headingId,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  headingId?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <h2
        id={headingId}
        className={cn(
          "font-display text-[clamp(1.85rem,3.2vw,2.9rem)] font-bold leading-[1.12] tracking-tight text-balance",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "dark" ? "text-white/70" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
