"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FOOTER_NAVIGATION } from "@/data/navigation";
import { CONTACT_INFO, SITE_NAME } from "@/lib/constants";
import { Container } from "@/components/common/Container";
import { Icons } from "@/components/icons/Icons";

export const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-[#060102] text-brand-ivory pt-16 pb-10 border-t-2 border-brand-gold/30">
      <Container>
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-14 border-b border-brand-gold/20">
          {/* Brand Presentation */}
          <div className="space-y-4">
            <Link href="/" className="inline-block mb-1 group">
              <div className="relative overflow-hidden rounded-xl border border-brand-gold/40 shadow-[0_8px_25px_rgba(0,0,0,0.5)] group-hover:border-brand-gold transition-all duration-300 bg-[#FAF5EE] p-1 inline-block">
                <Image
                  src="/images/logo/footer-allure-badge.png"
                  alt="Allure Collections"
                  width={220}
                  height={95}
                  priority
                  className="h-14 sm:h-16 w-auto object-contain rounded-lg"
                />
              </div>
            </Link>
            <p className="text-xs text-brand-ivory/80 leading-relaxed font-sans max-w-sm">
              A premier Indian ethnic boutique dedicated to celebrating handcrafted Jamdani sarees, soft cottons, and modern coordinates for the contemporary woman.
            </p>
            <div className="flex gap-3 pt-2">
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all"
              >
                <Icons.Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold flex items-center justify-center hover:bg-brand-gold hover:text-black transition-all"
              >
                <Icons.Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer md:cursor-auto"
              onClick={() => toggleSection("quickLinks")}
            >
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold font-serif">
                Quick Links
              </h4>
              <Icons.ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${
                  openSection === "quickLinks" ? "rotate-180" : ""
                }`}
              />
            </div>
            <ul
              className={`space-y-2.5 text-xs text-brand-ivory/80 pt-3 ${
                openSection === "quickLinks" ? "block" : "hidden md:block"
              }`}
            >
              {FOOTER_NAVIGATION.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-goldLight transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer md:cursor-auto"
              onClick={() => toggleSection("policies")}
            >
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold font-serif">
                Policies & Terms
              </h4>
              <Icons.ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${
                  openSection === "policies" ? "rotate-180" : ""
                }`}
              />
            </div>
            <ul
              className={`space-y-2.5 text-xs text-brand-ivory/80 pt-3 ${
                openSection === "policies" ? "block" : "hidden md:block"
              }`}
            >
              {FOOTER_NAVIGATION.policies.map((policy) => (
                <li key={policy.label}>
                  <Link
                    href={policy.href}
                    className="hover:text-brand-goldLight transition-colors"
                  >
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <div
              className="flex items-center justify-between cursor-pointer md:cursor-auto"
              onClick={() => toggleSection("contact")}
            >
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold font-serif">
                Contact Information
              </h4>
              <Icons.ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${
                  openSection === "contact" ? "rotate-180" : ""
                }`}
              />
            </div>
            <div
              className={`space-y-3 text-xs text-brand-ivory/80 pt-3 ${
                openSection === "contact" ? "block" : "hidden md:block"
              }`}
            >
              <div className="flex items-start gap-2.5">
                <Icons.MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Icons.Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Icons.Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="pt-2 text-[11px] text-brand-goldLight/70">
                <span>Hours: {CONTACT_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Security */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-ivory/60 gap-3">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.</p>
          <p className="text-brand-gold/80">
            Handcrafted with devotion in Chennai, India
          </p>
        </div>
      </Container>
    </footer>
  );
};
