var express = require('express');
var app = express();
var http = require('http').Server(app);



app.use("/", express.static(__dirname));

/**
 * Lancement du serveur en écoutant les connexions arrivant sur le port 3000
 */
 http.listen(8080, function () {
    console.log('Server is listening on *:8080');
  });


/*
 * Binds a socket server to the current HTTP server
 *
 */
let socketServer = require('socket.io')(http);

socketServer.on('connection', function (socket) {
  console.log('A new user is connected...');

  /*
   * Registers an event listener
   *
   * - The first parameter is the event name
   * - The second parameter is a callback function that processes
   *   the message content.
   */
  socket.on('hello', (content) => {
    console.log(content + ' says hello!');

    // Pushes an event to all the connected clients
    socketServer.emit('notification', content + ' says hello!');

    // Pushes an event to the client related to the socket object
    socket.emit('hello', 'Hi ' + content + ', wassup mate?');
  });
});