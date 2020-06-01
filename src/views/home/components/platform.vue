<template>
    <div :style="lang==='en'?'padding: 9vw 0;':''" class="platform">
        <div class="platform-text" :style="lang==='en'?'paddingTop: 0; marginTop: -3vw':''">
            <p class="title">{{ $t('platformTitle') }}</p>
            <ul>
                <li><i class="icon-1"></i><span>{{ $t('platformText2') }}</span></li>
                <li><i class="icon-2"></i><span>{{ $t('platformText3') }}</span></li>
                <li><i class="icon-3"></i><span>{{ $t('platformText4') }}</span></li>
            </ul>
        </div>
        <div class="platform-img" :style="'background-image: url('+ platform.img[lang] +');'"></div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import platformCn from '@/assets/images/home/platform/platform_cn.png'
    import platformEn from '@/assets/images/home/platform/platform_en.png'
    import platformTw from '@/assets/images/home/platform/platform_tw.png'
    export default {
        name: "platform",
        data() {
            return {
                platform: {
                    img: {
                        cn: platformCn,
                        tw: platformTw,
                        en: platformEn
                    }
                },
            }
        },
        computed: {
            lang() {
                return localStorage.getItem('LANG')
            }
        },
    }
</script>

<style lang="less" scoped>
    .platform{
        overflow: hidden;
        width: 100%;
        padding: 6vw 0 3vw;
        background: #ffffff;
        .platform-img{
            height: 30.4vw;
            background-repeat: no-repeat;
            background-size: contain;
            @media screen and (min-device-width: 768px){
                float: left;
                width: 48vw;
                margin-left: 5vw;
            }
            @media screen and (max-device-width: 767px){
                display: block;
                margin: 12vw auto 6vw;
                background-position: center center;
                width: 100vw;
                transform: scale(1.5);
            }
        }
        .platform-text{
            @media screen and (min-device-width: 768px){
                float: right;
                width: 40vw;
                font-size: 1.6vw;
                margin-right: 5vw;
            }
            @media screen and (max-device-width: 767px){
                display: block;
                margin: 2vw auto 5vw;
                width: 90vw;
                font-size: 3vw;
            }
            display: inline-block;
            vertical-align: top;
            ul{
                margin-top: 2.5vw;
                li{
                    font-weight: 400;
                    color: rgba(77,77,77,1);
                    line-height: 2.28vw;
                    margin-bottom: 0.7vw;
                    i{
                        width: 1.71vw;
                        height: 1.71vw;
                        display: inline-block;
                        vertical-align: top;
                        margin: 0.4vw 1.41vw 0 0.63vw;
                        background-size: contain;
                        background-repeat: no-repeat;
                        &.icon-1{
                            background-image: url('../../../assets/images/home/platform/1.png');
                        }
                        &.icon-2{
                            background-image: url("../../../assets/images/home/platform/2.png");
                        }
                        &.icon-3{
                            background-image: url("../../../assets/images/home/platform/3.png");
                        }
                        @media screen and (max-device-width: 767px){
                            transform: scale(1.6);
                            margin-top: 1.5vw;
                        }
                    }
                    span{
                        display: inline-block;
                        @media screen and (min-device-width: 768px){
                            width: 36vw;
                        }
                        @media screen and (max-device-width: 767px){
                            width: 85vw;
                            line-height: 4vw;
                        }
                    }
                }
            }
        }
        .clear{
            clear: both;
        }
    }
</style>
