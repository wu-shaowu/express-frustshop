//连接mongodb
const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost:27017/fruitshop' //连接项目mongodb的数据库的地址
mongoose.connect(dbURI);
mongoose.connection.on('connected',function(){
  console.log(dbURI+'连接成功');
});