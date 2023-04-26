var express = require('express');
var router = express.Router();
const{getGoodInfo,search,getGoodDetail,addGoods,saveImage,deleteGoods} = require('../service/goodsService');
const multer = require("multer")
const path = require("path")
const {usersModel} = require('../dao/model/goodsModel')
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

router.post('/addGoods',async(req,res,next)=>{
    const data = await addGoods(req.body)
    res.send(data)
})

router.post('/deleteGoods',async(req,res,next)=>{
    const data = await deleteGoods(req.body)
    res.send(data)
})


const { send } = require('process');


//图片上传
// 定义图片存储路径和文件名
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop())
    }
  })
  
  // 限制文件大小和文件类型
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 2, // 限制文件大小为2MB
      files: 1 // 限制上传文件数量为1个
    },
    fileFilter: function (req, file, cb) {
      if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('只支持上传jpg、jpeg、png、gif格式的图片！'))
      }
      cb(null, true)
    }
  })
  
  // 处理图片上传请求
  router.post('/upload', upload.single('image'), function (req, res, next) {
    if (req.file) {
      res.json({
        success: true,
        message: '图片上传成功！',
        data: {
          url: req.file.path, // 返回上传后的图片路径
          imageName: req.file.filename // 返回上传后的图片名
        }
      })
    } else {
      res.json({
        success: false,
        message: '图片上传失败！'
      })
    }
  })
// 处理保存图片名请求
router.post('/saveImage',  async (req, res)=> {

    console.log(req.body)
    const data = await saveImage(req.body)
  
    res.send(data)
    // res.send()
    // const imageName = req.body.imageName
    // const image = new goodsModel({ images: imageName })
    // image.save()
    //   .then(() => {
    //     res.json({
    //       success: true,
    //       message: '图片名保存成功！'
    //     })
    //   })
    //   .catch(err => {
    //     console.error(err)
    //     res.json({
    //       success: false,
    //       message: '图片名保存失败！'
    //     })
    //   })
  })



module.exports = router;

