import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Users, Utensils, Wine, Check, Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { locations, images } from "@/data";

const PrivateDining = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    navigate("/locations");
    return null;
  }

  const features = [
    "Dedicated private dining room with elegant décor",
    "Customized tasting menus designed by Chef Marcus Chen",
    "Sommelier-curated wine pairings from our 1,200+ collection",
    "Dedicated service team for your exclusive event",
    "State-of-the-art audio/visual equipment available",
    "Personalized menu printing with your event branding",
    "Complimentary champagne toast for celebrations",
    "Flexible room configurations for various group sizes",
  ];

  const packages = [
    {
      name: "The Executive",
      guests: "10-15 guests",
      price: "Starting at $150/person",
      description: "Perfect for intimate business dinners, birthday celebrations, and special occasions",
      includes: [
        "3-course tasting menu with 2 options per course",
        "House wine pairing (2 glasses per guest)",
        "Private server and sommelier consultation",
        "3-hour venue access",
      ],
    },
    {
      name: "The Grand",
      guests: "16-30 guests",
      price: "Starting at $200/person",
      description: "Ideal for larger gatherings, corporate events, and milestone celebrations",
      includes: [
        "4-course tasting menu with 3 options per course",
        "Premium wine selection (3 glasses per guest)",
        "Dedicated service team of 3 professionals",
        "4-hour venue access with pre-reception",
        "Custom floral arrangements",
      ],
    },
    {
      name: "Full Buyout",
      guests: "Up to 80 guests",
      price: "Custom pricing",
      description: "Exclusive use of the entire restaurant for extraordinary occasions",
      includes: [
        "Fully customized menu designed with Executive Chef",
        "Unlimited premium bar and wine service",
        "Complete event coordination team",
        "Full evening access (5+ hours)",
        "Valet parking for all guests",
        "Professional event photography",
      ],
    },
  ];

  const testimonials = [
    {
      quote: "EMBER made our rehearsal dinner absolutely magical. The private room was stunning, and every detail was perfect.",
      author: "Jennifer & Michael",
      event: "Rehearsal Dinner",
    },
    {
      quote: "The best corporate dinner we've ever hosted. Our clients were thoroughly impressed with the experience.",
      author: "Goldman Sachs",
      event: "Client Appreciation Dinner",
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={images.privateDiningRoom}
            alt="Private dining room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-dark/80" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              {location.name}
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              Private Dining
            </h1>
            <p className="text-foreground/70 text-lg">
              Exclusive experiences for your most important occasions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                Unforgettable Moments
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Your Event, Elevated
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Whether you're celebrating a milestone birthday, hosting a corporate gathering, 
                or planning an intimate dinner party, EMBER's private dining experience 
                offers the perfect setting for your most important occasions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our dedicated events team will work with you to craft a bespoke 
                experience, from menu customization to room configuration, ensuring 
                every detail reflects your vision. We've hosted everything from intimate 
                proposals to Fortune 500 board dinners.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our private dining rooms feature elegant décor, crystal chandeliers, 
                and state-of-the-art technology—all while maintaining the sophisticated 
                ambiance that defines EMBER.
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Up to 80 Guests</p>
                </div>
                <div className="text-center">
                  <Utensils className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Custom Menus</p>
                </div>
                <div className="text-center">
                  <Wine className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Wine Pairing</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/30 p-8"
            >
              <h3 className="font-display text-2xl text-foreground mb-6">
                What's Included
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Tailored Experiences
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Private Dining Packages
            </h2>
            <div className="luxury-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-card border border-border/30 p-8 hover:border-primary/30 transition-colors flex flex-col"
              >
                <h3 className="font-display text-2xl text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-primary text-sm tracking-wider mb-2">{pkg.guests}</p>
                <p className="text-gold-light font-display text-lg mb-4">{pkg.price}</p>
                <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="luxury-outline" size="lg" className="w-full" asChild>
                  <Link to={`/location/${slug}/contact`}>Request Quote</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Our Spaces
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Private Dining Gallery
            </h2>
            <div className="luxury-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={images.privateDiningRoom}
                alt="The Cellar Room"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={images.tableSetting}
                alt="Elegant table setting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={images.wineCellar}
                alt="Wine cellar dining"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Guest Experiences
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              What Our Guests Say
            </h2>
            <div className="luxury-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-card border border-border/30 p-8"
              >
                <p className="font-display text-lg text-foreground italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="luxury-divider !mx-0 !w-12 mb-4" />
                <p className="text-primary font-display">{testimonial.author}</p>
                <p className="text-muted-foreground text-sm">{testimonial.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Calendar className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Plan Your Event
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Contact our events team to begin planning your private dining experience.
              We recommend booking at least 2-3 weeks in advance for best availability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button variant="hero" size="xl" asChild>
                <Link to={`/location/${slug}/contact`}>
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Events Team
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href={`tel:${location.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  {location.phone}
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground text-sm">
              Events inquiries: <a href={`mailto:events@embersteak.com`} className="text-primary hover:underline">events@embersteak.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivateDining;
