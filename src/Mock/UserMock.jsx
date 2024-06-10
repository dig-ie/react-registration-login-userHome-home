export const users = [
  {
    id: 0,
    name: "Diêgo",
    email: "debarrosdiego415@gmail.com",
    password: "123",
    imgUrl: "https://avatars.githubusercontent.com/u/101150281?v=4",
  },
  ,
  {
    id: 1,
    name: "User 2",
    email: "email@gmail.com",
    password: "123",
    imgUrl:
      "https://i.pinimg.com/564x/a1/47/19/a14719782ac66e44ed79e790f7f51995.jpg",
  },
  {
    id: 2,
    name: "User 3",
    email: "email2@gmail.com",
    password: "123",
    imgUrl:
      "https://i.pinimg.com/564x/16/fd/cd/16fdcdeb09ad7fe3fa57b1b5bbcab4a3.jpg",
  },
  {
    id: 3,
    name: "User 3",
    email: "email2@gmail.com",
    password: "123",
    imgUrl: "https://avatars.githubusercontent.com/u/101150281?v=4",
  },
];

export function adicionarNovoUsuario(novoUsuario) {
  users.push(novoUsuario);
}
