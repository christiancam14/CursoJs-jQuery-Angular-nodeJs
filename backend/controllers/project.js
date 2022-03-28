'use strict'

var Project = require('../models/project');

var controller = {
    home: function(req, res){
        return res.status(200).send({
            message: 'Soy la home'
        })
    },
    test: function(req, res){
        return res.status(200).send({
            message: 'Soy el metodo o accion test del controlador del proyecto'
        });
    },

    saveProject: function(req, res){
        var project = new Project();

        return res.status(200).send({
            message: 'Método saveProject'
        });
    }
};

module.exports = controller;