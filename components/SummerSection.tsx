/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as Styled from '@components/SummerSection.styled'
import HoseImage from '../public/images/hose.png';
import PaintingImage from '../public/images/painting.png';
import RoofImage from '../public/images/roof.png';
import BrickImage from '../public/images/brick.png';
import HeatingImage from '../public/images/heating.png';
import FloorImage from '../public/images/floor.png';
import TestimonialImage1 from '../public/images/testimonialimg1.png';
import TestimonialImage2 from '../public/images/testimonialimg2.png';
import TestimonialImage3 from '../public/images/testimonialImg3.png';
import TestimonialImage4 from '../public/images/testimonialImg4.png';
import TestimonialImage5 from '../public/images/testimonialImg5.png';
import TestimonialImage6 from '../public/images/testimonialImg6.png';

const SummerSection = () => {
  return (
    <>
      <Styled.StyledSummer>
        <Styled.StyledSummerContainer>
          <Styled.StyledH2>Get ready for summer</Styled.StyledH2>
          <Styled.StyledCardContainer>
            <Styled.StyledCard>
              <Styled.StyledImage src={HoseImage} alt="Hose Image" />
              <div className="card-text">
                <Styled.SytledTitleIconDiv>
                  <Styled.StyledIcon className=" fa fa-car fa-solid"></Styled.StyledIcon>
                  <Styled.StyledTitle>Gardening and outdoors</Styled.StyledTitle>
                </Styled.SytledTitleIconDiv>
                <p className="clip-text">
                  Do you want to know more about gardening jobs such as tree
                  pruning, landscaping, outdoor paving and fencing? Read our
                  articles below to get an idea of ​​what our
                </p>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">
                    gardening and outdoors: find out all the information
                  </a>
                </Styled.StyledIconLink>
                <Styled.StyledTestimonials>
                  <div className="img-testimonial">
                    <Styled.StyledtestimonialImage
                      src={TestimonialImage1}
                      alt="Testimonials Image"
                    />
                  </div>
                  <Styled.StyledTestimonialP>
                    <p>
                      Find suitable professionals:{' '}
                      <span className="text-bold">548 gardeners </span>in Italy
                    </p>
                  </Styled.StyledTestimonialP>
                </Styled.StyledTestimonials>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">See gardeners</a>
                </Styled.StyledIconLink>
              </div>
            </Styled.StyledCard>
            <Styled.StyledCard>
              <Styled.StyledImage src={PaintingImage} alt="Painting Image" />
              <div className="card-text">
                <Styled.SytledTitleIconDiv>
                  <Styled.StyledIcon className=" fa fa-paint-roller fa-solid card-icon"></Styled.StyledIcon>
                  <Styled.StyledTitle>Painting</Styled.StyledTitle>
                </Styled.SytledTitleIconDiv>
                <p className="clip-text">
                  Do you need information on interior and exterior painting? Do
                  you want to find information about wallpaper and stucco
                  decorations? Read our articles
                </p>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="floors and tiles: find out all the information"
                    target="_blank"
                  >
                    painting: find out all the information
                  </a>
                </Styled.StyledIconLink>
                <Styled.StyledTestimonials>
                  <div className="img-testimonial">
                    <Styled.StyledtestimonialImage
                      src={TestimonialImage2}
                      alt="Testimonials Image"
                    />
                  </div>
                  <Styled.StyledTestimonialP>
                    <p>
                      Find suitable professionals:
                      <span className="text-bold">2988 painters </span>in Italy
                    </p>
                  </Styled.StyledTestimonialP>
                </Styled.StyledTestimonials>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">See painters</a>
                </Styled.StyledIconLink>
              </div>
            </Styled.StyledCard>
            <Styled.StyledCard>
              <Styled.StyledImage src={RoofImage} alt="Roof Image" />
              <div className="card-text">
                <Styled.SytledTitleIconDiv>
                  <Styled.StyledIcon className="fa-solid fa-people-roof card-icon"></Styled.StyledIcon>
                  <Styled.StyledTitle>Roof and roofing</Styled.StyledTitle>
                </Styled.SytledTitleIconDiv>
                <p className="clip-text">
                  Are you interested in information on the prices of jobs in
                  this service/category? To give you an idea of ​​what our
                  professionals can do for you and what the average
                </p>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/tinteggiatura"
                    target="_blank"
                  >
                    roof and covers: find out all the information
                  </a>
                </Styled.StyledIconLink>
                <Styled.StyledTestimonials>
                  <div className="img-testimonial">
                    <Styled.StyledtestimonialImage
                      src={TestimonialImage3}
                      alt="Testimonials Image"
                    />
                  </div>
                  <Styled.StyledTestimonialP>
                    <p>
                      Find suitable professionals:
                      <span className="text-bold">
                        537 roof repair companies{' '}
                      </span>{' '}
                      in Italy
                    </p>
                  </Styled.StyledTestimonialP>
                </Styled.StyledTestimonials>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">See roof repair companies</a>
                </Styled.StyledIconLink>
              </div>
            </Styled.StyledCard>
          </Styled.StyledCardContainer>
        </Styled.StyledSummerContainer>
      </Styled.StyledSummer>

      <Styled.StyledPeriodsection>
        <Styled.StyledSummerContainer>
          <Styled.StyledH2 className="every-period-title">In every period</Styled.StyledH2>
          <Styled.StyledCardContainer>
            <Styled.StyledCard>
              <Styled.StyledImage src={BrickImage} alt="Brick Image" />
              <div className="card-text">
                <Styled.SytledTitleIconDiv>
                  <i className="fa-solid fa-house-chimney card-icon"></i>{' '}
                  <Styled.StyledTitle>Home construction and renovation</Styled.StyledTitle>
                </Styled.SytledTitleIconDiv>
                <p className="clip-text">
                  Home refurbishing? enlarge the rooms? Renovate the kitchen?
                  Read our articles below to get an idea of ​​what our
                  construction companies can do for you, and the
                </p>

                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">
                    home construction and renovation: find out all the
                    information
                  </a>
                </Styled.StyledIconLink>
                <Styled.StyledTestimonials>
                  <div className="img-testimonial">
                    <Styled.StyledtestimonialImage
                      src={TestimonialImage4}
                      alt="Testimonials Image"
                    />
                  </div>
                  <Styled.StyledTestimonialP>
                    <p>
                      Find suitable professionals:
                      <span className="text-bold">
                        2353 construction companies
                      </span>{' '}
                      in Italy
                    </p>
                  </Styled.StyledTestimonialP>
                </Styled.StyledTestimonials>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">See construction companies</a>
                </Styled.StyledIconLink>
              </div>
            </Styled.StyledCard>
            <Styled.StyledCard>
              <Styled.StyledImage src={HeatingImage} alt="Heating Image" />
              <div className="card-text">
                <Styled.SytledTitleIconDiv>
                  <Styled.StyledIcon className="fa fa-fire fa-solid card-icon"></Styled.StyledIcon>
                  <Styled.StyledTitle>Heating</Styled.StyledTitle>
                </Styled.SytledTitleIconDiv>
                <p className="clip-text">
                  Are you interested in information on the prices of jobs in
                  this service/category? To give you an idea of ​​what our
                  professionals can do for you and what the average costs
                </p>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="floors and tiles: find out all the information"
                    target="_blank"
                  >
                    heating: find out all the information
                  </a>
                </Styled.StyledIconLink>
                <Styled.StyledTestimonials>
                  <div className="img-testimonial">
                    <Styled.StyledtestimonialImage src={TestimonialImage5} alt="" />
                  </div>
                  <Styled.StyledTestimonialP>
                    <p>
                      Find suitable professionals:
                      <span className="text-bold">
                        1762 plumbing and heating companies{' '}
                      </span>
                      in Italy
                    </p>
                  </Styled.StyledTestimonialP>
                </Styled.StyledTestimonials>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">See plumbing companies</a>
                </Styled.StyledIconLink>
              </div>
            </Styled.StyledCard>
            <Styled.StyledCard>
              <Styled.StyledImage src={FloorImage} alt="Floor Image" />
              <div className="card-text">
                <Styled.SytledTitleIconDiv>
                  <Styled.StyledIcon className="fa fa-toilet-paper card-icon"></Styled.StyledIcon>
                  <Styled.StyledTitle>Floors and tiles</Styled.StyledTitle>
                </Styled.SytledTitleIconDiv>
                <p className="clip-text">
                  New parquet floor, or terracotta tiles? Stoneware floor? Read
                  our articles below to get an idea of ​​what our floor and
                  parquet installers can do for you, and understand
                </p>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/tinteggiatura"
                    target="_blank"
                  >
                    floor and tiles: find out all the information
                  </a>
                </Styled.StyledIconLink>
                <Styled.StyledTestimonials>
                  <div className="img-testimonial">
                    <Styled.StyledtestimonialImage src={TestimonialImage6} alt="" />
                  </div>
                  <Styled.StyledTestimonialP>
                    <p>
                      Find suitable professionals:
                      <span className="text-bold">
                        2847 floor installers{' '}
                      </span>{' '}
                      in Italy
                    </p>
                  </Styled.StyledTestimonialP>
                </Styled.StyledTestimonials>
                <Styled.StyledIconLink>
                  <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                  <a href="">See floor layers</a>
                </Styled.StyledIconLink>
              </div>
            </Styled.StyledCard>
          </Styled.StyledCardContainer>
        </Styled.StyledSummerContainer>
      </Styled.StyledPeriodsection>
    </>
  );
};

export default SummerSection;
