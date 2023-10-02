import styled from '@emotion/styled';
import Image from 'next/image';

export const SocialIconDiv = styled.div`
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

    &:not(:last-child) {
      text-decoration: none;
      margin-right: 0.5rem;
    }
  }

  i {
    margin-right: 0.75rem;
    font-size: 2rem;
  }

  .rating-container {
    display: flex;
    align-items: center;
  }

  .rating-description {
    font-size: 16px;
    color: #2c2c2c;
  }

  .spacing {
    margin-right: 0.5rem;
  }

  @media (min-width: 48rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const RatingImage = styled(Image)`
  width: 3.2em;
  height: auto;
`;
