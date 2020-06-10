<template>
    <div id="firstViewContainer">
        <swiper @change="handleChange" :indicator-dots="index !== 3" indicator-color="pink" indicator-active-color="green">
            <!-- <swiper-item>
                <img src="/static/imgs/firstView/1.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/imgs/firstView/2.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/imgs/firstView/3.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="/static/imgs/firstView/nvsheng.jpg" alt="">
            </swiper-item> -->
            
            <swiper-item>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585830683217&di=92d16bbbcf07444aa9d2c19fb6c46fd1&imgtype=0&src=http%3A%2F%2Fbbs-fd.zol-img.com.cn%2Ft_s800x5000%2Fg5%2FM00%2F01%2F00%2FChMkJlZq9rmIdgqiAAj7Ckz_pjoAAGDNQAvVgkACPsi592.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585830683221&di=bccec1803b6cbe180f3293f02235c15a&imgtype=0&src=http%3A%2F%2Fpic2.zhimg.com%2F50%2Fv2-57ed15fbf04fc93bbeb37038853c1f88_hd.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585830683221&di=8b58c83893128ac62a4a61b7ae0f2038&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F55e736d12f2eb93817c4ba7ad7628535e4dd6f89.jpg" alt="">
            </swiper-item>
            <swiper-item>
                <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1585830683220&di=e326042f9bf9f39c6bd3279201306ba1&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201901%2F27%2F20190127081526_SAPVM.jpeg" alt="">
            </swiper-item>
            
        </swiper>
        

        <button class="btn" v-show="index === 3" @click="toindex">开始体验</button>
    </div>
</template>


<script>
export default {
    data() {
        return {
            index: 0
        }
    },
    methods: {
        handleChange(e){
            // console.log(e.mp.detail.current)
            this.index = e.mp.detail.current;
        },
        toindex(){
           
            wx.switchTab({
                url: '/pages/index/main'
            })
        }
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #firstViewContainer
        width 100%
        height 100%
        swiper 
            width 100%
            height 100%
            img 
                width 100%
                height 100%
        .btn
            width 280rpx
            height 80rpx
            line-height 80rpx
            text-align center
            position absolute
            bottom 20rpx
            left 50%
            margin-left -140rpx
            background-color rgba(255,255,255,0.3)
</style>