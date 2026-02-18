import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div
      className="bg-teal-500 text-white py-24 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-bold mb-4">Get in touch with us</h1>
      <p className="text-xl text-teal-100 max-w-2xl mx-auto">
        Have questions about our courses or need assistance? Our team is here to help you.
      </p>
    </motion.div>
  );
};

export default ContactHero;