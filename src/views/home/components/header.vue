<template>
    <div class="header">
        <div class="content">
            <div class="logo">
                <img :src="logo[lang]" alt="" />
            </div>
            <div class="lang">
                <ul>
                    <li :class="lang==='cn'?'select':''" @click="changeLang('cn')">简</li>
                    <li :class="lang==='tw'?'select':''" @click="changeLang('tw')">繁</li>
                    <li :class="lang==='en'?'select':''" @click="changeLang('en')">EN</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import webLogoCn from '@/assets/images/home/header/web_logo_cn.png'
    import webLogoEn from '@/assets/images/home/header/web_logo_en.png'
    import webLogoTw from '@/assets/images/home/header/web_logo_tw.png'
    import wapLogoCn from '@/assets/images/home/header/wap_logo_cn.png'
    import wapLogoEn from '@/assets/images/home/header/wap_logo_en.png'
    import wapLogoTw from '@/assets/images/home/header/wap_logo_tw.png'
    export default {
        name: "BgsHeader",
        data() {
            return {
                webLogo: {
                    cn: webLogoCn,
                    en: webLogoEn,
                    tw: webLogoTw
                },
                wapLogo: {
                    cn: wapLogoCn,
                    en: wapLogoEn,
                    tw: wapLogoTw
                }
            }
        },
        computed: {
            lang() {
                return localStorage.getItem('LANG')
            },
            logo() {
                if(this.isWeb()) {
                    return this.webLogo
                } else {
                    return this.wapLogo
                }
            }
        },
        methods: {
            changeLang(lang) {
                localStorage.setItem('LANG', lang);
                location.reload()
            },
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

<style lang="less" scoped>
    .header{
        z-index: 999;
        width: 100%;
        background: #ffffff;
        @media screen and (min-device-width: 768px){
            height: 3vw;
        }
        @media screen and (max-device-width: 767px){
            height: 8vw;
        }
        min-height: 0.3rem;
        .content{
            display: block;
            margin: 0 auto;
            @media screen and (min-device-width: 768px){
                width: 62.5vw;
            }
            @media screen and (max-device-width: 767px){
                width: 100vw;
            }
            position: relative;
            .logo{
                position: absolute;
                left: 0;
                top: 0.8vw;
                img{
                    min-width: 1rem;
                    position: absolute;
                    @media screen and (min-device-width: 768px){
                        width: 6.39vw;
                        top: 0;
                        left: 0;
                    }
                    @media screen and (max-device-width: 767px){
                        width: 20vw;
                        top: 1vw;
                        left: 5vw;
                    }
                }
            }
            .lang{
                position: absolute;
                top: 0;
                right: 0;
                background: rgba(255,255,255,1);
                @media screen and (min-device-width: 768px){
                    width: 7.182vw;
                    min-width: 1rem;
                    height: 1.71vw;
                    min-height: 0.2rem;
                    border-radius: 0.855vw;
                    top: 1.1vw;
                }
                @media screen and (max-device-width: 767px){
                    width: 30vw;
                    height: 8vw;
                    border-radius: 1.025vw;
                    top: 2.5vw;
                }
                ul{
                    @media screen and (min-device-width: 768px){
                        width: 7.182vw;
                        min-width: 1rem;
                    }
                    @media screen and (max-device-width: 767px){
                        width: 20vw;
                    }
                    li{
                        width: 32%;
                        float: left;
                        border-right: 1px solid #999999;
                        line-height: 75%;
                        text-align: center;
                        color: #666666;
                        cursor: pointer;
                        @media screen and (min-device-width: 768px){
                            font-size: 0.8vw;
                        }
                        @media screen and (max-device-width: 767px){
                            font-size: 4vw;
                        }
                        &:nth-child(3){
                            border-right: none;
                        }
                        &.select{
                            color: #2F54EB;
                        }
                    }

                }
            }
        }
    }
</style>
