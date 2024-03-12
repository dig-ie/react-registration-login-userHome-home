import React, { useState } from "react";
import { Button } from "../Button/index";
import { Input } from "../Input/index";
import {
  Form,
  ErrorText,
  BottomTextsContainer,
  ForgottPasswordText,
  CreateAccountText,
  ButtonContainer,
} from "./styles";
import { useForm } from "react-hook-form";
import { usuarios } from "../../Mock/UserMock";
import _isEqual from "lodash/isEqual";
import omit from "lodash/omit";
import { useNavigate, Link } from "react-router-dom";
// import { LoginContext } from "../../contexts/LoginContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProfileIcon from "../../icons/Profile.png";
import Email from "../../icons/Email.png";
import Password from "../../icons/Password.png";
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const LoginForm = ({
  navigateTo,
  createAccountLink,
  buttonText,
  ForgottPassWordTextP,
  CreateAccountTextP,
}) => {
  // const { userLogged, toggleLogged } = useContext(LoginContext);
  // console.log("USER CONTEXT " + userLogged);
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  // const { logged, toggleLogged } = useContext(LoginContext);

  const onSubmit = (data) => {
    console.log("data: ", data);

    const newUser = {
      id: `${usuarios.length}`, // Corrigido
      name: `${data.name}`,
      email: `${data.email}`,
      password: `${data.password}`,
    };

    setUser(newUser);

    // Garantindo que a navegação ocorra após o estado ser atualizado
    // usando a função de retorno de chamada de setUser
    setUser((prevUser) => {
      const isValidUser = usuarios.some((usuario) =>
        _isEqual(omit(prevUser, "id", "imgUrl"), omit(usuario, "id", "imgUrl"))
      );

      if (isValidUser) {
        console.log("VALIDAÇÃO SUCESSO -------------------");
        navigate(navigateTo);
      }

      return newUser; // Retornando o novo usuário atualizado
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        inputIcon={ProfileIcon}
        PlaceHolder={"Nome"}
        control={control}
        name="name"
        rules={{ required: true }}
      />
      <ErrorText>{errors.name?.message}</ErrorText>
      <Input
        inputIcon={Email}
        PlaceHolder={"Email"}
        control={control}
        name="email"
        rules={{ required: true }}
      />
      <ErrorText>{errors.email?.message}</ErrorText>
      <Input
        InputType={"password"}
        inputIcon={Password}
        PlaceHolder={"Password"}
        control={control}
        name="password"
        rules={{ required: true }}
      />
      <ErrorText>{errors.password?.message}</ErrorText>
      <ButtonContainer><Button type="submit" ButtonText={buttonText}></Button></ButtonContainer>
      <BottomTextsContainer>
        <ForgottPasswordText>{ForgottPassWordTextP}</ForgottPasswordText>
        <CreateAccountText>
          <Link
            to={createAccountLink}
            style={{ color: "rgba(35, 221, 122, 1)", textDecoration: "none" }}
          >
            {CreateAccountTextP}
          </Link>
        </CreateAccountText>
      </BottomTextsContainer>
    </Form>
  );
};
