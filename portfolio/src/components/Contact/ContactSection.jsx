import React from 'react';
import { MdLocalPhone, MdEmail } from 'react-icons/md';
import SectionTitle from '../About/SectionTitle';
import StyledContactSection from '../../styles/Contact/StyledSectionContact';
import ContactInfoItems from './ContactInfoItems';
import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <StyledContactSection>
      <div className="container">
        <SectionTitle heading="Contact Me" subheading="For any questions " />
        <div className="contactSection">
          <div className="left">
            <ContactInfoItems icon={<MdLocalPhone />} text="+33 0648780770" />
            <ContactInfoItems icon={<MdEmail />} text="Baptiste.grias@gmail.com" />
            <ContactInfoItems text="Nantes(44), France" />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </StyledContactSection>
  );
}
