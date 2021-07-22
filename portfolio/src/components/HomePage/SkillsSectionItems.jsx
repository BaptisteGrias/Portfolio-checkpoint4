import React from 'react';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';

import StyledIconsSection from '../../styles/HomepageStyle/StyledIcons';

const SkillsSectionItems = ({
  icon1 = <AiOutlineHtml5 />,
  icon2 = <DiCss3 />,
  icon3 = <IoLogoJavascript />,
  title = 'HTML5, CSS3, JavaScript ',
  desc = 'I learned how to use HTML5 and CSS3 for a month. I did one project with this language. I also learned JavaScript for a month and half and learned some framework.',
}) => {
  return (
    <StyledIconsSection>
      <div className="SkillItem_icon">
        {icon1} {icon2} {icon3}
      </div>
      <div className="skillItem_Title">{title} </div>
      <p className="paraSkill">{desc}</p>
    </StyledIconsSection>
  );
};
export default SkillsSectionItems;
