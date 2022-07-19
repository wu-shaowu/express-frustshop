const {usersModel} = require('./model/usersModel')
//用户注册
module.exports.register = async (user)=>{
    return await usersModel.create(user);
};
module.exports.login=async function(user){
    console.log(user);
    const data = await usersModel.findOne(user);
    return data;
    
};
module.exports.checkId=async function(user){    
    const data = await usersModel.findById(user);
    return data;
    
};
module.exports.IsAddCars=async function({id,_id,name}){   
    // const data = await usersModel.updateOne({phone:'123456',password:'12'},{money:'50'},{upsert:true})
    return data;
    
};
module.exports.recharge=async function({_id,money,coupon}){
    console.log(_id+'--------------'+money);   
    const data1 = await usersModel.findByIdAndUpdate(_id,{money,coupon});
    const data = await usersModel.findById(_id);
    return data;
    
};
module.exports.changeAddress=async function({_id,daddress,address}){
    console.log(_id+'--------------'+daddress);   
    const data = await usersModel.findByIdAndUpdate(_id,{daddress,address});
    return data;
    
};

