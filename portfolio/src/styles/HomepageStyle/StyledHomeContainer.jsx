import styled from 'styled-components';

export const StyledHomeContainer = styled.div`
  .topContainer {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    position: relative;
    font-family: 'RobotoMono-Regular';
  }
  .title {
    font-size: 1.3rem;
    margin-bottom: -1.7rem;
    position: relative;
    color: #bcb4b4;
    span {
      display: inline-block;
      width: 100%;
    }
    .name {
      font-size: 3.5rem;
      font-family: 'Montserrat SemiBold';
      color: white;
    }
  }
  .photo {
    max-width: 1000px;
    width: 99.7%;
    height: 777px;
    margin: 0 auto;
    border: 2px solid #bcb4b4;
  }
  .social,
  .scroll {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    gap: 1rem;
    position: absolute;
    width: 50px;
    color: white;
  }
  .social {
    left: 30%;
    bottom: 100px;
  }
  .scroll {
    right: 30%;
    bottom: 70px;
  }
  .social_indicator,
  .scroll {
    width: 50px;
    p {
      font-size: 1.1rem;
      transform: translateY(-65px) rotate(90deg);
      letter-spacing: 0.3rem;
      text-transform: uppercase;
    }
    img {
      max-height: 50px;
      width: 30px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .scroll {
    img {
      max-height: 60px;
    }
  }
  .socialText {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    li {
      margin-bottom: 1rem;

      a {
        display: inline-block;
        font-size: 1rem;
        text-decoration: none;
        color: white;
        transform: rotate(-90deg);
        margin-bottom: 0.5rem;
      }
    }
  }
`;
