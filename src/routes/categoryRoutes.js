const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/categoryController');

//Crear una categoria
router.post('/createCategory', categoryController.createCategory);

//Obtener todos los productos
router.get('/getAllCategories', categoryController.getAllCategories);

//Obtener un producto por su id
router.get('/getCategory/:id', categoryController.getCategoryById);

//Editar un producto
router.post('/editCategory/:id', categoryController.updateCategory);

//Eliminar un producto
router.delete('/deleteCategory/:id', categoryController.deleteCategory);

module.exports = router;