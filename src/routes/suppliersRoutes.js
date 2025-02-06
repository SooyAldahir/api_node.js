const express = require("express");
const router = express.Router();
const suppliersController = require('../controllers/suppliersController');

//Crear un produccto
router.post('/createSupp', suppliersController.createSupplier);

//Obtener todos los productos
router.get('/getAllSupp', suppliersController.getAllSupplier);

//Obtener un producto por su id
router.get('/getSupp/:id', suppliersController.getSupplierById);

//Editar un producto
router.post('/editSupp/:id', suppliersController.updateSupplier);

//Eliminar un producto
router.delete('/deleteSupp/:id', suppliersController.deleteSupplier);

module.exports = router;