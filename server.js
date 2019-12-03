const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(9090).sockets;

mongo.connect(
  'mongodb://localhost:27017/messenger',
  { useUnifiedTopology: true },
  (err, database) => {
    if (err) console.log(err);
    else {
      console.log('listening on 9090 ... and stuff and ting');
    }
  }
);
