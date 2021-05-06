const saludar = function (nombre) {
  return ` hola, mi nombre es ${nombre}`;
};

const saludar2 = (nombre) => `hola,${nombre}`;

console.log(saludar('Cesar'));
console.log(saludar2('vegeta'));

///// tarea
/// 1. transformar  a una funcion de flecha
////  2 retornar un objeto implicito
const getUsuarioActivo = (nombre) => ({
  uid: 'ABC567',
  username: nombre,
});

const usuarioAcvtivo = getUsuarioActivo('cesar ');
console.log(usuarioAcvtivo);
