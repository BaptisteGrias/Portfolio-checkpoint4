import styled from 'styled-components';

const StyledContactSection = styled.div`
  padding: 10rem 0;
  .contactSection {
    display: flex;
    gap: 5rem;
    margin-top: 7rem;
    justify-content: space-around;
    position: relative;
  }
  .contactSection::after {
    position: absolute;
    content: '';
    width: 2px;
    height: 500px;
    background-color: #bcb4b4;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .left {
    margin-top: 2rem;
    width: 100%;
    max-width: 500px;
  }
  .right {
    max-width: 500px;
    width: 100%;
  }
`;

export default StyledContactSection;
