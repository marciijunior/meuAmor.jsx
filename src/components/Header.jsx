import React from 'react';
import { motion } from 'framer-motion'; // Importámos o motion...

function Header() {
  return (
    // ...e aqui usamo-lo, transformando <header> em <motion.header>
    <motion.header
      className="cabecalho"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1>Márcio & Bianca</h1>
      <p>A nossa história, contada em dias, risadas e memórias.</p>
    </motion.header>
  );
}

export default Header;