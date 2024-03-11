import { Button } from "./styles";

export const LogonButton = ({ OnClick, LogonButtonText }) => {
  return (
    <Button onClick={OnClick}>{LogonButtonText}</Button>
  );
};
