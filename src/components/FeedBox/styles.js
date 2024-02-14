import { styled } from 'styled-components';

export const FeedText = styled.h1`
size: 18px;
font-weight: 700;

background-color: transparent;
`
export const PostContainer = styled.div`
width: 100%;
height: 100%;
height: 320px;
`

export const PostImgContainer = styled.div`
width: 100%;
height: 50%;
`

export const PostImg = styled.img`
width: 100%;
height: 100%;
`
export const PostInfoContainer = styled.div`
width: 100%;
height: 50%;

background-color: #3B4651;
`
export const UserInfoContainer = styled.div`
display: flex;
flex-direction: row;
gap: 10px;
padding: 8px;
`

export const UserImg = styled.img`
border: 3px solid white;
border-radius: 100%;

width: 32px;
height: 32px;
`

export const UserNameAndPostedTimeContainer = styled.div`
display: flex;
flex-direction: column;
width: 80%;
`

export const UserNameText = styled.h4`
font-size: 18px;
font-weight: 700;
/* line-height: 20.51px; */
color: white;

text-align: left;
`

export const PostedTime = styled.h6`
font-size: 12px;
font-weight: 400;
/* line-height: 16.34px; */
color: white;
opacity: 80%;

text-align: left;
`

export const PostDetailsContainer = styled.div`
width: 100%;

display: flex;
flex-direction: column;

padding: 8px;
`

export const PostTitleText = styled.h4`
font-size: 18px;
font-weight: 700;
line-height: 24.51px;
color: white;
`

export const PostDescription = styled.h6`
font-size: 12px;
font-weight: 400;
line-height: 16.34px;
color: white;
opacity: 80%;
`

export const PostHashTag = styled.h6`
font-size: 12px;
font-weight: 700;
line-height: 16.34px;
color: white;
opacity: 80%;

padding-top: 10px;
`
