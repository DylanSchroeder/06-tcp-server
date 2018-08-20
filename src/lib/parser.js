'use strict';

exports.parser = function(line, emitCallback) {
  if (line.startsWith('@all')) {
    return emitCallback('@all', line.substring(5));
  }
};
