'use client';

import React, { useState } from 'react';
import { SectionProps } from '@components/ProfessionalsSection.styled';
import * as Styled from '@components/ProfessionalsSection.styled';

const ProfessionalsSection: React.FC<SectionProps> = () => {
  const [showMore, setShowMore] = useState(false);

  const expandonClick = () => {
    setShowMore(!showMore);
    console.log('clicked');
  };

  return (
    <>
      <Styled.StyledFindProf>
        <Styled.StyledFindProfDiv>
          <Styled.StyledH2>Find professionals for every job</Styled.StyledH2>
          <Styled.StyledJobsWrapper>
            <Styled.StyledJoblist>
              <i className="fa fa-fire fa-solid card-icon"></i>
              <Styled.StyledCartTitle>Heating</Styled.StyledCartTitle>
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
            </Styled.StyledJoblist>
            <Styled.StyledJoblist>
              <i className="fa fa-toilet-paper fa-solid card-icon"></i>
              <Styled.StyledCartTitle>Floor and tiles</Styled.StyledCartTitle>
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
            </Styled.StyledJoblist>
            <Styled.StyledJoblist>
              <i className="fa fa-door-closed fa-solid card-icon"></i>
              <Styled.StyledCartTitle>Doors and windows</Styled.StyledCartTitle>
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
            </Styled.StyledJoblist>
            <Styled.StyledJoblist>
              <div className=" icon-and-link">
                <i className="fa fa-house-chimney fa-solid card-icon"></i>
                <Styled.StyledCartTitle>
                  {' '}
                  Home construction and renovation
                </Styled.StyledCartTitle>
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
            </Styled.StyledJoblist>

            <Styled.StyledJoblist>
              <i className="fa fa-paint-roller fa-solid card-icon"></i>
              <Styled.StyledCartTitle>Painting</Styled.StyledCartTitle>
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
            </Styled.StyledJoblist>
            <Styled.StyledJoblist>
              <i className="fa fa-car fa-solid  card-icon"></i>
              <Styled.StyledCartTitle>Gardening and outdoors</Styled.StyledCartTitle>
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
            </Styled.StyledJoblist>

            {/* --EXPAND Jobs on Button click--> */}
            {showMore && (
              <>
                <Styled.StyledJobsWrapper>
                  <Styled.StyledJoblist>
                    <i className="fa  fa-fire fa-solid card-icon"></i>
                    <Styled.StyledCartTitle>Heating</Styled.StyledCartTitle>
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
                  </Styled.StyledJoblist>
                  <Styled.StyledJoblist>
                    <i className="fa  fa-toilet-paper fa-solid card-icon"></i>
                    <Styled.StyledCartTitle>Floor and tiles</Styled.StyledCartTitle>
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
                  </Styled.StyledJoblist>
                  <Styled.StyledJoblist>
                    <i className="fa  fa-people-roof fa-solid card-icon"></i>
                    <Styled.StyledCartTitle>Doors and windows</Styled.StyledCartTitle>
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
                  </Styled.StyledJoblist>
                  <Styled.StyledJoblist>
                    <i className="fa  fa-people-roof fa-solid card-icon"></i>
                    <Styled.StyledCartTitle>Home</Styled.StyledCartTitle>
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
                  </Styled.StyledJoblist>
                  <Styled.StyledJoblist>
                    <i className="fa  fa-people-roof fa-solid card-icon"></i>
                    <Styled.StyledCartTitle>Painting</Styled.StyledCartTitle>
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
                  </Styled.StyledJoblist>

                  <Styled.StyledJoblist>
                    <i className="fa fa-people-roof fa-solid card-icon"></i>
                    <Styled.StyledCartTitle>Gardening</Styled.StyledCartTitle>
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
                  </Styled.StyledJoblist>
                </Styled.StyledJobsWrapper>
              </>
            )}
          </Styled.StyledJobsWrapper>
          {!showMore && (
            <div className="more-btn">
              <button className="expand-button" onClick={expandonClick}>
                See more
              </button>
            </div>
          )}
        </Styled.StyledFindProfDiv>
      </Styled.StyledFindProf>
    </>
  );
};

export default ProfessionalsSection;
