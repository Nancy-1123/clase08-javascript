// Escribe un programa en JavaScript para crear una clase llamada
// 'Rectángulo' con propiedades para el ancho y la altura. Incluye
// dos métodos para calcular el área y el perímetro del rectángulo.
// Crea una instancia de la clase 'Rectángulo' y calcula su área y
// perímetro

class Rectangulo {
    constructor(ancho, altura) {
        this.ancho = ancho;
        this.altura = altura;
    }

    calcularArea() {
        return this.ancho * this.altura;
    }

    calcularPerimetro() {
        return 2 * (this.ancho + this.altura);
    }
}

// Crear una instancia de la clase Rectangulo
let miRectangulo = new Rectangulo(5, 10);

// Calcular el área y el perímetro del rectángulo
let area = miRectangulo.calcularArea();
let perimetro = miRectangulo.calcularPerimetro();

console.log("Área del rectángulo:", area);
console.log("Perímetro del rectángulo:", perimetro);
