const mongoose = require('mongoose');
const Tarea = require('../models/tarea');
const validator = require('validator');


var controller = {
  list_all_tareas: function(req, res) {
    // Order tareas from newer to older
    Tarea.find({}).sort([['date', -1]]).exec((err, tareas) => {
      if(err) {
        return res.status(500).send({
          status: 'error',
          message: 'An error occured'
        })
      }
      else if(!tareas){
        return res.status(404).send({
          status: 'error',
          message: 'No tareas found'
        })
      }
      return res.status(200).send({
        message: 'success',
        tareas
      });
    })
  }, //end list_all_tareas
  create_tarea: function(req, res) {
    // Data from request
    var params = req.body;
    

    try {
      // Every tarea must have a title
      var valid_title = !validator.isEmpty(params.titulo);
    }catch(err){
      return res.status(500).send({
        status: 'error',
        message: 'Invalid data sent'
      })
    }

    if(valid_title) {
      var newTarea = new Tarea();
      newTarea.titulo = params.titulo;
      newTarea.estado = params.estado;

      // Save it
      newTarea.save((err, newTarea) => {
        // Handle error
        if (err) {
          return res.status(500).send({
            status: 'error',
            message: 'Unable to save tarea ' + err
          });
        } else { // Send success message
          return res.status(200).send({
            status: 'success',
            tarea: newTarea
          });
        }
        
      })
    }

  }, // end create_tarea
  read_tarea: function(req, res) {
    var tareaId = req.params.id;

    if(!tareaID || tareaId === null) {
      return res.status(404).send({
        status: 'error',
        message: 'Tarea not found'
      });
    } 
    // Find tarea by id and return it
    Tarea.findById(tareaId, (err, tarea) => {
      // Handle error
      if(err) {
        return res.status(404).send({
          status: 'error',
          message: 'Tarea not found'
        });
        // Tarea with said Id does not exist in DB
      } else if(!tarea){
        return res.status(404).send({
          status: 'error',
          message: 'Tarea not found'
        });
      }
      // Return tarea
      return res.status(200).send({
        status: 'success',
        tarea
      })
    })
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