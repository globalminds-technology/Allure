import { NavItem } from "@/types/navigation";

export const MAIN_NAVIGATION: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Catalog", href: "/#catalog" },
  {
    label: "Shop By Type",
    href: "/#shop-by-type",
    children: [
      { label: "Sarees", href: "/collections/sarees", badge: "Signature" },
      { label: "Kurtis", href: "/collections/kurtis" },
      { label: "Co-ord Set", href: "/collections/coord-sets", badge: "Trending" },
      { label: "Maxis", href: "/collections/maxis" },
      { label: "Bottom Wear", href: "/collections/bottom-wear" },
    ],
  },
  { label: "About Us", href: "/#about-us" },
  { label: "Contact Us", href: "/#contact-us" },
];

export const FOOTER_NAVIGATION = {
  quickLinks: [
    { label: "Home", href: "/#home" },
    { label: "Catalog", href: "/#catalog" },
    { label: "Shop By Type", href: "/#shop-by-type" },
    { label: "About Us", href: "/#about-us" },
    { label: "Contact Us", href: "/#contact-us" },
  ],
  policies: [
    { label: "Privacy Policy", href: "/about#privacy" },
    { label: "Terms & Conditions", href: "/contact#terms" },
    { label: "Shipping Policy", href: "/contact#shipping" },
    { label: "Return & Exchange Policy", href: "/contact#returns" },
  ],
  shopByType: [
    { label: "Sarees", href: "/collections/sarees" },
    { label: "Kurtis", href: "/collections/kurtis" },
    { label: "Co-ord Set", href: "/collections/coord-sets" },
    { label: "Maxis", href: "/collections/maxis" },
    { label: "Bottom Wear", href: "/collections/bottom-wear" },
    { label: "Lounge Wear", href: "/collections/lounge-wear" },
  ],
};
