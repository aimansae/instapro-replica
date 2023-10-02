/* eslint-disable @next/next/no-img-element */
import React from 'react';
import * as Styled from '@components/Main.styled';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Main = () => {
  return (
    <main>
      <Styled.Article>
        <Styled.Picture>
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
            className={Styled.CustomImage as unknown as string}
            src="/images/picture1440x636.jpg"
            srcSet="/images/picture480x586.jpg 480w, /images/picture768x586.jpg 768w, 
                    /images/picture960x1172.jpg 960w, /images/picture1440x636.jpg 1440w, 
                    /images/picture1538x1172.png 1538w, /home/1920x1084.jpg 1920w, 
                    /home/2000x1272.jpg 2000w"
            alt=""
          />
        </Styled.Picture>
        <Styled.MainContainer>
          <Styled.H1Container>
            <Styled.H1>
              Find a professional for all your home related projects
            </Styled.H1>
          </Styled.H1Container>
          <Styled.FormContainer>
            <article>
              <form>
                <label htmlFor="search-input">
                  <Styled.H1>What work do you have to do?</Styled.H1>
                </label>
                <Styled.InputContainer>
                  <Styled.Input
                    type="text"
                    id="search-input"
                    name="search-input"
                    placeholder="For example: Home renovation"
                  />
                  <Styled.ButtonDesk className="input-button" type="submit">
                    Find a professional
                  </Styled.ButtonDesk>
                  <Styled.ButtonMobile className="input-button" type="submit">
                    <AiOutlineArrowRight className="arrow-right" />
                  </Styled.ButtonMobile>
                </Styled.InputContainer>
              </form>
            </article>
          </Styled.FormContainer>

          <Styled.SignupLink>
            <a href="#">
              <Styled.YellowArrowIcon className="fa fa-arrow-right fa-light" />
              <span className="underlined">Sign up as a professional</span>
            </a>
          </Styled.SignupLink>
        </Styled.MainContainer>
      </Styled.Article>
    </main>
  );
};

export default Main;
