import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importámos...

function Timer() {
  const startDate = new Date("2023-12-16T23:00:00");
  const [time, setTime] = useState({});

  useEffect(() => {
    const calculateTime = () => {
      const difference = new Date() - startDate;
      setTime({
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      });
    };
    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (num) => String(num).padStart(2, '0');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <motion.section 
      className="timer-wrapper"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7 }}
    >
      <h2>Desde que a nossa história começou:</h2>
      <motion.div 
        className="timer-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="timer-box" variants={itemVariants}>
          <span className="timer-number">{time.dias || 0}</span>
          <span className="timer-label">Dias</span>
        </motion.div>
        <motion.div className="timer-box" variants={itemVariants}>
          <span className="timer-number">{formatTime(time.horas || 0)}</span>
          <span className="timer-label">Horas</span>
        </motion.div>
        <motion.div className="timer-box" variants={itemVariants}>
          <span className="timer-number">{formatTime(time.minutos || 0)}</span>
          <span className="timer-label">Minutos</span>
        </motion.div>
        <motion.div className="timer-box" variants={itemVariants}>
          <span className="timer-number">{formatTime(time.segundos || 0)}</span>
          <span className="timer-label">Segundos</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

export default Timer;