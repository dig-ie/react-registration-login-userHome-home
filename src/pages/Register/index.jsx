import { MainWrapper, TextContainer, Text1, RegisterBoxContainer } from './styles'
import { Header } from '../../components/Header/index'
import { RegisterBox } from '../../components/RegisterBox'
import EmailIconPng from '../../icons/Email.png'
import PasswordIconPng from '../../icons/Password.png'
import ProfileIconPng from '../../icons/Profile.png'

export const Register = ({Text1_content, RegisterBoxTitle_Text, RegisterBoxSubTitle_Text, OutlinedButton_Text
    , Input_Text1, Input_Text2, AlreadyHaveAccount_Text, MakeLogin_Text, Bottom_Text 
}) => {
    
    RegisterBoxTitle_Text = 'Comece agora grátis'
    Text1_content = 'A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.'
    RegisterBoxSubTitle_Text = 'Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.'
    Input_Text1 = 'Nome';
    Input_Text2 = 'E-mail'
    OutlinedButton_Text = 'Entrar'
    AlreadyHaveAccount_Text = 'Já tem conta?'
    MakeLogin_Text = 'Fazer Login'
    Bottom_Text = 'Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.'
    return(
        <>
        <Header/>
        <MainWrapper>
            <TextContainer>
                <Text1>{Text1_content}</Text1>
            </TextContainer>
            <RegisterBoxContainer>
                <RegisterBox RegisterBoxTitleText={RegisterBoxTitle_Text} RegisterBoxSubTitleText={RegisterBoxSubTitle_Text} 
                 OutlinedButtonText={OutlinedButton_Text} InputText1={Input_Text1} InputText2={Input_Text2}
                 AlreadyHaveAccountTextt={AlreadyHaveAccount_Text} MakeLoginTextt={MakeLogin_Text} BottomTextt={Bottom_Text} 
                 InputIcon2={EmailIconPng} InputIcon3={PasswordIconPng} InputIcon1={ProfileIconPng}/>
            </RegisterBoxContainer>
        </MainWrapper>
        </>
        
    )
}