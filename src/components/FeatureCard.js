// src/components/FeatureCard.js
import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, description }) => {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
