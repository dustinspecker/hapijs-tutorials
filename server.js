'use strict';

var good = require('good')
  , hapi = require('hapi')
  , server = new hapi.Server(3000);

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply('Hello, world!');
  }
});

server.route({
  method: 'GET',
  path: '/{name}',
  handler: function (request, reply) {
    reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
  }
});

server.pack.register(good, function (err) {
  if (err) {
    throw err;
  }

  server.start(function () {
    console.log('Server running at:', server.info.uri);
  });
});
