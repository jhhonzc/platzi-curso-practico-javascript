const lista1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];

// Reto: crear funcion para calcular la moda

function calcularModa(lista){

  const listaCount = {};

  // Mapea la cantidad total de cada elemento en el array
  lista.map(
    function (elemento) {
      if (listaCount[elemento]) {
        listaCount[elemento] += 1;
      } else {
        listaCount[elemento] = 1; // sino existe lo crea
      }
    }
  );
  
  // Convertir Lista de Objetos en array y ordenar por cantidad 
  /* 
  ["4", 1]
  ["3", 2],
  ["1", 3], 
  ["2", 5],
  */
  const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  // Retornamos el último elemento de la lista ordenada
  return listaArray[listaArray.length - 1]; // moda
  
}

calcularModa(lista1)