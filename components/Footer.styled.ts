import styled from '@emotion/styled';
import Image from 'next/image';

export const StyledFooter = styled.footer`
  border-top: 8.5px solid #dfddeb;
  padding: 3.13rem 1.5rem;

  @media (min-width: 48rem) {
    padding: 3.1rem 1.5rem;
  }
  
  @media (min-width: 60rem) {
    max-width: 66rem;
    margin: 0 auto;
    padding: 3rem;
  }
`;

export const StyledFooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  flex-direction: column;

  @media (min-width: 48rem) {
    flex-direction: row;
  }

  ul {
    list-style: none;
    width: 100%;

    @media (min-width: 48rem) {
      width: 33%;
    }
  }

  li {
    box-sizing: border-box;
    flex-wrap: wrap;
    margin-bottom: 1rem;
  }

  a {
    font-size: 1rem;
    color: #3f27ba;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 1rem;
  }

  .singup-link {
    background-color: #f9f8f6;
    padding: 16px 24px;
    border-radius: 0.5rem;
  }

  .singup-link a {
    color: #330691;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  i {
    margin-right: 0.5rem;
  }

  .yellow-arrow {
    color: #3f27ba;
    padding-top: 4px;
    font-size: 0.875rem;
    background-color: #e5cb4e;
    border-radius: 50%;
    height: 1.5rem;
    width: 1.5rem;
    text-align: center;
  }
`;

export const StyledSocialIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 3rem;
  flex-direction: column;
  justify-content: start;
  gap: 2rem;
  margin-top: 1.5rem;

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    font-size: 2rem;
    align-items: center;
    color: #3f27ba;
  }

  i {
    margin-right: 0.75rem;
    font-size: 2rem;
  }

  .ul-rating-desciption {
    display: flex;
    align-items: center;
  }

  .ul-rating-desciption li:not(:last-child) {
    text-decoration: none;
    margin-right: 0.5rem;
  }

  .ul-rating-desciption li {
    font-size: 1.125rem;
  }

  .rating-description {
    font-size: 18px;
    color: #2c2c2c;
  }

  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledRatingImage = styled(Image)`
  width: 3.2em;
  height: auto;
`;

export const StyledPartnersDiv = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 1.5rem;
    font-size: 1rem;
  }
`;

export const StyledListContainer = styled.div`
  display: flex;
  margin-bottom: 3rem;
  flex-direction: column;

  ul {
    line-height: 1;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.5rem;

    @media (min-width: 48rem) {
      flex-direction: row;
    }
  }

  li {
    list-style: none;
    font-size: 1rem;
    margin-right: 0.5rem;
    display: block;
    margin-bottom: 0.5rem;

    @media (min-width: 48rem) {
      margin-bottom: 0;
    }
  }

  a {
    color: #3f27ba;
    &:hover {
      text-decoration: none;
    }
  }
`;

export const StyledServices = styled.div`
ul{
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    line-height: 1.5rem;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 48rem) {
        flex-direction: row;
    }
}
li:last-child {
    margin-top: 1.5rem;
}
li{
    list-style: none;
    font-size: 1rem;
    display: block;
    margin-bottom: 0;
}

a{
    text-decoration: none;
    color: #3f27ba;
    &:hover{
        text-decoration: underline;
    }
}

@media (min-width: 48rem) {
li:last-child {
    margin-top: 0;
}
}

.copyright{
    color: #5e636e;
    white-space: nowrap;
}
`;
