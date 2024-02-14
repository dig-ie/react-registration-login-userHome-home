import {MainWrapper, TextContainer, Text1, LoginBoxContainer} from './styles';
import { LoginBox } from '../../components/LoginBox/index';
import {Header} from '../../components/Header/index'

export const Login = ({LoginBoxTitle_Text, Text_Content, Button_Text, ForgottPass_text, CrateAccount_Text, LoginBoxSubTitle_Text }) => {
    LoginBoxTitle_Text = 'Faça seu cadastro'
    Text_Content ='A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.'
    Button_Text = 'Entrar'
    ForgottPass_text = 'Esqueci minha senha'
    CrateAccount_Text = 'Criar conta'
    LoginBoxSubTitle_Text = 'Faça seu login e make the change._'
    return(
        <>
        <Header/>
        <MainWrapper>
            <TextContainer>
                <Text1>{Text_Content}</Text1>
            </TextContainer>
            <LoginBoxContainer>
            <LoginBox LoginBoxTitleText={LoginBoxTitle_Text} LoginBoxSubTitleText={LoginBoxSubTitle_Text}
             OutlinedButtonText={Button_Text} ForgottPassText={ForgottPass_text} CrateAccountTextt={CrateAccount_Text}/>
            </LoginBoxContainer>
        </MainWrapper>
        </>
    )
}