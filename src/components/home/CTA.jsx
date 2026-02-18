import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import Button from '../ui/Button';

const CTA = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6 mx-auto">
            <Mail className="w-8 h-8" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with New Courses
          </h2>

          <p className="text-xl text-primary-light mb-8 max-w-2xl mx-auto">
            Join our newsletter to get notified about new courses, special offers, 
            and learning resources delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto px-8"
            >
              Subscribe Now
            </Button>
          </form>

          <p className="text-primary-light/80 text-sm mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;