import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Location } from "@/types";
import { useLocationStore } from "@/store/locationStore";

interface LocationCardProps {
  location: Location;
  index: number;
}

const LocationCard = ({ location, index }: LocationCardProps) => {
  const navigate = useNavigate();
  const { setSelectedLocation } = useLocationStore();

  const handleSelect = () => {
    setSelectedLocation(location);
    navigate(`/location/${location.slug}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      whileHover={{ y: -8 }}
      onClick={handleSelect}
      className="group cursor-pointer relative overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/30 to-transparent" />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
          <div className="flex items-center gap-2 text-primary mb-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm tracking-wider uppercase">{location.city}</span>
          </div>
          
          <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">
            {location.name}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {location.description}
          </p>

          <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-sm tracking-wider uppercase">Explore</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>

      {/* Gold accent line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-gold-light"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default LocationCard;
