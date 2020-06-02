<template>
    <div class="recharge">
        <p class="title">{{ $t('rechargeTitle') }} <br v-if="!isPC && lang === 'en'" /> {{ $t('withdrawlTitle') }}</p>
        <ul class="content">
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
</template>

<script>
    export default {
        name: "recharge",
        data() {
            return{
                rechargeNum: [50,650,15],
                rechargeNumWap: ['>50', '>650', '>15']
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
    .recharge{
        font-size: 0;
        overflow: hidden;
        background: url("../../../assets/images/home/recharge/recharge_bg.jpg") no-repeat;
        background-size: 100% 100%;
        color: #ffffff;
        padding: 2.99vw 0 2.39vw;
        p.title{
            color: #ffffff;
            margin-bottom: 2.56vw;
        }
        .content{
            @media screen and (min-device-width: 768px){
                width: 48vw;
            }
            @media screen and (max-device-width: 767px){
                width: 80vw;
            }
            margin: 0 auto;
            li{
                display: inline-block;
                @media screen and (min-device-width: 768px){
                    width: 13.22vw;
                    height: 9.17vw;
                }
                @media screen and (max-device-width: 767px){
                    width: 23.22vw;
                    height: 19.17vw;
                }
                text-align: center;
                cursor: pointer;
                background: rgba(11,28,79,0.60);
                border: 1px solid #10319C;
                color: #fff;
                border-radius: 6px;
                margin-right: 3.62vw;
                margin-bottom: 3.41vw;
                vertical-align: bottom;
                &:nth-child(2){
                    @media screen and (max-device-width: 767px){
                    }
                }
                &:nth-child(3){
                    margin-right: unset;
                }
                &:nth-child(4){

                }

                &:nth-child(6){
                    margin-right: unset;
                }
                i{
                    display: block;
                    @media screen and (min-device-width: 768px){
                        width: 3.07vw;
                        height: 3.07vw;
                        margin: 1vw auto 0.5vw;
                    }
                    @media screen and (max-device-width: 767px){
                        width: 6.07vw;
                        height: 6.07vw;
                        margin: 2.5vw auto 1.5vw;
                    }
                    background-repeat: no-repeat;
                    background-size: contain;
                    &.icon-recharge1{
                        background-image: url("../../../assets/images/home/recharge/1.png");
                    }
                    &.icon-recharge2{
                        background-image: url("../../../assets/images/home/recharge/2.png");
                    }
                    &.icon-recharge3{
                        background-image: url("../../../assets/images/home/recharge/3.png");
                    }
                    &.icon-lamp{
                        background-image: url("../../../assets/images/home/recharge/4.png");
                    }
                    &.icon-clock{
                        background-image: url("../../../assets/images/home/recharge/5.png");
                    }
                    &.icon-lock{
                        background-image: url("../../../assets/images/home/recharge/6.png");
                    }
                }
                .contTitle{
                    font-size: 1.11vw;
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
                    font-size: 0.68vw;
                    color: #ffffff;
                    margin: 0 auto;
                    @media screen and (min-device-width: 768px){
                        font-size: 0.68vw;
                        line-height: 1.2vw;
                        width: 11vw;
                    }
                    @media screen and (max-device-width: 767px){
                        font-size: 2.5vw;
                        line-height: 3vw;
                        width: 20vw;
                    }
                }
                @media screen and (min-device-width: 768px) {
                    &:hover {
                        transform: scale(1.2);
                        background: rgba(11,28,79,0.8);
                        border: 1px solid #304FB3;
                        i {
                            &.icon-recharge1{
                                background-image: url("../../../assets/images/home/recharge/1-1.png");
                            }
                            &.icon-recharge2{
                                background-image: url("../../../assets/images/home/recharge/2-1.png");
                            }
                            &.icon-recharge3{
                                background-image: url("../../../assets/images/home/recharge/3-1.png");
                            }
                            &.icon-lamp{
                                background-image: url("../../../assets/images/home/recharge/4-1.png");
                            }
                            &.icon-clock{
                                background-image: url("../../../assets/images/home/recharge/5-1.png");
                            }
                            &.icon-lock{
                                background-image: url("../../../assets/images/home/recharge/6-1.png");
                            }
                        }
                    }
                }
            }
        }
    }
</style>
