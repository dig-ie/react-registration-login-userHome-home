import { LoginBoxContainer, LoginBoxTitle, LoginBoxSubTitle, Form, ButtonContainer, BottomTextsContainer, ForgottPasswordText, CrateAccountText} from './styles'
import { useForm } from "react-hook-form"
import {StyledInput} from '../StyledInput/index'
import { OutlinedButton } from '../OutlinedButton'

export const LoginBox = ({LoginBoxTitleText, LoginBoxSubTitleText, InputText1, InputText2, OutlinedButtonText, ForgottPassText, CrateAccountTextt}) => {

    const { register, handleSubmit, watch } = useForm();

    const onSubmit = (data) => {console.log(data)};

    console.log('render')

    console.log(watch("name"))

    return(
        <LoginBoxContainer>
            <LoginBoxTitle>{LoginBoxTitleText}</LoginBoxTitle>
            <LoginBoxSubTitle>{LoginBoxSubTitleText}</LoginBoxSubTitle>
            <Form>
                <StyledInput />
            </Form>
            <BottomTextsContainer>
                <ForgottPasswordText>{ForgottPassText}</ForgottPasswordText>
                <CrateAccountText>{CrateAccountTextt}</CrateAccountText>
            </BottomTextsContainer>
        </LoginBoxContainer>
        
    )
}