import { motion } from "framer-motion";
import { MenuItem, MenuCategory } from "@/types";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
}

const MenuItemCard = ({ item, index }: MenuItemCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group py-6 border-b border-border/30 last:border-b-0"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-display text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
              {item.name}
            </h3>
            {item.featured && (
              <span className="px-2 py-0.5 text-[10px] tracking-wider uppercase bg-primary/20 text-primary rounded">
                Signature
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {item.description}
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="font-display text-xl text-primary">${item.price}</span>
        </div>
      </div>

      {/* Decorative line on hover */}
      <motion.div
        className="h-px bg-gradient-to-r from-primary/50 to-transparent mt-4"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default MenuItemCard;
