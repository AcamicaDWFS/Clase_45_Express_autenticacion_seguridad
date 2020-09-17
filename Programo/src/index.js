//npm install express
var express = require('express');
//npm install body-parser
var bodyParser = require('body-parser');
//npm install jsonwebtoken
var jwt = require('jsonwebtoken');
//npm install express-jwt
var expressJwt = require('express-jwt');

var app = express();

//creamos una clave para la incriptacion del token
var jwtClave = "Password_deseado";


app.use(express.static('publica'));
app.use(bodyParser.json());

//Protegemos todo menos el /login

app.use(expressJwt({ secret: jwtClave }).unless({ path: ["/login"] }));

//creamos un usaurio y una contraseña 
var usuario = {
    nombre: "usuario",
    clave: "password"
}

// Creamos una noticia  como si bieiera de una base para mostrarlo en el metodo protegido
var noticias = [{
    id: 1,
    titulo: "noticia 1"
}];

//Metodo protegido con to jwt
app.get('/noticias', function (req, res) {
    res.send(noticias);
});

app.get('/protected', function (req, res) {
    console.log(req.body);
    if (!req.body.usuario) return res.sendStatus(401);
    res.send('OK');
});


//Creamos el endpoint para el login 
app.post("/login", function (request, response) {
    console.log(request.body);
    if (request.body.nombre == usuario.nombre || request.body.clave == usuario.clave) {
        //Creamos el token para pasar
        var token = jwt.sign({
            usuario: "usuario"
        }, jwtClave, { expiresIn: 300 });
        
        //envio Token
        response.send(token);

    } else {

        response.status(401).end("usuario incorrecto")
    }

});

app.listen(3002, function () {
    console.log('aplicacion en el puerto 3000!');
});