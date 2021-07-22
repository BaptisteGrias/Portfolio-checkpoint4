import styled from 'styled-components';

const StyledSectionAbout = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .aboutSection_left,
  .aboutSection_right {
    flex: 1;
  }

  .SectionTitle2 {
    text-align: center;
    color: #ffffff;
  }
  .para {
    display: flex;
    margin-top: 2rem;
    margin-left: 20%;
  }

  .bouttonAboutSection {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

export default StyledSectionAbout;
