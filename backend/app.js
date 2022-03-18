'use strict'

// Guardar configuración de express

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Cargas archivos de rutas



// middlewares

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS

// Rutas

app.get('/', (req, res) => {
    res.status(200).send("<h1>Página de inicio</h1>")
});

app.get('/test', (req, res) => {
    res.status(200).send({
        message: "Hola mundo, este es mi API de NodeJs"
    })
});

// Exportar

module.exports = app;