"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, PRIMARY_CTA, SITE_NAME } from "@/lib/constants";
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

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-ink/8 bg-white/90 backdrop-blur-xl transition-all duration-300",
        isScrolled && "border-ink/12 bg-white/95 shadow-[0_8px_30px_rgba(20,21,26,0.06)]"
      )}
    >
      <Container className="flex h-16 items-center justify-between sm:h-[72px]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-md text-xs font-bold uppercase tracking-wider text-muted transition-colors hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
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
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-white border-l border-ink/10 p-6 shadow-2xl focus:outline-none">
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

              <nav aria-label="Mobile" className="mt-8 flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="focus-ring rounded-lg px-3 py-3 text-sm font-bold uppercase tracking-wider text-ink transition-colors hover:bg-surface hover:text-blue-600"
                  >
                    {link.label}
                  </Link>
                ))}
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
