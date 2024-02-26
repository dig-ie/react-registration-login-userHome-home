export const usuarios = [
    {id: 0, name: "Diêgo", email:"debarrosdiego415@gmail.com", password:"123"},
]


export function adicionarNovoUsuario(novoUsuario) {
    usuarios.push(novoUsuario);
    }