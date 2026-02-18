import React from 'react';
import Hero from '../components/hero/Hero';
import InfoBoxes from '../components/features/InfoBoxes';
import FeaturedCourses from '../components/courses/FeaturedCourses';
import FeaturesGrid from '../components/features/FeaturesGrid';
import AboutVideoSection from '../components/about/AboutVideoSection';
import StatsSection from '../components/features/StatsSection';
import VideoFeatureSection from '../components/features/VideoFeatureSection';
import CtaSection from '../components/cta/CtaSection';
import InstructorsSection from '../components/instructors/InstructorsSection';
import EventsSection from '../components/events/EventsSection';
import BlogSection from '../components/blog/BlogSection';
import OfferSection from '../components/cta/OfferSection';

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <Hero />
      <InfoBoxes />
      <FeaturedCourses />
      <FeaturesGrid />
      <AboutVideoSection />
      <StatsSection />
      <VideoFeatureSection />
      <CtaSection />
      <InstructorsSection />
      <EventsSection />
      <BlogSection />
    </div>
  );
};

export default Home;