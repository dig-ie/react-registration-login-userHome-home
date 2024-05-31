import {
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
  PostHashTagContainer,
  PostHashTag,
} from "./styles";
export const PostBox = ({
  PostImgSrc,
  UserImgSrc,
  UserName,
  PostedTime,
  PostTitle,
  PostDescription,
  PostHashtags,
}) => {
  return (
    <>
      <PostContainer>
        <PostImgContainer>
          <PostStyledImg src={PostImgSrc} />
        </PostImgContainer>
        <PostInfoContainer>
          <UserInfoContainer>
            <UserImg src={UserImgSrc}/>
            <UserNameAndPostedTimeContainer>
              <UserNameText>{UserName}</UserNameText>
              <PostedTimeText>{PostedTime}</PostedTimeText>
            </UserNameAndPostedTimeContainer>
          </UserInfoContainer>
          <PostDetailsContainer>
            <PostTitleText>{PostTitle}</PostTitleText>
            <PostDescriptionText>{PostDescription}</PostDescriptionText>
            <PostHashTagContainer>
              {PostHashtags.map((hashtag) => {
                return <PostHashTag>{hashtag}</PostHashTag>;
              })}
            </PostHashTagContainer>
          </PostDetailsContainer>
        </PostInfoContainer>
      </PostContainer>
    </>
  );
};
