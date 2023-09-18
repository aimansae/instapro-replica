'use client';

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface NavBarProps {
  className?: string;
  href: string;
}
type StyledLinkProps = {
  href: string;
};
const Header = styled.header`
  padding: 0.75rem 1.5rem;
  width: min(100%, calc(60rem + (2 * 1.5rem)));
  margin-inline: auto;
  z-index: 10;
  position: relative;

  @media (max-width: 960px) {
    padding: 0;
  }
  @media (min-width: 60rem) {
    padding: 1.5rem;
    height: 5rem;
  }

  @media (max-width: 48rem) {
    max-width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InstaproLogo = styled.div`
  @media (max-width: 960px) {
    padding-top: 0.75rem;
    padding-left: 1.5rem;
  }

  @media (max-width: 48rem) {
    font-size: 0.875rem;
  }
`;

const NavLinks = styled.div`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    list-style: none;
    padding: 0;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    display: block;
    color: #fff;
    font-family: 'moderat', sans-serif;
    color: #2c2c2c;

    &:hover {
      color: #dfddeb;
    }
  }
  .signup-style {
    outline: transparent solid 2px;
    border-radius: 0.5rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(217, 215, 213);

    &:hover {
      color: #fff;
      background-color: #ffffff3d;
    }
  }

  /* Media Query for screens with a maximum width of 960px */

  @media (max-width: 960px) {
    ul {
      flex-direction: column;
    }

    li {
      border-bottom: 1px solid rgb(217, 215, 213);
    }

    display: none;
    cursor: pointer;
  }
`;

const LinkListAnchor = styled.a<StyledLinkProps>`
  margin: 0px 0px 0px 1rem;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;

  &:hover {
    color: #fff;
    background-color: #ffffff3d;
  }
`;
const CustomSVG = styled.svg`
  display: block;
  height: 2rem;

  @media (min-width: 60rem) {
    height: 2.5rem;
  }
`;

const NavBar: React.FC<NavBarProps> = () => {
  return (
    <>
      <Header>
        <Navbar>
          <InstaproLogo>
            <a href="#">
              <CustomSVG
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Logo"
                viewBox="0 0 130 40"
              >
                <path
                  d="M12.6 28.6a12.6 12.6 0 1 0 0-25.2 12.6 12.6 0 0 0 0 25.2Z"
                  fill="#FFF"
                />
                <path
                  d="m12.4 15.8 8 2.3v-.7l-1.3-5.7a2 2 0 0 0-.9-1.2l-5-2.5-.8-.1v7.9Z"
                  fill="#09C"
                ></path>
                <path
                  d="M12.4 15.8v-8c-.3 0-.5 0-.7.2l-5.1 2.5c-.4.2-.8.7-1 1.2l-1.2 5.7v.7l8-2.3Z"
                  fill="#0083A9"
                ></path>
                <path
                  d="m12.4 15.8-8 2.3.3.7 3.6 4.6c.3.3.8.6 1.3.6h1.6l-.8-4.1h4l-.8 4.1h1.6c.5 0 1-.3 1.3-.6l3.6-4.6.3-.7-8-2.3Z"
                  fill="#005B82"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M34.6 6.9h-3.4c-.2 0-.3 0-.3.3v16.2c0 .2 0 .3.3.3h3.4c.2 0 .3-.1.3-.3V7.2c0-.2-.1-.3-.3-.3Zm11.7 4.5a5 5 0 0 0-2.1-.5c-1.6 0-2.6.6-2.9.8l-.4.5h-.1v-.6c0-.2-.1-.4-.3-.4h-3c-.2 0-.3.2-.3.4v11.8c0 .2.1.3.3.3h3c.1 0 .3-.1.3-.3v-6.5c0-1.5 0-2.2.6-2.7.3-.2.7-.4 1.2-.4 1.1 0 1.5.7 1.6 1l.2 1.8v6.8c0 .2 0 .3.3.3h2.9c.2 0 .3-.1.3-.3V15c0-1.5 0-2.9-1.6-3.7ZM57 15.9l-1.7-.4H55a4 4 0 0 1-1.3-.4l-.3-.6c0-.2 0-.5.6-.8a3 3 0 0 1 1-.2 5.5 5.5 0 0 1 2.9 1l.2.2.2-.1L60 13l.1-.3-.1-.3-.7-.4a9 9 0 0 0-4.3-1.2c-3 0-4.3 1.6-4.6 2.3a4 4 0 0 0-.5 1.9c0 .3 0 .9.3 1.5.6 1.3 1.8 1.9 4.3 2.3h.3c1.3.3 2 .4 2.1 1.2 0 .7-.9 1-1.3 1l-.8.2c-1 0-2-.4-3-1.1l-.4-.4-.2-.1-.2.1-1.8 1.6v.5l1.2 1c1.8 1.1 4 1.1 4.4 1.1 1.8 0 4-.6 5.2-2.2 0-.2.5-1 .5-2.1 0-2-1.2-3.2-3.6-3.7Zm11.5-4.4h-2V8c0-.2-.1-.4-.3-.4h-2.9c-.2 0-.3.2-.3.4v3.5h-1.4c-.2 0-.4.1-.4.3v1.6c0 .2.2.3.4.3H63V20c0 1 0 2.2 1 3a3 3 0 0 0 2 .8h.8l1.6-.1c.2 0 .3-.2.3-.3V21l-.1-.3h-1.2c-.1 0-.6-.1-.8-.5v-.8l-.1-5.7h2c.2 0 .3-.2.3-.4V12c0-.2 0-.4-.3-.4Zm7.1-.6h-1.5c-.5.2-1.8.4-2.8 1.3-.7.8-.9 1.6-.9 2.1v.3l.3.1h3s.2 0 .3-.2v-.3c.2-.3.6-1 1.8-1 1.1 0 1.4.9 1.4 1.6v.6c-2.2.4-4 .8-4.9 1.2-.4.2-2.5 1.2-2.5 3.5 0 .6.2 1.2.4 1.7.4.8 1.3 2 3.6 2 1 0 2.1-.3 3-.8l.7-.6v1c0 .1.2.3.4.3h2.4c.2 0 .4-.2.4-.4v-8.9c0-.7-.1-1-.3-1.3-.9-2-3.4-2.2-4.8-2.2Zm-.9 10.4c-.7 0-1-.4-1.2-.7l-.1-.6c0-.6.3-1 1-1.4l.5-.2 2.3-.7c0 1 0 2.3-1 3-.3.2-.9.6-1.5.6ZM89.3 11c-1.6 0-2.5.5-2.9.9l-.4.4-.1.1v-.9c0-.1-.2-.3-.4-.3H83c-.2 0-.3.1-.3.3v15.6c0 .2.1.3.3.3h3c.2 0 .3-.1.3-.3v-4.3c1 .7 1.7 1 3 1a5 5 0 0 0 2.2-.4c.2-.1 1.2-.6 2-1.8.3-.6 1-2 1-4.2 0-2.1-.5-3.8-1.6-5a4.8 4.8 0 0 0-3.6-1.5Zm-1.8 9.9-.7-.7a5 5 0 0 1-.6-2.7c0-2.8 1.3-4 2.5-4h.5c.4.2.8.4 1 .8.6.7.9 1.7.9 3a5 5 0 0 1-.6 2.6c-.2.4-.7 1.3-2 1.3-.5 0-1-.3-1-.3Zm15.4-9.8c-.5 0-1 .2-1.8.5-.7.3-1 .6-1.3.8l-.1.2v-1c0-.2-.2-.3-.4-.3h-2.7c-.2 0-.4.1-.4.3v11.8c0 .2.2.4.4.4h2.8c.2 0 .4-.2.4-.4v-6.8c0-.8 0-1.5 1.1-1.8l1-.3h.1l1-.1.2-.4v-2.5l-.1-.3h-.2Zm11.4 1.1a6 6 0 0 0-3.8-1.3h-.6a6 6 0 0 0-5 2 6.9 6.9 0 0 0-1.4 4.5c0 2.6 1.1 4.1 1.8 4.8a7.2 7.2 0 0 0 4.8 1.8c2.3 0 3.7-1 4.3-1.5.7-.5 2.2-2.1 2.2-5.1 0-2.1-.9-4-2.3-5.2Zm-7.1 5.2c0-1.8.7-3 1.4-3.3.5-.4 1.3-.4 1.3-.4 1 0 1.5.3 1.8.5.9.6 1.3 1.7 1.3 3.3 0 2.2-1.1 3.5-2.9 3.5-1.3 0-2-.8-2.3-1.2-.3-.4-.6-1.4-.6-2.4Z"
                  fill="#FFF"
                ></path>
              </CustomSVG>
            </a>
          </InstaproLogo>
          <a href="#" className="toggle-menu">
            <span className="span-toggle">Menu </span>
            <span className="icon-bars">
              <i className="fa-solid fa-bars"></i>
            </span>
            <span className="span-toggle iconx">
              <i className="fa-solid fa-x"></i>
            </span>
          </a>

          <NavLinks>
            <ul>
              <li>
                <LinkListAnchor href="#">Get Free quotes »</LinkListAnchor>
              </li>
              <li>
                <LinkListAnchor href="#">How does it work</LinkListAnchor>
              </li>
              <li>
                <LinkListAnchor href="#">Log In</LinkListAnchor>
              </li>
              <li>
                <LinkListAnchor className=" signup-style" href="#">
                  Signup as a professional
                </LinkListAnchor>
              </li>
            </ul>
          </NavLinks>
        </Navbar>
      </Header>
    </>
  );
};

export default NavBar;
