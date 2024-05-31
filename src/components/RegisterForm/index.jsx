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
import _isEqual from "lodash/isEqual";
import { useNavigate, Link } from "react-router-dom";
// import { LoginContext } from "../../contexts/LoginContext";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProfileIcon from "../../icons/Profile.png";
import Email from "../../icons/Email.png";
import Password from "../../icons/Password.png";
import { api } from "../../services/api";
const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    password1: yup.string().required().matches(yup.object.password),
  })
  .required();

export const RegisterForm = ({
  buttonText,
  ForgottPassWordTextP,
  CreateAccountTextP,
}) => {
  // const { userLogged, toggleLogged } = useContext(LoginContext);
  // console.log("USER CONTEXT " + userLogged);
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password1: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  //ONSUBMIT -----------------------------------------------------------------------------------
  const onSubmit = async (data) => {
    const newUser = {
      name: `${data.name}`,
      email: `${data.email}`,
      password: `${data.password}`,
      imgUrl: "",
    };
    //POSTING A NEW USER ON THE API JSON
    try {
      const response = await api.post(`/users`, newUser);
      console.log("Novo usuário adicionado:", response.data);
      reset();
      alert("Novo usuário adicionado.");
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
      throw error;
    }
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
      <Input
        InputType={"password"}
        inputIcon={Password}
        PlaceHolder={"Password"}
        control={control}
        name="password1"
        rules={{ required: true }}
      />
      <ErrorText>{errors.password1?.message}</ErrorText>
      <ButtonContainer>
        <Button type="submit" ButtonText={buttonText}></Button>
      </ButtonContainer>
      <BottomTextsContainer>
        <ForgottPasswordText>{ForgottPassWordTextP}</ForgottPasswordText>
        <Link to="/Login" style={{ textDecoration: "none" }}>
          <CreateAccountText>{CreateAccountTextP}</CreateAccountText>
        </Link>
      </BottomTextsContainer>
    </Form>
  );
};
