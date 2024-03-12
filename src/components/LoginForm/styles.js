import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 70px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  margin: 1rem;
`

export const ErrorText = styled.p`
  color: red;
  font-size: 10px;
`;
export const BottomTextsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ForgottPasswordText = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: rgba(229, 224, 68, 1);
`;
export const CreateAccountText = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: rgba(35, 221, 122, 1);
`;
