"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { footerContent } from "@/data/homepage";
import { SITE_NAME } from "@/lib/constants";

export function HomeFooter() {
  return (
    <footer className="relative z-10 border-t border-ink/10 bg-surface/80 backdrop-blur-xl py-14 sm:py-16" aria-label="Site footer">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/altiora-logo.png" alt="" width={32} height={32} />
              <span className="text-lg font-black tracking-tight text-ink font-mono">Altiora</span>
            </div>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted">
              {footerContent.positioning}
            </p>
          </div>

          {footerContent.columns.map((column) => (
            <div key={column.heading}>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-gold-700">
                {column.heading}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="focus-ring rounded-md text-xs font-medium text-muted transition-colors hover:text-ink"
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
                className="focus-ring rounded-md text-xs font-medium text-muted transition-colors hover:text-gold-600"
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
                className="focus-ring rounded-md text-xs text-muted/70 transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <p className="mt-8 text-xs text-muted/50 font-mono">
          © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
