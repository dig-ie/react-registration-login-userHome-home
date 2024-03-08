import { FeedBoxContainer, MainWrapper, RankingContainer } from "./styles";
import { posts } from "../../Mock/PostMock";
import { PostBox } from "../../components/PostBox";
import { RankingUnit } from "../../components/RankingUnit";
import { Header } from "../../components/Header";
import { usuarios } from "../../Mock/UserMock";
// import { useContext } from "react";
// import { LoginContext } from "../../contexts/LoginContext";
export const UserHome = () => {
  //   const { logged, toggleLogged } = useContext(LoginContext);
  //   toggleLogged();
  // const {userLogged, toggleLogged } = useContext(LoginContext);
  // toggleLogged();
  // console.log("USERHOME LOG: "+ userLogged)
  return (
    // <LoginContext.Provider value={{userLogged: false, toggleLogged:()=>null}}>
    <>
      <Header LoggedHeaderType={true} />
      <MainWrapper>
        <FeedBoxContainer>
          {posts.map((post) => {
            return (
              <PostBox
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
          {usuarios.map((usuario, index) => {
            return <RankingUnit key={index} UserName={usuario.name} />;
          })}
        </RankingContainer>
      </MainWrapper>
    </>

    // </LoginContext.Provider>
  );
};
