//npm install dotenv
require('dotenv').config();

//npm install express
let express = require('express');

//npm install jsonwebtoken
let jwt = require('jsonwebtoken');

let app = express();

let user = {
    id: 1,
    name: "Abdon",
    email: "adsfja@asdfasdf.com",
    age: 20,
    telephoneNumber: "232332323" 
};

let signature = {
    algorithm: process.env.ALGORITHM,
    expiresIn: process.env.ACCESS_TOKEN_LIFE
};

app.listen(3000, function () {
    console.log("Escuchando en el puerot 3000!");
});

let token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, signature);

console.log(token);