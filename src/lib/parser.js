'use strict';

exports.parser = function(line, emitCallback) {
  if (line.startsWith('@all ')) {
    return emitCallback('@all', line.substring(5));
  }

  if(line.startsWith('@list')) {
    return emitCallback('@list', line.substring(6));
  }

  if(line.startsWith('@nickname')) {
    return emitCallback('@nickname', line.substring(10));
  }
};
