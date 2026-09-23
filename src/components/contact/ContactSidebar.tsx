"use client";

import { useState } from "react";
import { CONTACT_INFO } from "@/data/contact";
import {
  Mail,
  MapPin,
  Check,
  Copy,
  Clock,
  Sparkles,
  Shield,
  Layers,
  Award,
  Headphones,
  ExternalLink,
  Navigation,
  ArrowRight,
  Lock,
} from "lucide-react";

export function ContactSidebar() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Contact Direct Info Box */}
      <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-gradient-to-br from-white/95 via-surface/90 to-blue-50/50 p-6 sm:p-8 shadow-xl backdrop-blur-2xl">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 text-[11px] font-extrabold text-blue-700 mb-3">
          <Sparkles className="h-3 w-3 text-gold-500 fill-gold-400" />
          <span>Global Direct Desk</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-ink tracking-tight">Direct Encrypted Channel</h3>
        <p className="mt-1 text-xs sm:text-sm font-medium text-muted">USER → ENCRYPTED ENQUIRY → ALTIORA</p>

        {/* Encrypted Channel Visual Badge */}
        <div className="mt-4 flex items-center gap-2 p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-blue-900">
          <Lock className="h-3.5 w-3.5 text-blue-600 shrink-0" />
          <span>TLS 1.3 Direct Stream Active</span>
        </div>

        {/* Email Card */}
        <div className="mt-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500/40">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 shadow-xs">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-black text-ink">Direct Desk Email</div>
                <div className="text-[11px] font-bold text-blue-700">Quick response guaranteed</div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="p-2 text-muted hover:text-ink transition-colors rounded-lg hover:bg-surface border border-ink/8"
              title="Copy Email"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="mt-3.5 block text-sm sm:text-base font-black text-ink hover:text-blue-600 transition-colors"
          >
            {CONTACT_INFO.email}
          </a>

          <div className="mt-2 flex items-center gap-1.5 text-[11px] font-bold text-muted">
            <Clock className="h-3.5 w-3.5 text-gold-500" />
            <span>{CONTACT_INFO.emailResponseGuarantee}</span>
          </div>
        </div>

        {/* Office Address Card */}
        <div className="mt-4 rounded-2xl border border-ink/10 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-500/40">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-700 shadow-xs">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-black text-ink">Office Address</div>
                <div className="text-[11px] font-bold text-gold-700">Canada Headquarters</div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=2210+-+13778+100+Ave,+Surrey,+BC,+Canada"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted hover:text-blue-600 transition-colors rounded-lg hover:bg-surface border border-ink/8"
              title="View on Google Maps"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="text-sm font-black text-ink">{CONTACT_INFO.address.company}</div>
          <p className="mt-1 text-xs font-medium text-muted leading-relaxed">
            {CONTACT_INFO.address.fullAddress}
          </p>

          <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg w-fit border border-blue-200">
            <Navigation className="h-3 w-3" />
            <span>Surrey, BC, Canada • 49.1913° N, 122.8490° W</span>
          </div>
        </div>
      </div>

      {/* Why Choose Us Highlight Box with 3 Connected Trust Signals */}
      <div className="relative overflow-hidden rounded-3xl border border-blue-900/30 bg-gradient-to-br from-ink via-blue-950 to-blue-900 p-6 sm:p-8 text-white shadow-2xl">
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gold-500/15 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-gold-400/30 bg-gold-500/10 px-3 py-1 text-[11px] font-extrabold text-gold-300 mb-3 backdrop-blur-md">
            <Shield className="h-3 w-3 text-gold-400" />
            <span>3 Connected Trust Signals</span>
          </div>

          <h3 className="text-xl font-black text-white">Why Choose Altiora</h3>
          <p className="mt-1 text-xs text-blue-100/80 font-medium leading-relaxed">
            COMMUNICATION → EXECUTION → VALUE
          </p>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-500/20 text-gold-400 mt-0.5">
                <Headphones className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-xs font-black text-white flex items-center gap-1">
                  <span>01. COMMUNICATION</span>
                  <ArrowRight className="h-3 w-3 text-gold-400" />
                </div>
                <div className="text-[11px] text-blue-200/70 font-medium">24/7 direct channel &amp; executive responsiveness.</div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/20 text-blue-300 mt-0.5">
                <Layers className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-xs font-black text-white flex items-center gap-1">
                  <span>02. EXECUTION</span>
                  <ArrowRight className="h-3 w-3 text-gold-400" />
                </div>
                <div className="text-[11px] text-blue-200/70 font-medium">Agile engineering, sub-second code &amp; design precision.</div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 mt-0.5">
                <Award className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-xs font-black text-white">03. VALUE</div>
                <div className="text-[11px] text-blue-200/70 font-medium">Enterprise quality with compounding growth ROI.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
