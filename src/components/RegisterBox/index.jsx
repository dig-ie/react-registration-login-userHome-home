import { RegisterBoxContainer, RegisterBoxTitle, RegisterBoxSubTitle, InputContainer,
ButtonContainer, BottomTextsContainer, 
AlreadyHaveAccountText, MakeLoginText, 
BottomText} from './styles'
import {  StyledInput  } from '../StyledInput/index'
import { OutlinedButton } from '../OutlinedButton'
export const RegisterBox = ({RegisterBoxTitleText, RegisterBoxSubTitleText, InputText1, 
    InputText2, OutlinedButtonText, AlreadyHaveAccountTextt, MakeLoginTextt, BottomTextt,
     InputIcon1, InputIcon2, InputIcon3 }) => {
    return(
        <>
        <RegisterBoxContainer>
            <RegisterBoxTitle>{RegisterBoxTitleText}</RegisterBoxTitle>
            <RegisterBoxSubTitle>{RegisterBoxSubTitleText}</RegisterBoxSubTitle>
            <InputContainer>
            <StyledInput InputPlaceHolder={InputText1} InputIcon={InputIcon1}/>
            <StyledInput InputPlaceHolder={InputText2} InputIcon={InputIcon2}/>
            <StyledInput InputPlaceHolder={InputText2} InputIcon={InputIcon3}/>
        </InputContainer>
        </RegisterBoxContainer>
        <ButtonContainer><OutlinedButton buttonText={OutlinedButtonText}/></ButtonContainer>
        <BottomText>{BottomTextt}</BottomText>
        <BottomTextsContainer>
            <AlreadyHaveAccountText>{AlreadyHaveAccountTextt}</AlreadyHaveAccountText>
            <MakeLoginText>{MakeLoginTextt}</MakeLoginText>
        </BottomTextsContainer>
        </>
    )
}