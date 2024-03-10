import { styled } from "styled-components";

export const InputContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 90%;
  height: 100%;
  /* width: 275px;
height: 20px; */
  color: white;
  margin-bottom: 1.25rem;
  align-self: flex-start;
`;
export const Inputt = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: solid 1px #3b3450;
  background-color: transparent;
  padding-left: 1.25rem;
  outline: none;
  color: red;
  font-size: 14px;
`;

export const ImgDiv = styled.div`
  position: absolute;

  width: 9px;
  height: auto;
  max-height: 9px;
  left: 5px;
  top: 20%;
  transform: translateY(-50%);
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;
