'use strict';

const events = require('../lib/events');
const socketPool = require('../lib/socket-pool');

events.on('@list', (user, uuid) => {
  console.log(socketPool);
  socketPool.forEach(eachUser => {
    user.socket.write(`<${eachUser.nickname}>: ${eachUser.id}\r\n`);
  });
});