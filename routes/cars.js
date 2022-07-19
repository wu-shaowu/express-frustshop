var express = require('express');
var router = express.Router();
const{getcars,getUsersCars,updataCars,deleteCars,deleteAllCars,addcars} = require('../service/carsService');
//添加购物车
router.post('/addcars',async(req, res, next)=> {
    console.log(req.body);
    console.log("22222222222222222222222222222222222222222222222222222222222222222222");
    const data = await addcars(req.body);
   
    res.send(data);
});
//获得所有水果
router.get('/getcars',async(req, res, next)=> {
    const data = await getcars();
    res.send(data);
});
//修改更新用户已添加的购物车
router.post('/updataCars',async(req, res, next)=> {
    const data = await updataCars(req.body);
    res.send(data);
});
//获得购物车的信息
router.post('/getUsersCars',async(req, res, next)=> {
    const data = await getUsersCars(req.body);
    res.send(data);
});
//删除购物车
router.post('/deleteCars',async(req, res, next)=> {
    const data = await deleteCars(req.body);
    res.send(data);
});
//删除全部购物车
router.post('/deleteAllCars',async(req, res, next)=> {
    const data = await deleteAllCars(req.body);
    res.send(data);
});
module.exports = router;