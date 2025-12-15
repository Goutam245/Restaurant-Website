import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Users, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Layout from "@/components/Layout";
import { locations, timeSlots, occasions } from "@/data";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const Reservations = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const location = locations.find((l) => l.slug === slug);

  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!location) {
    navigate("/locations");
    return null;
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!date || !time || !guests || !formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    toast({
      title: "Reservation Request Submitted",
      description: "You will receive a confirmation email shortly.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="min-h-screen flex items-center justify-center bg-background">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-lg mx-auto px-6"
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-primary/20 flex items-center justify-center">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h1 className="font-display text-4xl text-foreground mb-4">
              Thank You
            </h1>
            <p className="text-muted-foreground mb-8">
              Your reservation request has been submitted. We'll send a 
              confirmation to {formData.email} within the next 24 hours.
            </p>
            <div className="bg-card border border-border p-6 mb-8 text-left">
              <h3 className="font-display text-lg text-foreground mb-4">
                Reservation Details
              </h3>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  <span className="text-foreground">Location:</span> {location.name}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Date:</span>{" "}
                  {date && format(date, "EEEE, MMMM d, yyyy")}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Time:</span> {time}
                </p>
                <p className="text-muted-foreground">
                  <span className="text-foreground">Guests:</span> {guests}
                </p>
              </div>
            </div>
            <Button variant="luxury-outline" onClick={() => navigate(`/location/${slug}`)}>
              Return to {location.city}
            </Button>
          </motion.div>
        </section>
      </Layout>
    );
  }

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
              Reserve a Table
            </h1>
            <p className="text-muted-foreground text-lg">
              Join us for an unforgettable dining experience.
            </p>
            <div className="luxury-divider mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-16 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto"
          >
            {/* Date, Time, Guests */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {/* Date */}
              <div className="space-y-2">
                <Label className="text-foreground">Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-card border-border hover:bg-secondary",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "MMM d, yyyy") : "Select date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-card border-border">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time */}
              <div className="space-y-2">
                <Label className="text-foreground">Time *</Label>
                <Select value={time} onValueChange={setTime}>
                  <SelectTrigger className="bg-card border-border">
                    <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        {slot}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <Label className="text-foreground">Guests *</Label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="bg-card border-border">
                    <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                    <SelectValue placeholder="Select guests" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </SelectItem>
                    ))}
                    <SelectItem value="11+">Large Party (11+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Occasion */}
            <div className="space-y-2 mb-8">
              <Label className="text-foreground">Occasion (Optional)</Label>
              <Select value={occasion} onValueChange={setOccasion}>
                <SelectTrigger className="bg-card border-border">
                  <SelectValue placeholder="Select occasion" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {occasions.map((occ) => (
                    <SelectItem key={occ} value={occ}>
                      {occ}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="luxury-divider mb-8" />

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label className="text-foreground">First Name *</Label>
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="bg-card border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Last Name *</Label>
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="bg-card border-border"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label className="text-foreground">Email *</Label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-card border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Phone *</Label>
                <Input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-card border-border"
                  required
                />
              </div>
            </div>

            <div className="space-y-2 mb-10">
              <Label className="text-foreground">Special Requests</Label>
              <Textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="Dietary restrictions, allergies, seating preferences..."
                className="bg-card border-border min-h-[100px]"
              />
            </div>

            <Button type="submit" variant="hero" size="xl" className="w-full">
              Request Reservation
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-6">
              For parties larger than 10, please call us directly at{" "}
              <a href={`tel:${location.phone}`} className="text-primary hover:underline">
                {location.phone}
              </a>
            </p>
          </motion.form>
        </div>
      </section>
    </Layout>
  );
};

export default Reservations;
