'use strict';

const events = require('../lib/events');
// const socketPool = require('../lib/socket-pool');

events.on('@nickname', (user, name) => {
  user.nickname = name;
});