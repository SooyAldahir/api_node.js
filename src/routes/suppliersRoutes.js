const express = require("express");
const router = express.Router();
const suppliersController = require('../controllers/suppliersController');

//Crear un produccto
router.post('/createSuppliers', suppliersController.createSupplier);

//Obtener todos los productos
router.get('/getAllSuppliers', suppliersController.getAllSupplier);

//Obtener un producto por su id
router.get('/getSuppliers/:id', suppliersController.getSupplierById);

//Editar un producto
router.post('/editSuppliers/:id', suppliersController.updateSupplier);

//Eliminar un producto
router.delete('/deleteSuppliers/:id', suppliersController.deleteSupplier);

module.exports = router;