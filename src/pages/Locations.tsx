import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import LocationCard from "@/components/LocationCard";
import { locations } from "@/data";

const Locations = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-charcoal to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Find Us
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-foreground mb-6">
              Our Locations
            </h1>
            <p className="text-muted-foreground text-lg">
              Select a location to explore our menu, upcoming events, and make a reservation.
            </p>
            <div className="luxury-divider mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <LocationCard key={location.id} location={location} index={index} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
