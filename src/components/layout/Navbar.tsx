"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { Icons } from "@/components/icons/Icons";
import { cn } from "@/lib/utils";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "catalog", "shop-by-type", "about-us", "contact-us"];
      const scrollPosition = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const id = sections[i];
        const elem = document.getElementById(id);
        if (elem && elem.offsetTop <= scrollPosition) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#")) {
      e.preventDefault();
      const id = href.split("#")[1];
      const elem = document.getElementById(id);
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        setActiveSection(id);
        setOpenDropdown(null);
        window.history.pushState(null, "", `/#${id}`);
      }
    }
  };

  return (
    <nav className="flex items-center justify-center">
      <ul className="flex items-center gap-6 xl:gap-8">
        {MAIN_NAVIGATION.map((item) => {
          const hasChildren = item.children && item.children.length > 0;
          const sectionId = item.href.includes("#") ? item.href.split("#")[1] : "home";
          const isActive = activeSection === sectionId;

          return (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
              onMouseLeave={() => hasChildren && setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative inline-flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase transition-colors duration-200 py-1",
                  isActive
                    ? "text-brand-burgundy font-bold"
                    : "text-brand-charcoal hover:text-brand-burgundy font-medium"
                )}
              >
                <span>{item.label}</span>
                {hasChildren && (
                  <Icons.ChevronDown className="w-3.5 h-3.5 text-brand-charcoal/70 group-hover:text-brand-burgundy transition-transform group-hover:rotate-180" />
                )}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-burgundy" />
                )}
              </Link>

              {/* Dropdown Menu for Shop By Type */}
              {hasChildren && (
                <div
                  className={cn(
                    "absolute top-full left-0 w-56 bg-white border border-brand-border rounded-xs shadow-dropdown py-2 transition-all duration-200 z-50",
                    openDropdown === item.label
                      ? "opacity-100 visible translate-y-2"
                      : "opacity-0 invisible -translate-y-1 pointer-events-none"
                  )}
                >
                  <ul className="py-1">
                    {item.children!.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="flex items-center justify-between px-4 py-2 text-xs text-brand-charcoal hover:text-brand-burgundy hover:bg-brand-ivory transition-colors font-medium tracking-wider uppercase"
                        >
                          <span>{child.label}</span>
                          {child.badge && (
                            <span className="text-[9px] bg-brand-sand text-brand-burgundy font-bold px-1.5 py-0.5 rounded">
                              {child.badge}
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
