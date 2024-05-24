// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/usuario'); // Importa las rutas de usuarios

const app = express();
const port = 9000; // Puede usar cualquier puerto que esté disponible

app.use(express.json());

// Conectar las rutas de usuarios con el prefijo /api
app.use('/api', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
})
