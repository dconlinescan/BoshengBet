<template>
    <div class="recharge">
        <p class="title">{{ $t('rechargeTitle') }}</p>
        <ul>
            <li v-for="i in 4" :key="i">
                <span class="recharge1">
                    <span class="recharge1_1">{{ rechargeNum[i-1] }}</span>
                    <span class="recharge1_2">{{ $t('recharge' + i + '_1') }}</span>
                </span>
                <span class="recharge2" v-html="$t('recharge' + i + '_2')" >
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
                rechargeNum: [60,50,650,15]
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
        background: url("../../../assets/images/home/recharge/recharge_bg.jpg") no-repeat;
        background-size: cover;
        color: #ffffff;
        padding: 7.81vw 0;
        p.title{
            color: #ffffff;
            margin-bottom: 5.21vw;
        }
        ul{
            display: flex;
            width: 70vw;
            margin: 0 auto;
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
