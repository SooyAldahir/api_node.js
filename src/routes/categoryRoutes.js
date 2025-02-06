const express = require("express");
const router = express.Router();
const categoryController = require('../controllers/categoryController');

//Crear una categoria
router.post('/createCat', categoryController.createCategory);

//Obtener todos los productos
router.get('/getAllCat', categoryController.getAllCategories);

//Obtener un producto por su id
router.get('/getCat/:id', categoryController.getCategoryById);

//Editar un producto
router.post('/editCat/:id', categoryController.updateCategory);

//Eliminar un producto
router.delete('/deleteCat/:id', categoryController.deleteCategory);

module.exports = router;