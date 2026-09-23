"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertCircle,
  Send,
  Sparkles,
} from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneCountry: string;
  phone: string;
  company: string;
  projectDescription: string;
  privacyConsent: boolean;
}

const COUNTRY_CODES = [
  { code: "+1", label: "CA/US (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+91", label: "IN (+91)" },
  { code: "+61", label: "AU (+61)" },
  { code: "+49", label: "DE (+49)" },
  { code: "+33", label: "FR (+33)" },
];

export function ContactForm() {
  const [step, setStep] = useState<1 | 2>(1);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "+1",
    phone: "",
    company: "",
    projectDescription: "",
    privacyConsent: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      newErrors.email = "Valid email address is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep1()) {
      setStep(1);
      return;
    }

    if (!formData.privacyConsent) {
      setErrors((prev) => ({ ...prev, privacyConsent: "Please Accept Privacy Terms" }));
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const maxCharCount = 2000;
  const currentCharCount = formData.projectDescription.length;
  const charProgressPct = Math.min((currentCharCount / maxCharCount) * 100, 100);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink/12 bg-white/95 p-6 sm:p-10 shadow-2xl backdrop-blur-2xl transition-all">
      {/* Metallic Gradient Header Bar */}
      <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-blue-600 via-blue-500 to-gold-400" />

      {/* Visual Metaphor Progress Bar */}
      <div className="mb-6 flex items-center justify-between text-[10px] font-mono font-bold text-muted border-b border-ink/8 pb-3">
        <span className={step === 1 ? "text-blue-600 font-extrabold" : "text-emerald-600"}>01. IDEA</span>
        <ArrowRight className="h-3 w-3 text-gold-500" />
        <span className={step === 2 ? "text-blue-600 font-extrabold" : "text-muted"}>02. DETAILS</span>
        <ArrowRight className="h-3 w-3 text-gold-500" />
        <span>03. STRATEGY</span>
        <ArrowRight className="h-3 w-3 text-gold-500" />
        <span>04. CONVERSATION</span>
      </div>

      {/* Title */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3 py-1 text-[11px] font-extrabold text-blue-700 mb-2">
          <Sparkles className="h-3 w-3 text-gold-500 fill-gold-400" />
          <span>Project Enquiry Portal</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-ink tracking-tight">Project Enquiry Form</h2>
        <p className="mt-1 text-xs sm:text-sm font-medium text-muted">
          Fill out the details below and we'll get back to you within 24 hours
        </p>
      </div>

      {submitted ? (
        /* Animated Success Screen */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="my-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-50 via-white to-surface p-8 sm:p-10 text-center shadow-lg"
        >
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 mb-4 animate-bounce">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-ink">Enquiry Successfully Received!</h3>
          <p className="mt-3 text-sm font-medium text-muted max-w-md mx-auto leading-relaxed">
            Thank you, <strong className="text-ink font-bold">{formData.firstName}</strong>. Our Canadian engineering and strategy team will review your project details and connect with you within 24 hours.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setStep(1);
              setFormData({
                firstName: "",
                lastName: "",
                email: "",
                phoneCountry: "+1",
                phone: "",
                company: "",
                projectDescription: "",
                privacyConsent: false,
              });
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-ink px-7 py-3.5 text-xs font-extrabold text-white shadow-md transition-all hover:bg-blue-600 hover:scale-[1.02]"
          >
            Submit Another Enquiry
          </button>
        </motion.div>
      ) : (
        /* Form Content */
        <div>
          {/* Step Navigation Bar */}
          <div className="mb-8 grid grid-cols-2 gap-3 border-b border-ink/8 pb-6">
            <button
              type="button"
              onClick={() => setStep(1)}
              className={`flex items-center gap-3 rounded-2xl p-3.5 text-left transition-all ${
                step === 1
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 ring-2 ring-blue-600/30"
                  : "bg-surface border border-ink/8 hover:bg-white text-ink"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-colors ${
                  step === 1 ? "bg-white text-blue-700" : "bg-ink/10 text-muted"
                }`}
              >
                1
              </span>
              <div>
                <div className={`text-xs font-black ${step === 1 ? "text-white" : "text-ink"}`}>Step 1</div>
                <div className={`text-[11px] font-semibold ${step === 1 ? "text-blue-100" : "text-muted"}`}>
                  Personal Information
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => {
                if (validateStep1()) setStep(2);
              }}
              className={`flex items-center gap-3 rounded-2xl p-3.5 text-left transition-all ${
                step === 2
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25 ring-2 ring-blue-600/30"
                  : "bg-surface border border-ink/8 hover:bg-white text-ink"
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl text-xs font-black transition-colors ${
                  step === 2 ? "bg-white text-blue-700" : "bg-ink/10 text-muted"
                }`}
              >
                2
              </span>
              <div>
                <div className={`text-xs font-black ${step === 2 ? "text-white" : "text-ink"}`}>Step 2</div>
                <div className={`text-[11px] font-semibold ${step === 2 ? "text-blue-100" : "text-muted"}`}>
                  Project Details
                </div>
              </div>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 ? (
                /* Step 1: Personal Information */
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-700 mb-2">
                    <User className="h-4 w-4 text-blue-600" />
                    <span>Personal Information</span>
                  </div>

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold text-ink mb-1.5">
                        First Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => {
                          setFormData({ ...formData, firstName: e.target.value });
                          if (errors.firstName) setErrors({ ...errors, firstName: "" });
                        }}
                        placeholder="John"
                        className={`w-full rounded-xl border bg-surface/60 px-4 py-3.5 text-sm font-medium text-ink outline-none transition-all focus:bg-white focus:ring-4 focus:ring-blue-600/10 ${
                          errors.firstName ? "border-rose-500 focus:border-rose-500" : "border-ink/12 focus:border-blue-600"
                        }`}
                      />
                      {errors.firstName && (
                        <p className="mt-1 text-[11px] font-bold text-rose-500">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold text-ink mb-1.5">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        className="w-full rounded-xl border border-ink/12 bg-surface/60 px-4 py-3.5 text-sm font-medium text-ink outline-none transition-all focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label className="block text-xs font-extrabold text-ink mb-1.5">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="absolute left-4 h-4 w-4 text-muted/70 pointer-events-none" />
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        placeholder="john@example.com"
                        className={`w-full rounded-xl border bg-surface/60 pl-11 pr-4 py-3.5 text-sm font-medium text-ink outline-none transition-all focus:bg-white focus:ring-4 focus:ring-blue-600/10 ${
                          errors.email ? "border-rose-500 focus:border-rose-500" : "border-ink/12 focus:border-blue-600"
                        }`}
                      />
                    </div>
                    {errors.email && <p className="mt-1 text-[11px] font-bold text-rose-500">{errors.email}</p>}
                  </div>

                  {/* Phone Field with Country Selector */}
                  <div>
                    <label className="block text-xs font-extrabold text-ink mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex gap-2.5">
                      <select
                        value={formData.phoneCountry}
                        onChange={(e) => setFormData({ ...formData, phoneCountry: e.target.value })}
                        className="rounded-xl border border-ink/12 bg-surface/60 px-3.5 py-3.5 text-xs font-bold text-ink outline-none focus:border-blue-600 focus:bg-white shrink-0 cursor-pointer"
                      >
                        {COUNTRY_CODES.map((c) => (
                          <option key={c.code} value={c.code}>
                            {c.label}
                          </option>
                        ))}
                      </select>
                      <div className="relative flex-1 flex items-center">
                        <Phone className="absolute left-4 h-4 w-4 text-muted/70 pointer-events-none" />
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            if (errors.phone) setErrors({ ...errors, phone: "" });
                          }}
                          placeholder="(604) 555-0199"
                          className={`w-full rounded-xl border bg-surface/60 pl-11 pr-4 py-3.5 text-sm font-medium text-ink outline-none transition-all focus:bg-white focus:ring-4 focus:ring-blue-600/10 ${
                            errors.phone ? "border-rose-500 focus:border-rose-500" : "border-ink/12 focus:border-blue-600"
                          }`}
                        />
                      </div>
                    </div>
                    {errors.phone && <p className="mt-1 text-[11px] font-bold text-rose-500">{errors.phone}</p>}
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-xs font-extrabold text-ink mb-1.5">Company / Organization</label>
                    <div className="relative flex items-center">
                      <Building className="absolute left-4 h-4 w-4 text-muted/70 pointer-events-none" />
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp Inc."
                        className="w-full rounded-xl border border-ink/12 bg-surface/60 pl-11 pr-4 py-3.5 text-sm font-medium text-ink outline-none transition-all focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10"
                      />
                    </div>
                  </div>

                  {/* Proceed to Step 2 */}
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full flex items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20 transition-all hover:bg-blue-700 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <span>Proceed to Step 2: Project Details</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Step 2: Tell Us About Your Project */
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-blue-700">
                      <FileText className="h-4 w-4 text-blue-600" />
                      <span>Tell Us About Your Project</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-muted hover:text-ink"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" />
                      Back to Step 1
                    </button>
                  </div>

                  {/* Project Description with Dynamic Character Counter & Progress Bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="block text-xs font-extrabold text-ink">
                        Project Description <span className="text-muted font-normal">(optional, 0-2000 characters if provided)</span>
                      </label>
                      <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        {currentCharCount}/{maxCharCount}
                      </span>
                    </div>

                    {/* Progress Bar indicator */}
                    <div className="w-full bg-ink/10 h-1.5 rounded-full overflow-hidden mb-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-gold-500 h-full transition-all duration-300"
                        style={{ width: `${charProgressPct}%` }}
                      />
                    </div>

                    <textarea
                      rows={5}
                      maxLength={maxCharCount}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Share details about your vision, goals, timeline, or tech stack requirements..."
                      className="w-full rounded-xl border border-ink/12 bg-surface/60 p-4 text-sm font-medium text-ink outline-none transition-all focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/10 leading-relaxed"
                    />
                  </div>

                  {/* Privacy Consent Checkbox Box */}
                  <div className="rounded-2xl border border-ink/10 bg-surface/80 p-4 sm:p-5">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.privacyConsent}
                        onChange={(e) => {
                          setFormData({ ...formData, privacyConsent: e.target.checked });
                          if (errors.privacyConsent) setErrors({ ...errors, privacyConsent: "" });
                        }}
                        className="mt-1 h-4 w-4 rounded border-ink/20 text-blue-600 focus:ring-blue-600 cursor-pointer shrink-0"
                      />
                      <span className="text-xs font-medium text-muted leading-relaxed">
                        <strong className="text-ink font-extrabold">Privacy Consent:</strong> I consent to Altiora Infotech storing and processing my contact details to respond to this enquiry. Your information will be kept secure and used solely for communication purposes.
                      </span>
                    </label>

                    {/* Error Alert Box when Terms not accepted */}
                    {errors.privacyConsent && (
                      <div className="mt-3 flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 p-3 text-xs font-extrabold text-rose-600 shadow-xs animate-shake">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{errors.privacyConsent}</span>
                      </div>
                    )}
                  </div>

                  {/* Form Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-full sm:w-auto rounded-xl border border-ink/12 bg-surface px-6 py-3.5 text-xs font-extrabold text-ink hover:bg-white transition-colors"
                    >
                      Back
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-blue-700 to-ink py-4 text-sm font-black text-white shadow-xl shadow-blue-600/20 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing Enquiry...</span>
                      ) : (
                        <>
                          <span>Submit Project Enquiry</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      )}
    </div>
  );
}
