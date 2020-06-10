<template>
    <div id="indexContainer">

        

        <swiper indicator-dots indicator-color="pink" indicator-active-color="green">
            <swiper-item v-for="(item,index) in carouel" :key="index">
                <img :src="item.image" alt="">
            </swiper-item>
            
            
        </swiper>

        <div class="booksList">

            <div class="listNav">
                <span>全部商品</span>
                <span class="more" @click="tobooksList(booksArr)"> > </span>
            </div>

            <div class="list">
                <div @click="toDetail(item)" class="bookItem" v-for="(item,index) in booksArr" :key="index" >
                    <img :src="item.image" alt="">
                    <p>{{item.title}}</p>
                    <p>{{item.author}}</p>
                </div>
            </div>

        </div>

        
    </div>
</template>


<script>
import datas from './datas/data.json'
console.log(datas,typeof datas)
export default {
   data() {
       return {
           booksArr: datas
       }
   },
   computed: {
       carouel(){
           // 注意splice方法会修改原数组的
           return [...this.booksArr].splice(0,4)
       }
   },
   methods: {
       toDetail(bookItem){
           wx.navigateTo({
               url: '/pages/detail/main?bookItem='+ JSON.stringify(bookItem)
           })
       },
       tobooksList(booksArr){
           wx.navigateTo({
               url: '/pages/booksList/main?booksArr='+ JSON.stringify(booksArr)
           })
       }
   },
}
</script>

<style>
    #indexContainer swiper{
        width: 100%;
        height: 400rpx;
    }

    #indexContainer swiper img{
      width: 100%;
      height: 100%;
    }

    .booksList{
        
    }

    .booksList .listNav{
        height: 80rpx;
        line-height: 80rpx;
        padding: 10rpx;
    }

    .booksList .listNav .more{
        float: right;
    }
    .booksList .list{
        display: flex;
        flex-wrap: wrap;

    }
    .booksList .list .bookItem{
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-bottom: 2rpx solid #eee;
        box-sizing: border-box;
    }
    .booksList .list .bookItem:nth-child(2n + 1){
        border-right: 2rpx solid #eee;
    }
    .booksList .list .bookItem img{
        width: 200rpx;
        height: 200rpx;
        margin: 15rpx 0;
    }
    .booksList .list .bookItem p{
        font-size: 24rpx;
        line-height: 50rpx;
    }
</style>