const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    // response = 'This is version 1 of the app.' + '\n';
    response = 'Hello World!" Mensaje desde el universo Kubernetiano.' + '\n' + 'Hola amigos humanoides Luteralianos, Buuubble los espera.....súbanse a este tren.' + '\n';

    //send the response to the client
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
