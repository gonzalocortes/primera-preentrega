

let nombreUsuario = (prompt("Ingrese su Nombre"));
let apellidoUsuario = (prompt("Ingrese su Apellido"));
let nombreAutor = (prompt("Ingrese el autor que Busca"));
let generoLibro = (prompt("Que genero estas Buscado??"));
let montoLibro = parseFloat(prompt("costo del libro??"));

const biblioteca = [
  {
    id: 1,
    nombre: "Bram Stoker",
    titulo: "Dracula",
    genero: "terror,suspenso",
    precio: 2000,
    stock: 17,
  },
  {
    id: 2,
    nombre: "Robert louis",
    titulo: "el extraño doctor",
    precio: 1500,
    stock: 19,
  },
  {
    id: 3,
    nombre: "Susan hill",
    titulo: "la dama de negro",
    precio: 1600,
    stock: 15,
  },
  {
    id: 4,
    nombre: "Henry James",
    titulo: "otra vuelta de tuerca",
    precio: 2500,
    stock: 16,
  },
];

const biblioteca_carrito = [];
//DEFINO LA CLASE
class Libro {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.iva = 21;
  }
  aplicarIVA() {
    this.precio = this.precio + (this.precio * this.iva) / 100;
  }
}


//FUNCIONES
function buscarProducto(id) {
  return biblioteca.find((item) => item.id === id) || null; //devuelve objeto)
}
function agregarAlCarrito(producto) {
  biblioteca_carrito.push(producto);//pusheo el producto al carrito
}
function eliminarLibro(id) {
  let pos = biblioteca_carrito.findIndex((item) => item.id === id);
  if (pos > -1) {
    biblioteca_carrito.splice(pos, 1);
  }
}
//RECORRO EL CATALOGO
function recorrerBiblioteca() {
  let contenido_productos = "";
  for (let producto of biblioteca) {
    contenido_productos +=
      producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
  }
  return contenido_productos;
}
//RECORRO EL CARRITO
function recorrerBibliotecaCarrito() {
  let contenido_productos = "";
  for (let producto of biblioteca_carrito) {
    contenido_productos +=
      producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
  }
  return contenido_productos;
}


let cargarProducto = true;

//producto de catalogo
cargarProducto = true;
while (cargarProducto) {
  let contenido_productos = recorrerBiblioteca();

  //Pido el ID para poder comparar
  let id_producto = parseInt(
    prompt(
      "Seleccione el libro para agregar al carrito:\n" + contenido_productos
    )
  );
  //BUSCO EL PRODUCTO (mirar la funcion)
  let producto = buscarProducto(id_producto);
  //VERIFICACION
  if (producto != null) {
    agregarAlCarrito(producto);
  } else {
    alert("no existe el libro con el ID: " + id_producto + "!");
  }
  //CONFIRMACION
  cargarProducto = confirm("Desea agregar otro libro?");
}


//ELIMINACION
//ELIMINACION
cargarProducto = true;

while (cargarProducto) {
  let contenido_productos = recorrerBibliotecaCarrito();
  //Pido el ID para poder comparar
  let id_producto = parseInt(
    prompt(
      "Seleccione el libro para eliminar:\n" + contenido_productos
    )
  );

  if (id_producto > 0) {
    eliminarLibro(id_producto);
  } else {
    alert("no existe el libro con el ID: " + id_producto + "!");
  }

  //CONFIRMACION
  cargarProducto = confirm("Desea eliminar otro libro?");
}

//HAGO EL TOTAL
let sumaTotal = 0;
let contenido_productos = "";

for (let libro of biblioteca_carrito) {
  //Creo nuevo libro a partir de la class creada arriba
  let producto = new Libro(libro.id, libro.nombre, libro.precio, libro.stock);
  producto.aplicarIVA();//Aplico el IVA
  contenido_productos +=
  producto.id + "- " + producto.nombre + " $" + producto.precio + "\n";
  sumaTotal += producto.precio; //Sumo al contador "Suma Total" el precio del producto
}

//muestro el total a pagar
alert(
  "Productos seleccionados: \n\n" +
    contenido_productos +
    "\nTotal a Pagar: $" +
    sumaTotal
);

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