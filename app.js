var express = require('express');
var server = express();

var Client = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/todo';

server.use(express.static('./public'));

// Read
server.get('/api/:id', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var todos = db.collection('todos');
      todos
        .find({ id: req.params.id })
        .toArray(function(error, documents) {
          if (error) {
            res.sendStatus(500);
            db.close();
          } else {
            console.log('Sending documents');
            res.send(documents);
            db.close();
          }
        });
    }
  });
});

// Create
server.post('/api/:id/:text', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var todos = db.collection('todos');
      todos.insert({
        id: req.params.id,
        text: req.params.text
      }, function(error, result) {
        if (error) {
          res.sendStatus(500);
          db.close();
        } else {
          res.send(result);
          db.close();
        }
      });
    }
  });
});

// Update
server.put('/api/:id/:updated', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var todos = db.collection('todos');
      todos .updateOne(
        { id: req.params.id },
        { $set: {text: req.params.updated}},
        function(error, result) {
          if (error) {
            res.sendStatus(500);
            db.close();
          } else {
            res.send();
            db.close();
          }
        }
      );
    }
  });
});

// Delete
server.delete('/api/:id', function(req, res) {
  Client.connect(url, function(error, db) {
    if (error) {
      res.sendStatus(500);
      db.close();
    } else {
      var todos = db.collection('todos');
      todos.deleteOne(
        { id: req.params.id },
        function(error, result) {
          if (error) {
            res.sendStatus(500);
            db.close();
          } else {
            res.send();
            db.close();
          }
        }
      );
    }
  });
});

server.listen(8080);
