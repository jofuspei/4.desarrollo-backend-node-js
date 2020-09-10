var express = require('express');
var router = express.Router();

const Producto = require('../../models/Producto');

router.get('/', async function(req, res, next) {
  // Producto.find({}, (err, docs) => {
  //   console.log('Hola');
  //   res.json(docs);
  // });
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
