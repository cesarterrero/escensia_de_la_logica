import { getHeroeById } from './Bases/08-import-export';

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     ////  tarea
//     const heroes = getHeroeById(1);
//     console.log(heroes);
//     // resolve(heroes);
//     reject('no se pudo encontrar el heroe');
//   }, 2000);
// });

// promesa
//   .then((heroes) => {
//     console.log('heroe', heroes);
//   })
//   .catch((err) => console.warn(err));

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      ////  tarea
      const heroes = getHeroeById(id);
      // console.log(heroes);

      if (heroes) {
        resolve(heroes);
      } else {
        reject('no se pudo encontrar el heroe');
      }
    }, 2000);
  });
};

getHeroeByIdAsync(3).then(console.log).catch(console.warn);
