import React, { useEffect } from 'react';
import PageHeader from '../components/layout/PageHeader';
import AboutIntro from '../components/about/AboutIntro';
import AboutFeatures from '../components/about/AboutFeatures';
import Team from '../components/about/Team';
import Testimonials from '../components/about/Testimonials';
import AboutLeadership from '../components/about/AboutLeadership';
import BlogSection from '../components/blog/BlogSection';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <PageHeader
        title="About Us"
        bgImage="https://wp.rrdevs.net/edcare/wp-content/themes/edcare/assets/img/bg-img/page-header-bg.png"
      />
      <AboutIntro />
      <AboutFeatures />
      <Team />
      <Testimonials />
      <AboutLeadership />

      {/* Footer-level CTA or Blog if needed to match footer of target */}
      <div className="bg-white">
        <BlogSection />
      </div>
    </div>
  );
};

export default About;