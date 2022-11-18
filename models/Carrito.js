const mongoose = require('mongoose');

const { Schema } = mongoose;

const CarritoSchema = new Schema(
    {
    productos:[
    {
        type: Schema.Types.ObjectId,
        ref: 'Productos',
        }]
    ,
    },
    {timestamps: true});

const Carrito = mongoose.model('Carritos', CarritoSchema);

module.exports = Carrito;

