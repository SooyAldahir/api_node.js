const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

//Crear un produccto
router.post('/createUsr', userController.createUser);

//Obtener todos los productos
router.get('/getAllUsr', userController.getAllUsers);

//Obtener un producto por su id
router.get('/getUsr/:id', userController.getUserById);

//Editar un producto
router.post('/editUsr/:id', userController.updateUser);

//Eliminar un producto
router.delete('/deleteUsr/:id', userController.deleteUser);

module.exports = router;