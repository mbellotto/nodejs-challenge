const express = require('express');
const getProductosByFabrica = require('../controllers/productos/ByFabricaController');
const createProducto = require('../controllers/productos/CreateController');
const { deleteProducto } = require('../controllers/productos/DeleteController');

const checkToken = require('../middlewares/checkToken');


const productosRouter = express.Router();

productosRouter.get('/byFabrica', getProductosByFabrica);
productosRouter.post('/', checkToken, createProducto);
productosRouter.delete('/:id', deleteProducto);

module.exports = productosRouter;