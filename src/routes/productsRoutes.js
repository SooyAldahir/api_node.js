const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

//Crear un produccto
router.post('/createProduct', productController.createProduct);

//Obtener todos los productos
router.get('/getAllProducts', productController.getAllProducts);

//Obtener un producto por su id
router.get('/getProduct/:id', productController.getProductById);

//Editar un producto
router.post('/editProduct/:id', productController.updateProduct);

//Eliminar un producto
router.delete('/deleteProduct/:id', productController.deletePrduct);

module.exports = router;