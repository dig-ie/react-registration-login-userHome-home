import {
  MainWrapper,
  TextContainer,
  Text1,
  RegisterBoxContainer,
  RegisterH1,
  RegisterH2,
} from "./styles";
import { Header } from "../../components/Header/index";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm";
import EmailIconPng from "../../icons/Email.png";
import PasswordIconPng from "../../icons/Password.png";
import ProfileIconPng from "../../icons/Profile.png";

let registerBoxTitle_Text = "Comece agora grátis";
let text1_content =
  "A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.";
let registerBoxSubTitle_Text =
  'Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.';
let input_Text1 = "Nome";
let input_Text2 = "E-mail";
let outlinedButton_Text = "Cadastrar";
let alreadyHaveAccount_Text = "Já tem conta?";
let makeLogin_Text = "Fazer Login";
let bottom_Text =
  'Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.';

export const Register = ({
  Text1_content = text1_content,
  RegisterBoxTitle_Text = registerBoxTitle_Text,
  RegisterBoxSubTitle_Text = registerBoxSubTitle_Text,
  OutlinedButton_Text = outlinedButton_Text,
  Input_Text1 = input_Text1,
  Input_Text2 = input_Text2,
  AlreadyHaveAccount_Text = alreadyHaveAccount_Text,
  MakeLogin_Text = makeLogin_Text,
  Bottom_Text = bottom_Text,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        LogoOnclick={() => {
          navigate("/");
        }}
        OnClick2={() => {
          navigate("/Register");
        }}
        OnClick1={() => {
          navigate("/Login");
        }}
        OnClick0="/"
        Text0="Home"
        Text1={"Entrar"}
        Text2={"Cadastrar"}
        LoggedHeaderType={false}
      />
      <MainWrapper>
        <TextContainer>
          <Text1>{Text1_content}</Text1>
        </TextContainer>
        <RegisterBoxContainer>
          <RegisterH1>{RegisterBoxTitle_Text}</RegisterH1>
          <RegisterH2>{RegisterBoxSubTitle_Text}</RegisterH2>
          <RegisterForm
            navigateTo={"/"}
            buttonText={"Registrar"}
            CreateAccountTextP={"Já tenho uma conta. Fazer login."}
          />
        </RegisterBoxContainer>
      </MainWrapper>
    </>
  );
};
