'use strict';

const User = require('./models/user');
const events = require('./lib/events');
const socketPool = require('./lib/socket-pool');
const actions = require('./actions');
const { parser } = require('./lib/parser');
console.log(actions);

const net = require('net');
const server = net.createServer();

server.on('connection', function (socket) {
  const user = new User(socket);
  socketPool.addUser(user);
  socket.write(`Your user ID is ${user.id}\r\n`);

  socket.line = '';

  socket.on('data', function (data) {
    console.log(data);
    socket.line += data.toString();
    if (!socket.line.endsWith('\n')) 
      return;

    console.log(socket.line);
    parser(socket.line, (event, ...args) => {
      //Emit chat emit with current user plus args
      events.emit(event, user, ...args);
    });

    socket.line = '';
  });
});




events.on('start', (portFromStartEvent) => {
  console.log(`Listening on Port ${portFromStartEvent}!`);
});

exports.startServer = (port) => {
  server.listen(port, () => {
    events.emit('start', port);
  })
};
