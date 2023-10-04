import styled from '@emotion/styled';
import Image from 'next/image';

export const BlueSection = styled.section`
  background-color: #017acd;
  padding: 3rem 0;
  overflow:hidden;

  p {
    font-size: 1rem;
  }

  @media (min-width: 48rem) {
    padding-top: 6rem;
  }
`;

export const BlueDiv = styled.div`
  padding: 0 1.5rem;

  @media (min-width: 48rem) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 60rem) {
    max-width: 66rem;
    margin: 0 auto;
    padding: 0 3rem;
  }
`;

export const H2 = styled.h2`
  font-size: 2rem;
  line-height: 1.313;
  margin-bottom: 1.2rem;
  color: #fff;

  @media (min-width: 48rem) {
    margin-bottom: 3.2rem;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 48rem) {
    display: -webkit-inline-box;
    overflow-x: scroll;
    overflow-y: visible;
    margin: 1rem 0;
    scroll-padding: 1.5rem;
    -webkit-overflow-scrolling: touch;
    width: 100vw;
    margin: 0 calc(-1 * 1.5rem) 1rem;
    padding: 1rem 0 1rem 1.5rem;
  }
`;

export const ReviewCard = styled.div`
  width: 80%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  a {
    text-decoration: none;
  }

  @media (min-width: 48rem) {
    width: 33.33%;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    font-family: 'moderat', sans-serif;
    color: #3f27ba;
    font-weight: 600;
  }
`;

export const Img = styled(Image)`
  min-width: 3.5rem;
  height: 3.5rem;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 0.25rem;
  margin: 0 1rem 0 0;
`;

export const ReviewDescription = styled.div`
  .reviewstar-container {
    display: flex;
    margin: 0.5rem 0;
  }

  i {
    color: #128750;
    font-size: 1rem;
  }

  .review-description {
    margin-top: 0.5rem;
    color: #2c2c2c;
  }

  .review-title {
    color: #6f6f6f;
  }
`;
export const ReviewInfo = styled.div`
  display: flex;
  margin-top: 0;
  color: #fff;

  p {
    margin-left: 1.5rem;
  }

  @media (min-width: 48rem) {
    margin-top: 3rem;
  }
`;
