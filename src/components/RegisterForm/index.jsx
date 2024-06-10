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
import { authInstance } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ProfileIcon from "../../icons/Profile.png";
import Email from "../../icons/Email.png";
import Password from "../../icons/Password.png";

const schema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Email inválido")
      .required("O email é obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter pelo menos 6 caracteres")
      .required("A senha é obrigatória"),
    password1: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não coincidem")
      .required("A confirmação de senha é obrigatória"),
  })
  .required();

export const RegisterForm = ({
  navigateTo,
  buttonText,
  ForgottPassWordTextP,
  CreateAccountTextP,
}) => {
  //const navigate = useNavigate();
  const [firebaseError, setFireBaseError] = useState();
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

  const onSubmit = async (data) => {
    const { name, email, password } = data;

    try {
      await createUserWithEmailAndPassword(authInstance, email, password);
      reset();
      alert("Novo usuário adicionado.");
      // Redirecione o usuário ou faça algo após o cadastro
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      setFireBaseError(error);
      // Exiba uma mensagem de erro para o usuário
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
        PlaceHolder={"Senha"}
        control={control}
        name="password"
        rules={{ required: true }}
      />
      <ErrorText>{errors.password?.message}</ErrorText>
      <Input
        InputType={"password"}
        inputIcon={Password}
        PlaceHolder={"Confirmar Senha"}
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
