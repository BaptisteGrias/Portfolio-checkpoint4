import styled from 'styled-components';

const StyledContactItems = styled.div`
  padding: 2rem;
  background-color: #0c0c0c;
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 3rem;

  .icon {
    color: #ffffff;
    background-color: #575555;
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    font-size: 3rem;
    width: 3rem;
  }
  p {
    color: #ffffff;
  }
`;

export default StyledContactItems;
