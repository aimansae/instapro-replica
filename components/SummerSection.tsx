/* eslint-disable no-irregular-whitespace */
import React from 'react';
import * as Styled from '@components/SummerSection.styled';
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

const summerJobs = [
  {
    id: 1,
    image: HoseImage,
    alt: 'Hose Image',
    title: 'Gardening and outdoors',
    description: `Do you want to know more about gardening jobs such as tree
                  pruning, landscaping, outdoor paving and fencing? Read our
                  articles below to get an idea of ​​what our`,
    icon: 'fa fa-car fa-solid',
    link: 'gardening and outdoors: find out all the information',
    testimonialImage: TestimonialImage1,
    testimonialTitle: '548 gardeners',
    testimonialLink: 'gardeners',
  },
  {
    id: 2,
    image: PaintingImage,
    alt: 'Painting Image',
    title: 'Painting',
    description: `Do you need information on interior and exterior painting? Do you want to find information about wallpaper and stucco decorations? Read our articles`,
    icon: 'fa fa-paint-brush',
    link: 'painting: find out all the information',
    testimonialImage: TestimonialImage2,
    testimonialTitle: '2988 painters',
    testimonialLink: 'painters',
  },
  {
    id: 3,
    image: RoofImage,
    alt: 'Foof Image',
    title: 'Roof and roofing',
    description: `Are you interested in information on the prices of jobs in this service/category? To give you an idea of ​​what our professionals can do for you and what the average`,
    icon: 'fa fa-car',
    link: 'roof and covers: find out all the information',
    testimonialImage: TestimonialImage3,
    testimonialTitle: '537 roof repair companies ',
    testimonialLink: 'roof companies',
  },
];

const everyPeriod = [
  {
    id: 6,
    image: BrickImage,
    alt: 'Brick Image',
    title: 'Home construction and renovation',
    description: ` Home refurbishing? enlarge the rooms? Renovate the kitchen?
  Read our articles below to get an idea of ​​what our
  construction companies can do for you, and the`,
    icon: 'fa fa-car fa-solid',
    link: 'home construction and renovation: find out all the information',
    testimonialImage: TestimonialImage4,
    testimonialTitle: '2353 construction companies ',
    testimonialLink: 'construction',
  },
  {
    id: 7,
    image: HeatingImage,
    alt: 'Heating Image',
    title: 'Heating',
    description: ` Are you interested in information on the prices of jobs in
  this service/category? To give you an idea of ​​what our
  professionals can do for you and what the average costs`,
    icon: 'fa fa-car fa-solid',
    link: 'heating: find out all the information',
    testimonialImage: TestimonialImage5,
    testimonialTitle: '1762 plumbing and heating companies',
    testimonialLink: 'plumbing',
  },
  {
    id: 8,
    image: FloorImage,
    alt: 'Floor Image',
    title: 'Floors and tiles',
    description: `  New parquet floor, or terracotta tiles? Stoneware floor? Read
  our articles below to get an idea of ​​what our floor and
  parquet installers can do for you, and understand`,
    icon: 'fa fa-car fa-solid',
    link: 'floor and tiles: find out all the information',
    testimonialImage: TestimonialImage6,
    testimonialTitle: '2847 floor installers',
    testimonialLink: 'floor',
  },
];

const SummerSection = () => {
  return (
    <>
      <Styled.Summer>
        <Styled.SummerContainer>
          <Styled.H2>Get ready for summer</Styled.H2>
          <Styled.CardContainer>
            {summerJobs.map((job) => (
              <Styled.Card key={job.id}>
                <Styled.CustomImage src={job.image} alt={job.alt} />
                <div className="card-text">
                  <Styled.TitleIconDiv>
                    <Styled.Icon className={job.icon}></Styled.Icon>
                    <Styled.Title>{job.title}</Styled.Title>
                  </Styled.TitleIconDiv>
                  <p className="clip-text">{job.description}</p>
                  <Styled.IconLink>
                    <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                    <a href="">{job.link}</a>
                  </Styled.IconLink>
                  <Styled.Testimonials>
                    <div className="img-testimonial">
                      <Styled.TestimonialImage
                        src={job.testimonialImage}
                        alt="Testimonials Image"
                      />
                    </div>
                    <Styled.TestimonialP>
                      <p>
                        Find suitable professionals:{' '}
                        <span className="text-bold">
                          {job.testimonialTitle}
                        </span>{' '}
                        in Italy
                      </p>
                    </Styled.TestimonialP>
                  </Styled.Testimonials>
                  <Styled.IconLink>
                    <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                    <a href="">See {job.testimonialLink}</a>
                  </Styled.IconLink>
                </div>
              </Styled.Card>
            ))}
          </Styled.CardContainer>
        </Styled.SummerContainer>
      </Styled.Summer>

      <Styled.Periodsection>
        <Styled.SummerContainer>
          <Styled.H2 className="every-period-title">In every period</Styled.H2>
          <Styled.CardContainer>
            {everyPeriod.map((job) => (
              <Styled.Card key={job.id}>
                <Styled.CustomImage src={job.image} alt="Brick Image" />
                <div className="card-text">
                  <Styled.TitleIconDiv>
                    <Styled.Icon className={job.icon}></Styled.Icon>
                    <Styled.Title>{job.title}</Styled.Title>
                  </Styled.TitleIconDiv>
                  <p className="clip-text">{job.description}</p>
                  <Styled.IconLink>
                    <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                    <a href="">{job.link}</a>
                  </Styled.IconLink>
                  <Styled.Testimonials>
                    <div className="img-testimonial">
                      <Styled.TestimonialImage
                        src={job.testimonialImage}
                        alt={job.alt}
                      />
                    </div>
                    <Styled.TestimonialP>
                      <p>
                        Find suitable professionals:
                        <span className="text-bold">
                          {job.testimonialTitle}
                        </span>{' '}
                        in Italy
                      </p>
                    </Styled.TestimonialP>
                  </Styled.Testimonials>
                  <Styled.IconLink>
                    <i className="fa  fa-arrow-right fa-solid card-arrow"></i>
                    <a href="">See {job.testimonialLink} companies</a>
                  </Styled.IconLink>
                </div>
              </Styled.Card>
            ))}
          </Styled.CardContainer>
        </Styled.SummerContainer>
      </Styled.Periodsection>
    </>
  );
};

export default SummerSection;
