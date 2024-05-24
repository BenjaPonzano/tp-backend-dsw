// routes/usuarios.js
const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Variable con usuarios de prueba
const usuariosDePrueba = [
  { nombreCompleto: 'Juan Pérez', email: 'juan@example.com', contraseña: 'password123', telefono: 123456789 },
  { nombreCompleto: 'María García', email: 'maria@example.com', contraseña: 'password123', telefono: 987654321 },
];

// Ruta para obtener todos los usuarios
router.get('/usuarios', (req, res) => {
  res.json(usuariosDePrueba);
});

module.exports = router;
