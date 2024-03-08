import {
  RankingBoxContainer,
  UserCotainer,
  UserSubContainer,
  UserNameText,
  LoadBarContainer,
  LoadBar,
} from "./styles";
import { UserRoundProfile } from "../UserRoundProfile";

export const RankingUnit = ({ImgSrc="https://avatars.githubusercontent.com/u/101150281?v=4", ImgAlt="Profile pic icon/button", UserName}) => {
  return (
    <RankingBoxContainer>
      <UserCotainer>
        <UserRoundProfile
          SRC={ImgSrc}
          ALT={ImgAlt}
        />
        <UserSubContainer>
          <UserNameText>{UserName}</UserNameText>
          <LoadBarContainer>
            <LoadBar />
          </LoadBarContainer>
        </UserSubContainer>
      </UserCotainer>
    </RankingBoxContainer>
  );
};
