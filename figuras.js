// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML

// Calcular Cuadrado 
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro + "cm");
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area + "cmˆ2");
}

// Calcular Triangulo
function calcularPerimetroTriangulo() {
  const input_lado1 = document.getElementById("InputTrianguloLado1");
  const lado1 = parseInt(input_lado1.value);

  const input_lado2 = document.getElementById("InputTrianguloLado2");
  const lado2 = parseInt(input_lado2.value);

  const input_base = document.getElementById("InputTrianguloBase");
  const base = parseInt(input_base.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro + "cm");
}
function calcularAreaTriangulo() {
  const input_base = document.getElementById("InputTrianguloBase");
  const base = input_base.value;
  
  const input_altura = document.getElementById("InputTrianguloAltura");
  const altura = input_altura.value;

  const area = areaTriangulo(base,altura);
  alert(area + "cmˆ2");
}

// Calcular Circunferencia
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro + "cm");
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area + "cmˆ2");
}