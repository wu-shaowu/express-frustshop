const {register,login,checkId,recharge,changeAddress} = require('../dao/usersDao');
const jwt =require('jsonwebtoken');
//用户注册
module.exports.register = async (user)=>{
    console.log(user);
    const data =await register(user);
    if(data._id){
        return{
            message:'注册成功',
            status:1
        }
    }else{
        return{
            message:'注册失败',
            status:0
        }
    }
 };
 module.exports.login = async function (user) {
    const data = await login(user);
    if (data) {
        const token = jwt.sign(
            {_id:data._id},  //保存用户信息
            'jianglan',             //密钥字符串
            {expiresIn:'1h'}  //token有效期
        );
        return {
            message: '登录成功',
            status: 1,
            data,
            token
        }
    } else {
        return {
            message: '登录失败',
            status: 0,
            data,
        }
    }
};
module.exports.checkId = async function (user) {
    const data = await checkId(user);
    if (data) {
        return {
            message: '用户已登录',
            status: 1,
            data,
        }
    } else {
        return {
            message: '用户未登录，请登录',
            status: 0,
            data,
        }
    }
    
};
module.exports.recharge = async function (user) {
    const data = await recharge(user);
    console.log(data);
    if (data) {
        return {
            message: '用户已充值',
            status: 1,
            data,
        }
    } else {
        return {
            message: '用户充值失败',
            status: 0,
            data,
        }
    }
    
};
module.exports.changeAddress = async function (user) {
    const data = await changeAddress(user);
    console.log(data);
    if (data) {
        return {
            message: '地址已修改',
            status: 1,
            data,
        }
    } else {
        return {
            message: '地址修改失败',
            status: 0,
            data,
        }
    }
    
};





