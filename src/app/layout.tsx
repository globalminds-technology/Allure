import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { MainLayout } from "@/components/layout/MainLayout";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_NAME} | ${SITE_TAGLINE}`,
  description: "Shop authentic Jamdani sarees, weaving patola, pure cotton kurtis, chic co-ord sets, maxis, and ethnic bottom wear from Allure Collections, Chennai.",
  keywords: ["sarees", "jamdani", "pattu", "kurtis", "salwar sets", "co-ord sets", "maxi dress", "ethnic wear", "chennai fashion boutique", "allure collections"],
  icons: {
    icon: "/images/logo/navbar-draped-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-brand-cream text-brand-slate font-sans">
        <CartProvider>
          <WishlistProvider>
            <MainLayout>{children}</MainLayout>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}
