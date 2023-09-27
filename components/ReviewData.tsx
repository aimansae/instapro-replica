import React from 'react';
import styled from '@emotion/styled';

const StyledReviewsSection = styled.section`
  background-color: #f9f8f6;
  @media only screen and (min-width: 760px) and (max-width: 960px) {
    padding-bottom: 3rem;
  }
`;

const StyledReviewNum = styled.div`
  @media (min-width: 60rem) {
    max-width: 66rem;
    margin: 0 auto;
    padding: 0 3rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 48rem) {
    padding: 3rem 0;
  }

  ol {
    display: flex;
    justify-content: space-around;
    text-align: center;
    padding: 3rem;
    @media (max-width: 48rem) {
      flex-direction: column;
      padding-top: 0;
      padding-bottom: 0;
    }
    @media only screen and (min-width: 760px) and (max-width: 960px) {
      padding: 6rem 1.5rem;
    }
  }
  p {
    color: #0171cd;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bolder;
    white-space: nowrap;
    @media (max-width: 48rem) {
      font-size: 1.5rem;
    }
  }

  li {
    list-style: none;
    @media (min-width: 60rem) {
      margin: 3rem;
    }
    @media (max-width: 48rem) {
      margin-bottom: 3rem;
    }
  }
  .requestnum-title{
    color: #3f27ba;
    font-size: 3rem;
    line-height: 3.625rem;
    text-align: center;
    font-weight: bolder;
  }
`;

const StyledBtnDiv = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 48rem) {
    padding: 0 1.5rem;
  }
  .request-btn {
    padding: 15px 64px;
    background-color: #3f27ba;
    color: #fff;
    border-radius: 9999px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 0px 0px 48px;
    @media (max-width: 48rem) {
      width: 100%;
    }
    @media (max-width: 30rem) {
      padding: calc(1rem - 1px) 2rem;
    }
  }
`;
const ReviewData = () => {
  return (
    <>
      <StyledReviewsSection>
        <StyledReviewNum>
          <ol>
            <li>
              <span className="requestnum-title">7.109</span>
              <p>companies</p>
            </li>
            <li className="requestnum-list-item">
              <span className="requestnum-title">472,718</span>
              <p>quote requests</p>
            </li>
            <li className="requestnum-list-item">
              <span className="requestnum-title">23.477</span>
              <p>reviews</p>
            </li>
          </ol>
          <StyledBtnDiv>
            <a className="request-btn" href="#">
              Submit your request
            </a>
          </StyledBtnDiv>
        </StyledReviewNum>
      </StyledReviewsSection>
    </>
  );
};

export default ReviewData;
