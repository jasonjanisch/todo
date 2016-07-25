var assert = require('chai').assert;
var request = require('request');

describe('Test the REST API', function() {
  before(function(done) {
    var Client = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/todos';

    Client.connect(url, function(error, db) {
      if(error) {
        done();
        db.close();
      } else {
        var collection = db.collection('todos');
        collection.insertMany([
          { id: 24681012, text: 'First todo test' },
          { id: 13579111, text: 'Second todo test' },
          { id: 76543210, text: 'Third todo test' }
        ], function(error, result) {
          if(error) {
            done();
            db.close();
          } else {
            done();
            db.close();
          }
        });
      }
    });
  });

  describe('CREATE', function() {
    // Fail case
    it('expects a name to create.', function(done) {
      request({
        url: 'http://localhost:8080/api',
        method: 'POST'
      }, function(error, response) {
        assert.equal(response.statusCode, 404);
        done();
      });
    });
    // Success case
    it('lets you create.', function(done) {
      request({
        url: 'http://localhost:8080/api/123456789/exampletext',
        method: 'POST'
      }, function(error, response) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });
  });

  describe('READ', function() {
    // Fail case
    it('expects a name to read.', function(done) {
      request({
        url: 'htpp://localhost:8080/api',
        method: 'GET'
      }, function(error, response) {
        assert.equal(response.statusCode, 404);
        done();
      });
    });
    // Success case
    it('lets you read.', function(done) {
      request({
        url: 'http://localhost:8080/api/123456789',
        method: 'GET'
      }, function(error, response) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });
  });

  describe('UPDATE', function() {
    // Fail case
    it('expects a name to update.', function(done) {
      request({
        url: 'http://localhost:8080/api',
        method: 'PUT'
      }, function(error, response) {
        assert.equal(response.statusCode, 404);
        done();
      });
    });
    // Success case
    it('lets you update', function(done) {
      request({
        url: 'http://localhost:8080/api/123456789/updating',
        method: 'PUT'
      }, function(error, response) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });
  });

  describe('DELETE', function() {
    // Fail case
    it('expects a name to delete.', function(done) {
      request({
        url: 'http://localhost:8080/api',
        method: 'DELETE'
      }, function(error, response) {
        assert.equal(response.statusCode, 404);
        done();
      });
    });
    // Success case
    it('lets you delete.', function(done) {
      request({
        url: 'http:/localhost:8080/api/123456789',
        method: 'DELETE'
      }, function(error, response) {
        assert.equal(response.statusCode, 200);
        done();
      });
    });
  });

  after(function(done) {
    var Client = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/todos';

    Client.connect(url, function(error, db) {
      if (error) {
        done();
        db.close();
      } else {
        var collection = db.collection('books');
        collection.remove({} , function(error, result) {
          if (error) {
            done();
            db.close();
          } else {
            done();
            db.close();
          }
        });
      }
    });
  });
});
