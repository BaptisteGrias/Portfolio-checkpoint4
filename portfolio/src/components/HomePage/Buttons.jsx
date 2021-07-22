import React from 'react';
import { Link } from 'react-router-dom';
import StyledButton from '../../styles/HomepageStyle/StyledButton';

const Buttons = ({ btnLink, btnText, outline }) => {
  return (
    <StyledButton outline={outline}>
      <Link className="Button" to={btnLink}>
        {btnText}
      </Link>
    </StyledButton>
  );
};

export default Buttons;
