const{getGoodInfo,search,getGoodDetail} = require('../dao/goodsDao')
module.exports.getGoodInfo =async ()=>{
    const data =await getGoodInfo();
    return {
        message:'成功获得水果的数据',
        status:1,
        data,
    }
};
module.exports.search =async (searchgoodname)=>{
    const data =await search(searchgoodname);
    console.log(data);
    return {
        message:'成功获得水果的数据',
        status:1,
        data,
    }
};
module.exports.getGoodDetail =async (id)=>{
    const data =await getGoodDetail(id);
    return {
        message:'成功获得水果的数据',
        status:1,
        data,
    }
};

