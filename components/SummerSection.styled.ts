import styled from '@emotion/styled';
import Image from 'next/image';

export const Summer = styled.section`
  padding: 3rem 0;

  @media (min-width: 48rem) {
    padding-top: 6rem;
  }
`;

export const SummerContainer = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (min-width: 48rem) {
    max-width: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 60rem) {
    max-width: calc(60rem + 2 * 3rem);
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

export const H2 = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.5rem;

  .every-period-title {
    margin-top: 2rem;
  }

  @media (min-width: 60rem) {
    font-size: 2rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (min-width: 48rem) {
    justify-content: space-around;
    gap: 1.5rem;
    flex-direction: row;
  }
`;

export const Card = styled.div`
  width: 100%;

  p {
    margin: 0.5rem 0 1rem;
    color: #6f6f6f;
    font-size: 1rem;
  }

  .clip-text {
    margin: 0.5rem 0 1rem;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }

  @media (min-width: 48rem) {
    width: 33.33%;
  }
`;

export const CustomImage = styled(Image)`
  border-radius: 10px;
  width: 100%;
  margin-bottom: 1rem;
  height: 6rem;
  object-fit: cover;

  @media (min-width: 48rem) {
    height: auto;
  }
`;

export const TitleIconDiv = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.i`
  font-size: 1.5rem;
  color: #3f27ba;
`;

export const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  margin-left: 0.75rem;

  @media (min-width: 48rem) {
    font-size: 1.25rem;
  }
`;

export const IconLink = styled.div`
  display: flex;
  align-items: baseline;
  margin-right: 0.5rem;

  .card-arrow {
    color: #3f27ba;
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  a {
    color: #3727ba;
    font-size: 1rem;
    curosor: pointer;

    &:hover {
      text-decoration: none;
    }

    &:visited {
      color: #330691;
    }
  }
`;

export const Testimonials = styled.div`
  display: flex;
  margin-top: 1.5rem;
  border-top: 1px solid #e6e6e6;
  padding-top: 1.5rem;
  justify-content: start;
  margin-bottom: 1rem;

  p {
    margin-left: 0.5rem;
    display: inline-block;
    white-space: pre-line;
  }

  .text-bold {
    font-weight: bolder;
    color: #2c2c2c;
  }

  .img-testimonial {
    height: 6rem;

    @media (min-width: 48rem) {
      height: auto;
    }
  }

  @media (min-width: 48rem) {
    justify-content: space-around;
  }
`;

export const TestimonialImage = styled(Image)`
  height: 6rem;
  object-fit: cover;
  width: auto;
`;

export const TestimonialP = styled.div`
  @media only screen and (min-width: 48rem) {
    display: inline-block;
    white-space: pre-wrap;
  }
`;

export const Periodsection = styled.section`
  padding: 3rem 0;

  @media (min-width: 48rem) {
    padding-bottom: 6rem;
  }
`;
