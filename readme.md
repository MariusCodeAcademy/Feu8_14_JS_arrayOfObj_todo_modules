## modules uzd

1. Sukurkite modulį, kuris skaičiuoja stačiakampio plotą pagal jo plotį ir aukštį. Modulyje turėtų būti funkcija, kuri priima du argumentus (plotį ir aukštį) ir grąžina stačiakampio plotą. Numatytasis exportas

2. Sukurti moduliuose temperature.js

   1. aprasyti ir exportuoti funkcija 'convertTemp()'
   2. funkcija priima argumentu objekta {temp: 18, unit: 'C'} ir grazina temperatura farenheitais
   3. jei gauna argumentu {temp: 100, unit: 'F'} grazina celsijum
   4. pries grazinima iskonsolinti kokia temp ir vienetus gavo ir i ka paverte.
   5. panaudoti app.js faile isitikinti kad veikia.
      contertTemp({temp: 18, unit: 'C'}) -> grazins farenheitus
      contertTemp({temp: 18, unit: 'F'}) -> grazins Celsiju

3. Parasyti funkcija kuri atrenka tik realius zmones is users masyvo(masyva zemiau) ir grazina.

4. atrinkti is users masyvo:

   4.1. objektus kuriu amzius daugiau nei 40

   4.2. objektus kuriu ugis maziau nei 165

   4.3. objektus kuriu vardas yra is 2 zodziu

5. Grazinti i nauja masyva is users masyvo:

   5.1. visus vardus

   5.2. visus emailus

   5.3. visus ugius

6. parasyti funkcija kuri ir users masyvo grazintu:

   6.1. visu ugiu suma

   6.2. visu ugiu vidurki

   6.3. visu ugiu vidurki

   6.4. visu amziu vidurki

   6.5. visu emailu ilgiu vidurki

7. parasyti funkcija render(arr). funkcija gauna masyva kaip argumenta(pvz users), ir sugeneruoja li elementu sarasa HTMLe. index.html susikurti ul elementa su id ir i ji sugeneruoti li elementus su visa informacija is objekto

## papildomi uzd

### sukurti atskirame js faile funkcijas, jas importuoti kad atlikti:

1. Naudoti masyvo metodą, kad sukurtumėte naują objektų masyvą, kuriame būtų kiekvieno vartotojo vardas ir el. Pašto adresas.
2. Naudoti masyvo metodą, .filter() metodą, kad sukurtumėte naują objektų masyvą, kuriame būtų tik vartotojai, vyresni nei 30 metų.
3. Naudoti masyvo metodą, kad rastumėte vartotoją su el. Pašto adresu „harry@hogwarts.com“.
4. Naudoti masyvo metodą, kad į konsolę būtų išvestas kiekvieno vartotojo vardas ir amžius.

```js
const users = [
  {
    name: 'Bob the Builder',
    age: 45,
    email: 'bob@builder.com',
    height: 175,
    isRealHuman: true,
    id: 'id_001',
  },
  {
    name: 'SpongeBob SquarePants',
    age: 20,
    email: 'spongebob@bikinibottom.com',
    height: 160,
    isRealHuman: false,
    id: 'id_002',
  },
  {
    name: 'Harry Potter',
    age: 18,
    email: 'harry@hogwarts.com',
    height: 180,
    isRealHuman: true,
    id: 'id_003',
  },
  {
    name: 'Winnie the Pooh',
    age: 30,
    email: 'winnie@hundredacrewood.com',
    height: 140,
    isRealHuman: false,
    id: 'id_004',
  },
  {
    name: 'Captain Hook',
    age: 50,
    email: 'captainhook@neverland.com',
    height: 170,
    isRealHuman: true,
    id: 'id_005',
  },
];
```
