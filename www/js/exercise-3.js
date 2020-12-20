/**
 * #############################
 * ##  E J E R C I C I O   3  ##
 * #############################
 *
 * Utiliza los métodos map, filter o reduce para resolver las siguientes propuestas:
 *
 *  - 1. Obtén la suma total de todas las edades de las personas.
 *  - 2. Obtén la suma total de todas las edades de las personas francesas.
 *  - 3. Obtén un array con el nombre de todas las mascotas.
 *  - 4. Obtén un array con las personas que tengan gato.
 *  - 5. Obtén un array con los coches de los españoles.
 *  - 6. Obtén un array con las personas que tengan un coche de la marca Ford.
 *  - 7. ¡Bonus point! Obtén un array con todas las personas en el que cada persona tenga toda
 *       la info de su coche. Ejemplo a continuación:
 *
 *      [
 *          {
 *               name: 'Berto',
 *               country: 'ES',
 *               age: 44,
 *               car: {
 *                  id: 'LU9286V',
 *                  brand: 'Citroen',
 *                  model: 'Xsara'
 *               },
 *               pet: {
 *                   name: 'Moon',
 *                   type: 'perro'
 *               }
 *           },
 *           (...)
 *      ]
 *
 *  Tip: en algún caso es probable que el método "nombreArray.find()" te sea de ayuda.
 *
 */

'use strict';

const persons = [
  {
    name: 'Berto',
    country: 'ES',
    age: 44,
    car: 'LU9286V',
    pet: {
      name: 'Moon',
      type: 'perro',
    },
  },
  {
    name: 'Jess',
    country: 'UK',
    age: 29,
    car: 'GB2913U',
    pet: {
      name: 'Kit',
      type: 'gato',
    },
  },
  {
    name: 'Tom',
    country: 'UK',
    age: 36,
    car: 'GB8722N',
    pet: {
      name: 'Rex',
      type: 'perro',
    },
  },
  {
    name: 'Alexandre',
    country: 'FR',
    age: 19,
    car: 'FT5386P',
    pet: {
      name: 'Aron',
      type: 'gato',
    },
  },
  {
    name: 'Rebeca',
    country: 'ES',
    age: 32,
    car: 'MD4578T',
    pet: {
      name: 'Carbón',
      type: 'gato',
    },
  },
  {
    name: 'Stefano',
    country: 'IT',
    age: 52,
    car: 'LP6572I',
    pet: {
      name: 'Bimbo',
      type: 'perro',
    },
  },
  {
    name: 'Colette',
    country: 'FR',
    age: 22,
    car: 'FU8929P',
    pet: {
      name: 'Amadeu',
      type: 'gato',
    },
  },
];

const cars = [
  {
    id: 'LU9286V',
    brand: 'Citroen',
    model: 'Xsara',
  },
  {
    id: 'GB2913U',
    brand: 'Fiat',
    model: 'Punto',
  },
  {
    id: 'GB8722N',
    brand: 'Opel',
    model: 'Astra',
  },
  {
    id: 'FT5386P',
    brand: 'Ford',
    model: 'Focus',
  },
  {
    id: 'MD4578T',
    brand: 'Opel',
    model: 'Corsa',
  },
  {
    id: 'LP6572I',
    brand: 'Ford',
    model: 'Fiesta',
  },
  {
    id: 'FU8929P',
    brand: 'Fiat',
    model: 'Uno',
  },
];

//propuesta 1
const sumaEdades = persons.reduce((acumulador, person) => {
  return acumulador + person.age;
}, 0);
console.log('Propuesta # 1 - Suma de Edades:', sumaEdades);

//propuesta 2
const sumaEdadesPersonasFrancesas = persons
  .filter((person) => {
    return person.country === 'FR';
  })
  .reduce((acumulador, person) => {
    return acumulador + person.age;
  }, 0);

console.log('Propuesta # 2 - Suma de Edades Franceses:', sumaEdadesPersonasFrancesas);

// Propuestra 3
const pets = persons.map((person) => {
  return person.pet.name;
});

console.log('Propuesta # 3 - Array nombre de mascotas:', pets);

//Propuesta 4
const petsCat = persons
  .filter((person) => {
    if (person.pet.type === 'gato') {
      return person;
    }
  })
  .map((person) => {
    return person.name;
  });

console.log('Propuesta # 4 - Array nombre de personas con gatos:', petsCat);

const petsCatV2 = persons.filter((person) => {
  if (person.pet.type === 'gato') {
    return person;
  }
});

console.log('Propuesta # 4 - Array personas con gatos:', petsCatV2);

//Propuesta 5
const cochesEspañoles = persons
  .filter((person) => {
    if (person.country === 'ES') {
      return person.car;
    }
  })
  .map((person) => {
    return person.car;
  });

console.log('Propuesta # 5 - Array coches de españoles', cochesEspañoles);

//Propuesta 6
const fords = cars
  .filter((car) => {
    if (car.brand === 'Ford') {
      return car.id;
    }
  })
  .map((ford) => {
    return ford.id;
  });

const personsFord = persons.filter((person) => {
  for (const ford of fords) {
    if (person.car === ford) {
      return person.name;
    }
  }
});

console.log('Propuesta # 6 - Array personas con Ford', personsFord);

//propuesta 7
const newPersons = [...persons];
const personsCars = newPersons.map((person) => {
  for (const car of cars) {
    if (person.car === car.id) {
      return (person.car = { ...car });
    }
  }
});
console.log('Propuesta # 7 - Array personas con informacion de coches', newPersons);
