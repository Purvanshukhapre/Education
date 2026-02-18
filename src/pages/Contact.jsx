import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/layout/PageHeader';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import FAQContact from '../components/contact/FAQContact';

const Contact = () => {
  return (
    <div className="bg-[#F2F4F7] min-h-screen">
      <PageHeader
        title="Contact Us"
        bgImage="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-24"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>

        <div className="mt-24">
          <FAQContact />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;