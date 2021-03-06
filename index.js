const mongoose = require('mongoose');
const express = require('express');
const app = express();

const apiRoutes = require('./api');

const bodyParser = require ('body-parser');
app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());

  mongoose.connect('mongodb://localhost:27017/curso', {useNewUrlParser: true}).then(() => {
        console.log("Conexión con éxito");
/* 
    //Conexion mongoose
    //conexion de base de datos  y crear los modelos desde el ide
    const Cat = mongoose.model('Cat', { name: String });

    const kitty = new Cat({ name: 'Zildjian' });
    kitty.save().then(() => console.log('meow'));
 */


    //conexion express
    //Sirve para crear las rutas con mongodb y para ver la conexion en activo con el servidor desde el navegador
    //req: es el parametro de entrada, res(response): el tipo de respuesta que nos va a poder devolver

    /*     app.get('/usuarios', function (req, res) {
        res.json({message:'Lista de usuarios', datos: 'datos de usuarios'});
    });
 
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });
 
    app.post('/postUser', function (req, res) {
        res.json({message:'inserta usuarios', datos: 'datos de usuarios'});
    });

    app.put('/putUser', function (req, res) {
        res.json({message:'edita usuarios', datos: 'datos de usuarios'});
    });

    app.delete('/deleteUser', function (req, res) {
        res.json({message:'Elimina usuarios', datos: 'datos de usuarios'});
    });
    */  

    app.use('/', apiRoutes);

    app.listen(3000, function () {
       console.log('Example app listening on port 3000!');
    });   
   
 
    

    }).catch(error => {
        console.log("error inesperado", error);
        
    });
    console.log("Hola mundo desde nodejs");

