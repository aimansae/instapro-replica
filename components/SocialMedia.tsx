import React from 'react';
import * as Styled from './SocialMedia.styled';
import TruspilotImage from '../public/images/truspilotLogo.png';
import RatingImage from '../public/images/4star-rating.png';

const SocialMedia = () => {
  return (
    <Styled.SocialIconDiv>
      <ul>
        <li>
          <i className="fa fa-facebook fa-brands"></i>
        </li>
        <li>
          <i className="fa fa-twitter fa-brands"></i>
        </li>
        <li>
          <i className="fa fa-youtube"></i>
        </li>
      </ul>

      <div className="rating-container">
        <div className="spacing">
          <p className="rating-description">Very Good</p>
        </div>
        <div className="spacing">
          <Styled.RatingImage src={RatingImage} alt="Truspilot rating" />
        </div>
        <div className="spacing">
          <a href="https://it.trustpilot.com/" target="_blank">
            <Styled.RatingImage src={TruspilotImage} alt="Truspilot Logo" />
          </a>
        </div>
      </div>
    </Styled.SocialIconDiv>
  );
};

export default SocialMedia;
