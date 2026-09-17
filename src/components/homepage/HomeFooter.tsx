import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { footerContent } from "@/data/homepage";
import { SITE_NAME } from "@/lib/constants";

export function HomeFooter() {
  return (
    <footer className="border-t border-ink/10 bg-surface py-14 sm:py-16" aria-label="Site footer">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white shadow-[inset_0_0_0_1px_rgba(10,11,13,0.08)]">
                <Image src="/logo_l6diqm.jpg" alt="" width={28} height={28} className="rounded-sm" />
              </span>
              <span className="text-lg font-bold tracking-tight text-ink">Altiora</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              {footerContent.positioning}
            </p>
          </div>

          {footerContent.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-gold-600">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="focus-ring rounded-md text-sm text-ink/70 transition-colors hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-ink/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-5">
            {footerContent.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring rounded-md text-sm text-ink/60 transition-colors hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-5">
            {footerContent.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring rounded-md text-xs text-ink/50 transition-colors hover:text-ink/80"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-ink/40">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
