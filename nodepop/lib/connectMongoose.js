'use strict';

const mongoose = require('mongoose');

mongoose.connection.on('open', () => {
  console.log('Conectado a MondoDB en', mongoose.connection.name);
});

mongoose.connection.on('error', err => {
  console.log('Error de conexión', err);
  process.exit(1);
});

mongoose.connect('mongodb://localhost/nodepop', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;