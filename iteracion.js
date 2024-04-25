// Escribe un programa en JavaScript para mostrar el estado de
// lectura (es decir, mostrar el nombre del libro, el nombre del autor
// y el estado de lectura) de los siguientes libros

const biblioteca = [
    {
        autor:'Bill Gates',
        titulo:'the Road Ahead',
        estadoLectura: true
    },
    {
        autor:'Steve jobs',
        titulo:'walter Isaacson',
        estadoLectura: true
    },
    {
        autor:'Suzanne Collins',
        titulo:'The Hunger Games',
        estadoLectura: false
    }
];


const recorreArray = (arr) => {
    for(let i=0; i<=arr.length-1; i++){
    console.log(arr[i]);
    }
  }

  recorreArray(biblioteca);

