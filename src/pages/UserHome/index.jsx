import {
  FeedBoxContainer,
  MainWrapper,
  RankingContainer,
  RankingTitle,
} from "./styles";
import { PostBox } from "../../components/PostBox";
import { RankingUnit } from "../../components/RankingUnit";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import React, { useState, useEffect } from "react";
// import { useContext } from "react";
// import { LoginContext } from "../../contexts/LoginContext";
export const UserHome = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .get("/users")
      .then((response) => {
        const usersData = response.data;
        setUsers(usersData);
      })
      .catch((error) => {
        console.error("Erro ao obter usuários:", error);
      });

    api
      .get("/posts")
      .then((response) => {
        const postsData = response.data;
        setPosts(postsData);
      })
      .catch((error) => {
        console.error("Erro ao obter posts:", error);
      });
  }, []);
  return (
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
          {users.map((user) => (
            <RankingUnit
              key={user.id}
              ImgSrc={user.imgUrl}
              UserName={user.name}
            ></RankingUnit>
          ))}
        </RankingContainer>
      </MainWrapper>
    </>
  );
};
