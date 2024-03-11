import {
  MainWrapper,
  TextContainer,
  Text1,
  LoginBoxContainer,
  LoginH1,
  LoginH2,
} from "./styles";
import { Header } from "../../components/Header/index";
import { LoginForm } from "../../components/LoginForm";
// import { LoginContext } from "../../contexts/LoginContext";
import { useNavigate } from "react-router-dom";

let loginBoxTitle_Text = "Conecte-se";
let loginBoxSubTitle_Text = "Faça seu login e make the change._";
let button_Text = "Entrar";
let forgottPass_text = "Esqueci minha senha";
let aat_Text = "Criar conta";
let text_Content =
  "A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.";

export const Login = ({
  LoginBoxTitle_Text = loginBoxTitle_Text,
  LoginBoxSubTitle_Text = loginBoxSubTitle_Text,
  Button_Text = button_Text,
  ForgottPass_text = forgottPass_text,
  CreateAccount_Text = aat_Text,
  Text_Content = text_Content,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Header
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
          <Text1>{Text_Content}</Text1>
        </TextContainer>
        <LoginBoxContainer>
          <LoginH1>{LoginBoxTitle_Text}</LoginH1>
          <LoginH2>{LoginBoxSubTitle_Text}</LoginH2>
          <LoginForm
            navigateTo={"/UserHome"}
            createAccountLink={"/Register"}
            buttonText={Button_Text}
            CreateAccountTextP={CreateAccount_Text}
            ForgottPassWordTextP={ForgottPass_text}
          />
        </LoginBoxContainer>
      </MainWrapper>
    </>
  );
};
