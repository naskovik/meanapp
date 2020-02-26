const mongoose = require('mongoose');
const Tarea = require('../models/tarea');


var controller = {
  list_all_tareas: function(req, res) {
    Tarea.find({}, function(err, tarea) {
      if (err) res.send(err);
      res.json(tarea);
    });
  }, //end list_all_tareas
  create_tarea: function(req, res) {
    var new_tarea = new Tarea(req.body);
    new_tarea.save(function(err, tarea) {
      if (err) res.send(err);
      res.json(tarea);
    });
  }, // end create_tarea
  read_tarea: function(req, res) {
    Tarea.findById(req.params.tareaId, function(err, tarea) {
      if (err) res.send(err);
      res.json(tarea);
    });
  }, // end read_tarea
  update_tarea: function(req, res) {
    Tarea.findOneAndUpdate({_id: req.params.tareaId}, req.body, {new: true}, function(err, tarea) {
      if (err) res.send(err);
      res.json(tarea);
    });
  }, // end update_tarea
  delete_tarea: function(req, res) {
    Tarea.deleteOne({_id: req.params.tareaId}, function(err, tarea) {
      if (err) res.send(err);
      res.json({ message: 'Tarea eliminada correctamente' });
    });
  } // end delete_tarea
} // end controller

module.exports = controller;