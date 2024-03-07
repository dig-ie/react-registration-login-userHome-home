import {
  RankingBoxContainer,
  UserCotainer,
  UserSubContainer,
  UserNameText,
  LoadBarContainer,
  LoadBar,
} from "./styles";
import { UserRoundProfile } from "../UserRoundProfile";

export const RankingUnit = () => {
  return (
    <RankingBoxContainer>
      <UserCotainer>
        <UserRoundProfile
          SRC="https://avatars.githubusercontent.com/u/101150281?v=4"
          ALT="Profile pic icon/button"
        />
        <UserSubContainer>
          <UserNameText>Usuário nome</UserNameText>
          <LoadBarContainer>
            <LoadBar />
          </LoadBarContainer>
        </UserSubContainer>
      </UserCotainer>
    </RankingBoxContainer>
  );
};
