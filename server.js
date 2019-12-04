const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(9090).sockets;

mongo.connect(
  'mongodb://localhost:27017/messenger',
  { useUnifiedTopology: true },
  (err, database) => {
    if (err) console.log(err);
    else {
      console.log('listening on 9090 ...');

      const seedDb = database.collection('messages');
      seedDb.insert({
        username: 'testUN',
        msg: 'testhelloMSG',
        timeStamp: new Date.now(),
        avatarUrl: 'www.testurl.com'
      });
      client.on('connection', socket => {
        let dbMessages = database.collection('messages');

        dbMessages
          .find()
          .limit(10)
          .sort({ timeStamp })
          .toArray((err, res) => {
            if (err) console.log(err);
            socket.emit('output', res);
          });
      });
    }
  }
);
