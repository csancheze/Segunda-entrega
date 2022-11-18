const ContenedorArchivo = require("../../managers/ContenedorArchivo.js")

//crear una subclases de productos que trabaje con el contendor Archivos
class ProductsDaoArchivos extends ContenedorArchivo{
    constructor(filename){
        //ejecutamos el contructor de clase ContenedorArchivo
        super(filename);
    }
}

module.exports = ProductsDaoArchivos