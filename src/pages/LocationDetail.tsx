import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import MenuItemCard from "@/components/MenuItemCard";
import EventCard from "@/components/EventCard";
import { locations, menuItems, events } from "@/data";
import { useLocationStore } from "@/store/locationStore";

const LocationDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { setSelectedLocation } = useLocationStore();

  const location = locations.find((l) => l.slug === slug);

  useEffect(() => {
    if (location) {
      setSelectedLocation(location);
    }
  }, [location, setSelectedLocation]);

  if (!location) {
    navigate("/locations");
    return null;
  }

  const locationMenuItems = menuItems.filter(
    (item) => item.locationId === location.id || item.locationId === "all"
  );
  const featuredItems = locationMenuItems.filter((item) => item.featured).slice(0, 4);
  const locationEvents = events.filter((event) => event.locationId === location.id);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end">
        <div className="absolute inset-0">
          <img
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/60 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-primary mb-4">
              <MapPin className="w-5 h-5" />
              <span className="tracking-[0.3em] uppercase text-sm">{location.city}</span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              {location.name}
            </h1>

            <p className="text-foreground/70 text-lg max-w-2xl mb-8">
              {location.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to={`/location/${slug}/reservations`}>
                  Reserve a Table
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to={`/location/${slug}/menu`} className="gap-2">
                  View Menu
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Info */}
      <section className="py-16 bg-charcoal border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-foreground mb-2">Address</h3>
                <p className="text-muted-foreground">{location.address}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground">Mon-Fri: {location.hours.weekdays}</p>
                <p className="text-muted-foreground">Sat-Sun: {location.hours.weekends}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-4"
            >
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-lg text-foreground mb-2">Contact</h3>
                <p className="text-muted-foreground">{location.phone}</p>
                <p className="text-muted-foreground text-sm">{location.email}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Signature Dishes
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Featured Selection
            </h2>
            <div className="luxury-divider" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {featuredItems.map((item, index) => (
              <MenuItemCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="luxury-outline" size="lg" asChild>
              <Link to={`/location/${slug}/menu`} className="gap-2">
                View Full Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Events */}
      {locationEvents.length > 0 && (
        <section className="py-24 bg-charcoal">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                Exclusive Experiences
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Upcoming Events
              </h2>
              <div className="luxury-divider" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} locationSlug={slug!} />
              ))}
            </div>
          </div>
        </section>
      )}

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
              Make a Reservation
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Join us for an unforgettable dining experience at {location.name}.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to={`/location/${slug}/reservations`}>
                Reserve Your Table
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationDetail;
