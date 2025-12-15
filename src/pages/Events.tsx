import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import EventCard from "@/components/EventCard";
import { locations, events } from "@/data";

const Events = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    navigate("/locations");
    return null;
  }

  const locationEvents = events.filter((event) => event.locationId === location.id);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              {location.name}
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Upcoming Events
            </h1>
            <p className="text-muted-foreground text-lg">
              Exclusive dining experiences and special occasions.
            </p>
            <div className="luxury-divider mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 pb-32 bg-background">
        <div className="container mx-auto px-6">
          {locationEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {locationEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} locationSlug={slug!} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                No upcoming events at this location. Check back soon!
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
