var express = require('express');
var router = express.Router();
const{getTrade,addTrade,keepTradeInfo,getAllTrade} = require('../service/tradeService');
//获得所有水果
router.post('/getTrade',async(req, res, next)=> {
    console.log(req.body);
    const data = await getTrade(req.body);
    res.send(data);
    
});
//将购物车添加到trade中
router.post('/addTrade',async(req, res, next)=> {
    const data = await addTrade(req.body);
    res.send(data);
});
//更新trade
router.post('/keepTradeInfo',async(req, res, next)=> {
    const data = await keepTradeInfo(req.body);
    res.send(data);
});
//获得全部的订单
router.post('/getAllTrade',async(req, res, next)=> {
    console.log(req.body);
    const data = await getAllTrade(req.body);
    res.send(data);
    
});
module.exports = router;