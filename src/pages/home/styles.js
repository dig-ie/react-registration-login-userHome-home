import { styled } from "styled-components";

export const MainWrapper = styled.div`
  background-color: #1e192c;
  width: 100vw;
  height: 100vh;
`;
export const LoginHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  width: 100vw;
  background-color: black;
`;

export const HeaderLogoContainer = styled.div`
  width: 63px;
  height: 25px;
  margin-left: 4rem;
`;

export const ButtonsContainer = styled.div`
  margin-right: 4rem;
  margin-left: 4rem;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 8px;
`;

// export const Button = styled.button`

// width: 120px;
// height: 22px;

// border-radius: 11px;
// border: none;
// background-color: #565656;

// color: white;
// font-size: 16px;
// font-weight: 400;
// text-align: center;
// /* open sans font remember */
// `
export const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 80%;
`;
export const HomeImgContainer = styled.div`
  max-width: 100%;
  width: 563px;
  height: 366px;
`;
export const HomeImgStyled = styled.img`
  width: 100%;
  height: auto;
`;

export const InfosSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export const InfosTextContainer = styled.div`
  width: 368px;
  height: 233px;
`;

export const Text1 = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 43.58px;
  color: #e4105d;
`;

export const Text2 = styled.h1`
  font-weight: 700;
  font-size: 32px;
  line-height: 43.58px;
  color: #ffffff;
`;

export const Text3 = styled.p`
  font-weight: 400;
  font-size: 17px;
  color: white;
  line-height: 21.79px;
`;

export const ButtonContainer = styled.div`
  width: 177px;
  height: 47px;
  align-self: flex-start;
`;
