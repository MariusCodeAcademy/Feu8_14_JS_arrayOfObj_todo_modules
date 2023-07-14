'use strict';
console.log('app.js file was loaded');

const mainArr = [
  {
    name: 'Mickey Mouse',
    age: 92,
    gender: 'Male',
    town: 'Disneyville',
  },
  {
    name: 'SpongeBob SquarePants',
    age: 33,
    gender: 'Male',
    town: 'Bikini Bottom',
  },
  {
    name: 'Dora the Explorer',
    age: 14,
    gender: 'Female',
    town: 'Playa Verde',
  },
  {
    name: 'Bugs Bunny',
    age: 83,
    gender: 'Male',
    town: 'Looneyville',
  },
  {
    name: 'Lisa Simpson',
    age: 9,
    gender: 'Female',
    town: 'Springfield',
  },
];

// console.log('mainArr ===', mainArr);
console.table(mainArr);

// atrinkti i nauja masyva tik vyrus
// const maleCharacters = mainArr.filter((charObj) => {
//   console.log('charObj ===', charObj);
//   // jei vyras grazinam true
//   if (charObj.gender === 'Male') {
//     return true;
//   }
// });
const maleCharacters = mainArr.filter((charObj) => charObj.gender === 'Male');
console.table(maleCharacters);

// gauti masyva su visu charakteriu vardais
// map
const namesArr = mainArr.map((charObj) => {
  const currentName = charObj.name;
  return currentName;
});
console.log('namesArr ===', namesArr);

// surasti masyvo objekta kurio miestas yra 'Playa Verde'
const ieskomasMiestas = 'Playa Verde';
// find
const foundObj = mainArr.find((charObj) => {
  if (charObj.town === ieskomasMiestas) {
    return true;
  }
});
console.log('foundObj ===', foundObj);
