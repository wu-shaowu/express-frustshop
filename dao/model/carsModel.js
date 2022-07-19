//数据库集合的相关配置
//1.定义数据集合的机构:数据有什么属性和类型
const {Schema,model} = require('mongoose');
const carsSchema = new Schema({
    name:String,
    price:String,
    weight:String,
    number:String,
    images:String,
    unitPrice:String,
    isTrade:Boolean,
    isCheap:Boolean,
    usersId:{
        type: Schema.Types.ObjectId,
        //ref用来设计关联的集合的模型名称
        ref:'usersModel'
      }
},{versionKey: false});
//2.定义数据集合的模型，将schema和数据库中的集合关联起来
// model('模型名称',usersSchema,'数据库中的集合名称');
const carsModel = model('carsModel',carsSchema,'cars')

module.exports.carsModel = carsModel;
