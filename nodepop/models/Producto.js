'use strict';

const mongoose = require('mongoose');

// Creación del esquema
const productoSchema = mongoose.Schema({
  name: String,
  selling: Boolean,
  price: Number,
  picture: String,
  tags: [String]
})

// Creación del modelo
const Producto = mongoose.model('Producto', productoSchema);

// Exportación
module.exports = Producto;
