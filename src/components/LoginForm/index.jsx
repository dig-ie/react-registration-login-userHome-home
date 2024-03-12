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

  //ONSUBMIT FUNCTION SEARCHING ON THE JSON API IF THERE'S A USER THAT MATCHES THE FORM SUBMIT
  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&password=${formData.password}`
      );
      console.log("api data:", data);
      if (data.length == 1) {
        navigate(navigateTo);
      }
    } catch {
      alert("Erroo");
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
        PlaceHolder={"Password"}
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
