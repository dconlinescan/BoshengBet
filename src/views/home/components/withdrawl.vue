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
                <i class="icon-lock"></i>
                <p class="contTitle">{{ $t('lockTitle') }}</p>
                <p :style="lang==='en'?'line-height: 1.5vw;':''" class="contText">{{ $t('lockText') }}</p>
            </li>
            <li>
                <i class="icon-clock"></i>
                <p class="contTitle">{{ $t('clockTitle') }}</p>
                <p class="contText">{{ $t('clockText') }}</p>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "withdrawl",
        data() {
            return {

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
        background: url("../../../assets/images/home/withdrawl/withdrawl_bg.png") no-repeat;
        background-size: cover;
        padding: 6vw 0 12vw 0;
        @media screen and (max-device-width: 767px){
            padding: 4.56vw 0 15vw 0;
        }
        color: #ffffff;
        p.title{
            margin-bottom: 2vw;
            color: #ffffff;
        }
        .content{
            @media screen and (max-device-width: 767px){
                transform: scale(1.4);
                margin: 10vw 14vw;
                padding-bottom: 5vw;
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
                    @media screen and (max-device-width: 767px){
                        .contText{
                            width: 13vw;
                        }
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
                            &.icon-lock{
                                background-image: url("../../../assets/images/home/withdrawl/3_select.png");
                            }
                        }
                    }
                }
                i{
                    display: block;
                    @media screen and (max-device-width: 767px){
                        margin: 5.5vw 0 1.5vw 9.5vw;
                    }
                    @media screen and (min-device-width: 768px){
                        margin: 6vw 0 3vw 9.5vw;
                    }
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
                    font-size: 1.94vw;
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
                @media screen and (min-device-width: 768px) {
                    &:hover {
                        background-image: url("../../../assets/images/home/withdrawl/selectBg.png");
                        background-repeat: no-repeat;
                        background-size: contain;
                        .contTitle {
                            color: rgba(33, 33, 40, 1);
                        }
                        .contText {
                            color: #555567;
                        }
                        i {
                            &.icon-lamp {
                                background-image: url("../../../assets/images/home/withdrawl/1_select.png");
                            }
                            &.icon-clock {
                                background-image: url("../../../assets/images/home/withdrawl/2_select.png");
                            }
                            &.icon-lock {
                                background-image: url("../../../assets/images/home/withdrawl/3_select.png");
                            }
                        }
                    }
                }
            }
        }

    }
</style>
