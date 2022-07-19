//数据库集合的相关配置
//1.定义数据集合的机构:数据有什么属性和类型
const {Schema,model} = require('mongoose');
const tradeSchema = new Schema({
    name:String,
    phone:String,
    address:String,
    ispay:Boolean,
    totalPrice:String,
    usersId:{
        type: Schema.Types.ObjectId,
        //ref用来设计关联的集合的模型名称
        ref:'usersModel'
      },
    carsId:[
      {
        type: Schema.Types.ObjectId,
        //ref用来设计关联的集合的模型名称
        ref:'carsModel'
      }
    ]
});
//2.定义数据集合的模型，将schema和数据库中的集合关联起来
// model('模型名称',usersSchema,'数据库中的集合名称');
const tradeModel = model('tradeModel',tradeSchema,'trade')

module.exports.tradeModel = tradeModel;