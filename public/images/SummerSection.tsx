/* eslint-disable no-irregular-whitespace */
import React from 'react';
import styled from '@emotion/styled';
import HoseImage from '../public/images/hose.png';
import TestimonialImage1 from '../public/images/testimonialimg1.png';
import Image from 'next/image';
import PaintingImage from '../public/images/painting.png';
import RoofImage from '../public/images/roof.png';
import TestimonialImage2 from '../public/images/testimonialimg2.png';
import TestimonialImage3 from '../public/images/testimonialimg3.png';
import BrickImage from '../public/images/brick.png';
import HeatingImage from '../public/images/heating.png';
import FloorImage from '../public/images/floor.png';

const StyledSummer = styled.section`
  @media only screen and (min-width: 760px) and (max-width: 960px) {
    padding-top: 6rem;
  }
  @media (min-width: 60rem) {
    padding-top: 6rem;
  }
  @media (max-width: 48rem) {
    padding: 3rem 0;
  }
`;

const StyledSummerContainer = styled.div`
  @media only screen and (min-width: 760px) and (max-width: 960px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  @media (min-width: 60rem) {
    max-width: 66rem;
    margin: 0 auto;
    padding: 0 3rem;
  }
  @media (max-width: 48rem) {
    padding: 0 1.5rem;
  }
`;

const StyledH2 = styled.h2`
  margin-bottom: 2rem;
  @media (max-width: 48rem) {
    font-size: 1.5rem;
  }
  .every-period-title {
    margin-top: 2rem;
  }
`;

const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1.5rem;
  @media (max-width: 48rem) {
    flex-direction: column;
    gap: 4rem;
  }
`;
const StyledCard = styled.div`
  width: 33.33%;
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
  @media (max-width: 48rem) {
    width: 100%;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 10px;
  width: 100%;
  margin-bottom: 1rem;
  height: auto;

  @media (max-width: 48rem) {
    height: 6rem;
    object-fit: cover;
  }
`;
const SytledTitleIconDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcon = styled.i`
  font-size: 1.5rem;
  color: #3f27ba;
`;

const StyledTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  margin-left: 0.75rem;
  @media (max-width: 48rem) {
    font-size: 1.125rem;
  }
`;

const StyledIconLink = styled.div`
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
const StyledTestimonials = styled.div`
  display: flex;
  margin-top: 1.5rem;
  justify-content: space-around;
  border-top: 1px solid #e6e6e6;
  padding-top: 1.5rem;
  p {
    margin-left: 0.5rem;
    @media (max-width: 48rem) {
      display: inline-block;
      white-space: pre-line;
    }
  }
  .text-bold {
    font-weight: bolder;
    color: #2c2c2c;
  }

  .img-testimonial {
    @media (max-width: 48rem) {
      height: 6rem;
    }
  }
  @media (max-width: 48rem) {
    justify-content: start;
    margin-bottom: 1rem;
  }
  @media (max-width: 30rem) {
    width: auto;
  }
`;

const StyledtestimonialImage = styled(Image)`
  height: 6rem;
  object-fit: cover;
  width: auto;
`;

const StyledTestimonialP = styled.div`
 
 
    @media only screen and (min-width: 760px) and (max-width: 960px) {
      display: inline-block;
      white-space: pre-wrap;
    }
  }
`;

const StyledPeriodsection = styled.section`
  @media only screen and (min-width: 760px) and (max-width: 960px) {
    padding-bottom: 6rem;
  }

  @media (min-width: 60rem) {
    padding-top: 3rem;
    padding-bottom: 6rem;
  }
  @media (max-width: 48rem) {
    padding: 3rem 0;
    margin-bottom: 3rem;
  }
`;
const SummerSection = () => {
  return (
    <>
      <StyledSummer>
        <StyledSummerContainer>
          <StyledH2>Get ready for summer</StyledH2>
          <StyledCardContainer>
            <StyledCard>
              <StyledImage src={HoseImage} alt="Hose Image" />
              <div className="card-text">
                <SytledTitleIconDiv>
                  <StyledIcon className=" fa fa-car fa-solid"></StyledIcon>
                  <StyledTitle>Gardening and outdoors</StyledTitle>
                </SytledTitleIconDiv>
                <p className="clip-text">
                  Do you want to know more about gardening jobs such as tree
                  pruning, landscaping, outdoor paving and fencing? Read our
                  articles below to get an idea of ​​what our
                </p>
                <StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">
                    gardening and outdoors: find out all the information
                  </a>
                </StyledIconLink>
                <StyledTestimonials>
                  <div className="img-testimonial">
                    <StyledtestimonialImage
                      src={TestimonialImage1}
                      alt="Testimonials Image"
                    />
                  </div>
                  <StyledTestimonialP>
                    <p>
                      Find suitable professionals:{' '}
                      <span className="text-bold">548 gardeners </span>in Italy
                    </p>
                  </StyledTestimonialP>
                </StyledTestimonials>
                <StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">See gardeners</a>
                </StyledIconLink>
              </div>
            </StyledCard>
            <StyledCard>
              <StyledImage src={PaintingImage} alt="Painting Image" />
              <div className="card-text">
                <SytledTitleIconDiv>
                  <StyledIcon className=" fa fa-paint-roller fa-solid card-icon"></StyledIcon>
                  <StyledTitle>Painting</StyledTitle>
                </SytledTitleIconDiv>
                <p className="clip-text">
                  Do you need information on interior and exterior painting? Do
                  you want to find information about wallpaper and stucco
                  decorations? Read our articles
                </p>
                <StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="floors and tiles: find out all the information"
                    target="_blank"
                  >
                    painting: find out all the information
                  </a>
                </StyledIconLink>
                <StyledTestimonials>
                  <div className="img-testimonial">
                    <StyledtestimonialImage
                      src={TestimonialImage2}
                      alt="Testimonials Image"
                    />
                  </div>
                  <StyledTestimonialP>
                    <p>
                      Find suitable professionals:
                      <span className="text-bold">2988 painters </span>in Italy
                    </p>
                  </StyledTestimonialP>
                </StyledTestimonials>
                <StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">See painters</a>
                </StyledIconLink>
              </div>
            </StyledCard>
            <StyledCard>
              <StyledImage src={RoofImage} alt="Roof Image" />
              <div className="card-text">
                <SytledTitleIconDiv>
                  <StyledIcon className="fa-solid fa-people-roof card-icon"></StyledIcon>
                  <StyledTitle className="card-title title-margin">
                    Roof and roofing
                  </StyledTitle>
                </SytledTitleIconDiv>
                <p className="clip-text">
                  Are you interested in information on the prices of jobs in
                  this service/category? To give you an idea of ​​what our
                  professionals can do for you and what the average
                </p>
                <StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/tinteggiatura"
                    target="_blank"
                  >
                    roof and covers: find out all the information
                  </a>
                </StyledIconLink>
                <StyledTestimonials>
                  <div className="img-testimonial">
                    <StyledtestimonialImage
                      src={TestimonialImage3}
                      alt="Testimonials Image"
                    />
                  </div>
                  <StyledTestimonialP>
                    <p>
                      Find suitable professionals:
                      <span className="text-bold">
                        537 roof repair companies{' '}
                      </span>{' '}
                      in Italy
                    </p>
                  </StyledTestimonialP>
                </StyledTestimonials>
                <StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">See roof repair companies</a>
                </StyledIconLink>
              </div>
            </StyledCard>
          </StyledCardContainer>
        </StyledSummerContainer>
      </StyledSummer>

      <StyledPeriodsection>
        <StyledSummerContainer>
          <StyledH2 className="every-period-title">In every period</StyledH2>
          <StyledCardContainer>
            <StyledCard>
              <StyledImage src={BrickImage} alt="Brick Image" />
              <div className="card-text">
                <SytledTitleIconDiv>
                  <i className="fa-solid fa-house-chimney card-icon"></i>{' '}
                  <StyledTitle className="card-title title-margin">
                    Home construction and renovation
                  </StyledTitle>
                </SytledTitleIconDiv>
                <p className="clip-text">
                  Home refurbishing? enlarge the rooms? Renovate the kitchen?
                  Read our articles below to get an idea of ​​what our
                  construction companies can do for you, and the
                </p>

                <StyledIconLink>
                  <i className="fa-solid fa-arrow-right card-arrow"></i>
                  <a href="">
                    home construction and renovation: find out all the
                    information
                  </a>
                </StyledIconLink>
                <StyledTestimonials>
                  <div className="img-testimonial">
                    <StyledtestimonialImage
                      src="./images/testimonial-img4.PNG"
                      alt="Testimonials Image"
                    />
                  </div>
                  <StyledTestimonialP>
                    <p>
                      Find suitable professionals:
                      <span className="text-bold">
                        2353 construction companies
                      </span>{' '}
                      in Italy
                    </p>
                  </StyledTestimonialP>
                </StyledTestimonials>
                <StyledIconLink>
                  <i className="fa-solid fa-arrow-right card-arrow"></i>
                  <a href="">See construction companies</a>
                </StyledIconLink>
              </div>
            </StyledCard>
            <StyledCard>
              <StyledImage src={HeatingImage} alt="Heating Image" />
              <div className="card-text">
                <SytledTitleIconDiv>
                  <StyledIcon className="fa-solid fa-fire card-icon"></StyledIcon>
                  <StyledTitle className="card-title title-margin">
                    Heating
                  </StyledTitle>
                </SytledTitleIconDiv>
                <p className="clip-text">
                  Are you interested in information on the prices of jobs in
                  this service/category? To give you an idea of ​​what our
                  professionals can do for you and what the average costs
                </p>
                <StyledIconLink>
                  <i className="fa-solid fa-arrow-right card-arrow"></i>
                  <a
                    href="floors and tiles: find out all the information"
                    target="_blank"
                  >
                    heating: find out all the information
                  </a>
                </StyledIconLink>
                <StyledTestimonials>
                  <div className="img-testimonial">
                    <StyledImage src="./images/testimonialImg5.png" alt="" />
                  </div>
                  <StyledTestimonialP>
                    <p>
                      Find suitable professionals:
                      <span className="text-bold">
                        1762 plumbing and heating companies{' '}
                      </span>
                      in Italy
                    </p>
                  </StyledTestimonialP>
                </StyledTestimonials>
                <StyledIconLink>
                  <i className="fa-solid fa-arrow-right card-arrow"></i>
                  <a href="">See plumbing companies</a>
                </StyledIconLink>
              </div>
            </StyledCard>
            <StyledCard>
              <StyledImage src={FloorImage} alt="Floor Image" />
              <div className="card-text">
                <SytledTitleIconDiv>
                  <StyledIcon className="fa-solid fa-people-roof card-icon"></StyledIcon>
                  <StyledTitle className="card-title title-margin">
                    Floors and tiles
                  </StyledTitle>
                </SytledTitleIconDiv>
                <p className="clip-text">
                  New parquet floor, or terracotta tiles? Stoneware floor? Read
                  our articles below to get an idea of ​​what our floor and
                  parquet installers can do for you, and understand
                </p>
                <StyledIconLink>
                  <i className="fa-solid fa-arrow-right card-arrow"></i>
                  <a
                    href="https://www.instapro.it/tinteggiatura"
                    target="_blank"
                  >
                    floor and tiles: find out all the information
                  </a>
                </StyledIconLink>
                <StyledTestimonials>
                  <div className="img-testimonial">
                    <StyledtestimonialImage
                      src="./images/testimonial-img6.PNG"
                      alt=""
                    />
                  </div>
                  <StyledTestimonialP>
                    <p>
                      Find suitable professionals:
                      <span className="text-bold">
                        2847 floor installers{' '}
                      </span>{' '}
                      in Italy
                    </p>
                  </StyledTestimonialP>
                </StyledTestimonials>
                <StyledIconLink>
                  <i className="fa-solid fa-arrow-right card-arrow"></i>
                  <a href="">See floor layers</a>
                </StyledIconLink>
              </div>
            </StyledCard>
          </StyledCardContainer>
        </StyledSummerContainer>
      </StyledPeriodsection>
    </>
  );
};

export default SummerSection;
