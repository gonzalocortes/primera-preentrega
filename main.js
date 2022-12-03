let nombre = (prompt("Ingrese su Nombre"));
let Apellido = (prompt("Ingrese su Apellido"));
let nombreAutor = (prompt("Ingrese el autor que Busca"));
let generoLibro = (prompt("Que genero estas Buscado??"));
let montoLibro = parseFloat(prompt("costo del libro??"));
const iva = 0.21;
let precioA = 900;
let precioB = 750;
let precioC = 630;
let precioD = 854;
let precioE = 480;

if (montoLibro < precioC) {
    alert("saldo insuficiente");
} else if (montoLibro >= precioE && montoLibro <= precioC) {
    alert("precio Normal");
} else if (montoLibro >= precioB && montoLibro <= precioD) {
    alert("precio cerda del limite");
} else {
    alert("limite alcanzado");
}