const mongoClient = require('mongodb').MongoClient

export default function(callback) {
	mongoClient.connect('mongodb://benjamintaiwo:assessmentapi@ds121534.mlab.com:21534/assessmentapi');
	callback();
}
