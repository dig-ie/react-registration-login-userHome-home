import { PostMock } from "../../Mock/PostMock";
import { FeedBox } from "../../components/FeedBox";
import { RankingBox } from "../../components/RankingBox";
import { Header } from "../../components/Header";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";
export const UserHome = () => {
//   const { logged, toggleLogged } = useContext(LoginContext);
//   toggleLogged();
const {userLogged, toggleLogged } = useContext(LoginContext);
toggleLogged();
console.log("USERHOME LOG: "+ userLogged)
  return (
    <LoginContext.Provider value={{userLogged: false, toggleLogged:()=>null}}>
      <Header />
      <RankingBox />
    </LoginContext.Provider>
  );
};
