const {tradeModel} = require('./model/tradeModer');
module.exports.getTrade =async ({_id})=>{
   const data = await tradeModel.findById({_id}).populate({
      path:'carsId'
   }).populate({
      path:'usersId'
   });
   return data;
};
module.exports.addTrade =async (trade)=>{
   const data = await tradeModel.create(trade);
   return data;
};
module.exports.keepTradeInfo =async ({_id,name,phone,address})=>{
   const data = await tradeModel.findByIdAndUpdate(_id,{name,phone,address});
   return data;
};
module.exports.getAllTrade =async ({usersId})=>{
   const data = await tradeModel.find({usersId}).populate({
      path:'carsId'
   }).populate({
      path:'usersId'
   });
   return data;
};
module.exports.getAdminTrade =async ({_id})=>{
   const data = await tradeModel.find().populate({
      path:'carsId'
   }).populate({
      path:'usersId'
   });
   return data;
};
