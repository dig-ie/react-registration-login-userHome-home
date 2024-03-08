export const usuarios = [
  {
    id: 0,
    name: "Diêgo",
    email: "debarrosdiego415@gmail.com",
    password: "123",
    imgUrl:"https://avatars.githubusercontent.com/u/101150281?v=4"
  },
  ,
  { id: 1, name: "User 2", email: "email@gmail.com", password: "123" },
];

export function adicionarNovoUsuario(novoUsuario) {
  usuarios.push(novoUsuario);
}
