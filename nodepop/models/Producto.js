'use strict';

const mongoose = require('mongoose');

// Creación del esquema
const productoSchema = mongoose.Schema({
  name: {type: String, index: true},
  selling: {type: Boolean, index: true},
  price: {type: Number, index: true},
  picture: String,
  tags: {type: [String], index: true}
},
{
  autoIndex: process.env.NODE_ENV !== 'production'
})

// Creación del modelo
const Producto = mongoose.model('Producto', productoSchema);

// Exportación
module.exports = Producto;
