import React from 'react';
import HomeContainer from '../HomePage/HomeContainer';
import AboutSection from '../About/AboutSection';
import ServiceSection from '../HomePage/SkillsSection';
import ProjectsSection from '../HomePage/ProjectsSection';

const Home = () => {
  return (
    <div>
      <HomeContainer />
      <AboutSection />
      <ServiceSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
