import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const subjects = [
    'General Inquiry',
    'Course Information',
    'Technical Support',
    'Billing Question',
    'Partnership Opportunity',
    'Feedback'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ fullName: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-[32px] shadow-sm border border-gray-100 p-8 md:p-12"
    >
      <div className="mb-10">
        <div className="inline-flex items-center bg-[#F2F4F7] rounded-full px-4 py-1.5 mb-4">
          <span className="text-[12px] font-bold text-[#07A698] uppercase tracking-wider">Contact Us</span>
        </div>
        <h2 className="text-[32px] md:text-[42px] font-bold text-[#162726] leading-tight">Send Us a Message</h2>
        <p className="text-[#6C706F] mt-4 font-medium">Have questions? We're here to help you on your educational journey.</p>
      </div>

      {isSubmitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-6 bg-[#07A698]/10 text-[#07A698] rounded-24 font-bold text-center border border-[#07A698]/20"
        >
          Your message has been sent successfully! We'll be in touch soon.
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="fullName" className="text-[14px] font-bold text-[#162726] uppercase tracking-wider ml-1">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-[18px] border border-gray-100 bg-[#F2F4F7] focus:bg-white focus:ring-2 focus:ring-[#07A698] focus:outline-none transition-all font-medium text-[#162726]"
              placeholder="John Doe"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-[14px] font-bold text-[#162726] uppercase tracking-wider ml-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-[18px] border border-gray-100 bg-[#F2F4F7] focus:bg-white focus:ring-2 focus:ring-[#07A698] focus:outline-none transition-all font-medium text-[#162726]"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-[14px] font-bold text-[#162726] uppercase tracking-wider ml-1">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-6 py-4 rounded-[18px] border border-gray-100 bg-[#F2F4F7] focus:bg-white focus:ring-2 focus:ring-[#07A698] focus:outline-none transition-all font-medium text-[#162726] appearance-none cursor-pointer"
          >
            <option value="">Select a subject</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>{subject}</option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[14px] font-bold text-[#162726] uppercase tracking-wider ml-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-6 py-4 rounded-[24px] border border-gray-100 bg-[#F2F4F7] focus:bg-white focus:ring-2 focus:ring-[#07A698] focus:outline-none transition-all font-medium text-[#162726] resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-5 bg-[#07A698] hover:bg-[#162726] text-white rounded-full font-bold text-[16px] transition-all duration-300 shadow-lg shadow-[#07A698]/20 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-widest mt-4"
        >
          {isLoading ? 'Processing...' : 'Send Message Now'}
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;