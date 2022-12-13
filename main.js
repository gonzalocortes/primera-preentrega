let nombre = (prompt("Ingrese su Nombre"));
let Apellido = (prompt("Ingrese su Apellido"));
let nombreAutor = (prompt("Ingrese el autor que Busca"));
let generoLibro = (prompt("Que genero estas Buscado??"));
let montoLibro = parseFloat(prompt("costo del libro??"));
const iva = 0.21;
const productoslibros = [];
class producto {
  construcotor (id, Nombre, precio, stock) {
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
    let id_producto = productoslibros.length + 1;
    let producto = new producto(id_producto, nombre_producto, precio_producto, stock_producto);
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