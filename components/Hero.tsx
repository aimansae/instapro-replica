/* eslint-disable @next/next/no-img-element */
import React from 'react';
import * as Styled from '@components/Hero.styled';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => {
  return (
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
                placeholder="For ex: Home renovation"
              />
              <Styled.ButtonDesk className="input-button" type="submit">
                Find a professional
              </Styled.ButtonDesk>
              <Styled.ButtonMobile className="input-button" type="submit">
                <AiOutlineArrowRight className="arrow-right" />
              </Styled.ButtonMobile>
            </Styled.InputContainer>
          </form>
          <Styled.SignupLink>
            <a href="#">
              <Styled.YellowArrowIcon className="fa fa-arrow-right fa-light" />
              <span className="underlined">Sign up as a professional</span>
            </a>
          </Styled.SignupLink>{' '}
        </article>
      </Styled.FormContainer>
    </Styled.MainContainer>
  );
};

export default Hero;
