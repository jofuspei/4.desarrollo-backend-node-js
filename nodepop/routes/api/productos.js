var express = require('express');
var router = express.Router();

const Producto = require('../../models/Producto');

router.get('/', async function(req, res, next) {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
