import { styled } from "styled-components";

export const FeedBoxContainer = styled.div`
  width: 767px;
  height: 320px;
  margin: 0;
  padding: 0;
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 4rem 6rem 0 4rem;
  background-color: rgba(30, 25, 44, 1);
  height: 100vh !important;
  /* overflow-y: auto; */
`;

export const RankingContainer = styled.div`
  width: 269px;
  height: 352px;
  display: flex;
  flex-direction: column;
`;

export const RankingTitle = styled.h1`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  line-height: 24.51px;
  text-align: center;
`;
