import { motion } from 'framer-motion';

export default function Banner() {
  return (
    <section className="banner">
      <motion.h2
        className="banner__titulo"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Nosso tempo!
      </motion.h2>
    </section>
  );
}
