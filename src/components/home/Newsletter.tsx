"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#0A0204] to-[#060102] text-[#F8F3EA] border-b border-brand-gold/20 overflow-hidden">
      {/* Corner Botanical Floral Outline */}
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-15 text-brand-gold select-none">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M190 10C170 30 140 45 110 40C80 35 60 15 40 10C20 5 0 25 10 50C20 75 50 85 70 80C90 75 110 55 130 65C150 75 160 105 180 120" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 3"/>
          <path d="M195 20C175 45 155 80 140 120C125 160 100 190 70 195" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </div>

      <Container size="sm" className="relative z-10 text-center">
        <span className="text-xs uppercase font-semibold tracking-[0.25em] text-brand-gold">
          Join Our Circle
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif text-[#F8F3EA] font-normal mt-2">
          Receive 10% Off Your First Order
        </h2>
        <p className="text-xs sm:text-sm text-[#F8F3EA]/75 mt-2 max-w-md mx-auto font-sans">
          Subscribe for privileged access to new drop announcements, handloom artisan stories, and exclusive festive coupon codes.
        </p>

        {status === "success" ? (
          <div className="mt-6 p-4 rounded bg-[#240C13]/90 border border-brand-gold/40 text-[#F8F3EA] text-xs sm:text-sm">
            <p className="font-semibold text-brand-gold">Welcome to the Allure Family! 🌸</p>
            <p className="mt-1">
              Use code <strong className="font-mono text-white bg-brand-gold/25 px-1.5 py-0.5 rounded border border-brand-gold/30">ALLURE10</strong> at checkout for 10% off.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-black/40 border border-brand-gold/30 px-4 py-3 text-xs sm:text-sm rounded text-[#F8F3EA] placeholder-[#F8F3EA]/40 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold"
            />
            <Button type="submit" variant="primary" size="md" className="border border-brand-gold/40 hover:bg-[#853446]">
              Subscribe
            </Button>
          </form>
        )}

        <p className="text-[11px] text-[#F8F3EA]/60 mt-3 font-sans">
          We respect your privacy. You can unsubscribe at any time.
        </p>
      </Container>
    </section>
  );
};
