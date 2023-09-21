/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';

const StyledArticle = styled.article`
  position: relative;
  overflow: hidden;
  margin-top: -5rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 100vw;
    z-index: -1;
    background: rgba(0, 0, 0, 0.25)
      linear-gradient(180deg, rgba(0, 0, 0, 0.7) 3.62%, rgba(0, 0, 0, 0) 17.92%);
    mix-blend-mode: multiply;
  }
`;

const StyledPicture = styled.picture`
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -2;
  overflow: hidden;
`;

const customImage: SerializedStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

const StyledMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 3rem 1rem;
  width: 100%;
  margin: 0 auto;
  @media (min-width: 60rem) {
    max-width: calc(60rem + 2 * 3rem);
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (max-width: 48rem) {
    max-width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media only screen and (min-width: 760px) and (max-width: 960px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const StyledH1Container = styled.div`
  margin-top: 6rem;
  @media (min-width: 60rem) {
    margin-top: 10rem;
  }
`;

const StyledH1 = styled.h1`

    font-size: 2rem;
    line-height: 1.313;
    margin-bottom: 3rem;
    color: #fff;
}`;

const StyledFormContainer = styled.div`
  margin: 0 0 6rem;
  width: 100%;
  @media (min-width: 60rem) {
    width: 55%;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  line-height: 1.313;
  color: #2c2c2c;

  @media only screen and (min-width: 760px) and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

const StyledInputContainer = styled.div`
  position: relative;
  border-radius: 3.5rem;
  background-color: #ffffff;
  border: 2px solid transparent;
  box-shadow: 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.15);
  display: flex;

  &:focus-within {
    border: 2px solid #3f27ba;
  }

  @media only screen and (min-width: 47.5rem) and (max-width: 60rem) {
    width: 60%;
  }

  .input-button{
    position: relative;
    margin: 0.15rem 0.15rem 0.15rem 0;
    padding: .9rem 1.5rem;
    z-index: 2;
    width: auto;
    height: 3rem;
    min-width: auto;
    background-color: #3f27ba;
    color: #fff;
    border-radius: 1.5rem;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    &:hover{
        background-color: #330691;
    }
    @media (max-width: 48rem) {
        padding: 0 1rem;
    }
    
//   @media (max-width: 48rem) {
//     width: 100%;
//   }
 
`;

const StyledInput = styled.input`
  position: relative;
  flex-grow: 1;
  border-radius: inherit;
  border: 0;
  padding: 1rem 0.5rem 1rem 1.5rem;
  margin: 0;
  max-width: none;
  background-color: transparent;
  width: auto;
  z-index: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledButtonDesk = styled.button`

    @media (max-width: 48rem) {
      display: none;
      background-color: black;
    }
  }
`;
const StyledButtonMobile = styled.button`
  display: none;

  @media (max-width: 48rem) {
    display: block;
  }
`;
const Main = () => {
  return (
    <main>
      <StyledArticle>
        <StyledPicture>
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
            className={customImage as unknown as string}
            src="/images/picture1440x636.jpg"
            srcSet="/images/picture480x586.jpg 480w, /images/picture768x586.jpg 768w, 
                    /images/picture960x1172.jpg 960w, /images/picture1440x636.jpg 1440w, 
                    /images/picture1538x1172.jpg 1538w, /home/1920x1084.jpg 1920w, 
                    /home/2000x1272.jpg 2000w"
            alt=""
          />
        </StyledPicture>
        <StyledMainContainer>
          <StyledH1Container>
            <StyledH1>
              Find a professional for all your home related projects
            </StyledH1>
          </StyledH1Container>
          <StyledFormContainer>
            <article>
              <form>
                <label htmlFor="search-input">
                  <StyledH2 className="question">
                    What work do you have to do?
                  </StyledH2>
                </label>
                <StyledInputContainer>
                  <StyledInput
                    type="text"
                    id="search-input"
                    name="search-input"
                    placeholder="For example: Home renovation"
                  />
                  <StyledButtonDesk className="input-button" type="submit">
                    Find a professional
                  </StyledButtonDesk>
                  {/* for smaller screen<i className="fa-solid fa-arrow-right"></i>--> */}

                  <StyledButtonMobile className="input-button" type="submit">
                    <i className="fa-solid fa-arrow-right"></i>
                  </StyledButtonMobile>
                </StyledInputContainer>
              </form>
            </article>
          </StyledFormContainer>

          <div className="signup-container">
            <a href="#">
              <i className="fa-solid fa-arrow-right yellow-arrow"></i>
              <span>Sign up as a professional</span>
            </a>
          </div>
        </StyledMainContainer>
      </StyledArticle>
    </main>
  );
};

export default Main;
