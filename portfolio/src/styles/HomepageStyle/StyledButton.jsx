import styled from 'styled-components';

const StyledButton = styled.div`
  margin-top: 2rem;

  .Button {
    font-size: 2rem;
    background-color: ${(props) => (props.outline ? 'transparent' : '#bcb4b4')};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid #bcb4b4;
    color: ${(props) => (props.outline ? '#bcb4b4' : '#1e1e1e')};
    text-decoration: none;
  }
`;

export default StyledButton;
