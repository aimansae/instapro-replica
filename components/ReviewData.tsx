import React from 'react';
import * as Styled from './ReviewData.styled';

const ReviewData = () => {
  return (
    <Styled.ReviewsSection>
      <Styled.ReviewNum>
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
        <Styled.BtnDiv>
          <a className="request-btn" href="#">
            Submit your request
          </a>
        </Styled.BtnDiv>
      </Styled.ReviewNum>
    </Styled.ReviewsSection>
  );
};

export default ReviewData;
