<template>
    <div class="strongSec">
        <p class="title">{{ isPC ? $t('strongTitle') : $t('strongTitle_wap')}}</p>
        <template v-if="isPC">
            <ul class="strongUl">
                <li>
                    <i></i>
                    <div :class="lang === 'en' ? 'enMobile' : ''">
                        <p  class="strongTitle">{{ $t('strongTitle1') }}</p>
                        <span>{{ $t('strongText1') }}</span>
                    </div>
                </li>
                <li>
                    <i></i>
                    <div :class="lang === 'en' ? 'enMobile' : ''">
                        <p class="strongTitle">{{ $t('strongTitle2') }}</p>
                        <span>{{ $t('strongText2') }}</span>
                    </div>
                </li>
                <li>
                    <i></i>
                    <div :class="lang === 'en' ? 'enMobile' : ''">
                        <p class="strongTitle">{{ $t('strongTitle3') }}</p>
                        <span>{{ $t('strongText3') }}</span>
                    </div>
                </li>
                <li>
                    <i></i>
                    <div :class="lang === 'en' ? 'enMobile' : ''">
                        <p class="strongTitle">{{ $t('strongTitle4') }}</p>
                        <span>{{ $t('strongText4') }}</span>
                    </div>
                </li>
                <li>
                    <i></i>
                    <div :class="lang === 'en' ? 'enMobile' : ''">
                        <p class="strongTitle">{{ $t('strongTitle5') }}</p>
                        <span>{{ $t('strongText5') }}</span>
                    </div>
                </li>
                <li>
                    <i></i>
                    <div :class="lang === 'en' ? 'enMobile' : ''">
                        <p class="strongTitle">{{ $t('strongTitle6') }}</p>
                        <span>{{ $t('strongText6') }}</span>
                    </div>
                </li>
                <li>
                    <i></i>
                    <div :class="lang === 'en' ? 'enMobile' : ''">
                        <p class="strongTitle">{{ $t('strongTitle7') }}</p>
                        <span>{{ $t('strongText7') }}</span>
                    </div>
                </li>
            </ul>
        </template>
        <template v-else>
            <ul class="wapStrongUl">
                <li v-for="i in 7" :key="i">
                    <i :class="lang === 'en' ? 'enMobile' : ''">{{ spiText[lang][i-1] }}</i>
                    <p>{{ $t('strongTitle'+i) }}</p>
                </li>
            </ul>
        </template>
    </div>
</template>

<script>
    export default {
        name: "strongSec",
        data() {
            return{
            	spiText: {
            		cn: ['快','防','活','控', '视', '全', '优'],
                    en: ['F', 'P', 'F', 'C', 'V', 'O', 'Q'],
                    tw: ['快', '防', '活', '控', '視', '全', '優']
                }
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
	        }
        },
    }
</script>

<style lang="less" scoped>
    .strongSec{
        overflow: hidden;
        color: rgba(255,255,255,1);
        width: 100%;
        @media screen and (max-device-width: 767px){
            background-image: url("../../../assets/images/home/strong/strong_bg_wap.jpg");
        }
        @media screen and (min-device-width: 768px){
            background-image: url("../../../assets/images/home/strong/strong_bg.jpg");
        }

        background-size: cover;
        background-repeat: no-repeat;
        padding-bottom: 1.92vw;
        p.title{
            color: rgba(255,255,255,1);
            padding-top: 3.88vw;
            margin-bottom: 3vw;
        }
        ul.strongUl{
            @media screen and (max-device-width: 767px){
                width: 80vw;
                text-align: center;
            }
            @media screen and (min-device-width: 768px){
                width: 51.2vw;
            }
            display: block;
            margin: 0 auto;
            li{
                @media screen and (max-device-width: 767px){
                    width: 37vw;
                    height: 35vw;
                    margin-right: 5vw;
                    margin-bottom: 5vw;
                }
                @media screen and (min-device-width: 768px){
                    width: 16.2vw;
                    height: 15.35vw;
                    margin-right: 1.28vw;
                    margin-bottom: 1.28vw;
                }
                position: relative;
                display: inline-block;

                overflow: hidden;
                i{
                    width: 100%;
                    height: 100%;
                    display: inline-block;
                    background-repeat: no-repeat;
                    background-size: contain;
                    vertical-align: middle;
                }
                div{
                    height: 100%;
                    position: absolute;
                    @media screen and (max-device-width: 767px){
                        top: 3vw;
                        &.enMobile{
                            top: 0;
                        }
                        padding: 2vw;
                    }
                    @media screen and (min-device-width: 768px){
                        padding: 8.5vw 1vw;
                    }
                    left: 0;
                    display: inline-block;

                    transition: padding 0.5s;
                    -webkit-transition: padding 0.5s; /* Safari */
                    p.strongTitle{
                        font-weight: 500;
                        position: relative;

                        text-align: left;
                        @media screen and (max-device-width: 767px){
                            font-size: 3.5vw;
                            line-height: 4vw;
                            margin-bottom: 2vw;
                        }
                        @media screen and (min-device-width: 768px){
                            font-size: 1vw;
                            line-height: 1.5vw;
                            margin-bottom: 1.4vw;
                        }
                        font-size: 1vw;
                        line-height: 2.33vw;
                        &::after{
                            content: '';
                            background-image: url("../../../assets/images/home/strong/strong_after.jpg");
                            background-repeat: no-repeat;
                            @media screen and (max-device-width: 767px){
                                width: 4vw;
                                height: 1.17vw;
                                bottom: -1.5vw;
                            }
                            @media screen and (min-device-width: 768px){
                                width: 1.63vw;
                                height: 0.17vw;
                                bottom: -0.52vw;
                            }

                            display: block;
                            position: absolute;
                            left: 0;
                        }
                    }
                    span{
                        text-align: left;
                        display: inline-block;
                        width: 100%;
                        font-size: 0.77vw;
                        line-height: 1.5vw;
                        @media screen and (min-device-width: 768px){
                            font-size: 0.77vw;
                            line-height: 1.3vw;
                        }
                        @media screen and (max-device-width: 767px){
                            font-size: 2.5vw;
                            line-height: 3.5vw;
                        }
                    }
                    &:hover{
                        @media screen and (min-device-width: 768px) {
                            padding: 1vw;
                        }
                    }
                }
                &:nth-child(1){
                    i{
                        background-image: url("../../../assets/images/home/strong/1.png");
                    }
                }
                &:nth-child(2){
                    @media screen and (max-device-width: 767px){
                        margin-right: 0;
                    }
                    i{
                        background-image: url("../../../assets/images/home/strong/2.png");
                    }
                }
                &:nth-child(3){
                    margin-right: 0;
                    @media screen and (max-device-width: 767px){
                        margin-right: 5vw;
                    }
                    i{
                        background-image: url("../../../assets/images/home/strong/3.png");
                    }
                }
                &:nth-child(4){
                    @media screen and (max-device-width: 767px){
                        margin-right: 0;
                    }
                    i{
                        background-image: url("../../../assets/images/home/strong/4.png");
                    }
                }
                &:nth-child(5){
                    @media screen and (max-device-width: 767px){
                        i{
                            background-image: url("../../../assets/images/home/strong/5_wap.png");
                        }
                    }
                    @media screen and (min-device-width: 768px){
                        width: 33.7vw;
                        margin-right: 0;
                        i{
                            background-image: url("../../../assets/images/home/strong/5.png");
                        }
                    }
                }
                &:nth-child(6){
                    @media screen and (max-device-width: 767px){
                        margin-right: 0;
                    }
                    i{
                        background-image: url("../../../assets/images/home/strong/6.png");
                    }
                }
                &:nth-child(7){
                    @media screen and (max-device-width: 767px){
                        width: 100%;
                        background-size: cover;
                    }
                    @media screen and (min-device-width: 768px){
                        width: 33.7vw;
                    }
                    margin-right: 0;
                    i{
                        @media screen and (max-device-width: 767px){
                            background-size: cover;
                        }
                        background-image: url("../../../assets/images/home/strong/7.png");
                    }
                }
            }
        }
        ul.wapStrongUl{
            padding: 0;
            margin: 0;
            li{
                display: block;
                margin: 4vw auto;
                width: 80vw;
                height: calc(80vw / 5.19);
                background-repeat: no-repeat;
                position: relative;
                overflow: hidden;
                i{
                    height: 100%;
                    display: inline-block;
                    width: calc(80vw / 5.19);
                    background-image: url("~@/assets/images/home/recharge/angle.png");
                    background-repeat: no-repeat;
                    font-size: 5vw;
                    text-indent: 1.5vw;
                    font-style: unset;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index:2;
                    &.enMobile{
                        font-size: 5.5vw;
                        text-indent: 2vw;
                    }
                }
                p{
                    text-indent: calc(60vw / 5.19);
                    font-size: 4.5vw;
                    line-height: calc(80vw / 5.19);
                }
                &:nth-child(1){
                    background-image: url("~@/assets/images/home/recharge/1.jpg");
                }
                &:nth-child(2){
                    background-image: url("~@/assets/images/home/recharge/2.jpg");
                }
                &:nth-child(3){
                    background-image: url("~@/assets/images/home/recharge/3.jpg");
                }
                &:nth-child(4){
                    background-image: url("~@/assets/images/home/recharge/4.jpg");
                }
                &:nth-child(5){
                    background-image: url("~@/assets/images/home/recharge/5.jpg");
                }
                &:nth-child(6){
                    background-image: url("~@/assets/images/home/recharge/6.jpg");
                }
                &:nth-child(7){
                    background-image: url("~@/assets/images/home/recharge/7.jpg");
                }
            }
        }
    }
</style>
