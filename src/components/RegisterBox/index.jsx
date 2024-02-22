import { RegisterBoxContainer, RegisterBoxTitle, RegisterBoxSubTitle, InputContainer,
ButtonContainer, BottomTextsContainer, 
AlreadyHaveAccountText, MakeLoginText, 
BottomText} from './styles'
import {  StyledInput  } from '../StyledInput/index'
import { OutlinedButton } from '../OutlinedButton'
import { useForm } from 'react-hook-form';




export const RegisterBox = ({RegisterBoxTitleText, RegisterBoxSubTitleText, InputText1, 
    InputText2, OutlinedButtonText, AlreadyHaveAccountTextt, MakeLoginTextt, BottomTextt,
     InputIcon1, InputIcon2, InputIcon3 }) => {

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)

    return(
        <>
        <RegisterBoxContainer>
            <RegisterBoxTitle>{RegisterBoxTitleText}</RegisterBoxTitle>
            <RegisterBoxSubTitle>{RegisterBoxSubTitleText}</RegisterBoxSubTitle>
            <InputContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <StyledInput {...register("firstName")} name='firstName' InputPlaceHolder={InputText1} InputIcon={InputIcon1} />
                <StyledInput {...register("email")} name="email" InputType='email' InputPlaceHolder={InputText2} InputIcon={InputIcon2} />
                <StyledInput {...register("password")} name='password' InputPlaceHolder={InputText2} InputIcon={InputIcon3} />
                <input type="submit">
                </input>
            </form>
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