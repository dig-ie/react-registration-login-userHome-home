import React, { useState } from "react";
import { Button } from "../Button/index";
import { Input } from "../Input/index";
import { Form, ErrorText } from "./styles";
import { useForm } from "react-hook-form";
import { adicionarNovoUsuario, usuarios } from "../../Mock/UserMock";
import _isEqual from "lodash/isEqual";
import omit from "lodash/omit";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
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
      id: `${usuarios.length}`,
      name: `${data.name}`,
      email: `${data.email}`,
      password: `${data.password}`,
    });

    console.log("userrr: " + user.email + user.password);

    usuarios.map((usuario) => {
      const userSemId = omit(user, "id");
      const usuarioSemId = omit(usuario, "id");

      _isEqual(userSemId, usuarioSemId)
        ?
        // ? console.log("true")
        navigate("/UserHome")
        : console.log(
            usuario.name +
              " " +
              usuario.email +
              " " +
              usuario.password +
              "USERRRR" +
              user.name +
              " " +
              user.email +
              " " +
              user.password
          );
    });
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
