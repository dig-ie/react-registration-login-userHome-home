import { styled } from "styled-components";

export const RankingBoxContainer = styled.div`
  width: 100%;
  height: 38px;
  min-height: 65px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const UserCotainer = styled.div`
  width: 100%;
  height: 30px;
  color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  /* gap: 8px; */
`;
export const UserSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const UserNameText = styled.h1`
  color: white;
  font-size: 18px;
  padding-bottom: 4px;
`;
export const LoadBarContainer = styled.div`
  width: 100px;
  height: 9px;
  background-color: white;
  border-radius: 6px;
`;

export const LoadBar = styled.div`
  width: 40px;
  height: 100%;
  background-color: green;
  border-radius: 6px;
`;
