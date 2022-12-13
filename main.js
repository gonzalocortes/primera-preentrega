const libros = [{
    id: 1,
    autor: "Bram Stoker",
    titulo: "Dracula",
    genero: "terror,suspenso",
    precio: "2000",
    stock: 17,
},
{
    id: 2,
    autor: "Robert louis",
    titulo: "el extraño doctor",
    precio: "1500",
    stock: 19,
},

{
    id: 3,
    autor: "Susan hill",
    titulo: "la dama de negro",
    precio: "1600",
    stock: 15,
},

{
    id: 4,
    autor: "Henry James",
    titulo: "otra vuelta de tuerca",
    precio: "2500",
    stock: 16,
}
];

let nombre = (prompt("Ingrese su Nombre"));
let Apellido = (prompt("Ingrese su Apellido"));
let nombreAutor = (prompt("Ingrese el autor que Busca"));
let generoLibro = (prompt("Que genero estas Buscado??"));
let montoLibro = parseFloat(prompt("costo del libro??"));
const iva = 0.21;

class producto {
    constructor(id, Nombre, precio, stock) {
        this.id = id;
        this.Nombre = Nombre;
        this.precio = precio;
        this.stock = stock;
        this.iva = 21;
    }
    aplicarIVA() {
        this.precio = this.precio + ((this.precio * this.iva) / 100);
    }
}
let cargarProducto = true;

while (cargarProducto != null) {
    let id_producto = libros.length + 1;
    let producto = new producto(producto, nombre, precio, stock);
    console.log(producto);
}

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