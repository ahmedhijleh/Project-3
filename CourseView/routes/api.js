
var db = require("./models");
var Sequelize = require('sequelize');
const express = require("express");
const router = require("express").Router();
var   sequelizeRouter = require('sequelize-router');

module.exports = function(app) {

        //Create                                                
  app.get('/api'/Courses,'?' function(req, res) {
      db.getmod.findAll({}).then(function(Courses) {                 // for the courses part 
      res.json(Courses);
    });
      app.get("/api/Users", function(req, res) {
      db.Users.findAll({}).then(function(Users) {                   // for the users part                  
      res.json(Users);
    });
      app.get("/api/Topics", function(req, res) {
      db.Topics.findAll({}).then(function(Topics) {                   //for the topics part 
      res.json(Topics);                                                                                     // i went all over the the sequelize examples and cant clearly tell how it works ,because of the todo example
    });

  });
              //Update
  app.post("/api/users", function(req, res) {  
      ({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(Users) {  
      res.json(Courses);
    });
  });
  app.post("/api/Courses", function(req, res) {  
      ({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(Courses) {  
      res.json(Courses);
    });
  });
  app.post("/api/Topics", function(req, res) {  
      ({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(Topics) {  
      res.json(dbTodo);
    });
  });



          // Delete 
  app.delete("/api/Users/:id", function(req, res) {    
    db.Todo.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(Users) {
      res.json(Users);
    });
  });
  app.delete("/api/Courses/:id", function(req, res) {    
    db.Todo.destroy({
      where: {
        Courses_ID: req.params.id
      }
    }).then(function(Courses) {
      res.json(Users);
    });
  });
  
  app.delete("/api/Topics/:id", function(req, res) {    
    db.Todo.destroy({
      where: {
        Id: req.params.id
      }
    }).then(function(Topics) {
      res.json(Topics);
    });
  });
  app.put("/api/todos", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update({
      text: req.body.text,
      complete: req.body.complete
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });

};





