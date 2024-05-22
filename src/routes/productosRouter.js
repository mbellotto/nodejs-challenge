const express = require('express');
const getProductosByFabrica = require('../controllers/productosByFabrica');
const createProducto = require('../controllers/productosCreate');
const { deleteProducto } = require('../controllers/productosDelete');

const productosRouter = express.Router();

productosRouter.get('/byFabrica', getProductosByFabrica);
productosRouter.post('/', createProducto);
productosRouter.delete('/:id', deleteProducto);

module.exports = productosRouter;