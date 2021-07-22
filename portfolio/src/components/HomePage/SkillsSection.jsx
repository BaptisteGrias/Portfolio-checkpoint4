import React from 'react';
import SectionTitle from '../About/SectionTitle';
import SkillsSectionItems from './SkillsSectionItems';
import SkillSection from '../../styles/HomepageStyle/StyledSectionSkill';
import { AiOutlineHtml5, AiOutlineGithub } from 'react-icons/ai';
import { DiCss3, DiVisualstudio } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';

const SkillsSection = () => {
  return (
    <SkillSection>
      <SectionTitle heading=" My Skills" subheading="What I learned during my training" />

      <div className="all_skills">
        <SkillsSectionItems
          icon1={<AiOutlineHtml5 />}
          icon2={<DiCss3 />}
          icon3={<IoLogoJavascript />}
          title="HTML5, CSS3, JavaScript "
          desc="I learned how to use HTML5 and CSS3 for a month. I did one project with this language. I also learned JavaScript for a month and half and learned some framework."
        />
        <SkillsSectionItems
          icon1={<FaReact />}
          icon2={<FaNodeJs />}
          icon3=""
          title="React and NodeJS"
          desc="I learned the framework React for 2 month and half. I did two projects with this language, and this portfolio is made with react. I also learned some back with NodeJs in this 2 month and half and I used NodeJS in my portfolio."
        />
        <SkillsSectionItems
          icon1={<FaGitAlt />}
          icon2={<AiOutlineGithub />}
          icon3={<DiVisualstudio />}
          title="Git, GitHub, VSCode"
          desc=" During this training I learned how to worked in good conditions with good tools."
        />
      </div>
    </SkillSection>
  );
};
export default SkillsSection;
