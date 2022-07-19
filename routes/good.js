var express = require('express');
var router = express.Router();
const{getGoodInfo,search,getGoodDetail} = require('../service/goodsService');
//获得所有水果
router.get('/getGoodInfo',async(req, res, next)=> {
    console.log("触发接口");
    const data = await getGoodInfo();
    res.send(data);
});
router.post('/search',async(req, res, next)=> {
    const data = await search(req.body);
    res.send(data);
});
router.post('/getGoodDetail',async(req, res, next)=> {
    const data =await getGoodDetail(req.body._id)
    res.send(data);
});
module.exports = router;

