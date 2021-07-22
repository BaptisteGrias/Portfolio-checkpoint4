import React from 'react';
import { StyledHomeContainer } from '../../styles/HomepageStyle/StyledHomeContainer';
import Buttons from './Buttons';
import ParagrapheText from './ParagrapheText';
import Photo from '../assets/images/moi.png';
import SocialMediaArrow from '../assets/images/social-media-arrow.svg';
import Scroll from '../assets/images/scroll-down-arrow.svg';

const HomeContainer = () => {
  return (
    <StyledHomeContainer>
      <div className="topContainer">
        <div>
          <h1 className="title">
            <span>Welcome, I'm </span>
            <br />
            <span className="name">Baptiste Grias</span>
          </h1>
          <div>
            <div className="photo">
              <img src={Photo} alt="" />
            </div>
            <div>
              <ParagrapheText> I decided at the beginning of 2021 to learn a new profession. Now I happy to be a web developer </ParagrapheText>
              <Buttons btnLink="/projects" btnText="See my works" outline={false} />
            </div>
            <div className="social">
              <div className="social_indicator">
                <p>Follow</p>
                <img src={SocialMediaArrow} alt="social media arrow" />
              </div>
              <div className="socialText">
                <ul>
                  <li>
                    <a href="https://www.linkedin.com/in/baptistegrias/" target="_blank" rel="noreferrer">
                      in
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/BaptisteGrias" target="_blank" rel="noreferrer">
                      Ghub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/Baptiste.Gria" target="_blank" rel="noreferrer">
                      Fb
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="scroll">
              <p>Scroll</p>
              <img src={Scroll} alt="scroll-down" />
            </div>
          </div>
        </div>
      </div>
    </StyledHomeContainer>
  );
};

export default HomeContainer;
