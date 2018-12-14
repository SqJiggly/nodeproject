const express=require('express');
const app=express();
const bodyParser=requier('body-parser');
const mongodb = require('mongodb');
const http=require('http');

// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('./'));
app.listen(2626,()=>{
	console.log('server star in port:2626');
})