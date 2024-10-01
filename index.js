//RESUELVE LOS EJERCICIOS AQUI

//1.
const numbers = [4, 5, 6, 7, 8, 9, 10];

function elevados() {
    return numbers.map(num => Math.pow(num, num));
}

console.log(elevados());


//-------------------2---------------------

const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];

const contenido = {
    Pizza: 'Como soy de Italia, amo comer Pizza',
    Ramen: 'Como soy de Japón, amo comer Ramen',
    Paella: 'Como soy de Valencia, amo comer Paella',
    Entrecot: 'Aunque no como carne, el Entrecot es sabroso'
};

const result2 = foodList.map(food => contenido[food]);

console.log(result2);

//-----------------3-------------------------
const staff = [
    {
      name: 'Pepe',
      role: 'The Boss',
      hobbies: ['leer', 'ver pelis']
    },
    {
      name: 'Ana',
      role: 'becaria',
      hobbies: ['nadar', 'bailar']
    },
    {
      name: 'Luis',
      role: 'programador',
      hobbies: ['dormir', 'comprar']
    },
    {
      name: 'Carlos',
      role: 'secretario',
      hobbies: ['futbol', 'queso']
    }
  ];
  
  const result3 = staff.map(({ name, role, hobbies }) => 
    `${name} es ${role} y le gusta ${hobbies.join(' y ')}`
  );
  
  console.log(result3);
  
  //-----------------4------------------
  const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const result4 = numbers2.filter(num => num % 2 !== 0);
  console.log(result4);
  //--------------5--------------------
  const foodList2 = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];
const result5 = foodList2
    .filter(({ isVeggie }) => isVeggie) // Filtrar solo los platos veganos
    .map((food) => {
        if (food.name == 'Tofu burguer') {
            return `Que rica ${food.name} me voy a comer!`; // Mensaje para favoritos
        } else {
            return `Que rico ${food.name} me voy a comer!`; // Mensaje para no favoritos
        }
    });

console.log(result5);

// ---------------6--------------

const inventory = [
    {
      name: 'Mobile phone',
      price: 199
    },
    {
      name: 'TV Samsung',
      price: 459
    },
    {
      name: 'Viaje a Cancún',
      price: 600
    },
    {
      name: 'Mascarilla',
      price: 1
    }
  ];
  
  /*
    [
      'TV Samsung',
      'Viaje a Cancún'
    ]
  */
 
    const result6 = inventory
    .filter(({ price }) => price > 300)
    .map(({ name }) => name);
    console.log(result6);

    // -------------6.1---------------
    const numeros3 = [39, 2, 4, 25, 62];
    const result7 = numeros3.reduce((acumulador, numeros) => acumulador * numeros, 1);
    console.log(result7);
    //---------------7-----------------
    const sentenceElements = [
        'Me',
        'llamo',
        'Giancarlo',
        'y',
        'quiero',
        'sentir',
        'la',
        'fuerza',
        'con',
        'javascript'
      ];
      
const result8 = sentenceElements.reduce((accumulator, current) => {
    return `${accumulator} ${current}`.trim(); // Concatenar y eliminar espacios extra
  }, '');
  
  console.log(result8); 
  //-------------------8-------------------
  const books = [
    {
      name: ' JS for dummies',
      author: 'Emily A. Vander Veer',
      price: 20,
      category: 'code'
    },
    {
      name: 'Don Quijote de la Mancha',
      author: 'Cervantes',
      price: 14,
      category: 'novel'
    },
    {
      name: 'Juego de tronos',
      author: 'George R. Martin',
      price: 32,
      category: 'Fantasy'
    },
    {
      name: 'javascript the good parts',
      author: 'Douglas Crockford',
      price: 40,
      category: 'code'
    }
  ];
  
  const result9 = books
  .filter(book => book.category === 'code')
  .reduce((total, book) => total + book.price, 0);
  console.log(result9);
