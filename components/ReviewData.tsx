import React from 'react';
import { StyledReviewsSection, StyledReviewNum, StyledBtnDiv } from './ReviewData.styled';

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
