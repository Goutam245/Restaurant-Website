import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import Logo from "@/components/Logo";
import { locations } from "@/data";

const Footer = () => {
  return (
    <footer className="bg-charcoal-dark border-t border-border/30">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed">
              An exquisite fine dining experience, where premium aged steaks meet impeccable service.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-foreground">Locations</h4>
            <ul className="space-y-4">
              {locations.map((location) => (
                <li key={location.id}>
                  <Link
                    to={`/location/${location.slug}`}
                    className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{location.city}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Our Story", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Gift Cards", path: "/gift-cards" },
                { name: "Press", path: "/press" },
                { name: "Privacy Policy", path: "/privacy" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-display text-lg text-foreground">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12125550123"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(212) 555-0123</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:reservations@embersteak.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>reservations@embersteak.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="luxury-divider mt-12 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} EMBER Steakhouse. All rights reserved.</p>
          <p>Designed with passion for the art of fine dining.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
