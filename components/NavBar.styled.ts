import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { FaBars, FaTimes } from 'react-icons/fa';

export type NavBarProps = {
  className?: string;
  href: string;
};

export type LinkProps = {
  href: string;
};

export type ActiveMenuProps = {
  navbarOpen: boolean;
};

export const Header = styled.header<ActiveMenuProps>`
  width: min(100%, calc(60rem + (2 * 1.5rem)));
  margin-inline: auto;
  z-index: 10;
  position: relative;
  background-color: transparent;

  @media (min-width: 48rem) {
    max-width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 60rem) {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    max-width: calc(60rem + 2 * 3rem);
    padding-left: 3rem;
    padding-right: 3rem;
    height: 5rem;
    width: 100%;
  }

  /* Change background- color if navbar is open */
  ${({ navbarOpen }) =>
    navbarOpen &&
    css`
      background-color: #fff;
    `}
`;

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;

  @media (min-width: 60rem) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

export const LogoDiv = styled.div`
  padding-left: 1.5rem;
  padding-top: 0.75rem;

  @media (min-width: 48rem) {
    padding-left: 0;
  }
`;

export const NavDesktop = styled.div`
  display: none;

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
    font-family: 'moderat', sans-serif;
    color: #fff;
    
    &:hover {
      color: #dfddeb;
    }
  }

  .signup-style {
    outline: transparent solid 2px;
    border-radius: 0.5rem;
    border: 1px solid rgb(217, 215, 213);

    &:hover {
      color: #fff;
      background-color: #ffffff3d;
    }
  }

  @media (min-width: 60rem) {
    display: block;
  }
`;

export const NavMobile = styled.div`
  background-color: white;
  width: 100%;
  cursor: pointer;
  position: absolute;
  top: 100%;
  left: 0;

  ul {
    width: 100%;
    margin: 0.5rem 0;
  }

  li {
    border-bottom: 1px solid rgb(217, 215, 213);
    list-style: none;

    &:hover {
      background-color: #f0f5fe;
    }
  }

  a {
    display: block;
    font-weight: 600;
    font-family: 'moderat', sans-serif;
    color: #2c2c2c;
    margin: 0;
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }

  @media (min-width: 60rem) {
    display: none;
  }
`;

export const LinkListAnchor = styled.a<LinkProps>`
  margin: 0px 0px 0px 1rem;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  text-decoration: none;
`;

export const LogoSVG = styled.svg`
  height: 2rem;

  @media (min-width: 60rem) {
    height: 2.5rem;
  }
`;

export const SvgPath = styled.path`
  fill: #fff;
`;

export const ActiveSvgPath = styled.path`
  fill: rgb(0, 153, 204);
`;

export const MenuButton = styled.button<ActiveMenuProps>`
  position: absolute;
  height: 2rem;
  top: 0.75rem;
  right: 1rem;
  display: flex;
  font-weight: 700;
  padding: 0.3rem;
  border: 1px solid #fff;
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.25 0.5rem;
  margin: 0px;
  font-family: 'moderat', sans-serif;
  background-color: transparent;
  color: #fff;
  border: 2px solid white;
  align-items: center;

  &:hover {
    background-color: #ffffff3d;
  }

  @media (min-width: 60rem) {
    display: none;
  }

  /* Change border color based on navbarOpen */
  ${({ navbarOpen }) =>
    navbarOpen &&
    css`
      color: black;
      border: 2px solid #3f27ba;
    `}
`;

export const SpanToggle = styled.span<ActiveMenuProps>`
  display: flex;
  align-items: center;
  font-size: 0.875rem;

  ${({ navbarOpen }) =>
    navbarOpen &&
    css`
      color: black;
    `}
`;

export const BarIcon = styled(FaBars)`
  margin-left: 0.25rem;
  color: #fff;
`;

export const BarX = styled(FaTimes)`
  margin-left: 0.25rem;
  color: ${({ navbarOpen }) => (navbarOpen ? '#fff' : 'black')};
`;
