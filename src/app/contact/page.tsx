"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { CONTACT_INFO } from "@/lib/constants";
import { Icons } from "@/components/icons/Icons";
import { Button } from "@/components/common/Button";

export default function ContactPage() {
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
    <div className="py-12 sm:py-16">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold">
            We Would Love To Hear From You
          </span>
          <h1 className="mt-2 text-3xl sm:text-4xl font-serif text-brand-burgundy font-normal">
            Visit Our Boutique or Get in Touch
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
            Whether you have styling inquiries, want to custom-fit a salwar set, or wish to book a personalized saree draping session at our Perumbakkam store, we are always here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Boutique Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded border border-brand-border/60 shadow-2xs space-y-6">
              <h2 className="font-serif text-xl text-brand-burgundy">
                Chennai Flagship Store
              </h2>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-slate">
                <Icons.MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-burgundy mb-1">
                    Sekarans Grandium
                  </strong>
                  <p className="text-brand-muted leading-relaxed">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-slate">
                <Icons.Phone className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-burgundy mb-1">
                    Call / WhatsApp Support
                  </strong>
                  <p className="text-brand-muted">{CONTACT_INFO.phone}</p>
                  <a
                    href="https://wa.me/917810082627"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-1 text-green-700 font-medium hover:underline text-xs"
                  >
                    Chat on WhatsApp →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm text-brand-slate">
                <Icons.Mail className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-brand-burgundy mb-1">
                    Email Inquiries
                  </strong>
                  <p className="text-brand-muted">{CONTACT_INFO.email}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-brand-sand">
                <strong className="block text-xs uppercase tracking-wider text-brand-burgundy mb-1">
                  Store Hours
                </strong>
                <p className="text-xs text-brand-muted">
                  {CONTACT_INFO.workingHours}
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded border border-brand-border/60 shadow-2xs">
              <h2 className="font-serif text-xl sm:text-2xl text-brand-burgundy mb-2">
                Send Us a Message
              </h2>
              <p className="text-xs text-brand-muted mb-6">
                Fill out the form below and our customer styling team will reach out within 24 hours.
              </p>

              {submitted ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded text-green-800 text-center space-y-2">
                  <h3 className="font-serif text-lg font-semibold">
                    Thank You for Reaching Out!
                  </h3>
                  <p className="text-xs sm:text-sm">
                    Your inquiry has been received. Our team will contact you shortly via email or WhatsApp.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Priyadharshini"
                        className="w-full bg-brand-sand/30 border border-brand-border px-3.5 py-2.5 text-xs sm:text-sm rounded-xs focus:outline-none focus:border-brand-burgundy"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full bg-brand-sand/30 border border-brand-border px-3.5 py-2.5 text-xs sm:text-sm rounded-xs focus:outline-none focus:border-brand-burgundy"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="you@domain.com"
                      className="w-full bg-brand-sand/30 border border-brand-border px-3.5 py-2.5 text-xs sm:text-sm rounded-xs focus:outline-none focus:border-brand-burgundy"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-brand-sand/30 border border-brand-border px-3.5 py-2.5 text-xs sm:text-sm rounded-xs focus:outline-none focus:border-brand-burgundy"
                    >
                      <option>Boutique Visit & Saree Drape Appointment</option>
                      <option>Product Sizing or Fabric Query</option>
                      <option>Order Status & Tracking</option>
                      <option>Custom Salwar / Kurti Inquiries</option>
                      <option>Bulk & Bridal Gifting Orders</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-brand-slate mb-1">
                      How Can We Assist You? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about the design, occasion, or any specific help you need..."
                      className="w-full bg-brand-sand/30 border border-brand-border px-3.5 py-2.5 text-xs sm:text-sm rounded-xs focus:outline-none focus:border-brand-burgundy"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full">
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

