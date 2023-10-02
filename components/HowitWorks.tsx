import React from 'react';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';
import * as Styled from '@components/HowitWorks.styled';

const aboutList = [
  {
    id: 1,
    icon: fa1,
    class: 'fa-1',
    title: 'Send the request',
    description:
      'Send your request in a few simple steps and invite the professionals you are interested in to respond.',
  },
  {
    id: 2,
    icon: fa2,
    class: 'fa-2',
    title: 'The companies will get back to you',
    description:
      'Companies interested in carrying out the work usually respond within 24 hours.',
  },
  {
    id: 3,
    icon: fa3,
    class: 'fa-3',
    title: 'Select and get in touch',
    description:
      'Send your request in a few simple steps and invite the professionals you are interested in to respond.',
  },
];

const HowitWorks = () => {
  return (
    <>
      <Styled.HowSection>
        <Styled.HowDiv>
          <Styled.H2>How Instapro Works</Styled.H2>
          <Styled.HowOl>
            {aboutList.map((li) => (
              <Styled.HowLi key={li.id}>
                <Styled.CountDiv>
                  <Styled.NumIcon
                    icon={li.icon}
                    className={li.class}
                  ></Styled.NumIcon>
                  <Styled.LiTitle>{li.title}</Styled.LiTitle>
                </Styled.CountDiv>
                <Styled.LiP>{li.description}</Styled.LiP>
              </Styled.HowLi>
            ))}
          </Styled.HowOl>
        </Styled.HowDiv>
      </Styled.HowSection>
    </>
  );
};

export default HowitWorks;
