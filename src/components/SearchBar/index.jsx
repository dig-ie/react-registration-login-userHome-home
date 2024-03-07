import { Bar, Input, LoupeIconContainer, LoupeIconImg } from "./styles";
import LoupeIconPng from "../../icons/Loupe.png";
export const SearchBar = ({ PlaceHolder = "BUSCAR" }) => {
  return (
    <Bar>
      <LoupeIconContainer>
        <LoupeIconImg src={LoupeIconPng} />
      </LoupeIconContainer>
      <Input placeholder={PlaceHolder} />
    </Bar>
  );
};
