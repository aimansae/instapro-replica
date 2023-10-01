/* eslint-disable @next/next/no-img-element */
import React from 'react';
import * as Styled from '@components/Main.styled';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Main = () => {
  return (
    <main>
      <Styled.StyledArticle>
        <Styled.StyledPicture>
          <source
            type="image/avif"
            srcSet="/images/picture480x586.avif 480w, /images/picture768x586.avif 768w, 
                    /images/picture960x1172.avif 960w, /images/picture1440x636.avif 1440w, 
                    /images/picture1538x1172.avif 1538w, /images/picture1920x1084.avif 1920w, 
                    /images/picture2000x1272.avif 2000w"
          />
          <source
            type="image/webp"
            srcSet="/images/picture480x586.webp 480w, /images/picture768x586.webp 768w, 
                    /images/picture960x1172.webp 960w, /images/picture1440x636.webp 1440w, 
                    /images/picture1538x1172.webp 1538w, /images/picture1440x636.jpg, 
                    /images/picture2000x1272.webp 2000w"
          />

          <img
            className={Styled.customImage as unknown as string}
            src="/images/picture1440x636.jpg"
            srcSet="/images/picture480x586.jpg 480w, /images/picture768x586.jpg 768w, 
                    /images/picture960x1172.jpg 960w, /images/picture1440x636.jpg 1440w, 
                    /images/picture1538x1172.png 1538w, /home/1920x1084.jpg 1920w, 
                    /home/2000x1272.jpg 2000w"
            alt=""
          />
        </Styled.StyledPicture>
        <Styled.StyledMainContainer>
          <Styled.StyledH1Container>
            <Styled.StyledH1>
              Find a professional for all your home related projects
            </Styled.StyledH1>
          </Styled.StyledH1Container>
          <Styled.StyledFormContainer>
            <article>
              <form>
                <label htmlFor="search-input">
                  <Styled.StyledH2>
                    What work do you have to do?
                  </Styled.StyledH2>
                </label>
                <Styled.StyledInputContainer>
                  <Styled.StyledInput
                    type="text"
                    id="search-input"
                    name="search-input"
                    placeholder="For example: Home renovation"
                  />
                  <Styled.StyledButtonDesk
                    className="input-button"
                    type="submit"
                  >
                    Find a professional
                  </Styled.StyledButtonDesk>
                  {/* for smaller screen<i className="fa-solid fa-arrow-right"></i>--> */}

                  <Styled.StyledButtonMobile
                    className="input-button"
                    type="submit"
                  >
                    <AiOutlineArrowRight className="arrow-right" />
                  </Styled.StyledButtonMobile>
                </Styled.StyledInputContainer>
              </form>
            </article>
          </Styled.StyledFormContainer>

          <Styled.StyledSignupLink>
            <a href="#">
              <Styled.StyledYellowArrowIcon className="fa fa-arrow-right fa-light" />
              <span className="underlined">Sign up as a professional</span>
            </a>
          </Styled.StyledSignupLink>
        </Styled.StyledMainContainer>
      </Styled.StyledArticle>
    </main>
  );
};

export default Main;
