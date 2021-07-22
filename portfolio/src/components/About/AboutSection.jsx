import React from 'react';
import Buttons from '../HomePage/Buttons';
import ParagrapheText from '../HomePage/ParagrapheText';
import SectionTitle from './SectionTitle';
import Photo2 from '../assets/images/moi1.png';
import StyledSectionAbout from '../../styles/Aboutstyle/StyledSectionAbout';

const AboutSection = () => {
  return (
    <StyledSectionAbout>
      <div className="container">
        <div className="aboutSection_left">
          <SectionTitle subheading=" Let me introduce myself" heading="About me" />
          <ParagrapheText>
            I am 30 years old, and I did a 5 month training course to become a web developer. Today I am a French junior web developer. Ready to learn
            and upgrade my skill, I love learnig new stuff, I would like to start my own business become a fullstack developper. I work hard and I
            love help people.
          </ParagrapheText>
          <div className="bouttonAboutSection">
            <Buttons btnLink="/projects" btnText="Works"></Buttons>
            <Buttons btnLink="/about" btnText="Read More" outline></Buttons>
          </div>
        </div>
        <div className="aboutSection_right">
          <img src={Photo2} alt="" />
        </div>
      </div>
    </StyledSectionAbout>
  );
};

export default AboutSection;

// I am 30 years old, and
// I did a 5 month training course to become a web developer.
// Today I am a junior web developer. Ready to learn new skill
