import React from 'react';
import StyledTextImage from '../../styles/HomepageStyle/StyledTextImage';

const ParagrapheText = ({ children }) => {
  return (
    <StyledTextImage className="para">
      <p className="para2">{children}</p>
    </StyledTextImage>
  );
};
export default ParagrapheText;
