import { UserImgContainer, UserImg } from "./styles";

export const UserRoundProfile = ({SRC, ALT}) => {
  return (
    <UserImgContainer>
      <UserImg
        src={SRC}
        alt={ALT}
      />
    </UserImgContainer>
  );
};
