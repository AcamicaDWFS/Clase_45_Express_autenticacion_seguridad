var jwt = require('jsonwebtoken');
var privateKey = '123';
var token = jwt.sign({
    exp: Math.floor(Date.now() / 1000) + (60 * 60),
    data: 'foobar'
}, 'secret');

console.log('token: ', token);

try {
    var decoded = jwt.verify(token, 'secret');
    console.log('\n\nSuccess!')
} catch (err) {
    console.log('Error: ', err)
}