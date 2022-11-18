const mongoose = require('mongoose');

const { Schema } = mongoose;

const productoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  descripcion: String,
  "código": {
    type: String,
    required: true,
    unique: true
  },
  foto: String,
  precio: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }


});

const Producto = mongoose.model('Productos', productoSchema);

module.exports = Producto;

