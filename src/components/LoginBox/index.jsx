import { LoginBoxContainer, LoginBoxTitle, LoginBoxSubTitle, InputContainer, ButtonContainer, BottomTextsContainer, ForgottPasswordText, CrateAccountText} from './styles'
import {StyledInput} from '../StyledInput/index'
import { OutlinedButton } from '../OutlinedButton'
export const LoginBox = ({LoginBoxTitleText, LoginBoxSubTitleText, InputText1, InputText2, OutlinedButtonText, ForgottPassText, CrateAccountTextt}) => {
    return(
        <LoginBoxContainer>
            <LoginBoxTitle>{LoginBoxTitleText}</LoginBoxTitle>
            <LoginBoxSubTitle>{LoginBoxSubTitleText}</LoginBoxSubTitle>
            <InputContainer>
                <StyledInput PlaceHolder={InputText1}/>
                <StyledInput PlaceHolder={InputText2}/>
            </InputContainer>
            <ButtonContainer><OutlinedButton buttonText={OutlinedButtonText}/></ButtonContainer>
            <BottomTextsContainer>
                <ForgottPasswordText>{ForgottPassText}</ForgottPasswordText>
                <CrateAccountText>{CrateAccountTextt}</CrateAccountText>
            </BottomTextsContainer>
        </LoginBoxContainer>
        
    )
}