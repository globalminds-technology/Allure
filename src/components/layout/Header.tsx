"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "./Navbar";
import { useCart } from "@/hooks/useCart";
import { useWishlist } from "@/hooks/useWishlist";
import { Icons } from "@/components/icons/Icons";
import { Button } from "@/components/common/Button";

interface HeaderProps {
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenMobileMenu }) => {
  const router = useRouter();
  const { itemCount: cartCount, setIsCartOpen } = useCart();
  const { itemCount: wishlistCount } = useWishlist();

  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [loginPhone, setLoginPhone] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileSearchOpen(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginPhone) {
      setIsLoggedIn(true);
      setIsLoginModalOpen(false);
    }
  };

  return (
    <>
      {/* Unified Luxury Navbar Header matching Reference Design */}
      <header className="sticky top-0 z-40 bg-brand-cream/95 backdrop-blur-md border-b border-brand-border/70 transition-all duration-300">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Mobile Toggle & Draped Logo */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Mobile Hamburger */}
            <button
              onClick={onOpenMobileMenu}
              aria-label="Open mobile menu"
              className="p-1.5 text-brand-charcoal hover:text-brand-burgundy transition-colors lg:hidden"
            >
              <Icons.Menu className="w-6 h-6" />
            </button>

            {/* Draped Fabric Brand Logo from user reference */}
            <Link href="/" className="inline-flex items-center py-1 group">
              <Image
                src="/images/logo/navbar-draped-logo.png"
                alt="Allure Collections"
                width={150}
                height={55}
                priority
                className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-95 transition-opacity"
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation Links Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <Navbar />
          </div>

          {/* Right: Divider, Search Pill, Login, Wishlist, Cart */}
          <div className="flex items-center gap-3 sm:gap-4 xl:gap-5 justify-end shrink-0">
            {/* Center Subtle Divider */}
            <div className="hidden lg:block h-6 w-px bg-brand-border/80 mr-1" />
            {/* Search Pill Input (Desktop) */}
            <form onSubmit={handleSearchSubmit} className="hidden md:block">
              <div className="flex items-center rounded-full border border-brand-burgundy/60 hover:border-brand-burgundy focus-within:border-brand-burgundy focus-within:ring-1 focus-within:ring-brand-burgundy bg-transparent px-3.5 py-1.5 w-52 xl:w-64 transition-all">
                <Icons.Search className="w-3.5 h-3.5 text-brand-charcoal shrink-0 mr-2" />
                <input
                  type="text"
                  placeholder="Search sarees, kurtis, co-ords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-xs text-brand-charcoal placeholder:text-brand-muted/70 focus:outline-none font-sans"
                />
              </div>
            </form>

            {/* Mobile Search Icon Toggle */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              aria-label="Search"
              className="md:hidden p-1.5 text-brand-charcoal hover:text-brand-burgundy"
            >
              <Icons.Search className="w-5 h-5" />
            </button>

            {/* LOGIN Trigger */}
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-brand-charcoal hover:text-brand-burgundy transition-colors"
            >
              <Icons.User className="w-4 h-4 text-brand-charcoal stroke-[1.8]" />
              <span className="hidden sm:inline">LOGIN</span>
            </button>

            {/* Wishlist Icon */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative p-1 text-brand-charcoal hover:text-brand-burgundy transition-colors"
            >
              <Icons.Heart className="w-5 h-5 stroke-[1.8]" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-brand-burgundy text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Shopping Cart Icon with Burgundy Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              className="relative p-1 text-brand-charcoal hover:text-brand-burgundy transition-colors"
            >
              <Icons.ShoppingBag className="w-5 h-5 stroke-[1.8]" />
              <span className="absolute -top-1.5 -right-2 bg-brand-burgundy text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Search Dropdown Bar */}
        {isMobileSearchOpen && (
          <div className="md:hidden px-4 pb-3 pt-1 border-t border-brand-border/50 bg-brand-cream animate-fadeIn">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search sarees, kurtis, co-ords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-white text-brand-charcoal text-xs pl-9 pr-8 py-2 rounded-full border border-brand-burgundy/60 focus:outline-none focus:border-brand-burgundy"
              />
              <Icons.Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-brand-muted" />
              <button
                type="button"
                onClick={() => setIsMobileSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-muted p-1"
              >
                <Icons.X className="w-4 h-4" />
              </button>
            </form>
          </div>
        )}
      </header>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded border border-brand-border max-w-sm w-full p-6 relative shadow-2xl">
            <button
              onClick={() => setIsLoginModalOpen(false)}
              className="absolute top-4 right-4 text-brand-muted hover:text-brand-burgundy"
            >
              <Icons.X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase font-sans tracking-[0.3em] text-brand-gold font-semibold">
                Allure Circle
              </span>
              <h3 className="text-2xl font-serif text-brand-burgundy mt-1">
                {isLoggedIn ? "My Account" : "Sign In to Allure"}
              </h3>
              <p className="text-xs text-brand-muted mt-1.5">
                {isLoggedIn
                  ? "Welcome back to your curated ethnic wardrobe."
                  : "Enter your mobile number to receive an instant OTP."}
              </p>
            </div>

            {isLoggedIn ? (
              <div className="space-y-4 text-center">
                <p className="text-sm font-medium text-brand-charcoal">
                  Logged in as +91 {loginPhone || "98765 43210"}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <Link
                    href="/wishlist"
                    onClick={() => setIsLoginModalOpen(false)}
                    className="p-3 bg-brand-ivory rounded border border-brand-border text-brand-burgundy font-medium hover:bg-brand-border"
                  >
                    My Wishlist
                  </Link>
                  <Link
                    href="/cart"
                    onClick={() => setIsLoginModalOpen(false)}
                    className="p-3 bg-brand-ivory rounded border border-brand-border text-brand-burgundy font-medium hover:bg-brand-border"
                  >
                    Shopping Bag
                  </Link>
                </div>
                <Button
                  onClick={() => setIsLoggedIn(false)}
                  variant="outline"
                  size="sm"
                  className="w-full mt-2"
                >
                  Log Out
                </Button>
              </div>
            ) : (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-charcoal mb-1">
                    Mobile Number / Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98765 43210"
                    value={loginPhone}
                    onChange={(e) => setLoginPhone(e.target.value)}
                    className="w-full bg-brand-ivory border border-brand-border px-3.5 py-2.5 text-xs rounded-xs focus:outline-none focus:border-brand-burgundy"
                  />
                </div>
                <Button type="submit" variant="primary" size="md" className="w-full">
                  Continue With OTP
                </Button>
                <p className="text-[10px] text-center text-brand-muted">
                  By continuing, you agree to Allure Collections&apos; Terms of Service and Privacy Policy.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
