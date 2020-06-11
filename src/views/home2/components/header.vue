<template>
    <div class="header">
        <div class="content">
            <div class="logo">
                <img :src="logo[lang]" alt="" />
            </div>
            <template v-if="!isPC">
                <div class="lang" @click.stop="langListShow = !langListShow">
                    <span class="langShow">{{ langName }}<i class="angle" :class="langListShow ? 'down' : ''"></i></span>
                    <ul v-if="langListShow" class="selectBar">
                        <li :class="lang==='cn'?'select':''" @click="changeLang('cn')">简体中文</li>
                        <li :class="lang==='tw'?'select':''" @click="changeLang('tw')">繁體中文</li>
                        <li :class="lang==='en'?'select':''" @click="changeLang('en')">English</li>
                    </ul>
                </div>
            </template>
            <template v-else>
                <div class="lang">
                    <ul>
                        <li :class="lang==='cn'?'select':''" @click="changeLang('cn')">简</li>
                        <li :class="lang==='tw'?'select':''" @click="changeLang('tw')">繁</li>
                        <li :class="lang==='en'?'select':''" @click="changeLang('en')">EN</li>
                    </ul>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    import webLogoCn from '@/assets/images/home2/header/web_logo_cn.png'
    import webLogoEn from '@/assets/images/home2/header/web_logo_en.png'
    import webLogoTw from '@/assets/images/home2/header/web_logo_tw.png'
    import wapLogoCn from '@/assets/images/home2/header/wap_logo_cn.png'
    import wapLogoEn from '@/assets/images/home2/header/wap_logo_en.png'
    import wapLogoTw from '@/assets/images/home2/header/wap_logo_tw.png'
    export default {
        name: "BgsHeader",
        data() {
            return {
	            langName: '简体中文',
	            langListShow: false,
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
	            switch (localStorage.getItem('LANG')) {
		            case 'cn': this.langName = '简体中文';break;
		            case 'tw': this.langName = '繁體中文';break;
		            case 'en': this.langName = 'English';break;
                    default: this.langName = '简体中文';break;
	            }
                return localStorage.getItem('LANG')
            },
            logo() {
                if(this.isWeb()) {
                    return this.webLogo
                } else {
                    return this.wapLogo
                }
            },
	        isPC() {
		        if (localStorage.getItem('isPC') === 'true') {
			        return true
		        } else {
			        return false
		        }
	        },
        },
        created() {
        	document.onclick = (e)=>{
		        e = e || window.event;
		        let t = e.target || e.srcElement;
		        if (t.className === 'lang') return
		        if(this.langListShow) {
			        this.langListShow = false
		        }
	        }
	        // window.onclick = () => {
		    //     if(this.langListShow) {
			//         this.langListShow = false
            //     }
            // }
        },
        methods: {
            changeLang(lang) {
            	switch (lang) {
                    case 'cn': this.langName = '简体中文';break;
		            case 'tw': this.langName = '繁體中文';break;
		            case 'en': this.langName = 'English';break;
	            }
	            if (lang !== localStorage.getItem('LANG')) {
		            localStorage.setItem('LANG', lang);
		            location.reload()
                }
            },
            isWeb() {
                const u = navigator.userAgent;
                const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                const dWidth = window.screen.width;
                if (isAndroid || isiOS || dWidth < 768) {
                    return false
                } else {
                    return true
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .header{
        position: absolute;
        top: 0;
        left: 0;
        z-index: 999;
        width: 100%;
        @media screen and (min-device-width: 768px){
            height: 3vw;
        }
        @media screen and (max-device-width: 767px){
            height: 3vw;
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
            @media screen and (min-device-width: 768px){
                .lang{
                    position: absolute;
                    right: 0;
                    background: rgba(255,255,255,.5);
                    width: 7.182vw;
                    min-width: 1rem;
                    height: 1.71vw;
                    min-height: 0.2rem;
                    border-radius: 0.855vw;
                    top: 1.1vw;
                    ul{
                        width: 7.182vw;
                        min-width: 1rem;
                        li{
                            margin-top: 0.35vw;
                            width: 32%;
                            display: inline-block;
                            border-right: 1px solid #fff;
                            line-height: 1vw;
                            text-align: center;
                            color: #fff;
                            cursor: pointer;
                            font-size: 0.8vw;
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
            @media screen and (max-device-width: 767px){
                .lang{
                    position: absolute;
                    border: 1px solid #ffffff;
                    background: #ffffff;
                    cursor: pointer;
                    width: 12vw;
                    height: 4vw;
                    right: 2vw;
                    top: 2.5vw;
                    .langShow{
                        display: block;
                        width: 100%;
                        height: 100%;
                        color: #666666;
                        text-align: center;
                        position: relative;
                        font-size: 2vw;
                        line-height: 4vw;
                        .angle{
                            position: relative;
                            display: inline-block;
                            width: 1.2vw;
                            height: 1vw;
                            &:after{
                                content: '';
                                position: absolute;
                                width: 0;
                                height: 0;
                                border-style: solid;
                                transition: all 0.5s;
                                border-color: #666666 transparent transparent transparent;
                                top: 0;
                                left: 0;
                                border-width: 1vw;
                                transform-origin: 0.8vw 0.3vw;
                            }
                            &.down{
                                &:after{
                                    transform: rotate(-180deg);
                                }
                            }
                        }
                    }
                    ul.selectBar{
                        position: absolute;
                        right: 0;
                        background: #ffffff;
                        box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.20);
                        width: 20vw;
                        top: 4.2vw;
                        li{
                            width: 100%;
                            text-align: center;
                            color: #666666;
                            cursor: pointer;
                            font-size: 4vw;
                            line-height: 6vw;
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
    }
</style>
