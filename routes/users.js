var express = require('express');
var router = express.Router();
 const {register,login,checkId,recharge,changeAddress} = require('../service/usersService')
/* GET users listing. */
//用户注册
router.post('/register', async(req, res, next) =>{
  const data = await register(req.body);
  res.send(data)
  
});
router.post('/login', async function (req, res, next) {
	const user = req.body;
	const data = await login(user)
	res.send(data);

});
router.post('/checkId', async function (req, res, next) {
	const user = req.body._id;
	const data = await checkId(user)
	res.send(data);
});
router.post('/recharge', async function (req, res, next) {
	console.log(req.body);
	const data = await recharge(req.body);
	res.send(data);
});
router.post('/changeAddress', async function (req, res, next) {
	console.log(req.body);
	const data = await changeAddress(req.body);
	res.send(data);
});
module.exports = router;



