<template>
    <div id="detailContainer">
        <div class="bookInfo">
            <h1>{{bookItem.title}}</h1>
            <img :src="bookItem.image" alt="">
            <div class="info">
                <p>作者：{{bookItem.author}}</p>
                <p>出版社：{{bookItem.publisher}}</p>
                <p>出版日期：{{bookItem.pubdate}}</p>
                <p>定价：{{bookItem.price}}</p>
            </div>
        </div>

        <button class="shareBtn" open-type="share">分享给好友</button>
        <div class="content">
            <article>
                <h2>作者简介</h2>
                <section>
                   {{bookItem.author_intro}}
                </section>
            </article>
            <article>
                <h2>内容简介</h2>
                <section>
                  {{bookItem.summary}}
                </section>
            </article>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            bookItem:{}
        }
    },

    mounted() {
        // console.log(JSON.stringify(this.$mp.query.bookItem));
        // console.log(this.$mp.query.bookItem);
        this.bookItem = JSON.parse(this.$mp.query.bookItem);
        wx.setNavigationBarTitle({
            title: this.bookItem.title
        })
    },
    onShareAppMessage(event){
        console.log(event)
        return{
            title:'硅谷图书',
            path:'/pages/detail/main',
            imageUrl: '/static/imgs/firstView/nvsheng.jpg'
        }
    }
}
</script>

<style>
  #detailContainer .bookInfo{
      display: flex;
      flex-direction: column;
      /* align-items: center; */
  }

  #detailContainer .bookInfo h1{
      text-align: center;
      font-size: 50rpx;
      font-weight: bold;
      margin: 10rpx 0;
  }
   #detailContainer .bookInfo img{
       width: 70%;
       height: 700rpx;
       margin: 0 auto;
   }
    #detailContainer .bookInfo .info{
        margin-left: 15%;
        line-height: 50rpx;
    }

    .shareBtn{
        width: 300rpx;
        height: 80rpx;
        line-height: 80rpx;
        text-align: center;
        margin: 20rpx auto;
    }
    .content{
        margin: 30rpx 100rpx;
        
    }
    .content article{
        margin-top: 50rpx
    }
    .content h2{
        font-size: 30rpx;
        font-weight: bold;
        color: #02a774;
        text-align: center;
        margin: 10rpx auto;
    }
    .content section{
        text-indent: 28rpx;
        font-size: 28rpx;
    }
</style>