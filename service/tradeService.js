const{getTrade,addTrade,keepTradeInfo,getAllTrade,getAdminTrade} = require('../dao/tradeDao')
module.exports.getTrade =async (trade)=>{
    const data =await getTrade(trade);
    if(data){
        return {
            message:'成功拿到交易水果的数据',
            status:1,
            data,
        }
    }else{
        return {
            message:'失败拿交易水果的数据',
            status:0,
            data,
        }
    }
};
module.exports.getAllTrade =async (trade)=>{
    const data =await getAllTrade(trade);
    console.log(data);
    if(data){
        return {
            message:'成功拿到全部交易水果的数据',
            status:1,
            data,
        }
    }else{
        return {
            message:'失败拿全部交易水果的数据',
            status:0,
            data,
        }
    }
};
module.exports.addTrade =async (trade)=>{
    const data =await addTrade(trade);
    if(data){
        return {
            message:'成功添加水果的数据',
            status:1,
            data,
        }
    }else{
        return {
            message:'失败添加水果的数据',
            status:0,
            data,
        }
    }

};
module.exports.keepTradeInfo =async (trade)=>{
    const data =await keepTradeInfo(trade);
    console.log(data);
    if(data){
        return {
            message:'成功添加水果的数据',
            status:1,
            data,
        }
    }else{
        return {
            message:'失败添加水果的数据',
            status:0,
            data,
        }
    }

};
module.exports.getAdminTrade =async (trade)=>{
    const data =await getAdminTrade(trade);
    console.log(data);
    if(data){
        return {
            message:'成功添加水果的数据',
            status:1,
            data,
        }
    }else{
        return {
            message:'失败添加水果的数据',
            status:0,
            data,
        }
    }

};
