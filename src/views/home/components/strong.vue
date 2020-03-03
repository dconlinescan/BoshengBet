<template>
    <div class="strong">
        <p class="title">{{ $t('strongTitle') }}</p>
        <ul>
            <li>
                <i></i>
                <div>
                    <p class="strongTitle">{{ $t('strongTitle1') }}</p>
                    <span>{{ $t('strongText1') }}</span>
                </div>
            </li>
            <li>
                <div>
                    <p class="strongTitle">{{ $t('strongTitle2') }}</p>
                    <span>{{ $t('strongText2') }}</span>
                </div>
                <i></i>
            </li>
            <li>
                <i></i>
                <div>
                    <p class="strongTitle">{{ $t('strongTitle3') }}</p>
                    <span>{{ $t('strongText3') }}</span>
                </div>
            </li>
            <li>
                <div>
                    <p class="strongTitle">{{ $t('strongTitle4') }}</p>
                    <span>{{ $t('strongText4') }}</span>
                </div>
                <i></i>
            </li>
            <li>
                <i></i>
                <div>
                    <p class="strongTitle">{{ $t('strongTitle5') }}</p>
                    <span>{{ $t('strongText5') }}</span>
                </div>
            </li>
            <li>
                <div>
                    <p class="strongTitle">{{ $t('strongTitle6') }}</p>
                    <span>{{ $t('strongText6') }}</span>
                </div>
                <i></i>
            </li>
            <li>
                <i></i>
                <div>
                    <p class="strongTitle">{{ $t('strongTitle7') }}</p>
                    <span>{{ $t('strongText7') }}</span>
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
        }
    }
</script>

<style lang="less" scoped>
    .strong{
        color: rgba(255,255,255,1);
        width: 100%;
        background-image: url("../../../assets/images/home/strong/strong_bg.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        p.title{
            color: rgba(255,255,255,1);
            padding-top: 4vw;
            margin-bottom: 0.755vw;
        }
        ul{
            display: block;
            width: 70vw;
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
                        font-size: 1.45vw;
                        font-weight: 500;
                        line-height: 2.33vw;
                        position: relative;
                        margin-bottom: 2.03vw;
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
                        width: 19vw;
                        font-size: 1.15vw;
                        line-height: 1.74vw;
                    }
                }
                &:nth-child(odd){
                    i{
                        width: 34.5vw;
                        height: 25vw;
                        margin: 2vw 4vw 1vw 1.5vw;
                    }
                }
                &:nth-child(even){
                    i{
                        width: 33vw;
                        height: 21vw;
                        margin: 1vw 0 1vw 0;
                    }
                    div{
                        vertical-align: top;
                        padding-top: 1vw;
                        p{
                            margin-left: 9vw;
                        }
                        span{
                            margin-left: 9vw;
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
                        margin-top: -10vw;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
</style>
