import {MainWrapper, TextContainer, Text1, LoginBoxContainer} from './styles';
import { Header } from '../../components/Header/index'
import { LoginForm } from '../../components/LoginForm';
// import { useForm } from "react-hook-form"
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"

let LoginBoxTitle_Text = 'Faça seu cadastro'
let Text_Content ='A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.'
let Button_Text = 'Entrar'
let ForgottPass_text = 'Esqueci minha senha'
let CrateAccount_Text = 'Criar conta'
let LoginBoxSubTitle_Text = 'Faça seu login e make the change._'

export const Login = ({LoginBoxTitle_Text, Text_Content, Button_Text, ForgottPass_text, CrateAccount_Text, LoginBoxSubTitle_Text }) => {
    
   

    
    return(
        <>
        <Header/>
        <MainWrapper>
            <TextContainer>
                <Text1>{Text_Content}</Text1>
            </TextContainer>
            <LoginBoxContainer>
                <LoginForm/>
            {/* <LoginBox LoginBoxTitleText={LoginBoxTitle_Text} LoginBoxSubTitleText={LoginBoxSubTitle_Text}
             OutlinedButtonText={Button_Text} ForgottPassText={ForgottPass_text} CrateAccountTextt={CrateAccount_Text}/> */}
            </LoginBoxContainer>
        </MainWrapper>
        </>
    )
}