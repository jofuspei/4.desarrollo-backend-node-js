'use strict';

const readline = require('readline');

const conn = require('./lib/connectMongoose');
const producto = require('./models/Producto');
const Producto = require('./models/Producto');
const { rejects } = require('assert');

conn.once('open', async () => {
  try {
    const answer = await askUser('¿Inicializar la base de datos? ( si / \x1B[4mno\x1B[0m )');
    if (answer.toLowerCase() !== 'si') {
      console.log('Proceso abortado');
      return process.exit(0);
    }
    await initProductos();

    conn.close();
  } catch (error) {
    console.log('Ha ocurrido un error', err);
    process.exit(1);
  }
});

async function initProductos() {
  // Borrado de documentos de la colección
  console.log('Vaciando colección de productos...');
  await Producto.deleteMany();

  // Cargado de documentos inicial
  console.log('Cargando productos...')
  const result = await Producto.insertMany([
    { name: 'Mini Cooper Diesel', selling: true, price: 8650,  tags: ['motor']},
    { name: 'Macbook Pro 15', selling: false, price: 1200,  tags: ['work', 'lifestyle']},
    { name: 'Bicicleta Time RXRS Ultime', selling: true, price: 3800,  tags: ['lifestyle']},
    { name: 'Samsung Galaxy S20 128GB', selling: true, price: 750,  tags: ['mobile']}
  ])
  console.log(result.length, 'productos añadidos');
}

function askUser(q) {
  return new Promise( (resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question(q, (ans) => {
      rl.close();
      resolve(ans);
    })
  })
}