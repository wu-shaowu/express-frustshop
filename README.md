# express-frustshop
水果配送平台后端node.js
# node app.js运行3000端口
### 默认打开3000端口
node app.js 
若控制台呈现则成功
3000成功
mongodb://127.0.0.1:27017/fruitshop连接成功
### ----------------------------------------------------------------------
否则目录dao下database.js文件
const dbURI = 'mongodb://localhost:27017/fruitshop'; //连接项目mongodb的数据库的地址
改为const dbURI = 'mongodb://127.0.0.1:27017/fruitshop'; //连接项目mongodb的数据库的地址

### 由于尚未开通服务器，clone后端代码运行后，数据库内容为空，用户可以自行在数据库中编辑数据
