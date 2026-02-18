import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';
import Container from './Container';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' },
      { name: 'Press', path: '/press' }
    ],
    resources: [
      { name: 'Help Center', path: '/help' },
      { name: 'Partners', path: '/partners' },
      { name: 'Community', path: '/community' },
      { name: 'Events', path: '/events' },
      { name: 'Instructors', path: '/instructors' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/cookies' },
      { name: 'GDPR', path: '/gdpr' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, name: 'Facebook' },
    { icon: Twitter, name: 'Twitter' },
    { icon: Instagram, name: 'Instagram' },
    { icon: Linkedin, name: 'LinkedIn' }
  ];

  const contactInfo = [
    { icon: Mail, text: 'support@Patil Institute.com' },
    { icon: Phone, text: '+1 (555) 123-4567' },
    { icon: MapPin, text: 'San Francisco, CA' }
  ];

  return (
    <footer className="bg-secondary-dark text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <span className="text-xl font-bold">Patil Institute</span>
            </div>
            <p className="text-slate-400 max-w-xs">
              Empowering learners worldwide with high-quality education and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href="#"
                    className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal & Contact</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-text-muted hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10">
                <h4 className="font-medium text-white mb-2">Contact Us</h4>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => {
                    const Icon = contact.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-400 text-sm">{contact.text}</span>
                      </div>
                    );
                  })}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2026 Patil Institute. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-slate-400 text-sm">Made with ❤️ for learners</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;