var express = require('express');
var router = express.Router();

const Producto = require('../models/Producto');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try { 
    const title = 'Nodepop';

    const limit = parseInt(req.query.limit || 5);
    const skip = parseInt(req.query.skip);
    
    const productos = await Producto.list({}, limit, skip);

    console.log(productos);

    res.render('index', { title: title, productos });

  } catch (error) {
    next(error);
  }
});

module.exports = router;
