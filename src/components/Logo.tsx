import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <Link to="/" className="group flex items-center gap-2">
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="flex flex-col items-center"
      >
        <span className="font-display text-2xl md:text-3xl tracking-[0.3em] text-foreground">
          EMBER
        </span>
        <span className="text-[10px] tracking-[0.5em] text-primary font-body uppercase">
          Steakhouse
        </span>
      </motion.div>
    </Link>
  );
};

export default Logo;
