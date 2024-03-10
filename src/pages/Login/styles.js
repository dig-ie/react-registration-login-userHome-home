import { styled } from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  height: 89.7vh;

  display: flex;
  flex-direction: row;
  background-color: #1e192c;

  align-items: center;
  justify-content: space-evenly;

  /* padding-top: 15%; */

  &body {
    height: 100vh;
  }
`;

export const TextContainer = styled.div`
  width: 565px;
  height: 176px;

  padding-bottom: 7.5rem;
`;

export const Text1 = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 700;
  line-height: 43.58px;

  /* padding-top: 1rem; */
`;

export const LoginBoxContainer = styled.div`
  width: 282px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LoginH1 = styled.h1`
  font-weight: 700;
  color: white;
  line-height: 43.58px;
  font-size: 32px;
  padding-bottom: 0.25rem;
`;

export const LoginH2 = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 24.51px;
  color: white;
  padding-bottom: 2rem;
`;
