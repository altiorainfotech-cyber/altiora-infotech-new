"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Send, CheckCircle2, Sparkles, Mail, ShieldCheck, ArrowRight } from "lucide-react";

export function BlogNewsletterCTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubscribed(true);
  };

  return (
    <section className="relative my-16 sm:my-24 overflow-hidden">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-ink via-blue-950 to-blue-900 p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
            {/* Ambient Lighting Accents */}
            <div
              className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              {/* Text Left */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-3.5 py-1.5 text-xs font-extrabold text-gold-300 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-gold-400 fill-gold-400" />
                  <span>Knowledge Signal Dispatch</span>
                </div>

                <h2 className="mt-4 text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                  Get Weekly Tech &amp; AI Search Dispatch Direct to Your Inbox
                </h2>

                <p className="mt-3 text-sm sm:text-base text-blue-100/80 max-w-xl font-medium leading-relaxed">
                  Join 14,000+ digital leaders, tech architects, and growth marketers receiving actionable breakdown guides every Tuesday.
                </p>

                {/* Knowledge Signal Flow Metaphor */}
                <div className="mt-5 flex items-center gap-2 text-xs font-mono font-bold text-gold-400">
                  <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">KNOWLEDGE</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gold-400 animate-pulse" />
                  <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10">DISPATCH</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gold-400 animate-pulse" />
                  <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 text-emerald-400">INBOX</span>
                </div>

                <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-blue-200/90">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-gold-400" />
                    <span>Strictly Zero Spam</span>
                  </div>
                  <span>•</span>
                  <span>Unsubscribe Anytime</span>
                </div>
              </div>

              {/* Form Right */}
              <div className="lg:col-span-5">
                {subscribed ? (
                  <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-6 text-center backdrop-blur-md">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-400" />
                    <h3 className="mt-3 text-lg font-bold text-white">You're Subscribed!</h3>
                    <p className="mt-1 text-xs text-emerald-100/90">
                      Check your inbox shortly for our latest breakdown edition.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <div className="relative flex items-center">
                      <Mail className="absolute left-4 h-5 w-5 text-blue-300/60 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your work email..."
                        className="w-full rounded-xl border border-white/20 bg-white/10 pl-12 pr-4 py-3.5 text-sm font-medium text-white placeholder:text-blue-200/50 backdrop-blur-md outline-none transition-all focus:border-gold-400 focus:bg-white/15 focus:ring-4 focus:ring-gold-400/20"
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold-500 to-gold-600 px-6 py-3.5 text-sm font-extrabold text-ink shadow-lg shadow-gold-500/20 transition-all hover:from-gold-400 hover:to-gold-500 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Subscribe for Free</span>
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
