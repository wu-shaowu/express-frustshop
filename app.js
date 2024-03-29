var createError = require('http-errors');
var express = require('express');
const cors = require('cors') //跨域
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const multer = require("multer")
const {goodsModel} = require('./dao/model/goodsModel');





var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var goodsRouter = require('./routes/good');
var tradeRouter = require('./routes/trade');
var carsRouter = require('./routes/cars');

// const jwtAuth =
//  require('./utils/jwt');
//连接mongodb
// require('./dao/database')
//连接mongodb
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const dbURI = 'mongodb://127.0.0.1:27017/fruitshop'; //连接项目mongodb的数据库的地址
mongoose.connect(dbURI);
mongoose.connection.on('connected',function(){
  console.log(dbURI+'连接成功');
});
var app = express();
//跨域
const corsConfig = {
  origin:'http://localhost:8080',
  credentials:true,
}
//使用默认
app.use(cors())

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
app.use(express.static(path.join(__dirname, 'public')));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use(jwtAuth);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/goods', goodsRouter);
app.use('/trade',tradeRouter);
app.use('/cars',carsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;
app.listen(3000,()=>{console.log('3000成功')});





