<template>
    <div class="withdrawl">
        <p class="title">{{ $t('withdrawlTitle') }}</p>
        <ul class="content">
            <li>
                <i class="icon-lamp"></i>
                <p class="contTitle">{{ $t('lampTitle') }}</p>
                <p class="contText">{{ $t('lampText') }}</p>
            </li>
            <li>
                <i class="icon-clock"></i>
                <p class="contTitle">{{ $t('clockTitle') }}</p>
                <p class="contText">{{ $t('clockText') }}</p>
            </li>
            <li>
                <i class="icon-lock"></i>
                <p class="contTitle">{{ $t('lockTitle') }}</p>
                <p :style="lang==='en'?'line-height: 1.5vw;':''" class="contText">{{ $t('lockText') }}</p>
            </li>
        </ul>
        <div class="styles">
            <p class="styleTitle">{{ $t('styleTitle') }}</p>
            <p class="styleText">{{ $t('styleText') }}</p>
            <ul class="styleImg">
                <li v-for="(item, index) in styles" :key="index">
                    <img :src="item.img" alt="">
                    <p>{{ $t(item.name) }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import BlueStyle from '@/assets/images/home/withdrawl/blue.png'
    import GoldenStyle from '@/assets/images/home/withdrawl/golden.png'
    import WhiteStyle from '@/assets/images/home/withdrawl/white.png'
    import BetStyle from '@/assets/images/home/withdrawl/bet.png'
    export default {
        name: "withdrawl",
        data() {
            return {
                styles: [
                    {
                        img: WhiteStyle,
                        name: 'whiteColor'
                    },
                    {
                        img: BetStyle,
                        name: 'betColor'
                    },
                    {
                        img: BlueStyle,
                        name: 'blueColor'
                    },
                    {
                        img: GoldenStyle,
                        name: 'goldenColor'
                    },
                ]
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
    .withdrawl{
        overflow: hidden;
        background: url("../../../assets/images/home/withdrawl/withdrawl_bg.jpg") no-repeat;
        background-size: cover;
        padding: 6vw 0 13vw 0;
        @media screen and (max-device-width: 768px){
            padding: 4.56vw 0 15vw 0;
        }
        color: #ffffff;
        p.title{
            margin-bottom: 2vw;
            color: #ffffff;
        }
        .content{
            @media screen and (max-device-width: 768px){
                transform: scale(1.4);
                margin: 10vw 14vw;
            }
            width: 70vw;
            margin: 0 auto;
            li{
                display: inline-block;
                width: 23vw;
                height: 26.5vw;
                text-align: center;
                cursor: pointer;
                vertical-align: bottom;
                text-indent: -1vw;
                &:nth-child(2){
                    .contText{
                        width: 14vw;
                    }
                    @media screen and (max-device-width: 768px){
                        background-image: url("../../../assets/images/home/withdrawl/selectBg.png");
                        background-repeat: no-repeat;
                        background-size: contain;
                        .contTitle{
                            color: rgba(33,33,40,1);
                        }
                        .contText{
                            color: #555567;
                        }
                        i{
                            &.icon-clock{
                                background-image: url("../../../assets/images/home/withdrawl/2_select.png");
                            }
                        }
                    }
                }
                i{
                    display: block;
                    margin: 6vw 0 3vw 9.5vw;
                    background-repeat: no-repeat;
                    background-size: contain;
                    &.icon-lamp{
                        width: 2.85vw;
                        height: 3.08vw;
                        margin-bottom: 3.2vw;
                        background-image: url("../../../assets/images/home/withdrawl/1.png");
                    }
                    &.icon-clock{
                        width: 3.42vw;
                        height: 3.42vw;
                        background-image: url("../../../assets/images/home/withdrawl/2.png");
                    }
                    &.icon-lock{
                        width: 2.9vw;
                        height: 3.25vw;
                        background-image: url("../../../assets/images/home/withdrawl/3.png");
                    }
                }
                .contTitle{
                    font-weight: 500;
                    color: #ffffff;
                    line-height: 1.94vw;
                    margin-bottom: 1.37vw;
                }
                .contText{
                    font-size: 1.4vw;
                    color: #ffffff;
                    line-height: 2.28vw;
                    width: 15vw;
                    margin: 0 auto;
                }
                &:hover{
                    background-image: url("../../../assets/images/home/withdrawl/selectBg.png");
                    background-repeat: no-repeat;
                    background-size: contain;
                    .contTitle{
                        color: rgba(33,33,40,1);
                    }
                    .contText{
                        color: #555567;
                    }
                    i{
                        &.icon-lamp{
                            background-image: url("../../../assets/images/home/withdrawl/1_select.png");
                        }
                        &.icon-clock{
                            background-image: url("../../../assets/images/home/withdrawl/2_select.png");
                        }
                        &.icon-lock{
                            background-image: url("../../../assets/images/home/withdrawl/3_select.png");
                        }
                    }
                }
            }
        }
        .styles{
            background: url("../../../assets/images/home/withdrawl/styles.png") no-repeat;
            background-size: cover;
            width: 70vw;
            height: 39.84vw;
            position: relative;
            color: #ffffff;
            padding-top: 10.16vw;
            @media screen and (min-device-width: 768px){
                margin: 3vw 16vw 4.07vw;
            }
            @media screen and (max-device-width: 768px){
                transform: scale(1.2);
                margin: 10vw 10vw 20vw;
            }
            .styleTitle{
                margin-left: 7.81vw;
                @media screen and (min-device-width: 768px){
                    font-size: 2.08vw;
                }
                @media screen and (max-device-width: 768px){
                    font-size: 3.5vw;
                }
                margin-bottom: 1.88vw;
            }
            .styleText{
                margin-left: 7.81vw;
                @media screen and (min-device-width: 768px){
                    font-size: 1.46vw;
                }
                @media screen and (max-device-width: 768px){
                    font-size: 2vw;
                }
                width: 70%;
                display: block;
            }
            .styleImg{
                position: absolute;
                bottom: -10.1vw;
                left: 2vw;
                width: 79vw;
                @media screen and (max-device-width: 768px){
                    bottom: -20vw;
                }
                li{
                    width: 15.6vw;
                    display: inline-block;
                    margin: 0 2vw;
                    img{
                        width: 15.6vw;
                        height: 27.8vw;
                    }
                    p{
                        margin-top: 2.63vw;
                        text-align: center;
                        font-size: 1.35vw;
                        @media screen and (max-device-width: 768px){
                            font-size: 2vw;
                        }
                    }
                }
            }
        }
    }
</style>
