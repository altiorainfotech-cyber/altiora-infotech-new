import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactSidebar } from "@/components/contact/ContactSidebar";
import { SITE_NAME, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact Us | ${SITE_NAME}`,
  description:
    "Have a question or want to discuss your project? Get in touch with Altiora Infotech. Our team of experts in Canada is ready to transform your vision into reality.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    siteName: SITE_NAME,
    title: `Contact Us | ${SITE_NAME}`,
    description:
      "Tell us about your project vision and our team will get back to you within 24 hours.",
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-white text-ink overflow-hidden pb-16 sm:pb-24">
      {/* Contact Hero Header */}
      <ContactHero />

      {/* Main Grid: Form + Sidebar */}
      <Container className="mt-6 sm:mt-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Form Left Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Contact Details & Why Choose Us Right Column */}
          <div className="lg:col-span-5">
            <ContactSidebar />
          </div>
        </div>
      </Container>
    </main>
  );
}
