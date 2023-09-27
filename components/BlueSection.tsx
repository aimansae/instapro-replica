import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import ReviewImage from '../public/images/review1.jpg';
const StyledBlueSection = styled.section`
  background-color: #017acd;
  padding-bottom: 6rem;
  p {
    font-size: 1rem;
  }
  @media (min-width: 60rem) {
    padding-top: 6rem;
  }
  @media (max-width: 48rem) {
    padding: 3rem 0;
  }
  @media only screen and (min-width: 760px) and (max-width: 960px) {
    padding-top: 6rem;
  }
`;

const StyledBlueDiv = styled.div`
  @media (min-width: 60rem) {
    max-width: 66rem;
    margin: 0 auto;
    padding: 0 3rem;
  }
  @media (max-width: 48rem) {
    padding: 0 1.5rem;
  }
  @media only screen and (min-width: 760px) and (max-width: 960px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  line-height: 1.313;
  margin-bottom: 3.2rem;
  color: #fff;
  @media (max-width: 48rem) {
    margin-bottom: 1.2rem;
  }
`;

const StyledCardDiv = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 48rem) {
    display: -webkit-inline-box;
    overflow-x: scroll;
    overflow-y: visible;
    margin: 1rem 0;
    scroll-padding: 1.5rem;
    -webkit-overflow-scrolling: touch;
    width: 100vw;
    margin: 0 calc(-1 * 1.5rem) 1rem;
    padding: 1rem 0 1rem 1.5rem;
  }
`;

const StyledReviewCard = styled.div`
  width: 33.33%;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  a {
    text-decoration: none;
  }
  @media (max-width: 48rem) {
    width: 100%;
  }
  @media (max-width: 30rem) {
    width: 80%;
  }
`;

const StyledImgContainer = styled.div`
  display: flex;
  p {
    font-family: 'moderat', sans-serif;
    color: #3f27ba;
    font-weight: 600;
  }
  @media (max-width: 48rem) {
    align-items: center;
  }
`;
const StyledImg = styled(Image)`

    min-width: 3.5rem;
    height: 3.5rem;
    box-sizing: border-box;
    overflow: hidden;
    border-radius: 0.25rem;
    margin: 0 1rem 0 0;
  }`;

const StyledReviewDescription = styled.div`
  .reviewstar-container {
    display: flex;
    margin: 0.5rem 0;
  }
  i {
    color: #128750;
    font-size: 1rem;
  }
  .review-description {
    margin-top: 0.5rem;
    color: #2c2c2c;
  }
  .review-title {
    color: #6f6f6f;
  }
`;
const StyledReviewInfo = styled.div`
  display: flex;
  margin-top: 3rem;
  color: #fff;
  p {
    margin-left: 1.5rem;
  }
  @media (max-width: 48rem) {
    margin-top: 0;
  }
`;
const BlueSection = () => {
  return (
    <>
      <StyledBlueSection>
        <StyledBlueDiv>
          <StyledH2>Get the results you want</StyledH2>
          <StyledCardDiv>
            <StyledReviewCard>
              <a href="https://www.instapro.it/tinteggiatura/imbiancatura-tinteggiatura-interna">
                <StyledImgContainer>
                  <StyledImg src={ReviewImage} alt="" />
                  <p>Inside; 2rooms; Within 2 weeks</p>
                </StyledImgContainer>
                <StyledReviewDescription>
                  <div className="reviewstar-container">
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                  </div>
                  <p className="review-title">
                    The work was done by St. George by Ibrahim Salama
                  </p>
                  <p className="review-description">
                    “ Fast, accurate, reliable and helpful. He painted and
                    stuccoed where needed. Really great job. ”
                  </p>
                </StyledReviewDescription>
              </a>
            </StyledReviewCard>

            <StyledReviewCard>
              <a href="https://www.instapro.it/tinteggiatura/imbiancatura-tinteggiatura-interna">
                <StyledImgContainer>
                  <StyledImg src={ReviewImage} alt="" />

                  <p>Roof installation or replacement; 140 m²; Pi...</p>
                </StyledImgContainer>
                <StyledReviewDescription>
                  <div className="reviewstar-container">
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                  </div>
                  <p className="review-title">
                    The work was carried out by Edil Global srls
                  </p>
                  <p className="review-description">
                    “ Fast and punctual, they were able to meet my needs in
                    record time. They tiled a 130m2 garage in less than a week,
                    finding the tiles exactly as I was looking for and at
                  </p>
                </StyledReviewDescription>
              </a>
            </StyledReviewCard>
            <StyledReviewCard>
              <a href="https://www.instapro.it/tinteggiatura/imbiancatura-tinteggiatura-interna">
                <StyledImgContainer>
                  <StyledImg src={ReviewImage} alt="" />
                  <p className="review-card-title">
                    125 m²; Gutters, Gutters, Joists, Beams...
                  </p>
                </StyledImgContainer>
                <StyledReviewDescription>
                  <div className="reviewstar-container">
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                    <i className=" fa  fa-star fa-solid"></i>
                  </div>
                  <p className="review-title">
                    The work was carried out by FB IMBIANCATURE DI BUSNELLI
                    FEDERICO
                  </p>
                  <p className="review-description">
                    “ Wood gutter paint job and vertical steel gutters and
                    downspouts performed”
                  </p>
                </StyledReviewDescription>
              </a>
            </StyledReviewCard>
          </StyledCardDiv>
          <StyledReviewInfo>
            <svg
              fill="none"
              height="40px"
              width="40px"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipRule="evenodd" fillRule="evenodd">
                <path
                  d="m6.86121 33.0597c-.6824 0-1.1792-.6448-1.008-1.3056.2244-.866.5348-1.9508.8184-2.5576.034-.0748.0688-.1504.1044-.2248.0092-.0188.0192-.038.0284-.0568.2608-.5344.5632-1.05.9112-1.5316.5112-.7 1.1424-1.2496 1.734-1.5628 1.09719-.582 6.51319-1.1088 7.93879-2.6784.7448-.8204-.3264-2.9404-1.4492-4.9656-.0852-.1536-.2484-.2244-.422-.2512-.9288-.1436-1.4696-3.1364-1.4696-3.7904 0-.9216.092-1.464.4424-1.6204.168-.0752.26-.2596.2624-.444l.0388-2.80883s-.0844-6.0312 6.8256-6.0312h.0008c6.91 0 6.8252 6.0312 6.8252 6.0312l.036 2.80843c.0024.1844.0948.3692.2632.4444.3504.1568.4444.6988.4444 1.62 0 .6316-.2956 3.8888-1.4156 3.648-.2016-.0432-.4048.0732-.5096.2508-1.2004 2.042-2.372 4.2188-1.5388 5.1084 1.3708 1.4636 7.0356 2.134 8.062 2.6784.5916.3136 1.226.8628 1.7372 1.5632.3268.4524.6112.9336.8604 1.4336.0068.0132.0128.0272.0192.0412.3496.6896.72 1.9376.9752 2.896.176.6604-.3244 1.306-1.008 1.306h-29.50719z"
                  fill="#3f27ba"
                ></path>
                <path
                  d="m6.76281 35.282.4796 1.476c.0232.0712.0896.1196.1648.1196h1.5516c.1676 0 .2376.2148.1016.3132l-1.2552.912c-.0608.044-.086.1224-.0628.1936l.4796 1.476c.052.1596-.1308.2924-.2664.1936l-1.2552-.912c-.0608-.044-.1428-.044-.2036 0l-1.2552.912c-.1356.0988-.3184-.034-.2664-.1936l.4796-1.476c.0232-.0712-.0024-.1496-.0628-.1936l-1.2552-.912c-.1356-.0988-.066-.3132.1016-.3132h1.5516c.0752 0 .1416-.0484.1648-.1196l.4796-1.476c.0508-.1592.2768-.1592.3284 0zm6.40239 0 .4796 1.476c.0232.0712.0896.1196.1648.1196h1.5516c.1676 0 .2376.2148.1016.3132l-1.2552.912c-.0608.044-.086.1224-.0628.1936l.4796 1.476c.052.1596-.1308.2924-.2664.1936l-1.2552-.912c-.0608-.044-.1428-.044-.2036 0l-1.2552.912c-.1356.0988-.3184-.034-.2664-.1936l.4796-1.476c.0232-.0712-.0024-.1496-.0628-.1936l-1.2552-.912c-.1356-.0988-.066-.3132.1016-.3132h1.5516c.0752 0 .1416-.0484.1648-.1196l.4796-1.476c.0508-.1592.2764-.1592.3284 0zm6.402 0 .4796 1.476c.0232.0712.0896.1196.1648.1196h1.5516c.1676 0 .2376.2148.1016.3132l-1.2552.912c-.0608.044-.086.1224-.0628.1936l.4796 1.476c.052.1596-.1308.2924-.2664.1936l-1.2552-.912c-.0608-.044-.1428-.044-.2036 0l-1.2552.912c-.1356.0988-.3184-.034-.2664-.1936l.4796-1.476c.0232-.0712-.0024-.1496-.0628-.1936l-1.2552-.912c-.1356-.0988-.066-.3132.1016-.3132h1.5516c.0752 0 .1416-.0484.1648-.1196l.4796-1.476c.0508-.1592.2768-.1592.3284 0zm6.3868 0 .4796 1.476c.0232.0712.0896.1196.1648.1196h1.5516c.1676 0 .2376.2148.102.3132l-1.2552.912c-.0608.044-.086.1224-.0628.1936l.4796 1.476c.052.1596-.1308.2924-.2664.1936l-1.2552-.912c-.0608-.044-.1428-.044-.2036 0l-1.2552.912c-.1356.0988-.3184-.034-.2664-.1936l.4796-1.476c.0232-.0712-.0024-.1496-.0628-.1936l-1.2552-.912c-.1356-.0988-.066-.3132.1016-.3132h1.5516c.0752 0 .1416-.0484.1648-.1196l.4796-1.476c.0504-.1592.276-.1592.328 0zm5.748 0 .4796 1.476c.0232.0712.0896.1196.1648.1196h1.5516c.1676 0 .2376.2148.1016.3132l-1.2552.912c-.0608.044-.086.1224-.0628.1936l.4796 1.476c.052.1596-.1308.2924-.2664.1936l-1.2552-.912c-.0608-.044-.1428-.044-.2036 0l-1.2552.912c-.1356.0988-.3184-.034-.2664-.1936l.4796-1.476c.0232-.0712-.0024-.1496-.0628-.1936l-1.2552-.912c-.1356-.0988-.066-.3132.1016-.3132h1.5516c.0752 0 .1416-.0484.1648-.1196l.4796-1.476c.0508-.1592.2764-.1592.3284 0zm2.1184-4.0872h-29.50679c-.538 0-1.0348-.2436-1.364-.6692-.3288-.426-.44-.9692-.3048-1.4904.3224-1.2424.6116-2.1428.8608-2.6752.0324-.0716.0692-.1516.1072-.2308l.0272-.0556c.2904-.5944.6176-1.1436.9752-1.638.5556-.7616 1.2536-1.388 1.9672-1.7656.4368-.232 1.1932-.404 2.4912-.6876 1.78079-.3888 4.47199-.9772 5.26199-1.8472.3148-.3464-.1872-1.7204-1.4908-4.0852-1.7196-.346-2.0276-4.4216-2.0276-4.4628 0-.884.0572-1.774.7064-2.1704l.0372-2.712c-.0012-.0924-.016-2.7272 1.9136-4.684 1.292-1.31 3.1184-1.9888 5.4312-2.0196l.0016-.0008.1624-.0004c2.3904 0 4.2724.6796 5.5944 2.0204 1.9296 1.9568 1.9152 4.5916 1.9136 4.7032l.0348 2.694c.6512.402.7084 1.3252.7084 2.1696 0 .0308-.0708 3.144-1.2008 4.0572-.258.208-.566.3036-.874.2824-.5872 1-2.106 3.6324-1.5736 4.2008.758.8092 3.5428 1.4344 5.3856 1.8488 1.3192.296 2.0856.4744 2.498.6932.7164.3796 1.416 1.006 1.9692 1.7636.3344.4636.6432.978.9192 1.5316l.0348.0744c.3656.7188.7516 2.0272 1.0088 2.992.1388.5196.0304 1.0628-.298 1.4896-.3292.428-.8284.674-1.3696.674zm-20.7084-16.4856c.394.0704.7044.2784.8768.5884 1.3656 2.4636 2.41 4.5972 1.3576 5.756-1.0832 1.1928-3.7996 1.786-5.98159 2.2628-.9092.1988-1.8492.404-2.1428.56-.5268.2788-1.074.7752-1.502 1.362-.3104.4288-.5972.91-.85 1.4288l-.0204.0412c-.0392.0804-.0716.1516-.1036.222-.2112.452-.4868 1.3184-.7792 2.4476-.0392.1504.0232.26.0632.3124.0404.0516.1304.1388.2836.1388h29.50719c.1552 0 .2464-.0884.2868-.1408.0396-.0516.1-.16.0612-.306-.3396-1.2748-.6676-2.2564-.9248-2.7636l-.0204-.044c-.244-.488-.5144-.9384-.8032-1.3392-.4248-.582-.974-1.0784-1.5036-1.3592-.2708-.1436-1.23-.3588-2.1576-.5672-2.2444-.504-5.038-1.1316-6.0828-2.2476-1.1528-1.2308.0276-3.5032 1.4488-5.9212.25-.4244.7144-.6508 1.1704-.5856.3392-.3332.66-2.072.66-2.9672 0-.7028-.064-.9456-.0988-1.0252-.3664-.1912-.6032-.5892-.6084-1.0316l-.036-2.8076c0-.0384-.0012-2.2128-1.5308-3.754-1.0428-1.0508-2.5692-1.5896-4.5384-1.6024h-.0744c-2.0112 0-3.5664.5428-4.6224 1.6136-1.5328 1.5544-1.5208 3.7032-1.5204 3.7248l-.0388 2.828c-.0068.4416-.2428.8376-.6076 1.0292-.0344.08-.0972.3232-.0972 1.0256 0 .7096.5024 2.812.9296 3.1212zm11.9676 1.1936h.0008c-.0004 0-.0008 0-.0008 0zm1.3924-6.5596c0 .0004.0004.0004.0008.0004-.0004 0-.0008 0-.0008-.0004z"
                  fill="#FFFFFF"
                ></path>
              </g>
            </svg>
            <p>Instapro reviews are left by users like you</p>
          </StyledReviewInfo>
        </StyledBlueDiv>
      </StyledBlueSection>
    </>
  );
};

export default BlueSection;
