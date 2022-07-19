// // const expressjwt = require("express-jwt");
// const expressJwt = require("express-jwt");
// // const jwtAuth = expressJwt({
// //     secret:'jianglan',
// //     algorithms:['HS256'],
// //     credentialsRequired:false,
// // }).unless({
// //     path:['/users/login','/users/register']
// // });
// const jwtAuth = expressJwt({
//     secret: 'jianglan',
//     algorithms: ["HS256"],
//     credentialsRequired: true//  false：不校验
//   }).unless({
//     path: ["/users/login", "/users/reg"] //不需要校验的路径
//   });

// // console.log(jwt);
// module.exports = {jwtAuth};
//用一个单独模块来放生成token和验证token的方法，方便后面调用。


const expressJwt = require("express-jwt");

// 验证 token
const jwtAuth = expressJwt({
  secret: 'jianglan',
  algorithms: ["HS256"],
  credentialsRequired: true//  false：不校验
}).unless({
  path: ["/users/login", "/users/reg"] //不需要校验的路径
});
module.exports = { jwtAuth, createToken };
