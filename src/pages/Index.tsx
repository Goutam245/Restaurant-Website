import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Wine, Flame, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import LocationCard from "@/components/LocationCard";
import { locations, images } from "@/data";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={images.heroSteak}
            alt="Premium steak with rosemary"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-dark/70 via-charcoal-dark/50 to-charcoal-dark" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Decorative element */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "6rem" }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary text-sm tracking-[0.4em] uppercase mb-6"
            >
              The Art of Fine Dining
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight"
            >
              An Exquisite
              <span className="block text-gold-gradient">Experience</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              Where premium dry-aged steaks meet impeccable service. 
              Discover the pinnacle of culinary artistry at EMBER.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button variant="hero" size="xl" asChild>
                <Link to="/locations">
                  Reserve a Table
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/about" className="gap-2">
                  Our Story
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1 h-2 bg-primary rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-charcoal border-b border-border/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Flame,
                title: "Dry-Aged Excellence",
                description: "45-90 days of meticulous aging for unparalleled flavor and tenderness",
              },
              {
                icon: Award,
                title: "Michelin Recognized",
                description: "Consistently awarded for culinary excellence since 2020",
              },
              {
                icon: Wine,
                title: "1,200+ Wine Selection",
                description: "Award-winning wine program curated by our Master Sommelier",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center p-8"
              >
                <feature.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Select Location Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Choose Your Destination
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Our Locations
            </h2>
            <div className="luxury-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {locations.map((location, index) => (
              <LocationCard key={location.id} location={location} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Signature Wagyu Section */}
      <section className="py-24 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={images.wagyuSteak}
                  alt="Japanese A5 Wagyu with perfect marbling"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 border border-primary/20" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-primary/30 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                The Ultimate Indulgence
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Japanese A5
                <span className="block text-gold-gradient">Wagyu</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Experience the pinnacle of beef—authentic Japanese A5 Wagyu from Miyazaki 
                Prefecture. With a Beef Marbling Score of 10+, each bite delivers an 
                extraordinary melt-in-your-mouth sensation unlike anything else in the world.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our Wagyu is sourced directly from award-winning Japanese producers and 
                prepared with minimal intervention to let the exceptional quality speak for 
                itself. Served with Himalayan pink salt and a whisper of wasabi.
              </p>

              <div className="flex items-center gap-6 mb-8">
                <div className="text-center">
                  <p className="font-display text-3xl text-primary">BMS 10+</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Marbling Score</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-display text-3xl text-primary">6oz</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Perfect Portion</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div className="text-center">
                  <p className="font-display text-3xl text-primary">$185</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Per Serving</p>
                </div>
              </div>

              <Button variant="luxury-outline" size="lg" asChild>
                <Link to="/locations" className="gap-2">
                  View Full Menu
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                Our Philosophy
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                A Legacy of
                <span className="block text-gold-gradient">Excellence</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At EMBER, we believe that dining is not merely sustenance—it's an art form. 
                Our commitment to sourcing the finest USDA Prime and Japanese A5 Wagyu beef, 
                combined with time-honored dry-aging techniques, creates an unparalleled 
                culinary experience.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each cut is hand-selected by our master butchers and prepared with precision 
                by our award-winning culinary team, ensuring every bite is a moment of pure 
                indulgence.
              </p>

              <div className="flex items-center gap-8 mb-8">
                <div>
                  <p className="font-display text-4xl text-primary">45+</p>
                  <p className="text-sm text-muted-foreground">Days Dry-Aged</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="font-display text-4xl text-primary">3</p>
                  <p className="text-sm text-muted-foreground">Iconic Locations</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="font-display text-4xl text-primary">15</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </div>
              </div>

              <Button variant="luxury-outline" size="lg" asChild>
                <Link to="/about" className="gap-2">
                  Discover More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={images.restaurantInterior}
                  alt="EMBER restaurant interior"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 border border-primary/20" />
              </div>
              {/* Decorative frame */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border border-primary/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={images.chefPlating}
                  alt="Executive Chef plating a dish"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 border border-primary/20" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border border-primary/30 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                Culinary Vision
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6 leading-tight">
                Meet Our
                <span className="block text-gold-gradient">Executive Chef</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chef Marcus Chen brings over two decades of culinary excellence to EMBER. 
                Trained at Le Cordon Bleu Paris and having earned Michelin stars at 
                restaurants across Europe and Asia, Chef Chen's approach combines classical 
                techniques with innovative presentations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                "My philosophy is simple: start with the finest ingredients, respect their 
                integrity, and let quality speak for itself. At EMBER, we don't just cook 
                steaks—we create memorable experiences."
              </p>
              <p className="font-display text-lg text-primary italic">
                — Chef Marcus Chen, Executive Chef & Founder
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground italic mb-8 leading-relaxed">
              "The finest steakhouse experience I've ever had. The A5 Wagyu 
              literally melted on my tongue. Impeccable service, stunning 
              ambiance—EMBER is in a league of its own."
            </blockquote>
            <div className="luxury-divider mb-6" />
            <p className="text-primary font-display text-lg">James Richardson</p>
            <p className="text-muted-foreground text-sm">Michelin Guide</p>
          </motion.div>
        </div>
      </section>

      {/* Wine Cellar Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.wineCellar}
            alt="EMBER Wine Cellar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-dark/85" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Award-Winning Collection
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              The Wine Cellar
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed mb-8">
              Our Master Sommelier has curated an exceptional collection of over 1,200 
              wines from the world's most prestigious vineyards. From rare Bordeaux 
              First Growths to coveted Napa Valley cult wines, discover the perfect 
              pairing for your evening.
            </p>
            <div className="flex flex-wrap gap-8 mb-8">
              <div>
                <p className="font-display text-4xl text-primary">1,200+</p>
                <p className="text-sm text-muted-foreground">Wine Selection</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">15</p>
                <p className="text-sm text-muted-foreground">Countries</p>
              </div>
              <div>
                <p className="font-display text-4xl text-primary">50+</p>
                <p className="text-sm text-muted-foreground">By the Glass</p>
              </div>
            </div>
            <Button variant="hero" size="lg" asChild>
              <Link to="/locations">
                Explore Wine List
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Begin Your Journey
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Reserve Your Table
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Experience the art of fine dining at one of our three exceptional locations.
              Your unforgettable evening awaits.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/locations">
                Make a Reservation
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
