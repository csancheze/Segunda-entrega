const ContenedorMysql  = require("../../managers/ContenedorMysql.js");

class CarritosDaoSQL extends ContenedorMysql{
    constructor(options,tableName){
        super(options,tableName)
    }
}

module.exports =CarritosDaoSQL