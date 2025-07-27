import styled from '@emotion/styled';

export const ReviewsSection = styled.section`
  background-color: #f9f8f6;
`;

export const ReviewNum = styled.div`
  padding: 3rem 0;

  @media (min-width: 60rem) {
    max-width: 66rem;
    margin: 0 auto;
    padding: 0 3rem;
    padding-bottom: 3rem;
  }

  ol {
    display: flex;
    flex-direction: column;
    padding-top: 0;
    padding-bottom: 0;
    align-items: center;
    text-align: center;

    @media (min-width: 48rem) {
      justify-content: space-around;
      flex-direction: row;
      padding: 3rem;
    }
  }

  p {
    color: #0171cd;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: bolder;
    white-space: nowrap;

    @media (min-width: 48rem) {
      font-size: 2rem;
    }
  }

  li {
    list-style: none;
    margin-bottom: 3rem;

    @media (min-width: 60rem) {
      margin: 3rem;
    }
  }

  .requestnum-title {
    color: #3f27ba;
    font-size: 3rem;
    line-height: 3.625rem;
    text-align: center;
    font-weight: bolder;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: calc(1rem - 1px) 2rem;

  .request-btn {
    padding: 15px 32px;
    background-color: #3f27ba;
    color: #fff;
    border-radius: 9999px;
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    margin-bottom: 0px 0px 48px;
    width: 100%;

    @media (min-width: 48rem) {
      width: auto;
    }
  }
`;
