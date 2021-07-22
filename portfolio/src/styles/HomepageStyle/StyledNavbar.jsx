import styled from 'styled-components';

const StyledHeader = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: #262626;
  ul {
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      display: inline-block;
      border-radius: 8px;
      transition: 0.3 ease background-color;
      &:hover {
        background-color: #1e1e1e;
      }
    }
    a {
      display: inline-block;
      font-family: 'RobotoMono Regular';
      padding: 1rem 2rem;
      font-size: 2rem;
      color: #bcb4b4;
      outline: none;
      text-decoration: none;
    }
    .active {
      color: white;
    }
  }
`;

export default StyledHeader;
