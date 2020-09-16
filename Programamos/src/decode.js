//npm install dotenv
require('dotenv').config();

//npm install express
let express = require('express');

//npm install jsonwebtoken
let jwt = require('jsonwebtoken');
let app = express();

app.listen(4000, function () {
    console.log('aplicacion en el puerto 4000!');
});

let jwtDecoded = jwt.verify(process.env.ACCESS_TOKEN, process.env.ACCESS_TOKEN_SECRET);

console.log(jwtDecoded);