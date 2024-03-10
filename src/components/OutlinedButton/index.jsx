import { ButtonOutlied, ButtonIternStyleDiv, ButtonContainer } from "./styles";

export const OutlinedButton = ({ buttonText }) => {
  return (
    <ButtonContainer>
      <ButtonIternStyleDiv type="button">{buttonText}</ButtonIternStyleDiv>
      <ButtonOutlied></ButtonOutlied>
    </ButtonContainer>
  );
};
