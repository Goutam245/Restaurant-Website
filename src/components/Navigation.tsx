import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { useLocationStore } from "@/store/locationStore";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { selectedLocation, clearLocation } = useLocationStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = selectedLocation
    ? [
        { name: "Menu", path: `/location/${selectedLocation.slug}/menu` },
        { name: "Events", path: `/location/${selectedLocation.slug}/events` },
        { name: "Private Dining", path: `/location/${selectedLocation.slug}/private-dining` },
        { name: "About", path: `/location/${selectedLocation.slug}/about` },
        { name: "Contact", path: `/location/${selectedLocation.slug}/contact` },
      ]
    : [
        { name: "Our Story", path: "/about" },
        { name: "Locations", path: "/locations" },
      ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Location indicator */}
          {selectedLocation && (
            <button
              onClick={clearLocation}
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MapPin className="w-4 h-4 text-primary" />
              <span>{selectedLocation.city}</span>
              <span className="text-xs">(change)</span>
            </button>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="hero" size="lg" asChild>
              <Link to={selectedLocation ? `/location/${selectedLocation.slug}/reservations` : "/locations"}>
                Reserve
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6 py-8">
                {selectedLocation && (
                  <button
                    onClick={clearLocation}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{selectedLocation.city}</span>
                    <span className="text-xs">(change)</span>
                  </button>
                )}
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className="text-lg tracking-widest uppercase text-foreground/80 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                >
                  <Button variant="hero" size="lg" asChild>
                    <Link to={selectedLocation ? `/location/${selectedLocation.slug}/reservations` : "/locations"}>
                      Reserve a Table
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;
