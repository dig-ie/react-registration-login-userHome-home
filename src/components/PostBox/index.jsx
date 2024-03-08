import {
  FeedText,
  PostContainer,
  PostImgContainer,
  PostStyledImg,
  PostInfoContainer,
  UserInfoContainer,
  UserImg,
  UserNameAndPostedTimeContainer,
  UserNameText,
  PostedTimeText,
  PostDetailsContainer,
  PostTitleText,
  PostDescriptionText,
  PostHashTag,
} from "./styles";
export const PostBox = ({
  PostImg,
  UserName,
  PostedTime,
  PostTitle,
  PostDescription,
  PostHashtags,
}) => {
  return (
    <>
      <FeedText>Feed</FeedText>
      <PostContainer>
        <PostImgContainer>
          <PostStyledImg src={PostImg} />
        </PostImgContainer>
        <PostInfoContainer>
          <UserInfoContainer>
            <UserImg />
            <UserNameAndPostedTimeContainer>
              <UserNameText>{UserName}</UserNameText>
              <PostedTimeText>{PostedTime}</PostedTimeText>
            </UserNameAndPostedTimeContainer>
          </UserInfoContainer>
          <PostDetailsContainer>
            <PostTitleText>{PostTitle}</PostTitleText>
            <PostDescriptionText>{PostDescription}</PostDescriptionText>
            {PostHashtags.map((hashtag) => {
              return <PostHashTag>{hashtag}</PostHashTag>;
            })}
          </PostDetailsContainer>
        </PostInfoContainer>
      </PostContainer>
    </>
  );
};
