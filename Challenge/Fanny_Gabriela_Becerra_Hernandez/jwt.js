var jwt = require('jsonwebtoken');
var privateKey = '123';
var token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: '¡Holi! :3'
}, 'secret');

if (token) {
    console.log('token: ', token);
    try {
        var decoded = jwt.verify(token, 'secret');
        console.log('\nSuccess!')
        console.log('\ndecoded: ', decoded);
    } catch (err) {
        console.log('Error: ', err)
    }
}