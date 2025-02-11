const express = require("express");
const router = express.Router();
const transactionController = require('../controllers/transactionController');


//Crear una transaccion
router.post('/createTransaction', transactionController.createTransaction);

//Obtener todas las transacciones
router.get('/getAllTransactions', transactionController.getAllTransactions);

//Obtener una transaccion por su id
router.get('/getTransaction/:id', transactionController.getTransactionById);

//Editar una transaccion
router.post('/editTransaction/:id', transactionController.updateTransaction);

//Eliminar una transaccion
router.delete('/deleteTransaction/:id', transactionController.deleteTransaction);

module.exports = router;