"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { openWhatsApp } from "@/lib/whatsapp";
import { Menu, Phone, X } from "lucide-react";

const NAV_LINKS: { id: string; label: string }[] = [
  { id: "keunggulan", label: "Keunggulan" },
  { id: "cerita", label: "Cerita" },
  { id: "produk", label: "Produk" },
  { id: "testimoni", label: "Testimoni" },
];

function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;
  const element = document.getElementById(sectionId);
  if (!element) return;

  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileOpen, setIsMobileOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 8);

      const headerOffset = 96;
      const currentScrollPosition = scrollY + headerOffset;

      let currentSection: string | null = null;

      NAV_LINKS.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const sectionTop = section.offsetTop;

        if (sectionTop <= currentScrollPosition) {
          currentSection = link.id;
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();
    scrollToSection(id);
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border/60 backdrop-blur-md transition-colors ${
        isScrolled ? "bg-background/95 shadow-sm" : "bg-background/80"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 lg:py-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3 py-1">
          <span className="text-base leading-none">🧅</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
            Bawang Goreng Mb Dju
          </span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => handleNavClick(event, link.id)}
                className={`border-b-2 pb-1 transition-colors ${
                  isActive
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => openWhatsApp()}
          >
            <Phone className="mr-2 h-4 w-4" />
            Pesan
          </Button>
          <button
            type="button"
            aria-label={
              isMobileOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            }
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-2 py-1 text-xs font-medium text-foreground shadow-sm md:hidden"
            onClick={() => setIsMobileOpen((open) => !open)}
          >
            {isMobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isMobileOpen && (
        <div className="border-t border-border/60 bg-background/95 md:hidden">
          <nav className="max-w-7xl mx-auto flex flex-col gap-1 px-4 py-3 text-sm">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(event) => handleNavClick(event, link.id)}
                  className={`rounded-md px-2 py-2 text-left transition-colors ${
                    isActive
                      ? "bg-primary/10 text-foreground"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
