const mongodb = require('mongodb');

// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;

MongoClient.connect('mongodb://localhost:27017',(err, database)=>{})