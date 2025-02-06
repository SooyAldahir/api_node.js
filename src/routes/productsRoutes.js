const express = require("express");
const router = express.Router();
const productController = require('../controllers/productController');

//Crear un produccto
router.post('/create', productController.createProduct);

//Obtener todos los productos
router.get('/getAll', productController.getAllProducts);

//Obtener un producto por su id
router.get('/get/:id', productController.getProductById);

//Editar un producto
router.post('/edit/:id', productController.updateProduct);

//Eliminar un producto
router.delete('/delete/:id', productController.deletePrduct);

module.exports = router;