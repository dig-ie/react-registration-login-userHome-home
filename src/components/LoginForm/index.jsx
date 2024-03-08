import React, { useState } from "react";
// import { useContext } from "react";
import { Button } from "../Button/index";
import { Input } from "../Input/index";
import { Form, ErrorText } from "./styles";
import { useForm } from "react-hook-form";
import { usuarios } from "../../Mock/UserMock";
import _isEqual from "lodash/isEqual";
import omit from "lodash/omit";
import { useNavigate } from "react-router-dom";
// import { LoginContext } from "../../contexts/LoginContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const LoginForm = ({ navigateTo }) => {
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

  // Redireciona para a página de usuário se o login for bem-sucedido
  // if (loginSuccess) {
  //   navigate("/UserHome");
  // }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input control={control} name="name" rules={{ required: true }} />
      <ErrorText>{errors.name?.message}</ErrorText>
      <Input control={control} name="email" rules={{ required: true }} />
      <ErrorText>{errors.email?.message}</ErrorText>
      <Input control={control} name="password" rules={{ required: true }} />
      <ErrorText>{errors.password?.message}</ErrorText>
      <Button type="submit" />
    </Form>
  );
};
