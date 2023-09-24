import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';

const StyledHowSection = styled.section`
  background-color: #f9f8f6;
  box-sizing: border-box;
  padding: 6rem 0;
  @media only screen and (min-width: 760px) and (max-width: 960px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  @media (max-width: 48rem) {
    padding: 3rem 0;
  }
`;

const StyledHowDiv = styled.div`
  max-width: 66rem;
  margin: 0 auto;
  padding: 0 3rem;
  @media (max-width: 48rem) {
    padding: 0 1.5rem;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  line-height: 1.313;
  color: #2c2c2c;
  @media (max-width: 48rem) {
    font-size: 1.5rem;
  }
`;

const StyledHowOl = styled.ol`
  display: flex;
  gap: 1.5rem;
  justify-content: space-around;
  margin-top: 3rem;
  @media (max-width: 48rem) {
    flex-direction: column;
  }
`;

const StyledHowLi = styled.li`
  width: 33.33%;
  list-style: none;
  @media (max-width: 48rem) {
    width: 100%;
  }
  @media (max-width: 30rem) {
    margin-left: 0;
  }
`;

const StyledCountDiv = styled.div`
  display: flex;
  align-items: flex-start;
`;

const StyledNumIcon = styled(FontAwesomeIcon)`
  color: #e5cb4e;
  font-size: 1.5rem;
`;

const StyledLiTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-left: 1.5rem;
  color: #2c2c2c;

  @media (max-width: 48rem) {
    font-size: 1.25rem;
  }
`;

const StyledLiP = styled.p`
  margin-left: 2.3rem;
  margin-top: 1rem;
  color: #2c2c2c;
  font-size: 1rem;
  @media (max-width: 48rem) {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`;
const HowitWorks = () => {
  return (
    <>
      <StyledHowSection>
        <StyledHowDiv>
          <StyledH2>How Instapro Works</StyledH2>
          <StyledHowOl>
            <StyledHowLi>
              <StyledCountDiv>
                <StyledNumIcon icon={fa1} className="fa-1"></StyledNumIcon>
                <StyledLiTitle>Send the request</StyledLiTitle>
              </StyledCountDiv>
              <StyledLiP>
                Send your request in a few simple steps and invite the
                professionals you are interested in to respond.
              </StyledLiP>
            </StyledHowLi>
            <StyledHowLi>
              <StyledCountDiv>
                <StyledNumIcon icon={fa2} className="fa-2"></StyledNumIcon>
                <StyledLiTitle>
                  The companies will get back to you
                </StyledLiTitle>
              </StyledCountDiv>
              <StyledLiP>
                Companies interested in carrying out the work usually respond
                within 24 hours.
              </StyledLiP>
            </StyledHowLi>
            <StyledHowLi>
              <StyledCountDiv>
                <StyledNumIcon icon={fa3} className="fa-3"></StyledNumIcon>
                <StyledLiTitle>Select and get in touch</StyledLiTitle>
              </StyledCountDiv>
              <StyledLiP>
                Send your request in a few simple steps and invite the
                professionals you are interested in to respond.
              </StyledLiP>
            </StyledHowLi>
          </StyledHowOl>
        </StyledHowDiv>
      </StyledHowSection>
    </>
  );
};

export default HowitWorks;
