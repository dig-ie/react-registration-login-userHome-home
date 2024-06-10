import React from "react";
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
import { useNavigate, Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Email from "../../icons/Email.png";
import Password from "../../icons/Password.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authInstance } from "../../firebase";

const schema = yup
  .object({
    email: yup.string().email("Email inválido").required("O email é obrigatório"),
    password: yup.string().required("A senha é obrigatória"),
  })
  .required();

export const LoginForm = ({
  navigateTo,
  createAccountLink,
  buttonText,
  ForgottPassWordTextP,
  CreateAccountTextP,
}) => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    const { email, password } = formData;

    try {
      await signInWithEmailAndPassword(authInstance, email, password);
      navigate(navigateTo);
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login. Verifique suas credenciais.");
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
      <ButtonContainer>
        <Button type="submit" ButtonText={buttonText}></Button>
      </ButtonContainer>
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