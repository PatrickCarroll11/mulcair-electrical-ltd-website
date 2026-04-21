import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background shadow-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-primary-foreground/90">
            Your Trusted Local Electricians
          </p>
          <a
            href="tel:0863722601"
            className="flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:text-accent transition-colors duration-200"
          >
            <Phone className="h-4 w-4" />
            <span>086 3722601</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4 md:py-5">
          {/* Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="Mulcair Electrical Ltd"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`relative px-4 py-2.5 text-sm font-semibold rounded-md transition-colors duration-200 ${
                    isActive
                      ? "text-accent after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-accent after:rounded-full"
                      : "text-foreground hover:text-accent hover:bg-muted/60"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-border text-foreground px-5 py-2.5 font-semibold rounded-lg hover:text-accent hover:border-accent transition-all duration-200"
            >
              <a href="tel:0863722601" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>086 3722601</span>
              </a>
            </Button>
            <Button
              asChild
              className="bg-accent text-accent-foreground px-6 py-2.5 font-bold rounded-lg shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2.5 rounded-lg text-foreground hover:text-accent hover:bg-muted/60 transition-colors duration-200"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col gap-1">
            {navLinks.map(({ to, label }) => {
              const isActive = pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-semibold rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-accent border-l-4 border-accent bg-accent/5 pl-3"
                      : "text-foreground hover:text-accent hover:bg-muted/60"
                  }`}
                >
                  {label}
                </Link>
              );
            })}

            <div className="mt-5 flex flex-col gap-3 pt-5 border-t border-border">
              <Button
                asChild
                variant="outline"
                className="border-border text-foreground w-full py-3 font-semibold rounded-lg hover:text-accent hover:border-accent transition-all duration-200"
              >
                <a
                  href="tel:0863722601"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone className="h-4 w-4" />
                  <span>086 3722601</span>
                </a>
              </Button>
              <Button
                asChild
                className="bg-accent text-accent-foreground w-full py-3 font-bold rounded-lg shadow-md hover:shadow-lg hover:opacity-95 transition-all duration-200"
              >
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Free Quote
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}