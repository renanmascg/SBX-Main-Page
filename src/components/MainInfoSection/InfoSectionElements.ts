import styled from 'styled-components';

interface ISectionInterface {
  lightBg?: boolean;
  imgStart?: boolean;
  lightText?: boolean;
  darkText?: boolean;
}

export const InfoContainer = styled.div<ISectionInterface>`
  color: #fff;
  background: ${({lightBg}) => lightBg ? "#fff" : "#010606"};

  @media screen and (max-width: 768px) {
    padding: 100px 0px;
  }
`;

export const InfoWrapper = styled.div`
  margin-top: 96px;
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px 24px;
  justify-content: center;
`;

export const InfoRow = styled.div<ISectionInterface>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart}) => imgStart ? `'col2 col1'`: `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => imgStart ? `'col1' 'col2'`: `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  padding: 0px 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0px 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1<ISectionInterface>`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => lightText ? '#f7f8fa' : '#010606'};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p<ISectionInterface>`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => darkText ? "#010606" : "#fff"};
`;

export const BtnWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  padding-right: 0; 
`;