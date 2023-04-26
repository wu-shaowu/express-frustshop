//数据库集合的相关配置
//1.定义数据集合的机构:数据有什么属性和类型
const {Schema,model} = require('mongoose');
const usersSchema = new Schema({
  phone:String,
  password:String,
  money:String,
  coupon:String,
  address:Array,
  name:String,
  daddress:String,
  admin:Boolean
},{versionKey: false}
);
//2.定义数据集合的模型，将schema和数据库中的集合关联起来
// model('模型名称',usersSchema,'数据库中的集合名称');
const usersModel = model('usersModel',usersSchema,'users')

module.exports.usersModel = usersModel;