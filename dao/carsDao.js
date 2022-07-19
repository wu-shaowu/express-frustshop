const {carsModel} = require('./model/carsModel');
module.exports.getcars =async ()=>{
   const data = await carsModel.find();
   return data;
};
// module.exports.addcars =async (updata)=>{
//    const data = await carsModel.create(updata)
//    return data;
// };
module.exports.addcars =async ({usersId,price,name,weight,number,images,unitPrice,isTrade,isCheap})=>{
   const data = await carsModel.find({usersId,name,isTrade})
   if(data.length){
      return data;
   }else {
      const data = await carsModel.create({usersId,price,name,weight,number,images,unitPrice,isTrade,isCheap});
      return data;
   }
};
module.exports.updataCars =async ({usersId,price,name,weight,number,images,unitPrice,isTrade})=>{
   const data = await carsModel.updateOne({usersId,name},{name,number,price,weight,images,unitPrice,isTrade},{upsert:true});
   return data;
};
module.exports.getUsersCars =async ({usersId})=>{
   const data = await carsModel.find({usersId});
   return data;
};
module.exports.updataCarsNum =async ({usersId,name,number,price})=>{
   const data = await carsModel.updateOne({usersId,name,isTrade:false},{number,price});
   return data;
};
module.exports.deleteCars =async ({_id})=>{
   
   const data = await carsModel.findByIdAndDelete({_id});
   return data;
};
// module.exports.deleteAllCars =async ({usersId})=>{
//    const data = await carsModel.deleteMany({usersId});
//    return data;
// };
module.exports.deleteAllCars =async ({usersId})=>{
   const data = await carsModel.updateMany({usersId},{isTrade:true});
   return data;
};

