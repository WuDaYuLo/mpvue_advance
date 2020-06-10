// 搭建服务器核心文件

let Koa = require('koa');
let KoaRouter = require('koa-router');
let Fly=require("flyio/src/node")

let jwt = require('jsonwebtoken');

// 1.生成引用及路由器实例

const app =  new Koa();
const router = new KoaRouter();

var fly=new Fly;

// 核心代码
router.get("/",(ctx,next)=>{
    // 1.获取请求的参数


    // 2.根据请求的地址和参数处理数据

    // 3.响应数据
    ctx.body = '服务器返回的数据222'; 


})





// 搜索图书的接口
let datas = require("./datas/data.json")
router.get('/searchBooks',(ctx,next)=>{
    // 1.获取请求的参数
    let req = ctx.query.req;
    console.log('请求的参数:',req)

    // 2.根据请求的地址和参数处理数据
    let booksArr = datas;

    // 3.响应数据
    ctx.body = booksArr; 
});

// 使用用户openID的接口
router.get('/getOpenId',async (ctx,next) => {
    // 1.获取请求的参数
    let code = ctx.query.code;
    let appId = 'wx8d161d0bd90dc893'
    let appSecret = '478760514ca68693d3839f92ac2abc53'
    // 2.根据请求的地址和参数处理数据
    let url = `https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`
    // 3.响应数据
    // 发送请求给微信接口，获取openId
    let result = await fly.get(url);
     userInfo = JSON.parse(result.data)
    //console.log(result.data)

    // 将用户的openId存入数据库， openId: {userName: 'xx', money: 'yyy'}

    // 自定义登录状态，就是根据用户的openid和sessionKey进行加密生成token，返回给前端的
    // 对openId和sessionKey进行加密, 自定义登录状态 token
    let token = jwt.sign(userInfo, 'wwy');
    //console.log(token)
    //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uX2tleSI6ImJJOEtuai9aeU1odFUvdHlreE5za2c9PSIsIm9wZW5pZCI6Im9KY3g0NUFGUmRyQzZ0VXk4TWNZLXB4REhORUEiLCJpYXQiOjE1ODU4MTI2MDN9.USMVNC5WKLqOKQVIzkJVh5CIdC_FgiIRMndNWzpkpeU


    ctx.body = token
    // ctx.body = '临时数据';


});

// 测试验证身份token的接口

router.get('/test',(ctx,next)=>{
    // 获取token的值
    console.log(ctx.request.header.authorization);
    // let ctx.request.header

    let token = ctx.request.header.authorization
   
//   { session_key: '2Q4A9QGK/27EH3/7yR3pMg==',
//   openid: 'oJcx45AFRdrC6tUy8McY-pxDHNEA',
//   iat: 1585814481 } iat: 加密时的时间
    var res;
    try {
        res = jwt.verify(token,'wwy')
        console.log('验证：',res)
        ctx.body = '验证成功'
    } catch (error) {
        ctx.body = '验证失败'
    }
   
})


// 2.使用路由器及路由


app
.use(router.routes())  //使用使用路由
.use(router.allowedMethods())  // 允许使用路由的方法


// 3. 监听端口
app.listen('3000', ()=>{
    console.log("服务器启动成功");
    console.log("服务器地址：http://localhost:3000");
})

