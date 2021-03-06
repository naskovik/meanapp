const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tareaSchema = new Schema({
  titulo: String,
  fecha: {
    type: Date,
    default: Date.now
  },
  estado: {
    type: String,
    enum: ['Por hacer', 'En curso', 'Hecha'],
    default: 'Por hacer'
  }
});

module.exports = mongoose.model('Tarea', tareaSchema);
  