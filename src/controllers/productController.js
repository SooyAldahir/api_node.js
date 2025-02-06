
const { ObjectId } = require('mongodb');
const { client } = require('../config/db');
const {collectionName} = require('../models/product');


//Agregar un producto
async function createProduct(req, res) {
  try {
    const db = client.db();
    const result = await db.collection(collectionName).insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

//Obtener todos los productos 
async function getAllProducts(req, res) {
  try {
    const db = client.db();
    const products  = await db.collection(collectionName).find().toArray();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//Obtener un solo producto
async function getProductById(req, res) {
  try {
  const db = client.db();
  const product = await db.collection(collectionName).findOne({ _id: new ObjectId(req.params.id)});
  if(!product) return res.status(404).json({message: "Producto no encontrado"});
  res.status(200).json(product); 
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//Actualizar un producto
async function updateProduct(req, res) {
  try {
    const db = client.db();
    const result = await db.collection(collectionName).updateOne(
      {_id: new ObjectId(req.params.id)},
      {$set: req.body}
    );
    if (result.matchedCount === 0 ) return res.status(404).json({message: "Producto no encontrado"});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//Eliminar un produycto
async function deletePrduct(req, res) {
  try {
    const db = client.db();
    const result = await db.collection(collectionName).deleteOne({_id: new ObjectId(req.params.id)});
    if (result.deletedCount === 0) return res.status(404).json({message: "Falló al eliminr el producto"});
    res.status(200).json({message: "Producto eliminado "});
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deletePrduct
}