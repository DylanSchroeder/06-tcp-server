'use strict';

const users = {};

exports.addUser = function(user) {
  users[user.id] = user;
  console.log(users);
}

exports.forEach = function(callback) {
  Object.values(users).forEach(callback);
};
