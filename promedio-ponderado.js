
function calcularMediaAritmetica(lista) {
  // let sumaLista = 0;
  // for (let i = 0; i < lista.length; i++) {
  //   sumaLista = sumaLista + lista[i];
  // }

  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

// Documentacion: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const notas_semestre = [
  {
      course: "Educación Física",
      note: 10,
      credit: 2,
  },
  {
      course: "Programación",
      note: 8,
      credit: 5,
  },
  {
      course: "Finanzas personales",
      note: 7,
      credit: 5,
  },
];


function getPromedioPonderado(notes){

  const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
  });
  
  const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
  );
  
  const credits = notes.map(function (noteObject) {
    return noteObject.credit;
  });
  
  const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
  );
  
  //const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
  return sumOfNotesWithCredit / sumOfCredits;

}

getPromedioPonderado(notas_semestre);