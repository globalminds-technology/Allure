"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { CONTACT_INFO } from "@/lib/constants";
import { Icons } from "@/components/icons/Icons";

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, onClose }) => {
  const [expandedMenu, setExpandedMenu] = useState<string | null>("Shop By Type");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white shadow-2xl z-50 flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="p-4 border-b border-brand-border flex items-center justify-between bg-brand-ivory">
            <Link href="/" onClick={onClose}>
              <Image
                src="/images/logo/navbar-draped-logo.png"
                alt="Allure Collections"
                width={130}
                height={45}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-1.5 text-brand-charcoal hover:text-brand-burgundy rounded-md"
            >
              <Icons.X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="py-2">
            {MAIN_NAVIGATION.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = expandedMenu === item.label;

              return (
                <div key={item.label} className="border-b border-brand-border/40">
                  <div className="flex items-center justify-between px-5 py-3.5">
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        if (item.href.includes("#")) {
                          e.preventDefault();
                          const id = item.href.split("#")[1];
                          const elem = document.getElementById(id);
                          if (elem) elem.scrollIntoView({ behavior: "smooth" });
                        }
                        onClose();
                      }}
                      className="text-xs font-semibold tracking-widest uppercase text-brand-burgundy flex items-center gap-2"
                    >
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[9px] bg-brand-gold text-white px-1.5 py-0.5 rounded font-bold">
                          {item.badge}
                        </span>
                      )}
                    </Link>

                    {hasChildren && (
                      <button
                        onClick={() =>
                          setExpandedMenu(isExpanded ? null : item.label)
                        }
                        className="p-1.5 text-brand-muted hover:text-brand-burgundy"
                      >
                        <Icons.ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isExpanded && (
                    <div className="bg-brand-ivory/50 px-6 py-2 space-y-2 border-t border-brand-border/30">
                      {item.children!.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={onClose}
                          className="flex items-center justify-between py-2 text-xs text-brand-charcoal hover:text-brand-burgundy font-medium"
                        >
                          <span>{child.label}</span>
                          {child.badge && (
                            <span className="text-[9px] text-brand-goldDark font-semibold">
                              {child.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer Contact Info */}
        <div className="p-5 border-t border-brand-border bg-brand-ivory space-y-3">
          <p className="text-xs font-semibold text-brand-burgundy uppercase tracking-wider">
            Flagship Boutique
          </p>
          <p className="text-xs text-brand-muted leading-relaxed">
            {CONTACT_INFO.address}
          </p>
          <div className="flex items-center gap-3 pt-1">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-1.5 text-xs text-brand-charcoal font-medium hover:text-brand-burgundy"
            >
              <Icons.Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>Call Store</span>
            </a>
            <span className="text-brand-border">|</span>
            <a
              href={`https://wa.me/919876543210`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-green-700 font-medium hover:underline"
            >
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
