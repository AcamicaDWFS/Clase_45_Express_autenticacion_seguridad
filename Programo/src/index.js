//Agregar express, body-parser, jsonwebtoken, express-jwt
const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

const app = express();

//clave para la encriptacion
const jwtClave = "jwt_programo";

app.use(bodyParser.json());

//protegemos todo menos el /login
app.use(expressJwt({secret: jwtClave}).unless({path:["/login"]}));

//crear usr y pwd
let usuario = {
    nombre: "usuario",
    clave: "password"
}

//noticias
let noticias = [{
    id: 1,
    titulo: "noticia 1"
}];

app.get('/noticias', function(req, res){
    res.send(noticias);
})

app.post('/login', function(req, res){
    if (request.body.nombre == usuario.nombre || request.body.clave == usuario.clave) {
        //crear token
        let token = jwt.sign({
            usuario:"usuario"
        },jwtClave);   

        //enviar token respuesta
        res.send(token);
    } else {   
        res.status(401).end("usuario incorrecto")
    }
});

app.listen(3005, function(){
    console.log('aplicacion en el puerto 3000!');
})