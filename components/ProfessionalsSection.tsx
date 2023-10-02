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

  const companies = [
    {
      id: 1,
      icon: 'fa fa-fa-caret-up fa-solid card-icon',
      title: 'Heating',
      moreInfo: 'heating',
      companiesLink: 'thermo-hydraulic',
    },
    {
      id: 2,
      icon: '',
      title: 'Floor and tiles',
      moreInfo: 'floor and tiles',
      companiesLink: 'floor and titles',
    },
    {
      id: 3,
      icon: '',
      title: 'Door and windows',
      moreInfo: 'door and windows',
      companiesLink: 'door and windows',
    },
    {
      id: 4,
      icon: '',
      title: 'Home construction and renovation',
      moreInfo: 'Home construction and renovation',
      companiesLink: 'construction',
    },
    {
      id: 5,
      icon: '',
      title: 'Painting',
      moreInfo: 'painting',
      other: 'painters',
    },
    {
      id: 6,
      icon: '',
      title: 'Gardening and Outdoors',
      moreInfo: 'gardening and outdoors',
      other: 'gardeners',
    },
  ];

  const moreCompanies = [
    {
      id: 7,
      icon: 'fa fa-fa-caret-up fa-solid card-icon',
      title: 'Drywall',
      moreInfo: 'plasterboard',
      companiesLink: 'plasterboarders',
    },
    {
      id: 8,
      icon: '',
      title: 'Roof and coverings',
      moreInfo: 'roof and coverings',
      companiesLink: 'roof repair',
    },
    {
      id: 9,
      icon: '',
      title: 'Bathrooms and sanitary ware',
      moreInfo: 'bathrooms and sanitary ware',
      other: 'bathroom specialists',
    },
    {
      id: 10,
      icon: '',
      title: 'Air conditioning',
      moreInfo: 'air conditioning',
      companiesLink: 'see',
    },
    {
      id: 11,
      icon: '',
      title: 'Isolation',
      moreInfo: 'isolation',
      companiesLink: 'insulation',
    },
    {
      id: 12,
      icon: '',
      title: 'Electricity',
      moreInfo: 'electricity',
      other: 'electricians',
    },
  ];

  return (
    <>
      <Styled.FindProf>
        <Styled.FindProfDiv>
          <Styled.H2>Find professionals for every job</Styled.H2>
          <Styled.JobsWrapper>
            {companies.map((company) => (
              <Styled.Joblist key={company.id}>
                <i className={company.icon}></i>
                <Styled.CartTitle>{company.title}</Styled.CartTitle>
                <ul className="jobs-link-ul">
                  <li className=" icon-and-link">
                    <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                    <a
                      href="https://www.instapro.it/riscaldamento"
                      target="_blank"
                    >
                      {company.moreInfo}: find out all the information
                    </a>
                  </li>
                  <li className=" icon-and-link">
                    <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                    <a
                      href="https://www.instapro.it/riscaldamento"
                      target="_blank"
                    >
                      {company.companiesLink
                        ? company.companiesLink + ' companies'
                        : company.other}
                    </a>
                  </li>
                </ul>
              </Styled.Joblist>
            ))}

            {/* --EXPAND Jobs on Button click--> */}
            {showMore &&
              moreCompanies.map((company) => (
                <Styled.Joblist key={company.id}>
                  <i className={company.icon}></i>
                  <Styled.CartTitle>{company.title}</Styled.CartTitle>
                  <ul className="jobs-link-ul">
                    <li className=" icon-and-link">
                      <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                      <a
                        href="https://www.instapro.it/riscaldamento"
                        target="_blank"
                      >
                        {company.moreInfo}: find out all the information
                      </a>
                    </li>
                    <li className=" icon-and-link">
                      <i className="fa fa-arrow-right fa-solid card-arrow"></i>
                      <a
                        href="https://www.instapro.it/riscaldamento"
                        target="_blank"
                      >
                        {company.companiesLink
                          ? company.companiesLink + ' companies'
                          : company.other}
                      </a>
                    </li>
                  </ul>
                </Styled.Joblist>
              ))}
          </Styled.JobsWrapper>
          {!showMore && (
            <div className="more-btn">
              <button className="expand-button" onClick={expandonClick}>
                See more
              </button>
            </div>
          )}
        </Styled.FindProfDiv>
      </Styled.FindProf>
    </>
  );
};

export default ProfessionalsSection;
