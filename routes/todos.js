var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Todo = require('../models/Todo.js');

// api ---------------------------------------------------------------------
// get all todos
router.get('/', function(req, res) {
    Todo.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

// create todo and send back all todos after creation
router.post('/', function(req, res) {

    Todo.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });

});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
module.exports = router;
