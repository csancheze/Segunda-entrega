const {ContenedorDaoProductos, ContenedorDaoCarritos} = require("../daos/index.js");

const salvarProductos = async () => {
    
    const product1 = await ContenedorDaoProductos.save(object1)
    const product2 = await ContenedorDaoProductos.save(object2)
    const product3 = await ContenedorDaoProductos.save(object3)
}
    
const buscarPorId = async (id) => {
    
    let resultado = await ContenedorDaoProductos.getById(id)
        return resultado
    
}

const agregarProducto = async (obj) => {
    let resultado = await ContenedorDaoProductos.save(obj)
    return resultado
}

const actualizarPorId = async (id, body) => {
    let resultado = await ContenedorDaoProductos.updateById(id,body)
    return resultado
}
    
const buscarTodos = async () => {
    let arreglo = await ContenedorDaoProductos.getAll()
    return arreglo
}
    
const borrarTodos = async () => {
    await ContenedorDaoProductos.deleteAll()
}
    
const borrarPorId = async (id) => {
    await ContenedorDaoProductos.deleteById(id)
    return "Borrado"
}

const agregarCarrito = async (obj) => {
    let resultado = await ContenedorDaoCarritos.save(obj)
    resultado = resultado.pop()
    return resultado
}

const buscarCarritoId = async (id) => {
    let resultado = await ContenedorDaoCarritos.getById(id)
        return resultado
}

const borrarCarritoId = async (id) => {
    await ContenedorDaoCarritos.deleteById(id)
    return "Borrado"
}

const actualizarCarritoId = async (id, body) => {
    let resultado = await ContenedorDaoCarritos.updateById(id,body)
    return resultado
}
    
let object1 = {
    "title": "Escuadra",
    "price": 123.45,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
}
    let object2 =         {
    "title": "Calculadora",
    "price": 234.56,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
}
let object3 =         {
    "title": "Globo Terráqueo",
    "price": 345.67,
    "thumbnail": "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
}

module.exports = { buscarTodos, buscarPorId, agregarProducto, actualizarPorId, borrarPorId, agregarCarrito, buscarCarritoId, borrarCarritoId, actualizarCarritoId  }