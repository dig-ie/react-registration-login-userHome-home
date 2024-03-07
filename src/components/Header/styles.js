import { styled } from "styled-components";

export const LoginHeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  /* gap: 1rem; */
  justify-content: space-between;
  align-items: center;

  height: 60px;
  width: 100%;
  background-color: black;
`;

export const LeftSideHeaderContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  width: 70%;
  height: 100%;
  background-color: red;
  z-index: 90;
  gap: 16px;
`;

export const HeaderLogoContainer = styled.div`
  width: 63px;
  height: 25px;
  margin-left: 4rem;
`;

export const ButtonsContainer = styled.div`
  position: absolute;
  right: 5px;
  margin-right: 4rem;
  margin-left: 4rem;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 8px;
`;

export const SearchBarContainer = styled.div`
  width: 275px;
  height: 30px;
`;

export const HeaderLink = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 700;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  cursor: pointer;
`;
