import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "blue",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "gold" | "blue";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em]",
        tone === "gold" ? "text-gold-600" : "text-blue-600",
        className
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          tone === "gold" ? "bg-gold-500" : "bg-blue-600"
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
