<template>
    <div class="recharge">
        <p class="title">{{ $t('rechargeTitle') }}</p>
        <ul>
            <li v-for="i in 3" :key="i">
                <span class="recharge1">
                    <span class="recharge1_1">{{ rechargeNum[i-1] }}</span>
                    <span class="recharge1_2">{{ $t('recharge' + (i+1) + '_1') }}</span>
                </span>
                <span class="recharge2" v-html="$t('recharge' + (i+1) + '_2')" >
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "recharge",
        data() {
            return{
                rechargeNum: [50,650,15]
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
    .recharge{
        font-size: 0;
        overflow: hidden;
        background: url("../../../assets/images/home/recharge/recharge_bg.jpg") no-repeat;
        background-size: 100% 100%;
        color: #ffffff;
        padding: 6vw 0 7.81vw;
        p.title{
            color: #ffffff;
            margin-bottom: 5.21vw;
        }
        ul{
            display: flex;
            width: 70vw;
            margin: 0 auto;
            @media screen and (max-device-width: 768px){
                transform: scale(1.5);
                width: 60vw;
            }
            li{
                flex: 1;
                display: inline-block;
                text-align: center;
               .recharge1{
                   display: block;
                   .recharge1_1{
                       font-size: 3.13vw;
                   }
                   .recharge1_2{
                       font-size: 1.8vw;
                   }
               }
                .recharge2{
                    font-size: 1.46vw;
                }
            }
        }
    }
</style>
