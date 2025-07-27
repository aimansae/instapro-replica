import styled from '@emotion/styled';
import { css, SerializedStyles } from '@emotion/react';

export const Article = styled.article`
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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items:center;
  align-items:center;
  max-width: 100%;
  padding: 1.5rem;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  background-image: url('/images//picture1538x1172.png');
  background-size: cover;
  background-position: top center
  background-repeat: no-repeat;
 
  @media (min-width: 60rem) {
      
  }
`;

export const H1Container = styled.div`
  margin-top: 5rem;
  @media (min-width: 60rem) {
    margin-top: 10rem;
  }
  @media (min-width: 20rem) {
  }

  @media (min-width: 60rem) {
    max-width: calc(60rem + 2 * 3rem);
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export const H1 = styled.h1`
    font-size: 2rem;
    line-height: 1.313;
    margin-bottom: 3rem;
    color: #fff;
  
    @media (min-width: 60rem) {
      font-size: 3rem;
      line-height: 1.208;
    }
}`;

export const FormContainer = styled.div`
  margin: 0 0 6rem;
  width: 100%;
  @media (min-width: 60rem) {
    margin-top: 6rem;
  }

  @media (min-width: 60rem) {
    max-width: calc(60rem + 2 * 3rem);
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export const H2 = styled.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const InputContainer = styled.div`
  position: relative;
  border-radius: 3.5rem;
  background-color: #ffffff;
  border: 2px solid transparent;
  box-shadow: 0 0.0625rem 0.375rem rgba(0, 0, 0, 0.15);
  display: flex;
  width: 80%;
  &:focus-within {
    border: 2px solid #3f27ba;
  }

  .input-button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 0.9rem 1.5rem;
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
    padding: 0 1rem;

    &:hover {
      background-color: #330691;
    }

    @media (min-width: 48rem) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }
  }
  @media (min-width: 480px) {
    width: 80%;
  }
`;

export const Input = styled.input`
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

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 14px;
  }
`;

export const ButtonDesk = styled.button`
  display: none;

  @media (min-width: 48rem) {
    display: block;
  }
`;

export const ButtonMobile = styled.button`
  display: block;

  @media (min-width: 48rem) {
    display: none;
  }
`;

export const SignupLink = styled.div`
  margin-top: 3rem;

  a {
    color: #fff;
    font-size: 1rem;
    display: flex;
    align-items: start;
    text-decoration: none;
  }

  .underlined {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const YellowArrowIcon = styled.i`

  color: #3f27ba;
  padding-top: 4px;
  font-size: 0.875rem;
  background-color: #e5cb4e;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  text-align: center;
  margin-right: 0.3rem;
}`;
