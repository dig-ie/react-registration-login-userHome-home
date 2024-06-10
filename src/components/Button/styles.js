import { styled } from "styled-components";

export const ButtonOutlined = styled.span`
  width: 100%;
  height: auto;
  min-height: 27px;
  border: 1px solid #e4105d;
  background-color: transparent;
  border-radius: 27px;
  padding: 2px;

  display: flex;
  justify-content: center;
  align-items: center !important;
  &:hover {
    cursor: pointer;
  }
`;
export const Buttonn = styled.button`
  min-width: 100px;
  min-height: 13px;
  width: 100%;
  height: auto;
  min-height: 27px;
  &:hover {
    cursor: pointer;
  }
  background-color: #e4105d;
  color: white;
  font-weight: 400;
  font-size: 18px;
  border-radius: 27px;
  border: none;
  margin: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
