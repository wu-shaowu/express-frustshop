const {goodsModel} = require('./model/goodsModel');
module.exports.getGoodInfo =async ()=>{
   const data = await goodsModel.find();
   return data;
};
module.exports.search =async ({name,pageNo,pageSize})=>{
   // 总条数
   const total = await goodsModel.find({
      name:{$regex:name,$options:'$i'}||""
   }).countDocuments();    
   // 总页数
   const page = Math.ceil(total/pageSize);
   const goods = await goodsModel.find({
      name:{$regex:name,$options:'$i'}||""
   }).limit(pageSize).skip((pageNo-1)*pageSize); 
   const data = {total,page,goods,pageSize}
   return data;
};
module.exports.getGoodDetail =async (id)=>{
   const data = await goodsModel.findById(id)
   return data;
};
module.exports.addGoods = async({name,images,isCheap,price,weight})=>{
   const data = await goodsModel.create({name,images,isCheap,price,weight})
   return data
}
module.exports.saveImage = async({name,images,isCheap,price,weight})=>{
   const data = await goodsModel.create({name,images,isCheap,price,weight})
   return data
}
module.exports.deleteGoods = async({_id})=>{
   const data = await goodsModel.findByIdAndDelete({_id})
   return data
}




