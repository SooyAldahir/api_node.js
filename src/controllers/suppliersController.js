
const { ObjectId } = require('mongodb');
const { client } = require('../config/db');
const {collectionName} = require('../models/suppliers');


//Agregar un proveedor
async function createSupplier(req, res) {
  try {
    const db = client.db();
    const result = await db.collection(collectionName).insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

//Obtener todos los proveedores
async function getAllSupplier(req, res) {
  try {
    const db = client.db();
    const suppliers  = await db.collection(collectionName).find().toArray();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//Obtener un solo proveedor
async function getSupplierById(req, res) {
  try {
  const db = client.db();
  const supplier = await db.collection(collectionName).findOne({ _id: new ObjectId(req.params.id)});
  if(!supplier) return res.status(404).json({message: "Proveedor no encontrado"});
  res.status(200).json(supplier); 
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//Actualizar un proveedor
async function updateSupplier(req, res) {
  try {
    const db = client.db();
    const result = await db.collection(collectionName).updateOne(
      {_id: new ObjectId(req.params.id)},
      {$set: req.body}
    );
    if (result.matchedCount === 0 ) return res.status(404).json({message: "Proveedor no encontrado"});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//Eliminar un produycto
async function deleteSupplier(req, res) {
  try {
    const db = client.db();
    const result = await db.collection(collectionName).deleteOne({_id: new ObjectId(req.params.id)});
    if (result.deletedCount === 0) return res.status(404).json({message: "Falló al eliminr al proveedor"});
    res.status(200).json({message: "Producto eliminado "});
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

module.exports = {
    createSupplier,
    getAllSupplier,
    getSupplierById,
    updateSupplier,
    deleteSupplier
}