import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { locations } from "@/data";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

  const location = locations.find((l) => l.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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
    toast({
      title: "Message Sent",
      description: "We'll get back to you within 24-48 hours.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

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
              Contact Us
            </h1>
            <p className="text-muted-foreground text-lg">
              We'd love to hear from you.
            </p>
            <div className="luxury-divider mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-3xl text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">Address</h3>
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">Phone</h3>
                    <a
                      href={`tel:${location.phone}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {location.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">Email</h3>
                    <a
                      href={`mailto:${location.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {location.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-2">Hours</h3>
                    <p className="text-muted-foreground">Monday - Friday: {location.hours.weekdays}</p>
                    <p className="text-muted-foreground">Saturday - Sunday: {location.hours.weekends}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-foreground">Name *</Label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-card border-border"
                    required
                  />
                </div>
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-foreground">Phone</Label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-card border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Subject *</Label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-card border-border"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-foreground">Message *</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-card border-border min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="xl" className="w-full">
                Send Message
              </Button>
            </motion.form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
