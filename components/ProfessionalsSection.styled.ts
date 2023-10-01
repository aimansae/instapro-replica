import styled from '@emotion/styled';

export type SectionProps = {
  showMore: boolean;
};

export const StyledFindProf = styled.section`
  background-color: #f9f8f6;
  box-sizing: border-box;
  padding: 3rem 1.5rem;

  @media (min-width: 48rem) {
    padding: 6rem 1.5rem;
  }
  @media (min-width: 30rem) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;
export const StyledFindProfDiv = styled.div`
  margin: 0 auto;
  padding-top: 3rem;

  @media (min-width: 60rem) {
    max-width: 66rem;
    margin: 0 auto;
    padding: 0 3rem;
  }

  .more-btn {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    width: 100%;

    @media (min-width: 48rem) {
      width: auto;
    }
  }
  .expand-button {
    border: 1px solid #3f27ba;
    padding: 7px 32px;
    background-color: #fff;
    color: #3f27ba;
    border-radius: 9999px;
    align-items: center;
    font-size: 1rem;
    line-height: 1.5;
    font-weight: bold;
    width: inherit;

    &:hover {
      background-color: #f0f5fe;
    }
  }
`;

export const StyledH2 = styled.h2`
  font-size: 1.5rem;

  @media (min-width: 48rem) {
    font-size: 2rem;
  }
`;

export const StyledJobsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 3rem;
  flex-direction: column;

  @media (min-width: 48rem) {
    flex-direction: row;
  }
`;

export const StyledJoblist = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 48rem) {
    width: 31.5%;
  }

  .card-icon {
    font-size: 1.5rem;
    color: #3f27ba;
  }

  .jobs-link-ul {
    list-style: none;
    margin: 1.5rem 0;
    font-size: 1rem;
  }

  .icon-and-link {
    display: flex;
    align-items: baseline;
    margin-right: 0.5rem;
  }

  .card-arrow {
    color: #3f27ba;
    font-size: 1rem;
    margin-right: 0.5rem;
  }

  a {
    color: #3727ba;
    &:hover {
      text-decoration: none;
    }
    &:visited {
      color: #330691;
    }
  }

  li {
    margin-top: 1.5rem;
  }
`;

export const StyledCartTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 600;

  @media (min-width: 48rem) {
    font-size: 1.25rem;
  }
`;
