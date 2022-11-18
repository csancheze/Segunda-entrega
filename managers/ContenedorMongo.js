const { Carrito, Producto } = require('../models');

class Contenedor {
    constructor(model) {
        if (model == "producto") {
            this.model = Producto;
            
        } else {
            this.model = Carrito;
        }
        this.modelString= model
    }

    async save(element) {
        try {
            
            let result;
            await this.model.create(element);
            
            if ( this.modelString== "producto" ){
                result = await this.model.find()
            } else {
                result = await this.model.find().populate("productos")
            }
            console.log(result);

            return result

        } catch (error) {
            
            console.log('No se pudo guardar el elemento.');
            
        }
    }

    async getById (id) {
        try {
            let result;

            if (  this.modelString== "producto"){
                result = await this.model.findById(id)
            } else {
                result = await this.model.findById(id).populate("productos")
            }
    
            console.log(result)
            return result

        } catch (error) {
            console.log('No se pudo encontrar el elemento.');
            
        }
    }

    async getAll () {
        try {
            let result;
            if (  this.modelString== "producto"){
                result = await this.model.find()
            } else {
                result = await this.model.find().populate("productos")
            }
            console.log(result);

            return result

        } catch (error) {
            console.log('No se pudo guardar el elemento.' , error);
            
        }
    }

    
    async updateById (id, body) {
        try {

            let result = await this.model.findByIdAndUpdate(id, body)
            console.log(result)
            return result

        } catch (error) {
            console.log('No se pudo encontrar el elemento.');
            
        }
    }

    async deleteById (id) {
        try {

            let result = await this.model.deleteOne({_id: id})
            console.log(result)
            return result

        } catch (error) {
            console.log('No se pudo encontrar el elemento.');
        }
  
    }


    async deleteAll () {
        try {

            let result = await this.model.deleteMany()
            console.log(result)
            return result

        } catch (error) {
            console.log('No se pudo encontrar el elemento.');
        }
    }
}

module.exports = Contenedor
