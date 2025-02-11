const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

//Crear un produccto
router.post('/createUser', userController.createUser);

//Obtener todos los productos
router.get('/getAllUsers', userController.getAllUsers);

//Obtener un producto por su id
router.get('/getUser/:id', userController.getUserById);

//Editar un producto
router.post('/editUser/:id', userController.updateUser);

//Eliminar un producto
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;