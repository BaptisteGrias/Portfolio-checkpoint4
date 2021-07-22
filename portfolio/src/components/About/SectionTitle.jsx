import React from 'react';
import StyledSectionTitle from '../../styles/Aboutstyle/StyledAboutTitle';

export default function SectionTitle({ subheading = 'This is subheading', heading = 'This is heading' }) {
  return (
    <StyledSectionTitle>
      <p className="SectionTitle2"> {subheading}</p>
      <h2 className="SectionTitle2">{heading}</h2>
    </StyledSectionTitle>
  );
}
