const express = require('express');
const app = express();
const port = 5500;
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
​
const path = require('path');
​
app.unsubscribe(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
​
//Llamo al html
app.use('/css', express.static(__dirname + '/css'));
app.use('/assets', express.static(__dirname + '/assets'));
​
 //Inicializamos el Server en el puerto 3001
    app.listen(port, () => {
        console.log("Te encuentras en el servidor 5500 :)")
    });
​
//'GET'home
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public', ('index.html')));
});

//'GET' login
app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public', ('login.html')));
});

//'GET' welcome
app.get('/welcome', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/public', ('welcome.html')));
});
​
//POST para enviar datos de registro
app.post('/register', function (req, res) {
    console.log(req.body);
    res.render('welcome', {data: req.body});
});

//EJEMPLO GET para el registro
app.get('/register', function (req, res) {
    res.send("Registro completado")
})


//Clave para la encriptación  es una palabra que utilizará nuestra organización para encriptar la información
const jwtClave = "empanada123"

//Protegemos los endpoints
app.use(expressJwt({secret: jwtClave}).unless({path: ["/index"], path: ["/login"]}));

//Crear usuario y contraseña

let admin = {
    email: "nyu@aol.com",
    pass: "gato123",
}

//se realiza la validación del admin
app.post('/login', function (req, res) {
    if(req.body.email == admin.email || req.body.pass == admin.pass) {  // NO DEBERIA SER &&???
        //se crea el token
        let token = jwt.sign({
            email: "nyu@aol.com" 
        }, jwtClave);
        //enviar token de respuesta a quien lo solicitó
        res.send(token);
    } else {
        res.status(401).end("usuario incorrecto");
    }
})

