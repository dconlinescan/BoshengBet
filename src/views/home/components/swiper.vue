<template>
    <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(picitem, index) in items" :key="index">
            <img :src="picitem[lang]" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
    import banner1CnWeb from '@/assets/images/home/swiper/web/banner1_cn.jpg'
    import banner1EnWeb from '@/assets/images/home/swiper/web/banner1_en.jpg'
    import banner1TwWeb from '@/assets/images/home/swiper/web/banner1_tw.jpg'

    import banner2CnWeb from '@/assets/images/home/swiper/web/banner2_cn.jpg'
    import banner2EnWeb from '@/assets/images/home/swiper/web/banner2_en.jpg'
    import banner2TwWeb from '@/assets/images/home/swiper/web/banner2_tw.jpg'

    import banner3CnWeb from '@/assets/images/home/swiper/web/banner3_cn.jpg'
    import banner3EnWeb from '@/assets/images/home/swiper/web/banner3_en.jpg'
    import banner3TwWeb from '@/assets/images/home/swiper/web/banner3_tw.jpg'

    import banner4CnWeb from '@/assets/images/home/swiper/web/banner4_cn.jpg'
    import banner4EnWeb from '@/assets/images/home/swiper/web/banner4_en.jpg'
    import banner4TwWeb from '@/assets/images/home/swiper/web/banner4_tw.jpg'

    import banner1CnWap from '@/assets/images/home/swiper/wap/banner1_cn.jpg'
    import banner1EnWap from '@/assets/images/home/swiper/wap/banner1_en.jpg'
    import banner1TwWap from '@/assets/images/home/swiper/wap/banner1_tw.jpg'

    import banner2CnWap from '@/assets/images/home/swiper/wap/banner2_cn.jpg'
    import banner2EnWap from '@/assets/images/home/swiper/wap/banner2_en.jpg'
    import banner2TwWap from '@/assets/images/home/swiper/wap/banner2_tw.jpg'

    import banner3CnWap from '@/assets/images/home/swiper/wap/banner3_cn.jpg'
    import banner3EnWap from '@/assets/images/home/swiper/wap/banner3_en.jpg'
    import banner3TwWap from '@/assets/images/home/swiper/wap/banner3_tw.jpg'

    import banner4CnWap from '@/assets/images/home/swiper/wap/banner4_cn.jpg'
    import banner4EnWap from '@/assets/images/home/swiper/wap/banner4_en.jpg'
    import banner4TwWap from '@/assets/images/home/swiper/wap/banner4_tw.jpg'

    import 'swiper/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    notNextTick: true,
                    loop: true,
                    autoplay: {
                        delay: 5000,
                        stopOnLastSlide: false,
                        disableOnInteraction: true,
                    },
                    speed: 1000,
                    direction: 'horizontal',
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    pagination: {
                        el: '.swiper-pagination',
                        type: 'bullets',
                        bulletElement : 'li',
                        clickable :true,
                        bulletClass : 'img-bullet'
                    },
                    paginationClickable: true,
                    mousewheelControl: true,
                    observeParents: true,
                    debugger: true
                }
            }
        },
        computed: {
            lang() {
                return localStorage.getItem('LANG')
            },
            items() {
                if (this.isWeb()) {
                    return [
                        {cn: banner1CnWeb, en: banner1EnWeb, tw: banner1TwWeb},
                        {cn: banner2CnWeb, en: banner2EnWeb, tw: banner2TwWeb},
                        {cn: banner3CnWeb, en: banner3EnWeb, tw: banner3TwWeb},
                        {cn: banner4CnWeb, en: banner4EnWeb, tw: banner4TwWeb}
                    ]
                } else {
                    return [
                        {cn: banner1CnWap, en: banner1EnWap, tw: banner1TwWap},
                        {cn: banner2CnWap, en: banner2EnWap, tw: banner2TwWap},
                        {cn: banner3CnWap, en: banner3EnWap, tw: banner3TwWap},
                        {cn: banner4CnWap, en: banner4EnWap, tw: banner4TwWap}
                    ]
                }
            }
        },
        methods: {
            isWeb() {
                const u = navigator.userAgent;
                const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                const dWidth = window.screen.width;
                if(isAndroid || isiOS || dWidth<768){
                    return false
                }else{
                    return true
                }
            }
        }
    }
</script>

<style lang="less">
    .swiper-slide img{
        width: 100%;
    }
    .img-bullet{
        display: inline-block;
        width: 0.91vw;
        height: 0.57vw;
        background: rgba(255,255,255,0.5);
        margin: 0 0.5vw;
        border-radius: 0.25vw;
        &.swiper-pagination-bullet-active{
            width: 1.71vw;
            background: rgba(255,255,255,0.9);
        }
    }
</style>
