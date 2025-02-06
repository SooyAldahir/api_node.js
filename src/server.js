require('dotenv').config();
const express = require('express');
const cors = require('cors');
const productsRoutes = require('./routes/productsRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const supplierRoutes = require('./routes/suppliersRoutes');
const userRoutes = require('./routes/userRoutes');
const tranasactionRoutes = require('./routes/tranasactionRoutes');
const { connectDB } = require('./config/db');


const app = express();

app.use(cors());
app.use(express.json());


// rutas

app.use('/api', productsRoutes);
app.use('/api', categoryRoutes);
app.use('/api', supplierRoutes);
app.use('/api', userRoutes);
app.use('/api', tranasactionRoutes);


//Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, async ()=>{
    await connectDB();
    console.log(`Servidor corriendo en http://localhost:${PORT}`); 
});