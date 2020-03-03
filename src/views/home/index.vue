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
        <!--强大-->
        <Strong />
        <!--代理模式-->
        <Extend />
        <!--充值方式-->
        <Recharge />
        <!--提现-->
        <Withdrawl />
        <!--广告图-->
        <BgsImg />
        <!--联系我们-->
        <Contact />
    </div>
</template>

<script>
    import BgsHeader from './components/header'
    import SwiperSec from './components/swiper'
    import Plays from './components/plays'
    import Platform from './components/platform'
    import Media from './components/media'
    import Strong from './components/strong'
    import Extend from './components/extend'
    import Recharge from './components/recharge'
    import Withdrawl from './components/withdrawl'
    import BgsImg from './components/bgsImg'
    import Contact from './components/contact'
    export default {
        name: "index",
        components: {
            BgsHeader,
            SwiperSec,
            Plays,
            Platform,
            Media,
            Strong,
            Extend,
            Recharge,
            Withdrawl,
            BgsImg,
            Contact
        },
        data() {
            return {}
        }
    }
</script>

<style lang="less">
    p.title{

        font-weight: 500;
        color: rgba(51,51,51,1);
        text-align: center;
        @media screen and (min-device-width: 768px){
            font-size: 2.08vw;
            line-height: 3.2vw;
        }
        @media screen and (max-device-width: 768px){
            font-size: 5vw;
            line-height: 7vw;
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
