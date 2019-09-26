const express = require('express');
const apUser = express.Router();
const userController = require ('../controllers/userController');
const jwtProteger = require ('../middleware/jwtMiddleware');

apUser.get('/list', userController.listar);
/* 
apUser.get('/', function (req, res) {
    res.send('Hello World!');
});
 */
apUser.post('/login', userController.login);

apUser.use(jwtProteger.protegerRutas);

apUser.post('/crear', userController.crear);

apUser.put('/update', userController.update);

apUser.put('/updatePassword', userController.updatePassword)

apUser.delete('/borrar', userController.borrar);

module.exports = apUser;