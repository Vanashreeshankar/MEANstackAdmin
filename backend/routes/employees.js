var express = require('express');
var router = express.Router();
var ObjId = require('mongoose').Types.ObjectId;
var Employee = require('../models/employee')
//Get
router.get('/', (req, res) => {
    Employee.Employee.find((err, docs) => {
        if(!err) { res.send(docs);}
        else{ console.log('Error in Retriving Id :' + JSON.stringify(err, undefined, 2));}

    });
});
//Post
router.post('/', (req,res) => {
    var emp = new Employee({
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    });
    emp.save((err, doc) => {
        if(!err){ res.send(doc);}
        else { console.log('Error in Id save:' + JSON.stringify(err, undefined, 2)); }
    });
});
//Read
router.put('/:id', (req,res) => {
    if (!ObjId.isValid(req.params.id))
      return res.status(400).send('No record with given id: $(req.params.id)');

    var emp ={
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
        role: req.body.role,
    };
    Employee.findByIdAndUpdate(req.params.id, {$set: emp}, {new: true}, (err, doc) => {
        if(!err) { res.send(doc);}
        else{console.log('Error in Id Update :' + JSON.stringify(err, undefined, 2));}
        
    });
});

//Delete
router.delete('/:id', (req, res) => {
    if(!ObjId.isValid(req.params.id))
      return res.status(400).send('No record with given id : $(req.params.id)');
    
      Employee.findByIdAndRemove(req.params.id, (err, doc) => {
          if(!err) { res.send(doc);}
          else{ console.log('Error in Id Delete :' + JSON.stringify(err, undefined,2));}
      });
});
module.exports = router;