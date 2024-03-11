import {
  MainSectionContainer,
  HomeImgStyled,
  HomeImgContainer,
  InfosSection,
  InfosTextContainer,
  MainWrapper,
  Text1,
  Text2,
  Text3,
} from "./styles";
import HomeImg from "../../imgs/HomeImg.png";
import { OutlinedButton } from "../../components/OutlinedButton";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <MainWrapper>
      <Header
        OnClick1={() => {
          navigate("/Login");
        }}
        Text0={"Home"}
        Text1="Entrar"
        Text2="Cadastrar"
      />
      <MainSectionContainer>
        <InfosSection>
          <InfosTextContainer>
            <Text1>Implemente</Text1>
            <Text2>o seu futuro global agora!</Text2>
            <br />
            <Text3>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras do
              mundo e encare seu novo desafio profissional, evoluindo em
              comunidade com os melhores experts.
            </Text3>
          </InfosTextContainer>
          <OutlinedButton buttonText="Começar agora"></OutlinedButton>
        </InfosSection>
        <HomeImgContainer>
          <HomeImgStyled src={HomeImg} />
        </HomeImgContainer>
      </MainSectionContainer>
    </MainWrapper>
  );
};
