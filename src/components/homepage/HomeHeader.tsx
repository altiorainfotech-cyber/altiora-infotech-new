"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ServicesMenu } from "./ServicesMenu";
import { NAV_LINKS, PRIMARY_CTA, SITE_NAME } from "@/lib/constants";
import { services } from "@/data/homepage";
import { cn } from "@/lib/utils";

function Logo() {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3 rounded-md" aria-label={`${SITE_NAME} home`}>
      <Image src="/altiora-logo.png" alt="" width={32} height={32} priority />
      <span className="text-lg font-black tracking-tight text-ink font-mono">Altiora</span>
    </Link>
  );
}

export function HomeHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-[100] border-b border-ink/8 bg-white/95 backdrop-blur-xl transition-all duration-300",
        isScrolled && "border-ink/12 bg-white/98 shadow-[0_8px_30px_rgba(20,21,26,0.08)]"
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-[72px]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.label === "Services" ? (
              <ServicesMenu key={link.href} href={link.href} label={link.label} />
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring rounded-md text-xs font-bold uppercase tracking-wider text-muted transition-colors hover:text-blue-600"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <Button href={PRIMARY_CTA.href} showArrow={false} className="px-5 py-2.5 text-xs">
            {PRIMARY_CTA.label}
          </Button>
        </div>

        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[110] bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-[120] flex w-full max-w-xs flex-col bg-white border-l border-ink/10 p-6 shadow-2xl focus:outline-none">
              <div className="flex items-center justify-between">
                <Dialog.Title asChild>
                  <span className="text-lg font-bold text-ink font-mono">Menu</span>
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="focus-ring flex h-10 w-10 items-center justify-center rounded-md text-ink"
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </Dialog.Close>
              </div>

              <nav aria-label="Mobile" className="mt-8 flex flex-col gap-2 overflow-y-auto">
                {NAV_LINKS.map((link) =>
                  link.label === "Services" ? (
                    <div key={link.href}>
                      <div className="flex items-center justify-between rounded-lg px-3 py-1">
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="focus-ring flex-1 rounded-lg py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen((open) => !open)}
                          aria-expanded={mobileServicesOpen}
                          aria-label="Toggle services submenu"
                          className="focus-ring flex h-9 w-9 items-center justify-center rounded-md text-ink"
                        >
                          <ChevronDown
                            className={cn("h-4 w-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")}
                            aria-hidden="true"
                          />
                        </button>
                      </div>

                      {mobileServicesOpen && (
                        <div className="mb-1 flex flex-col gap-0.5 pl-3">
                          {services.map((service) => (
                            <Link
                              key={service.slug}
                              href={service.href}
                              onClick={() => setMobileOpen(false)}
                              className="focus-ring rounded-lg px-3 py-2.5 text-xs font-bold text-muted transition-colors hover:bg-surface hover:text-blue-600"
                            >
                              {service.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="focus-ring rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-surface hover:text-blue-600"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              <div className="mt-auto pt-8">
                <Button href={PRIMARY_CTA.href} showArrow={false} className="w-full">
                  {PRIMARY_CTA.label}
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Container>
    </header>
  );
}
