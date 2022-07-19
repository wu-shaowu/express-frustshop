
//数据库集合的相关配置
//1.定义数据集合的机构:数据有什么属性和类型
const {Schema,model} = require('mongoose');
const goodsSchema = new Schema({
    name:String,
    price:String,
    weight:String,
    images:String,
    isCheap:Boolean
},{versionKey: false});
//2.定义数据集合的模型，将schema和数据库中的集合关联起来
// model('模型名称',usersSchema,'数据库中的集合名称');
const goodsModel = model('goodsModel',goodsSchema,'goods')

module.exports.goodsModel = goodsModel;