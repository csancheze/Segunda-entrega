const ContenedorMysql  = require("../../managers/ContenedorMysql.js");

class ProductosDaoSQL extends ContenedorMysql{
    constructor(options,tableName){
        super(options,tableName)
    }
}

module.exports = ProductosDaoSQL