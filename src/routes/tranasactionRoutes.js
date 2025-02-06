const express = require("express");
const router = express.Router();
const transactionController = require('../controllers/transactionController');


//Crear una transaccion
router.post('/createTran', transactionController.createTransaction);

//Obtener todas las transacciones
router.get('/getAllTran', transactionController.getAllTransactions);

//Obtener una transaccion por su id
router.get('/getTran/:id', transactionController.getTransactionById);

//Editar una transaccion
router.post('/editTran/:id', transactionController.updateTransaction);

//Eliminar una transaccion
router.delete('/deleteTran/:id', transactionController.deleteTransaction);

module.exports = router;