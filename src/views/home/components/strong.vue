<template>
    <div class="strongSec">
        <p class="title">{{ $t('strongTitle') }}</p>
        <ul :class="lang==='en'?'pd30vw':''">
            <li>
                <i></i>
                <div :style="lang==='en'?'vertical-align: middle;':''">
                    <p :style="lang==='en'?'width:25vw;':''" class="strongTitle">{{ $t('strongTitle1') }}</p>
                    <span :style="lang==='en'?'width:25vw;':''">{{ $t('strongText1') }}</span>
                </div>
            </li>
            <li>
                <div>
                    <p :style="lang==='en'?'margin-left:5vw':''" class="strongTitle">{{ $t('strongTitle2') }}</p>
                    <span :style="lang==='en'?'width:25vw;margin-left:5vw':''">{{ $t('strongText2') }}</span>
                </div>
                <i></i>
            </li>
            <li>
                <i></i>
                <div :style="lang==='en'?'vertical-align: middle;':''">
                    <p :style="lang==='en'?'width:25vw;':''" class="strongTitle">{{ $t('strongTitle3') }}</p>
                    <span :style="lang==='en'?'width:25vw;':''">{{ $t('strongText3') }}</span>
                </div>
            </li>
            <li>
                <div>
                    <p :style="lang==='en'?'margin-left:5vw':''" class="strongTitle">{{ $t('strongTitle4') }}</p>
                    <span :style="lang==='en'?'width:25vw;margin-left:5vw':''">{{ $t('strongText4') }}</span>
                </div>
                <i></i>
            </li>
            <li>
                <i></i>
                <div :style="lang==='en'?'vertical-align: middle;':''">
                    <p :style="lang==='en'?'width:25vw;':''" class="strongTitle">{{ $t('strongTitle5') }}</p>
                    <span :style="lang==='en'?'width:25vw;':''">{{ $t('strongText5') }}</span>
                </div>
            </li>
            <li>
                <div>
                    <p :style="lang==='en'?'margin-left:5vw':''" class="strongTitle">{{ $t('strongTitle6') }}</p>
                    <span :style="lang==='en'?'width:25vw;margin-left:5vw':''">{{ $t('strongText6') }}</span>
                </div>
                <i></i>
            </li>
            <li>
                <i></i>
                <div :style="lang==='en'?'vertical-align: middle; width:30vw;':''">
                    <p :style="lang==='en'?'width:25vw;':''" class="strongTitle">{{ $t('strongTitle7') }}</p>
                    <span :style="lang==='en'?'width:25vw;':''">{{ $t('strongText7') }}</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "strong",
        data() {
            return{}
        },
        computed: {
            lang() {
                return localStorage.getItem('LANG')
            }
        },
    }
</script>

<style lang="less" scoped>
    .strongSec{
        overflow: hidden;
        color: rgba(255,255,255,1);
        width: 100%;
        background-image: url("../../../assets/images/home/strong/strong_bg.jpg");
        background-size: contain;
        p.title{
            color: rgba(255,255,255,1);
            padding-top: 6vw;
            margin-bottom: 0.755vw;
        }
        ul{
            @media screen and (max-device-width: 768px){
                width: 95vw;
                text-align: center;
                transform: scale(1.3);
                padding: 30vw 0;
                &.pd30vw{
                    padding: 60vw 0;
                }
            }
            @media screen and (min-device-width: 768px){
                width: 70vw;
            }
            display: block;
            margin: 0 auto;
            li{
                i{
                    display: inline-block;
                    background-repeat: no-repeat;
                    background-size: contain;
                    vertical-align: middle;
                }
                div{
                    display: inline-block;
                    p.strongTitle{
                        font-weight: 500;
                        position: relative;
                        margin-bottom: 2.03vw;
                        @media screen and (max-device-width: 768px){
                            font-size: 3vw;
                            line-height: 4vw;
                        }
                        @media screen and (min-device-width: 768px){
                            font-size: 1.45vw;
                            line-height: 2.33vw;
                        }
                        &::after{
                            content: '';
                            background-image: url("../../../assets/images/home/strong/strong_after.jpg");
                            background-repeat: no-repeat;
                            background-size: contain;
                            width: 1.63vw;
                            height: 0.17vw;
                            display: block;
                            position: absolute;
                            bottom: -1vw;
                            left: 0;
                        }
                    }
                    span{
                        display: inline-block;
                        @media screen and (min-device-width: 768px){
                            width: 19vw;
                            font-size: 1.15vw;
                            line-height: 1.74vw;
                        }
                        @media screen and (max-device-width: 768px){
                            width: 30vw;
                            font-size: 2vw;
                            line-height: 2.5vw;
                        }
                    }
                }
                &:nth-child(odd){
                    i{
                        width: 34.5vw;
                        height: 25vw;
                        margin: 2vw 4vw 1vw 1.5vw;
                    }
                    div{
                        text-align: left;
                        @media screen and (min-device-width: 768px){
                            vertical-align: top;
                            padding-top: 1vw;
                        }
                        @media screen and (max-device-width: 768px){
                            vertical-align: middle;
                            padding-top: 1vw;
                        }
                    }
                }
                &:nth-child(even){
                    i{
                        width: 33vw;
                        height: 21vw;
                        margin: 1vw 0 1vw 0;
                    }
                    div{
                        text-align: left;
                        @media screen and (min-device-width: 768px){
                            vertical-align: top;
                            padding-top: 1vw;
                            p{
                                margin-left: 9vw;
                            }
                            span{
                                margin-left: 9vw;
                            }
                        }
                        @media screen and (max-device-width: 768px){
                            vertical-align: middle;
                            padding-top: 1vw;
                        }

                    }
                }
                &:nth-child(1){
                    i{
                        background-image: url("../../../assets/images/home/strong/1.png");
                    }
                }
                &:nth-child(2){
                    i{
                        background-image: url("../../../assets/images/home/strong/2.png");
                    }
                    div{
                        width: 34.3vw;
                    }
                }
                &:nth-child(3){
                    i{
                        background-image: url("../../../assets/images/home/strong/3.png");
                    }
                }
                &:nth-child(4){
                    i{
                        background-image: url("../../../assets/images/home/strong/4.png");
                    }
                    div{
                        width: 32.5vw;
                    }
                }
                &:nth-child(5){
                    i{
                        margin-bottom: 0;
                        background-image: url("../../../assets/images/home/strong/5.png");
                    }
                }
                &:nth-child(6){
                    i{
                        margin-bottom: 1vw;
                        background-image: url("../../../assets/images/home/strong/6.png");
                    }
                    div{
                        width: 32.5vw;
                    }
                }
                &:nth-child(7){
                    i{
                        margin-bottom: 4vw;
                        background-image: url("../../../assets/images/home/strong/7.png");
                    }
                    div{
                        vertical-align: middle;
                    }
                }
            }
        }
    }
</style>
