// SIMULADOR ALTA DE PRODUCTOS
class Producto{
    //METODO CONSTRUCTOR: CON EL CREAMOS EL OBJETO
    constructor(nuevoCodigo, nuevoNombre,nuevoPrecio,nuevoStock){
        this.codigo = nuevoCodigo;
        this.nombre = nuevoNombre;
        this.precio = parseInt(nuevoPrecio);
        this.stock = parseInt(nuevoStock);
    }
    //FUNCION QUE IMPRIME LA INFORMACION DEL PRODUCTO
    informacionProductos(){
        return `CODIGO ${this.codigo} - NOMBRE ${this.nombre} - PRECIO ${this.precio} - STOCK ${this.stock}` + "\n";
    }
    actualizarStock(x){
        this.stock= this.stock - x;
    }
}

let cod = 1;
function crearProducto(){
    let codigo = cod++;
    let nombre = document.getElementById('nombre').value
    let precio = document.getElementById('precio').value
    let stock = document.getElementById('stock').value 
    return new Producto(codigo, nombre, precio, stock);
}

const imprimirProductos = () =>{
        if (listadoProductos.length>0){
        let ultimo_producto = listadoProductos[0]
        let mostrar = document.getElementById('divi')
        let minicont = document.createElement("div")
        minicont.innerHTML =
            `
                <p>${ultimo_producto.codigo} ${ultimo_producto.nombre} ${ultimo_producto.precio} ${ultimo_producto.stock}</p>
            `
        mostrar.appendChild(minicont)
    }}

const limpiarFormulario = () =>{
    document.getElementById('nombre').value = null
    document.getElementById('precio').value = null
    document.getElementById('stock').value = null
    document.getElementById('form').style.display = "none"
    imprimirProductos()
}

let listadoProductos   = [];

//FORMULARIO
let formulario = document.getElementById('form')
let boton = document.getElementById('boton')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()
    listadoProductos.unshift(crearProducto());
    limpiarFormulario()
})
boton.addEventListener('click',()=>{
    document.getElementById('form').style.display = "block"
})







