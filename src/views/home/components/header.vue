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
        height: 3vw;
        min-height: 0.3rem;
        .content{
            display: block;
            margin: 0 auto;
            width: 62.5vw;
            position: relative;
            .logo{
                position: absolute;
                left: 0;
                top: 0.8vw;
                img{
                    width: 6.39vw;
                    min-width: 1rem;
                }
            }
            .lang{
                position: absolute;
                right: 0;
                background: rgba(255,255,255,1);
                @media screen and (min-device-width: 768px){
                    width: 7.182vw;
                    min-width: 1rem;
                    height: 1.71vw;
                    min-height: 0.2rem;
                    border-radius: 0.855vw;
                    top: 0.7vw;
                }
                @media screen and (max-device-width: 768px){
                    width: 22%;
                    height: 2.05vw;
                    border-radius: 1.025vw;
                    top: 1.2vw;
                }
                ul{
                    line-height: 1.71vw;
                    li{

                        display: inline-block;
                        width: 32%;
                        border-right: 1px solid #999999;
                        line-height: 75%;
                        text-align: center;
                        color: #666666;
                        cursor: pointer;

                        @media screen and (min-device-width: 768px){
                            font-size: 0.8vw;
                        }
                        @media screen and (max-device-width: 768px){
                            font-size: 1.2vw;
                        }
                        &:nth-child(3){
                            border-right: none;
                        }
                        &.select{
                            color: #2F54EB;
                        }
                        @media screen and (min-device-width: 601px){
                            html{ font-size:100px;}
                        }
                    }

                }
            }
        }
    }
</style>
