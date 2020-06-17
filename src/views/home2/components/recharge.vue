<template>
    <div class="recharge" :style="!isPC && lang === 'en' ? 'height: 65vw' : ''">
        <p class="title">{{ $t('rechargeTitle') }} <br v-if="!isPC && lang === 'en'" /> {{ $t('withdrawlTitle') }}</p>
        <span v-if="isAnmate" class="leftTitle animate__animated animate__fadeInLeft">{{ $t('rechargeTitle') }}</span>
        <span v-if="isAnmate" class="rightTitle animate__animated animate__fadeInRight">{{ $t('withdrawlTitle') }}</span>
        <div v-if="isAnmate" class="content">
            <ul class="animate__animated animate__fadeInLeft">
                <li v-for="i in 3" :key="i">
                    <i :class="'icon-recharge' + i"></i>
                    <p class="contTitle">{{ rechargeNum[i-1] }}{{ $t('recharge' + (i+1) + '_1') }}</p>
                    <template v-if="isPC">
                        <p class="contText" v-html="$t('recharge' + (i+1) + '_2')"></p>
                    </template>
                    <template v-else>
                        <p class="contText" v-html="$t('recharge' + (i+1) + '_2_wap')"></p>
                    </template>
                </li>
            </ul>

            <ul class="animate__animated animate__fadeInRight">
                <li>
                    <i class="icon-lamp"></i>
                    <p class="contTitle">{{ $t('lampTitle') }}</p>
                    <p class="contText">{{ isPC ? $t('lampText') : $t('lampText_wap') }}</p>
                </li>
                <li>
                    <i class="icon-lock"></i>
                    <p class="contTitle">{{ $t('lockTitle') }}</p>
                    <p :style="lang==='en'?'line-height: 1.5vw;':''" class="contText">{{ isPC ? $t('lockText') : $t('lockText_wap') }}</p>
                </li>
                <li>
                    <i class="icon-clock"></i>
                    <p class="contTitle">{{ $t('clockTitle') }}</p>
                    <p class="contText">{{ isPC ? $t('clockText') : $t('clockText_wap') }}</p>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import scroll from '@/mixins/scroll'
    export default {
        name: "recharge",
        mixins: [scroll],
        data() {
            return{
                rechargeNum: [50,650,15],
                rechargeNumWap: ['>50', '>650', '>15'],
	            isAnmate: false
            }
        },
        computed: {
            lang() {
                return localStorage.getItem('LANG')
            },
	        isPC() {
            	if (localStorage.getItem('isPC') === 'true') {
            		return true
                } else {
            		return false
                }
            },
        },
        mounted() {
	        if (this.isPC) {
		        window.addEventListener('scroll', () => {
			        let{x, y} = this.getPageScroll();//对象的解构赋值——ES6新增
			        //console.log(x, y);//答应水平与垂直方向的滚动距离
			        let clientTop = document.getElementsByClassName('recharge')[0].offsetTop - y; //元素距离浏览器可视区高度
			        if (clientTop <= 500) {
				        this.isAnmate = true
			        } else {
				        this.isAnmate = false
			        }
		        }, true)
	        } else {
		        window.addEventListener('scroll', () => {
			        let{x, y} = this.getPageScroll();//对象的解构赋值——ES6新增
			        //console.log(x, y);//答应水平与垂直方向的滚动距离
			        let clientTop = document.getElementsByClassName('recharge')[0].offsetTop - y; //元素距离浏览器可视区高度
			        if (this.windowHeight - clientTop >= 100) {
				        this.isAnmate = true
			        } else {
				        this.isAnmate = false
			        }
		        }, true)
	        }
        }
    }
</script>

<style lang="less" scoped>
    .recharge{
        font-size: 0;
        overflow: hidden;
        background: #ffffff;
        padding: 2.99vw 0 2.39vw;
        position: relative;
        @media screen and (min-device-width: 768px){
            height: 31vw;
        }
        @media screen and (max-device-width: 767px){
            height: 52vw;
        }
        p.title{
            margin-bottom: 2.56vw;
        }
        .leftTitle,.rightTitle{
            display: block;
            color: #ffffff;
            position: absolute;
            @media screen and (min-device-width: 768px){
                bottom: 22vw;
                font-size: 1.56vw;
            }
            @media screen and (max-device-width: 767px){
                bottom: 32vw;
                font-size: 3vw;
            }
        }
        .leftTitle{
            left: 50%;
            @media screen and (min-device-width: 768px){
                margin-left: -30vw;
            }
            @media screen and (max-device-width: 767px){
                margin-left: -40vw;
            }
            z-index: 3;
        }
        .rightTitle{
            right: 50%;
            @media screen and (min-device-width: 768px){
                margin-right: -30vw;
            }
            @media screen and (max-device-width: 767px){
                margin-right: -40vw;
            }
            z-index: 3;
        }
        .content{
            @media screen and (min-device-width: 768px){
                width: 65vw;
                height: 25vw;
            }
            @media screen and (max-device-width: 767px){
                width: 90vw;
                height: 40vw;
            }
            margin: 0 auto;
            position: relative;
            ul{
                position: absolute;
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                &:nth-child(1) {
                    background-image: url("~@/assets/images/home2/recharge/recharge_bg1.png");
                    @media screen and (min-device-width: 768px){
                        width: 32.5vw;
                        height: 25vw;
                    }
                    @media screen and (max-device-width: 767px){
                        width: 45vw;
                        height: 40vw;
                    }
                    z-index: 2;
                }
                &:nth-child(2) {
                    right: 0;
                    background-image: url("~@/assets/images/home2/recharge/recharge_bg2.png");
                    @media screen and (min-device-width: 768px){
                        width: 33.5vw;
                        height: 24vw;
                        padding-left: 5vw;
                    }
                    @media screen and (max-device-width: 767px){
                        width: 47vw;
                        height: 38vw;
                        padding-left: 5vw;
                    }
                    z-index: 1;
                }
            }
            li{
                display: inline-block;
                @media screen and (min-device-width: 768px){
                    width: 8.3vw;
                    height: 9.17vw;
                    margin: 8.5vw 1.2vw 0;
                }
                @media screen and (max-device-width: 767px){
                    width: 13.2vw;
                    height: 19.17vw;
                    margin: 12vw 0.8vw 0;
                }
                text-align: center;
                cursor: pointer;
                color: #fff;
                vertical-align: bottom;
                i{
                    position: relative;
                    display: block;
                    background-color: #ffffff;
                    border-radius: 50%;
                    @media screen and (min-device-width: 768px){
                        width: 3.1vw;
                        height: 3.1vw;
                        margin: 1vw auto 1vw;
                        background-size: 3.08vw;
                    }
                    @media screen and (max-device-width: 767px){
                        width: 6.07vw;
                        height: 6.07vw;
                        margin: 2.5vw auto 1.5vw;
                        background-size: 8.08vw;
                    }
                    background-repeat: no-repeat;
                    background-position: center;
                    &.icon-recharge1{
                        background-image: url("../../../assets/images/home2/recharge/1.png");
                    }
                    &.icon-recharge2{
                        background-image: url("../../../assets/images/home2/recharge/2.png");
                    }
                    &.icon-recharge3{
                        background-image: url("../../../assets/images/home2/recharge/3.png");
                    }
                    &.icon-lamp{
                        background-image: url("../../../assets/images/home2/recharge/4.png");
                    }
                    &.icon-clock{
                        background-image: url("../../../assets/images/home2/recharge/5.png");
                    }
                    &.icon-lock{
                        background-image: url("../../../assets/images/home2/recharge/6.png");
                    }
                }
                .contTitle{
                    font-weight: 500;
                    color: #ffffff;
                    margin-bottom: 0.2vw;
                    @media screen and (min-device-width: 768px){
                        font-size: 1.11vw;
                        line-height: 1.3vw;
                    }
                    @media screen and (max-device-width: 767px){
                        font-size: 2.5vw;
                        line-height: 2.8vw;
                    }
                }
                .contText{
                    display: block;
                    font-size: 0.68vw;
                    color: #ffffff;
                    margin: 0 auto;
                    @media screen and (min-device-width: 768px){
                        font-size: 0.68vw;
                        line-height: 1.2vw;
                        width: 100%;
                    }
                    @media screen and (max-device-width: 767px){
                        font-size: 2.5vw;
                        line-height: 3vw;
                        width: 100%;
                    }
                }
                &:hover{
                    i{
                        animation: jump 2s ease;
                    }
                    @keyframes jump{
                        0%{
                            top: 0vw;
                        }
                        25%{
                            top: -1vw;
                        }
                        50%{
                            top: 0vw;
                        }
                        75%{
                            top: -0.5vw;
                        }
                        100%{
                            top: 0vw;
                        }
                    }
                }
            }
        }
    }
</style>
