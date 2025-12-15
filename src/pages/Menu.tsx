import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import MenuItemCard from "@/components/MenuItemCard";
import { locations, menuItems } from "@/data";
import { MenuCategory } from "@/types";

const categories: { id: MenuCategory; name: string }[] = [
  { id: "starters", name: "Starters" },
  { id: "steaks", name: "Steaks" },
  { id: "seafood", name: "Seafood" },
  { id: "sides", name: "Sides" },
  { id: "desserts", name: "Desserts" },
  { id: "wine", name: "Wine" },
  { id: "cocktails", name: "Cocktails" },
];

const Menu = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>("starters");

  const location = locations.find((l) => l.slug === slug);

  if (!location) {
    navigate("/locations");
    return null;
  }

  const locationMenuItems = menuItems.filter(
    (item) => item.locationId === location.id || item.locationId === "all"
  );

  const filteredItems = locationMenuItems.filter(
    (item) => item.category === activeCategory
  );

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
              Our Menu
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover our curated selection of premium steaks, fresh seafood, 
              and exquisite accompaniments.
            </p>
            <div className="luxury-divider mt-8" />
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b border-border/30">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto py-4 gap-2 md:gap-4 justify-start md:justify-center scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 text-sm tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground border-b-2 border-transparent"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl text-foreground mb-8 text-center capitalize">
              {activeCategory}
            </h2>

            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => (
                <MenuItemCard key={item.id} item={item} index={index} />
              ))
            ) : (
              <p className="text-center text-muted-foreground py-12">
                Menu items coming soon.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Dietary Note */}
      <section className="py-12 bg-charcoal border-t border-border/30">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
            Please inform your server of any allergies or dietary requirements. 
            Our kitchen handles nuts, shellfish, and gluten. Consuming raw or 
            undercooked meats, poultry, seafood, or eggs may increase your risk 
            of foodborne illness.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
