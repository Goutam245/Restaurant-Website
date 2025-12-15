import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Event } from "@/types";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  event: Event;
  index: number;
  locationSlug: string;
}

const EventCard = ({ event, index, locationSlug }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group relative overflow-hidden bg-card border border-border/30 hover:border-primary/30 transition-colors"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-primary" />
            <span>{event.time}</span>
          </div>
        </div>

        <h3 className="font-display text-xl md:text-2xl text-foreground mb-3">
          {event.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
          {event.description}
        </p>

        <Button variant="luxury-outline" size="default" asChild>
          <Link to={`/location/${locationSlug}/events/${event.slug}`} className="gap-2">
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </motion.div>
  );
};

export default EventCard;
