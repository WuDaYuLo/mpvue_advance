<template>
    <div id="booksListContainer">
        <div class="bootItem" v-for="(item ,index) in booksArr" :key="index" @click="toDetail(item)">
            <img :src="item.image" alt="">
            <div class="bookInfo">
                <p>{{item.title}}</p>
                <p>作者：{{item.author}}</p>
                <p>出版社：{{item.publisher}}</p>
            </div>
            <p class="bookprice">{{item.price}}</p>
        </div>
        
    </div>
</template>


<script>

export default {
    props:['booksArr'],
   data() {
       return {
           booksArr:[]
       }
   },
   mounted() {
       
       console.log(this)
    //    console.log(this.$mp.query);
       // 路由跳转的时候使用
       if(this.$mp){
           this.booksArr = JSON.parse(this.$mp.query.booksArr);
       }
        // this.booksArr = JSON.parse(this.$mp.query.booksArr);
   },
   methods: {
       toDetail(bookItem){
           wx.navigateTo({
               url: '/pages/detail/main?bookItem='+ JSON.stringify(bookItem)
           })
       },
   },
}
</script>

<style>
  #booksListContainer .bootItem{
    display: flex;
    padding: 10rpx;
    border-bottom: 1rpx solid #eee;
  }
  #booksListContainer .bootItem img{
    width: 140rpx;
    height: 140rpx;
  }
  #booksListContainer .bootItem .bookInfo{
      width: 70%;
      font-size: 30rpx;
      line-height: 52rpx;
      margin-left: 15rpx;
  }
  #booksListContainer .bootItem .bookprice{
      color: red;
      font-size: 36rpx;
      font-weight: bold;
      
  }

</style>