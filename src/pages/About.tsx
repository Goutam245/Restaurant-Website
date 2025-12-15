import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { images } from "@/data";

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={images.restaurantInterior}
            alt="EMBER restaurant interior"
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
              Our Story
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              The Art of <span className="text-gold-gradient">EMBER</span>
            </h1>
            <p className="text-foreground/70 text-lg">
              Where passion for perfection meets the timeless craft of the steakhouse.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section 1 */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                Founded in 2009
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                A Vision Born from Passion
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                EMBER was founded with a singular vision: to redefine the American 
                steakhouse experience. Our founder, Executive Chef Marcus Chen, 
                spent over a decade working in the world's finest Michelin-starred 
                restaurants before returning to his first love—the perfect steak.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                After training at Le Cordon Bleu Paris and earning stars at legendary 
                establishments across Europe and Asia, Chef Chen envisioned a steakhouse 
                that would honor classic traditions while pushing culinary boundaries.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                What began as a single restaurant on Park Avenue in Manhattan has grown into 
                three iconic destinations, each maintaining the uncompromising standards and 
                intimate atmosphere that define the EMBER experience.
              </p>
              <div className="luxury-divider !mx-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={images.chefPlating}
                alt="Chef Marcus Chen plating a signature dish"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-8 -left-8 w-2/3 h-2/3 border border-primary/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dry Aging Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <img
                src={images.dryAgingRoom}
                alt="EMBER dry-aging room"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 border border-primary/30 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                The Science of Flavor
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                In-House Dry-Aging
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At the heart of EMBER lies our state-of-the-art dry-aging facility. 
                Visible through a glass-enclosed showcase, our aging room maintains 
                precise temperature (34°F) and humidity (85%) conditions to transform 
                prime beef into something extraordinary.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                During the aging process, natural enzymes break down muscle fibers, 
                resulting in unprecedented tenderness. Meanwhile, moisture evaporation 
                concentrates flavors, developing the nutty, buttery notes that 
                distinguish truly exceptional dry-aged beef.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="font-display text-3xl text-primary">30</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Day Minimum</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-primary">60</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Day Signature</p>
                </div>
                <div>
                  <p className="font-display text-3xl text-primary">90</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Day Reserve</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Our Philosophy
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Every Detail Matters
            </h2>
            <div className="luxury-divider mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed">
              We believe that an exceptional dining experience is built on a 
              foundation of obsessive attention to detail. From the selection 
              of each cut of beef to the training of our service team, 
              nothing is left to chance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Utensils,
                title: "Premium Sourcing",
                description:
                  "We partner directly with heritage ranches in the American Midwest and certified producers in Japan to source USDA Prime beef and authentic A5 Wagyu. Each supplier shares our commitment to sustainable, humane practices.",
              },
              {
                icon: Award,
                title: "Masterful Preparation",
                description:
                  "Our custom-built infrared grills reach 1,800°F, creating the perfect crust while preserving a flawlessly tender interior. Each steak is cooked by our trained grill masters with precision temperature monitoring.",
              },
              {
                icon: Users,
                title: "Impeccable Service",
                description:
                  "Our service philosophy blends European hospitality traditions with genuine warmth. Every team member completes an extensive training program to anticipate needs and create effortless experiences.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-card p-8 border border-border/30"
              >
                <item.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl text-foreground mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={images.wineCellar}
            alt="EMBER Wine Cellar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-dark/85" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
                The EMBER Experience
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Beyond the Plate
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                At EMBER, we understand that a truly memorable dining experience 
                extends far beyond the food. Our award-winning wine program, 
                curated by Master Sommelier David Park, features over 1,200 
                selections from the world's most prestigious vineyards.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-8">
                From rare verticals of Bordeaux First Growths to coveted allocations 
                of Napa Valley cult wines, our cellar holds treasures for every 
                palate. Our sommeliers are passionate about guiding you to the 
                perfect pairing, whether you're a collector or simply curious.
              </p>

              <div className="flex items-center gap-8 mb-8">
                <div>
                  <p className="font-display text-4xl text-primary">1,200+</p>
                  <p className="text-sm text-muted-foreground">Wine Labels</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="font-display text-4xl text-primary">15</p>
                  <p className="text-sm text-muted-foreground">Countries</p>
                </div>
                <div className="w-px h-12 bg-border" />
                <div>
                  <p className="font-display text-4xl text-primary">50+</p>
                  <p className="text-sm text-muted-foreground">By the Glass</p>
                </div>
              </div>
            </motion.div>

            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Recognition
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Awards & Accolades
            </h2>
            <div className="luxury-divider" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { award: "Michelin Star", year: "2020-2024", description: "Exceptional cuisine" },
              { award: "James Beard Award", year: "2019", description: "Outstanding Steakhouse" },
              { award: "Wine Spectator Grand Award", year: "2022", description: "World-class wine program" },
              { award: "Forbes 5-Star", year: "2023", description: "Luxury dining" },
              { award: "AAA Five Diamond", year: "2021", description: "Ultimate in dining" },
              { award: "Robb Report Best Of", year: "2023", description: "Best Steakhouse NYC" },
              { award: "Zagat Top Rated", year: "2024", description: "Food & Service" },
              { award: "OpenTable Diner's Choice", year: "2024", description: "Top 100 US" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 border border-border/20 hover:border-primary/30 transition-colors"
              >
                <p className="font-display text-lg text-foreground mb-1">
                  {item.award}
                </p>
                <p className="text-primary text-sm mb-2">{item.year}</p>
                <p className="text-muted-foreground text-xs">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Leadership
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Our Team
            </h2>
            <div className="luxury-divider" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Marcus Chen",
                title: "Executive Chef & Founder",
                bio: "Le Cordon Bleu Paris. Former Executive Chef at The French Laundry and Eleven Madison Park.",
              },
              {
                name: "David Park",
                title: "Master Sommelier",
                bio: "One of only 269 Master Sommeliers worldwide. 20+ years curating world-class wine programs.",
              },
              {
                name: "Sarah Mitchell",
                title: "Director of Operations",
                bio: "Former GM at Per Se. Hospitality management graduate from Cornell University.",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-charcoal-light border border-border flex items-center justify-center">
                  <span className="font-display text-3xl text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-display text-xl text-foreground mb-1">{member.name}</h3>
                <p className="text-primary text-sm mb-3">{member.title}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
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
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Experience EMBER
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We invite you to join us and discover why EMBER has become 
              synonymous with excellence in fine dining.
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

export default About;
