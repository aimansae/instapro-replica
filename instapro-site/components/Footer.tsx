import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import RatingImage from '../public/images/4star-rating.png';
import TruspilotImage from '../public/images/truspilotLogo.png';

const StyledFooter = styled.footer`
  border-top: 8.5px solid #dfddeb;
  @media (min-width: 60rem) {
    max-width: 66rem;
    margin: 0 auto;
    padding: 3rem;
  }
  @media (max-width: 48rem) {
    padding: 3.13rem 1.5rem;
  }
  @media only screen and (min-width: 760px) and (max-width: 960px) {
    padding: 3.1rem 1.5rem;
  }
`;

const StyledFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media (max-width: 48rem) {
    flex-direction: column;
  }

  ul {
    list-style: none;
    width: 33%;

    @media (max-width: 48rem) {
      width: 100%;
    }
  }

  li {
    box-sizing: border-box;
    flex-wrap: wrap;
    @media (max-width: 48rem) {
      margin-bottom: 1rem;
    }
  }
  a {
    font-size: 1rem;
    color: #3f27ba;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    font-size: 1rem;
  }
  .singup-link {
    background-color: #f9f8f6;
    padding: 16px 24px;
    border-radius: 0.5rem;
  }
  .singup-link a {
    color: #330691;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  i {
    margin-right: 0.5rem;
  }
  .yellow-arrow {
    color: #3f27ba;
    padding-top: 4px;
    font-size: 0.875rem;
    background-color: #e5cb4e;
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;
  }
`;

const StyledSocialIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    font-size: 2rem;
    align-items: center;
    color: #3f27ba;
  }
  i {
    margin-right: 0.75rem;
    @media (max-width: 48rem) {
      font-size: 2rem;
    }
  }
  .ul-rating-desciption {
    display: flex;
    align-items: center;
  }
  .ul-rating-desciption li:not(:last-child) {
    text-decoration: none;
    margin-right: 0.5rem;
  }
  .ul-rating-desciption li {
    font-size: 1.125rem;
  }
  .rating-description {
    font-size: 18px;
    color: #2c2c2c;
  }
  @media (max-width: 48rem) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 2rem;
    margin-top: 1.5rem;
  }
`;
const StyledRatingImage = styled(Image)`
  width: 3.2em;
  height: auto;
`;

const StyledPartnersDiv = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;
const StyledListContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;

  ul {
    line-height: 1;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.5rem;
    @media (max-width: 48rem) {
      flex-direction: column;
    }
  }
  li {
    list-style: none;
    font-size: 1rem;
    margin-right: 0.5rem;
    display: block;
    margin-bottom: 0;

    @media (max-width: 48rem) {
      margin-bottom: 0.5rem;
    }
  }
  a {
    color: #3f27ba;
    &:hover {
      text-decoration: none;
    }
  }
`;

const StyledServices = styled.div`
ul{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    line-height: 1.5rem;

    @media (max-width: 48rem) {
        flex-direction: column;
        gap: 1.5rem;
    }
}
li{
    list-style: none;
    font-size: 1rem;
    display: block;
    margin-bottom: 0;

    @media (max-width: 60rem) {
        li:last-child {
        margin-top: 1.5rem;
    }
}
a{
    text-decoration: none;
    color: #3f27ba;
    &:hover{
        text-decoration: underline;
    }
}

@media (max-width: 48rem) {
li:last-child {
    margin-top: 1.5rem;
}
}
.copyright{
    color: #5e636e;
    white-space: nowrap;
}
`;
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
