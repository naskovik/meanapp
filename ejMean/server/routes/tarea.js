const express = require('express'),
 tareaCtrl = require('../controllers/tarea'),
 router = express.Router();

 // General route
 router.get('/tareas', tareaCtrl.list_all_tareas);
 router.post('/tareas', tareaCtrl.create_tarea);

 // tarea:id route

 router.get('/tareas/:tareaId', tareaCtrl.read_tarea);
 router.put('/tareas/:tareaId', tareaCtrl.update_tarea);
 router.delete('/tareas/:tareaId', tareaCtrl.delete_tarea);

 module.exports = router;