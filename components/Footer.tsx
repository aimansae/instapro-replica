import React from 'react';
import RatingImage from '../public/images/4star-rating.png';
import TruspilotImage from '../public/images/truspilotLogo.png';
import { StyledFooter, StyledFooterDiv, StyledSocialIconDiv, StyledRatingImage, StyledPartnersDiv, StyledListContainer, StyledServices } from './Footer.styled';

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledFooterDiv>
          <ul>
            <li>
              <a href="">Service Center</a>
            </li>
            <li>
              <a href="">About Instapro</a>
            </li>
            <li>
              <a href="">Blogs and press</a>
            </li>
            <li>
              <a href="">Work with us</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="">Quality Standard</a>
            </li>
            <li>
              <a href="">Become a partner with us</a>
            </li>
          </ul>
          <ul>
            <li className="singup-link">
              <p>Are you a professional?</p>
              <a href="">
                <i className="fa fa-arrow-right fa-solid yellow-arrow"></i>
                <span>subscribe now</span>
              </a>
            </li>
          </ul>
        </StyledFooterDiv>

        <StyledSocialIconDiv>
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
          <ul className="ul-rating-desciption">
            <li className="rating-description">Very Good</li>
            <li>
              <StyledRatingImage src={RatingImage} alt="Truspilot rating" />
            </li>
            <li>
              <a href="https://it.trustpilot.com/" target="_blank">
                <StyledRatingImage src={TruspilotImage} alt="Truspilot Logo" />
              </a>
            </li>
          </ul>
        </StyledSocialIconDiv>

        <StyledPartnersDiv>
          <p>Official Partner of HomeAdvisor International</p>
          <StyledListContainer>
            <ul>
              <li>
                United States: <a href="#">Homeadvisor & Angi</a>
              </li>
              <li>
                United Kingdom: <a href="#"> MyBuilder</a>
              </li>
              <li>
                Canada: <a href="#">Homestars</a>
              </li>
              <li>
                France: <a href="#">123 Devis & Travaux.com</a>
              </li>
              <li>
                Germany <a href="#">My Hammer</a>
              </li>
              <li>
                Netherlands: <a href="#">My Hammer</a>
              </li>
              <li>
                Austria: <a href="#">Werkspot</a>
              </li>
            </ul>
          </StyledListContainer>
          <StyledServices>
            <ul>
              <li>
                <a href="#">Sectors</a>
              </li>
              <li>
                <a href="#"> Services</a>
              </li>
              <li>
                <a href="#">Location</a>
              </li>
              <li>
                <a href="#">Price guide</a>
              </li>
              <li>
                <a href="#">Privacy and cookie management</a>
              </li>
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li>
                <span className="copyright">© 2005-2023 Werkspot BV</span>
              </li>
            </ul>
          </StyledServices>
        </StyledPartnersDiv>
      </StyledFooter>
    </>
  );
};

export default Footer;
