// models/usuario.js
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nombreCompleto: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Usuario', usuarioSchema);