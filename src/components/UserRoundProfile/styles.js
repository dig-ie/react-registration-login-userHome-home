import { styled } from "styled-components";

export const UserImgContainer = styled.div`
  display: flex;
  align-items: center;
  border: 3px solid green;
  width: 40px;
  height: auto;
  min-width: 40px !important;
  min-height: 40px;
  border-radius: 100px;
  margin: 8px;
`;

export const UserImg = styled.img`
  box-sizing: border-box;
  border-radius: 100px;
  width: 100%;
  height: 100%;
  min-width: 40px;
  min-height: 40px;
  max-width: 40px;
  max-height: 40px;
`;
