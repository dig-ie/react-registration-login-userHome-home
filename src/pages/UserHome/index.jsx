import {
  FeedBoxContainer,
  MainWrapper,
  RankingContainer,
  RankingTitle,
} from "./styles";
import { PostBox } from "../../components/PostBox";
import { RankingUnit } from "../../components/RankingUnit";
import { Header } from "../../components/Header";
import { posts } from "../../Mock/PostMock";
import { usuarios } from "../../Mock/UserMock";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { LoginContext } from "../../contexts/LoginContext";
export const UserHome = () => {
  //   const { logged, toggleLogged } = useContext(LoginContext);
  //   toggleLogged();
  // const {userLogged, toggleLogged } = useContext(LoginContext);
  // toggleLogged();
  // console.log("USERHOME LOG: "+ userLogged)
  const navigate = useNavigate();
  return (
    // <LoginContext.Provider value={{userLogged: false, toggleLogged:()=>null}}>
    <>
      <Header
        LogoOnclick={() => {
          navigate("/");
        }}
        Text0="Home"
        Text1="Entrar"
        Text2="Registrar"
        LoggedHeaderType={true}
      />
      <MainWrapper>
        <FeedBoxContainer>
          {posts.map((post) => {
            return (
              <PostBox
                PostImgSrc={post.imgLink}
                UserImgSrc={post.userImgLink}
                UserName={post.userName}
                PostedTime={post.postedTime}
                PostTitle={post.postTitle}
                PostDescription={post.postDescription}
                PostHashtags={post.postHashTags}
              />
            );
          })}
        </FeedBoxContainer>
        <RankingContainer>
          <RankingTitle># RANKING DA SEMANA </RankingTitle>
          {usuarios.map((usuario, index) => {
            return (
              <RankingUnit
                key={index}
                ImgSrc={usuario.imgUrl}
                UserName={usuario.name}
              />
            );
          })}
        </RankingContainer>
      </MainWrapper>
    </>

    // </LoginContext.Provider>
  );
};
