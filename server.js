'use strict';

var hapi = require('hapi')
  , server = new hapi.Server(3000);

server.start(function () {
  console.log('Server running at:', server.info.uri);
});
