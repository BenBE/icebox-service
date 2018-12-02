'use strict';

var bonjour = require('bonjour')();
var ip = require('ip');

var app = require('./app');

var name = process.env.ICEBOX_API_NAME || "IceBox";
var port = process.env.ICEBOX_API_PORT || 8081;

app.listen(port, function () {
  var host = app.address;

  bonjour.publish({
    name: name,
    type: 'icebox',
    host: ip.address(),
    port: port
  });

  console.log('Server running on port %d', port);
});
