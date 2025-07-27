import styled from '@emotion/styled';
import Image from 'next/image';

export const Footer = styled.footer`
  border-top: 8.5px solid #dfddeb;
  padding: 3.13rem 1.5rem;

  @media (min-width: 48rem) {
    padding: 3.1rem 1.5rem;
  }

  @media (min-width: 60rem) {
    max-width: 66rem;
    margin: 0 auto;
    padding: 3rem;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-direction: column;

  @media (min-width: 48rem) {
    flex-direction: row;
  }

  ul {
    list-style: none;
    width: 100%;

    @media (min-width: 48rem) {
      width: 33%;
    }
  }

  li {
    box-sizing: border-box;
    flex-wrap: wrap;
    margin-bottom: 1rem;
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

export const PartnersDiv = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  flex-direction: column;

  ul {
    line-height: 1;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.5rem;

    @media (min-width: 48rem) {
      flex-direction: row;
    }
  }

  li {
    list-style: none;
    font-size: 1rem;
    margin-right: 0.5rem;
    display: block;
    width:100%;
    margin-bottom: 0.5rem;

    @media (min-width: 48rem) {
      margin-bottom: 0;
      width:auto;
  }

  a {
    color: #3f27ba;

    &:hover {
      text-decoration: none;
    }
  }
`;

export const Services = styled.div`
  ul {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    line-height: 1.5rem;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 48rem) {
      flex-direction: row;
    }
  }

  li {
    list-style: none;
    font-size: 1rem;
    display: block;
    margin-bottom: 0;

    &:last-child {
      margin-top: 1.5rem;
    }
  }

  a {
    text-decoration: none;
    color: #3f27ba;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 48rem) {
    li:last-child {
      margin-top: 0;
    }
  }

  .copyright {
    color: #5e636e;
    white-space: nowrap;
  }
`;
