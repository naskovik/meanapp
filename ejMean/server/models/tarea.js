const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
  titulo: {
    type: String,
    required: [true, 'El campo titulo es obligatorio'],
    
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  estado: {
    
    type: String,
    enum: ['Por hacer', 'En progreso', 'Hecha'],
    default: ['Por hacer']
  }
});

module.exports = mongoose.model('Tarea', tareaSchema);
  