const express = require('express');
const app = express();
const port = 5500;
const bodyParser = require('body-parser');

app.unsubscribe(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Llamo al html
app.use('/formulario', express.static(__dirname + '/programan'));

 //Inicializamos el Server en el puerto 3001
    app.listen(port, () => {
        console.log("Te encuentras en el servidor 5500 :)")
    });

//POST para enviar datos
app.post("/register", function (req, res) {
    let usuario = req.body.name;
    console.log(usuario);
})