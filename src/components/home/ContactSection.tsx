"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CONTACT_INFO } from "@/lib/constants";
import { Icons } from "@/components/icons/Icons";
import { Button } from "@/components/common/Button";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "Boutique Visit & Styling",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact-us" className="relative py-16 sm:py-24 bg-gradient-to-b from-[#120508] via-[#0E0306] to-[#0A0204] text-[#F8F3EA] border-b border-brand-gold/20 scroll-mt-24 overflow-hidden">
      {/* Corner Botanical Floral Outline */}
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-15 text-brand-gold select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M190 10C170 30 140 45 110 40C80 35 60 15 40 10C20 5 0 25 10 50C20 75 50 85 70 80C90 75 110 55 130 65C150 75 160 105 180 120" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3"/>
          <path d="M195 20C175 45 155 80 140 120C125 160 100 190 70 195" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          <path d="M160 40C150 60 160 90 180 95C200 100 190 60 160 40Z" stroke="currentColor" strokeWidth="1"/>
          <path d="M130 80C115 95 120 120 140 125C160 130 155 95 130 80Z" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>

      <Container className="relative z-10">
        <SectionHeading
          tag="Get In Touch"
          title="Visit Our Boutique & Styling Studio"
          subtitle="Whether you have bespoke sizing inquiries or wish to reserve a personal saree draping session, our stylists are here to assist."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mt-8">
          {/* Left: Boutique Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#1C080E]/90 p-6 sm:p-8 rounded-xl border border-brand-gold/25 shadow-2xl space-y-6">
              <h3 className="font-serif text-2xl text-[#F8F3EA] font-normal">
                Flagship Boutique
              </h3>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0 mt-0.5 text-brand-gold border border-brand-gold/30">
                  <Icons.MapPin className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-brand-gold font-semibold mb-0.5">
                    Chennai Flagship Store
                  </strong>
                  <p className="text-[#F8F3EA]/75 leading-relaxed font-sans text-xs sm:text-sm">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0 mt-0.5 text-brand-gold border border-brand-gold/30">
                  <Icons.Phone className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-brand-gold font-semibold mb-0.5">
                    Concierge & WhatsApp
                  </strong>
                  <p className="text-[#F8F3EA]/75 font-sans text-xs sm:text-sm">{CONTACT_INFO.phone}</p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-brand-gold hover:text-white transition-colors"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 text-xs sm:text-sm">
                <div className="w-8 h-8 rounded-full bg-brand-gold/15 flex items-center justify-center shrink-0 mt-0.5 text-brand-gold border border-brand-gold/30">
                  <Icons.Mail className="w-4 h-4" />
                </div>
                <div>
                  <strong className="block text-brand-gold font-semibold mb-0.5">
                    Email Inquiries
                  </strong>
                  <p className="text-[#F8F3EA]/75 font-sans text-xs sm:text-sm">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-gold/20">
                <strong className="block text-xs uppercase tracking-wider text-brand-gold font-semibold mb-1">
                  Boutique Hours
                </strong>
                <p className="text-xs text-[#F8F3EA]/70 font-sans">
                  {CONTACT_INFO.workingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Right: Direct Inquiry / Appointment Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1C080E]/90 p-6 sm:p-10 rounded-xl border border-brand-gold/25 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-brand-gold/15 text-brand-gold border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto text-2xl font-serif">
                    ✓
                  </div>
                  <h3 className="text-2xl font-serif text-[#F8F3EA] font-normal">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F8F3EA]/75 max-w-md mx-auto font-sans leading-relaxed">
                    Our lead stylist will connect with you via WhatsApp or phone shortly to confirm your booking and assist with your wardrobe selection.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider text-brand-gold underline hover:text-white transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#F8F3EA] font-normal mb-2">
                    Reserve a Styling Session or Send an Inquiry
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-gold mb-1.5 font-sans">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priya Sundaram"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded border border-brand-gold/30 bg-black/40 text-[#F8F3EA] placeholder-[#F8F3EA]/40 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-gold mb-1.5 font-sans">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs rounded border border-brand-gold/30 bg-black/40 text-[#F8F3EA] placeholder-[#F8F3EA]/40 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none font-sans"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-gold mb-1.5 font-sans">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="priya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded border border-brand-gold/30 bg-black/40 text-[#F8F3EA] placeholder-[#F8F3EA]/40 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-gold mb-1.5 font-sans">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded border border-brand-gold/30 bg-[#16050A] text-[#F8F3EA] focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none font-sans"
                    >
                      <option className="bg-[#1C080E] text-[#F8F3EA]">Boutique Visit & Saree Draping</option>
                      <option className="bg-[#1C080E] text-[#F8F3EA]">Custom Fitting / Sizing Consultation</option>
                      <option className="bg-[#1C080E] text-[#F8F3EA]">Bridal & Festive Wardrobe Curation</option>
                      <option className="bg-[#1C080E] text-[#F8F3EA]">Order & Delivery Status</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-brand-gold mb-1.5 font-sans">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us what you're looking for, preferred date, or any specific weaves..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs rounded border border-brand-gold/30 bg-black/40 text-[#F8F3EA] placeholder-[#F8F3EA]/40 focus:border-brand-gold focus:ring-1 focus:ring-brand-gold outline-none font-sans resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <Button type="submit" variant="primary" size="lg" className="w-full justify-center border border-brand-gold/40 hover:bg-[#853446]">
                      Submit Inquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

