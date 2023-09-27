'use client';

import React, { useState } from 'react';
import styled from '@emotion/styled';

interface SectionProprs {
  showMore: boolean;
}
const StyledFindProf = styled.section`
  background-color: #f9f8f6;
  box-sizing: border-box;
  padding: 6rem 0;
  @media only screen and (min-width: 760px) and (max-width: 960px) {
    padding: 6rem 1.5rem;
  }

  @media (max-width: 48rem) {
    padding: 3rem 0;
    margin-top: 3rem;
    padding: 0;
  }
`;
const StyledFindProfDiv = styled.div`
  .more-btn {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }
  .expandButton {
    border: 1px solid #3f27ba;
    padding: 7px 32px;
    background-color: #fff;
    color: #3f27ba;
    border-radius: 9999px;
    align-items: center;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: bold;

    &:hover {
      background-color: #f0f5fe;
    }
    @media (max-width: 48rem) {
      width: 100%;
    }
  }

  @media (min-width: 60rem) {
    max-width: 66rem;
    margin: 0 auto;
    padding: 0 3rem;
  }
  @media (max-width: 48rem) {
    padding: 0 1.5rem;
    padding-top: 3rem;
    margin-bottom: 3rem;
  }
`;

const StyledH2 = styled.h2`
  @media (max-width: 48rem) {
    font-size: 1.5rem;
  }
  @media only screen and (min-width: 760px) and (max-width: 960px) {
    font-size: 2rem;
  }
`;

const StyledJobsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;

  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

const StyledJoblist = styled.div`
  box-sizing: border-box;
  width: 31.5%;
  margin-bottom: 1.5rem;
  @media (max-width: 48rem) {
    width: 100%;
  }

  .card-icon {
    font-size: 1.5rem;
    color: #3f27ba;
  }
  .jobs-link-ul {
    list-style: none;
    margin: 1.5rem 0;
    font-size: 1rem;
  }
  .icon-and-link {
    display: flex;
    align-items: baseline;
    margin-right: 0.5rem;
  }
  .card-arrow {
    color: #3f27ba;
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  a {
    color: #3727ba;
    &:hover {
      text-decoration: none;
    }
    &:visited {
      color: #330691;
    }
  }
  li {
    margin-top: 1.5rem;
  }
`;

const StyledCartTitle = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  @media (max-width: 48rem) {
    font-size: 1.125rem;
  }
`;
const ProfessionalsSection: React.FC<SectionProprs> = () => {
  const [showMore, setShowMore] = useState(false);

  const expandonClick = () => {
    setShowMore(!showMore);
    console.log('clicked');
  };

  return (
    <>
      <StyledFindProf>
        <StyledFindProfDiv>
          <StyledH2>Find professionals for every job</StyledH2>
          <StyledJobsWrapper>
            <StyledJoblist>
              <i className="fa fa-fire fa-solid card-icon"></i>
              <StyledCartTitle>Heating</StyledCartTitle>
              <ul className="jobs-link-ul">
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    heating: find out all the information
                  </a>
                </li>
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    Plumbing companies
                  </a>
                </li>
              </ul>
            </StyledJoblist>
            <StyledJoblist>
              <i className="fa fa-toilet-paper fa-solid card-icon"></i>
              <StyledCartTitle>Floor and tiles</StyledCartTitle>
              <ul className="jobs-link-ul">
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    floors and tiles: find out all the information
                  </a>
                </li>
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    floor workers
                  </a>
                </li>
              </ul>
            </StyledJoblist>
            <StyledJoblist>
              <i className="fa fa-door-closed fa-solid card-icon"></i>
              <StyledCartTitle>Doors and windows</StyledCartTitle>
              <ul className="jobs-link-ul">
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    doors and windows: find out all the information
                  </a>
                </li>
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    window and door installers
                  </a>
                </li>
              </ul>
            </StyledJoblist>
            <StyledJoblist>
              <div className=" icon-and-link">
                <i className="fa fa-house-chimney fa-solid card-icon"></i>
                <StyledCartTitle>
                  {' '}
                  Home construction and renovation
                </StyledCartTitle>
              </div>
              <ul className="jobs-link-ul">
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    home construction and renovation: find out all the
                    information
                  </a>
                </li>
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    construction companies
                  </a>
                </li>
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    facade renovation companies
                  </a>
                </li>
              </ul>
            </StyledJoblist>

            <StyledJoblist>
              <i className="fa fa-paint-roller fa-solid card-icon"></i>
              <StyledCartTitle>Painting</StyledCartTitle>
              <ul className="jobs-link-ul">
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    painting: find out all the information
                  </a>
                </li>
                <li className=" icon-and-link">
                  <i className="fa fa-solid fa-arrow-right card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    painters
                  </a>
                </li>
              </ul>
            </StyledJoblist>
            <StyledJoblist>
              <i className="fa fa-car fa-solid  card-icon"></i>
              <StyledCartTitle>Gardening and outdoors</StyledCartTitle>
              <ul className="jobs-link-ul">
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    gardening and outdoors: find out all the information
                  </a>
                </li>
                <li className=" icon-and-link">
                  <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                  <a
                    href="https://www.instapro.it/riscaldamento"
                    target="_blank"
                  >
                    gardeners
                  </a>
                </li>
              </ul>
            </StyledJoblist>

            {/* --EXPAND Jobs on Button click--> */}
            {showMore && (
              <>
                <StyledJobsWrapper>
                  <StyledJoblist>
                    <i className="fa  fa-fire fa-solid card-icon"></i>
                    <StyledCartTitle>Heating</StyledCartTitle>
                    <ul className="jobs-link-ul">
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          heating: find out all the information
                        </a>
                      </li>
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          Plumbing companies
                        </a>
                      </li>
                    </ul>
                  </StyledJoblist>
                  <StyledJoblist>
                    <i className="fa  fa-toilet-paper fa-solid card-icon"></i>
                    <StyledCartTitle>Floor and tiles</StyledCartTitle>
                    <ul className="jobs-link-ul">
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          floors and tiles: find out all the information
                        </a>
                      </li>
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          floor workers
                        </a>
                      </li>
                    </ul>
                  </StyledJoblist>
                  <StyledJoblist>
                    <i className="fa  fa-people-roof fa-solid card-icon"></i>
                    <StyledCartTitle>Doors and windows</StyledCartTitle>
                    <ul className="jobs-link-ul">
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          painting: find out all the information
                        </a>
                      </li>
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          Plumbing companies
                        </a>
                      </li>
                    </ul>
                  </StyledJoblist>
                  <StyledJoblist>
                    <i className="fa  fa-people-roof fa-solid card-icon"></i>
                    <StyledCartTitle>Home</StyledCartTitle>
                    <ul className="jobs-link-ul">
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          painting: find out all the information
                        </a>
                      </li>
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          Plumbing companies
                        </a>
                      </li>
                    </ul>
                  </StyledJoblist>
                  <StyledJoblist>
                    <i className="fa  fa-people-roof fa-solid card-icon"></i>
                    <StyledCartTitle>Painting</StyledCartTitle>
                    <ul className="jobs-link-ul">
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          painting: find out all the information
                        </a>
                      </li>
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          Plumbing companies
                        </a>
                      </li>
                    </ul>
                  </StyledJoblist>

                  <StyledJoblist>
                    <i className="fa fa-people-roof fa-solid card-icon"></i>
                    <StyledCartTitle>Gardening</StyledCartTitle>
                    <ul className="jobs-link-ul">
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          painting: find out all the information
                        </a>
                      </li>
                      <li className=" icon-and-link">
                        <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                        <a
                          href="https://www.instapro.it/riscaldamento"
                          target="_blank"
                        >
                          Plumbing companies
                        </a>
                      </li>
                    </ul>
                  </StyledJoblist>
                </StyledJobsWrapper>
              </>
            )}
          </StyledJobsWrapper>
          {!showMore && (
            <div className="more-btn">
              <button className="expandButton" onClick={expandonClick}>
                See more
              </button>
            </div>
          )}
        </StyledFindProfDiv>
      </StyledFindProf>
    </>
  );
};

export default ProfessionalsSection;
