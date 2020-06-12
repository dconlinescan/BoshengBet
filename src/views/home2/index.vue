<template>
    <div>
        <!--头部-->
        <BgsHeader />
        <!--轮播图-->
        <SwiperSec />
        <!--玩法-->
        <Plays />
        <!--平台简介-->
        <Platform />
        <!--动画视频直播-->
        <Media />
        <!--风格-->
        <Styles />
        <!--强大-->
        <StrongSec />
        <!--代理模式-->
        <Extend />
        <!--充值.提现-->
        <Recharge />
        <!--联系我们-->
        <Contact id="contact" />
        <a v-if="isPC" @click="scrollTo" class="serviceBtn"></a>
    </div>
</template>

<script>
	import BgsHeader from './components/header'
	import SwiperSec from './components/swiper'
	import Plays from './components/plays'
	import Platform from './components/platform'
	import Media from './components/media'
	import Styles from './components/styles'
	import StrongSec from './components/strongSec'
	import Extend from './components/extend'
	import Recharge from './components/recharge'
	import Contact from './components/contact'
	import scroll from '@/mixins/scroll'
	export default {
		mixins: [scroll],
		name: "index",
		components: {
			BgsHeader,
			SwiperSec,
			Plays,
			Platform,
			Media,
			Styles,
			StrongSec,
			Extend,
			Recharge,
			Contact
		},
		data() {
			return {
				timer: null
            }
		},
        methods: {
            scrollTo() {
	            clearInterval(this.timer)
	            this.timer = setInterval(() => {
		            document.documentElement.scrollTop += 100
		            if (document.documentElement.scrollTop >= document.documentElement.scrollHeight-this.windowHeight) {
			            clearInterval(this.timer)
		            }
	            }, 20);
            }
        }
	}
</script>

<style lang="less">
    .serviceBtn{
        background-image: url("~@/assets/images/home2/service.png");
        background-repeat: no-repeat;
        background-size: contain;
        width: 72px;
        height: 72px;
        position: fixed;
        bottom: 10%;
        right: 20px;
        z-index: 99;
        cursor: pointer;
    }
    p.title{
        position: relative;
        color: rgba(51,51,51,1);
        text-align: center;
        font-weight: bold;
        display: block;
        width: max-content;
        margin: 0 auto;
        @media screen and (min-device-width: 768px){
            font-size: 1.56vw;
            line-height: 3.2vw;
        }
        @media screen and (max-device-width: 767px){
            max-width: 65vw;
            font-size: 5vw;
            line-height: 7vw;
        }
        &:before,&:after{
            content: '';
            display: inline-block;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            vertical-align: bottom;
            @media screen and (min-device-width: 768px) {
                height: 3.2vw;
                width: 3.38vw;
            }
            @media screen and (max-device-width: 767px) {
                height: 6vw;
                width: 11vw;
                position: absolute;
                top: 50%;
                margin-top: -3vw;
            }
        }
        &:before{
            margin-right: 1.56vw;
            background-image: url("~@/assets/images/home2/public/title_l.png");
            @media screen and (max-device-width: 767px) {
                background-size: 11vw 5vw;
                background-position: top center;
                left: -13vw;
            }
        }
        &:after{
            margin-left: 1.56vw;
            background-image: url("~@/assets/images/home2/public/title_l.png");
            @media screen and (max-device-width: 767px) {
                background-size: 11vw 5vw;
                background-position: top center;
                right: -13vw;
            }
        }
    }
    .underline{
        text-align: center;
        font-size: 1.71vw;
        font-weight: 400;
        color: rgba(28,31,40,1);
        line-height: 2.4vw;
        text-decoration: underline;
        text-decoration-color: #2F54EB;
        -moz-text-decoration-color: #2F54EB;
        margin-bottom: 1.14vw;
    }
</style>
