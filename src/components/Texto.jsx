import React from 'react';
import { motion } from 'framer-motion';

function Texto() {
  return (
    <motion.section 
      className="texto-wrapper"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <p>
        "O tempo sempre foi o meu maior medo. Ele define quanto vivemos, o quanto sentimos, até quando podemos amar. Mas, para toda a ferida, há um alívio, e o meu alívio é você. Sou a pessoa mais grata do mundo ao seu lado, meu amor!"
      </p>
    </motion.section>
  );
}

export default Texto;