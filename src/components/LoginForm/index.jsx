import { Button } from "../Button/index";
import { Input } from "../Input/index";
import { Form, ErrorText } from "./styles";
import { useForm } from "react-hook-form";
import { adicionarNovoUsuario, usuarios } from "../../Mock/UserMock";
import React, { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

export const LoginForm = () => {
  const [user, setUser] = useState({});
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

  const onSubmit = (data) => {
    console.log(data);
    setUser({
      id: `${usuarios.length + 1}`,
      name: `${data.name}`,
      email: `${data.email}`,
      password: `${data.password}`,
    });
    adicionarNovoUsuario(user);
    console.log("userrr: " + user.name + user.id);
  };

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
