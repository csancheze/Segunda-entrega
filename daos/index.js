const  options = require("../config/databaseConfig.js");
require('dotenv').config

let ContenedorDaoProductos;
let ContenedorDaoCarritos;

//identificador
let databaseType = process.env.DATABASE || "mongodb";

switch(databaseType){
    case "archivos":
        const ProductsDaoArchivos = require("./products/productsFiles.js");
        const CartsDaoArchivos =  require("./carts/cartsFiles.js");
        ContenedorDaoProductos = new ProductsDaoArchivos(options.fileSystem.pathProducts);
        ContenedorDaoCarritos = new CartsDaoArchivos(options.fileSystem.pathCarts);
        break;
    case "sql":
        const ProductosDaoSQL = require("./products/productsSql.js");
        const CarritosDaoSQL =  require("./carts/cartsSql.js");
        ContenedorDaoProductos = new ProductosDaoSQL(options.sqliteDB, "productos");
        ContenedorDaoCarritos = new CarritosDaoSQL(options.sqliteDB,"carritos");
        break;
    case "mongodb":
        const ContendorMongo = require("../managers/ContenedorMongo.js")
        ContenedorDaoProductos = new ContendorMongo("producto")
        ContenedorDaoCarritos = new ContendorMongo("carrito")
        break;
    case "firebase":
        const admin = require("firebase-admin");
        
}

module.exports = {ContenedorDaoProductos,ContenedorDaoCarritos}