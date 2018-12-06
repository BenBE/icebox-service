var dgram = require('dgram');
var os = require('os');

var networkinterfaces = [];

exports.sendEvent = function(eventcontent) {
}

function buzz(eventcontent, i) {
}

function sendMessage(dgramServer, message, networkinterface, callback) {
}

function createMessage(eventcontent) {
}

//OLD STUFF
function tryLeds(number) {
  var dgramClient = dgram.createSocket('udp6');
  var buf = new Buffer(630);
  for (var i = 0; i < buf.length; i++) {
    if ((i + 1) % 3 == 0) {
      buf[i] = 0;
    } else {
      buf[i] = 0;
    }

  }
  console.log(buf);

  dgramClient.send(buf, 0, buf.length, 2812, '2a01:170:1112:0:bad8:12ff:fe66:fa1', function(err, bytes) {
    if (err) {
      throw err;
    }
    // Reuse the message buffer,
    // or close client
    console.log("close");
    dgramClient.close();
  });
}
