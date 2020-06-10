<template>
    <div id="personalContainer">
        <div class="header">
            <img :src="userInfo.avatarUrl?userInfo.avatarUrl:'/static/imgs/personal/personal.png'" alt="">
            <button open-type="getUserInfo" @getuserinfo="handleGetUserInfo">{{userInfo.nickName?userInfo.nickName:'登录'}}</button>
        </div>

        <div class="cardList">
            <div class="card" @click="scan">
                <span>扫码看书</span>
                <span class="more"> > </span>
            </div>
        </div>
    </div>
</template>


<script>
import request from '../../utils/request'
export default {
    data() {
        return {
            userInfo:{}
        }
    },
   methods: {
       handleGetUserInfo(res){
        //    console.log(res)
        if(res.mp.detail.userInfo){
            console.log('允许');
            this.userInfo = res.mp.detail.userInfo
        }else{
            console.log('拒绝')
        }

      },
      scan(){
          wx.scanCode({
              success:(res)=>{
                  console.log(res.result);
              }
          })
      }
   },
   async mounted() {
       wx.getUserInfo({
           success: (res) => {
               //console.log(res.userInfo)
               this.userInfo = res.userInfo
           },
           fail: () => {
               console.log('获取失败')
           }
       }),

       wx.login({
             success: async (res)=>{
                // success
                // console.log(123);
                // 1. 获取用户登陆的临时凭证, 和用户是否授权没有直接关系， 有效时长： 有效期五分钟
                // console.log(res.code)
                let code = res.code;
                // 2. 发送code给服务器端
                let token = await request('/getOpenId', {code})
                // 3. 将自定义登录状态缓存到storage中
                wx.setStorage({
                    key: 'token',
                    data: token,
                    success: function(res){
                        // success
                    }
                })
            }
        
        })

        // 测试地址token

        let result = await request('/test')
        console.log('验证结果： ', result);
   },
}
</script>

<style>
    .header{
        padding: 40rpx;
        background-color: #02a774;
    }
  .header img{
      width: 100rpx;
      height: 100rpx;
      border-radius: 50%;
      vertical-align: middle;
  }
  .header button{
      display: inline-block;
      height: 60rpx;
      line-height: 60rpx;
      background:rgba(255, 255, 255, 0.5);
      vertical-align: middle;
      margin-left: 40rpx;
      max-width: 200rpx;
  }
  .cardList .card{
      width: 94%;
      height: 60rpx;
      line-height: 60rpx;
      margin: 10rpx auto;
      border: 1rpx solid #eee;
      padding: 10rpx;
    
  }
  .cardList .more{
      float: right;
  }
</style>