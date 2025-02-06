
const { ObjectId } = require('mongodb');
const { client } = require('../config/db');
const {collectionName} = require('../models/category');


//Agregar una categoria
async function createCategory(req, res) {
  try {
    const db = client.db();
    const result = await db.collection(collectionName).insertOne(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
}

//Obtener todas las categorias 
async function getAllCategories(req, res) {
  try {
    const db = client.db();
    const categories  = await db.collection(collectionName).find().toArray();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//Obtener una sola categoria
async function getCategoryById(req, res) {
  try {
  const db = client.db();
  const category = await db.collection(collectionName).findOne({ _id: new ObjectId(req.params.id)});
  if(!category) return res.status(404).json({message: "Categoria no encontrada"});
  res.status(200).json(category); 
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//Actualizar una categoria
async function updateCategory(req, res) {
  try {
    const db = client.db();
    const result = await db.collection(collectionName).updateOne(
      {_id: new ObjectId(req.params.id)},
      {$set: req.body}
    );
    if (result.matchedCount === 0 ) return res.status(404).json({message: "Categoria no encontrada"});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

//Eliminar una categoria
async function deleteCategory(req, res) {
  try {
    const db = client.db();
    const result = await db.collection(collectionName).deleteOne({_id: new ObjectId(req.params.id)});
    if (result.deletedCount === 0) return res.status(404).json({message: "Falló al eliminr la categoria"});
    res.status(200).json({message: "Producto eliminado "});
  } catch (error) {
    res.status(500).json({error : error.message});
  }
}

module.exports = {
    createCategory,
    getAllCategories,
    getCategoryById,
    updateCategory	,
    deleteCategory
}