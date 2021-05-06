//// tarea

const useState = (valor) => {
  return [
    valor,
    () => {
      console.log('holamundo');
    },
  ];
};

// eslint-disable-next-line react-hooks/rules-of-hooks
const [nombre, setNombre] = useState('goku');
console.log(nombre);
setNombre();
