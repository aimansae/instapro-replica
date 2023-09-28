import React from 'react';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';
import * as Styled from '@components/HowitWorks.styled'
const HowitWorks = () => {
  return (
    <>
      <Styled.StyledHowSection>
        <Styled.StyledHowDiv>
          <Styled.StyledH2>How Instapro Works</Styled.StyledH2>
          <Styled.StyledHowOl>
            <Styled.StyledHowLi>
              <Styled.StyledCountDiv>
                <Styled.StyledNumIcon icon={fa1} className="fa-1"></Styled.StyledNumIcon>
                <Styled.StyledLiTitle>Send the request</Styled.StyledLiTitle>
              </Styled.StyledCountDiv>
              <Styled.StyledLiP>
                Send your request in a few simple steps and invite the
                professionals you are interested in to respond.
              </Styled.StyledLiP>
            </Styled.StyledHowLi>
            <Styled.StyledHowLi>
              <Styled.StyledCountDiv>
                <Styled.StyledNumIcon icon={fa2} className="fa-2"></Styled.StyledNumIcon>
                <Styled.StyledLiTitle>
                  The companies will get back to you
                </Styled.StyledLiTitle>
              </Styled.StyledCountDiv>
              <Styled.StyledLiP>
                Companies interested in carrying out the work usually respond
                within 24 hours.
              </Styled.StyledLiP>
            </Styled.StyledHowLi>
            <Styled.StyledHowLi>
              <Styled.StyledCountDiv>
                <Styled.StyledNumIcon icon={fa3} className="fa-3"></Styled.StyledNumIcon>
                <Styled.StyledLiTitle>Select and get in touch</Styled.StyledLiTitle>
              </Styled.StyledCountDiv>
              <Styled.StyledLiP>
                Send your request in a few simple steps and invite the
                professionals you are interested in to respond.
              </Styled.StyledLiP>
            </Styled.StyledHowLi>
          </Styled.StyledHowOl>
        </Styled.StyledHowDiv>
      </Styled.StyledHowSection>
    </>
  );
};

export default HowitWorks;
