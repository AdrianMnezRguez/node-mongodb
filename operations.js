var assert = require('assert');

exports.insertDocument = function(db, document, collection, callback){
  //Get the document collection
  var coll = db.collection(collection);

  //Insert some document
  coll.insert(document, function(err, result){
    assert.equal(err, null);
    console.log("Inserted " + result.result.n + "documents into the collection " + collection);
    callback(result);
  });
};

exports.findDocuments = function(db, collection, callback){
  var coll = db.collection(collection);

  //Find the documents
  coll.find({}).toArray(function(err, docs){
    assert.equal(err, null);
    callback(docs);
  });
};

exports.removeDocument = function(db, document, collection, callback){
  var coll = db.collection(collection);

  //Remove the first document
  coll.deleteOne(document, function(err, result){
    assert(err, null);
    console.log("Removed the document " + document);
    callback(result);
  });
};

exports.updateDocument = function(db, document, update, collection, callback){
  var coll = db.collection(collection);

  //Update document
  coll.updateOne(document, {$set: update}, null, function(err, result){
    assert.equal(err, null);
    console.log("Update the document with " + update);
    callback(result);
  });
};
