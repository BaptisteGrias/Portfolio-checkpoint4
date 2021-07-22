import React from 'react';
import { MdPlace } from 'react-icons/md';
import StyledContactItems from '../../styles/Contact/StyledItem';

export default function ContactInfoItems({ icon = <MdPlace />, text = 'this is info' }) {
  return (
    <StyledContactItems>
      <div className="icon">{icon}</div>
      <div className="infos">
        <p>{text}</p>
      </div>
    </StyledContactItems>
  );
}
