import {
  FeedText,
  PostContainer,
  PostImgContainer,
  PostImg,
  PostInfoContainer,
  UserInfoContainer,
  UserImg,
  UserNameAndPostedTimeContainer,
  UserNameText,
  PostedTime,
  PostDetailsContainer,
  PostTitleText,
  PostDescription,
  PostHashTag,
} from "./styles";

import { PostMock } from "../../Mock/PostMock";

export const FeedBox = ({ Mock }) => {
  return (
    <>
      <FeedText>Feed</FeedText>
      {Mock.map((post) => {
        return (
          <>
            <PostContainer>
              <PostImgContainer>
                <PostImg src={post.imgLink} />
              </PostImgContainer>
              <PostInfoContainer>
                <UserInfoContainer>
                  <UserImg />
                  <UserNameAndPostedTimeContainer>
                    <UserNameText>{post.userName}</UserNameText>
                    <PostedTime>{post.postedTime}</PostedTime>
                  </UserNameAndPostedTimeContainer>
                </UserInfoContainer>
                <PostDetailsContainer>
                  <PostTitleText>{post.postTitle}</PostTitleText>
                  <PostDescription>{post.postDescription}</PostDescription>
                  <PostHashTag>{post.postHashTag}</PostHashTag>
                </PostDetailsContainer>
              </PostInfoContainer>
            </PostContainer>
          </>
        );
      })}

      {/* <FeedText>Feed</FeedText>
        <PostContainer>
            <PostImgContainer>
                <PostImg src='https://i.imgur.com/9WtBiQN.jpeg'/>
            </PostImgContainer>
            <PostInfoContainer>
                <UserInfoContainer>
                    <UserImg/>
                    <UserNameAndPostedTimeContainer>
                        <UserNameText>aaaa</UserNameText>
                        <PostedTime>aa</PostedTime>
                    </UserNameAndPostedTimeContainer>
                </UserInfoContainer> 
                <PostDetailsContainer>
                    <PostTitleText>Post title text</PostTitleText>
                    <PostDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum vero vel nesciunt, hic sapiente aliquid beatae sit eius soluta suscipit alias error aperiam quibusdam est aspernatur. Repellendus iste non enim.</PostDescription>
                    <PostHashTag>#hashtag</PostHashTag>
                </PostDetailsContainer>
            </PostInfoContainer>
        </PostContainer> */}
    </>
  );
};
