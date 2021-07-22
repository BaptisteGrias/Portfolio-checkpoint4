import React from 'react';
import SectionTitle from '../About/SectionTitle';
import { Swiper } from 'swiper/react';
// import Projects from '../assets/data/Projects';

const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <SectionTitle heading="Projects" subheading="Some of my works" />
        <div className="projects_allItems">
          <Swiper>
            {/* {Projects.map((Project, index) => {
              if (index >= 3) return;
              return <div> This is my projects</div>;
            })} */}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
