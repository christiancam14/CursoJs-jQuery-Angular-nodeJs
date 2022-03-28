'use strict'

// Guardar configuración de express

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargas archivos de rutas

var project_routes = require('./routes/project');

// middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS


// Rutas

app.use('/api', project_routes);

// Exportar

module.exports = app;