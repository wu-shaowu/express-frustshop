const{getGoodInfo,search,getGoodDetail,addGoods,saveImage,deleteGoods} = require('../dao/goodsDao')
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
module.exports.addGoods =async (addGood)=>{
    const data =await addGoods(addGood);
    console.log(data);
    return {
        message:'成功添加水果的数据',
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
module.exports.saveImage =async (da)=>{
    const data =await saveImage(da);
    return {
        message:'成功获得水果的数据',
        status:1,
        data,
    }
};
module.exports.deleteGoods =async (da)=>{
    const data =await deleteGoods(da);
    return {
        message:'成功获得水果的数据',
        status:1,
        data,
    }
};

