const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: { type: String, required: [true,'el nombre es requerido'] },
  email: { type: String, required: [true,'el email es requerido'], unique: true },
  telefono: { type: String }
});

module.exports = mongoose.model('clientes', clienteSchema);

