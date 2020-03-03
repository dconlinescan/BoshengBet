<template>
    <div class="plays">
        <p class="title">{{ $t('playsTitle') }}</p>
        <p class="underline">{{ $t('playsText1') }}</p>
        <div class="content">
            <div v-for="(item, index) in plays" :key="index" :style="'background-image: url(' + item.bg + ');width:'+item.width">
                <img :src="item.icon" alt="">
                <p>{{ $t('plays'+index) }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import playsBg1 from '@/assets/images/home/plays/1.jpg'
    import playsBg2 from '@/assets/images/home/plays/2.jpg'
    import playsBg3 from '@/assets/images/home/plays/3.jpg'
    import playsBg4 from '@/assets/images/home/plays/4.jpg'
    import playsBg5 from '@/assets/images/home/plays/5.jpg'
    import ftIcon from '@/assets/images/home/plays/ft.png'
    import bkIcon from '@/assets/images/home/plays/bk.png'
    import tnIcon from '@/assets/images/home/plays/tn.png'
    import afIcon from '@/assets/images/home/plays/af.png'
    import opIcon from '@/assets/images/home/plays/op.png'
    export default {
        name: "plays",
        data() {
            return {
                plays: [
                    { bg: playsBg1, icon: ftIcon , width: '31.7%'},
                    { bg: playsBg2, icon: bkIcon , width: '31.7%'},
                    { bg: playsBg3, icon: tnIcon , width: '31.7%'},
                    { bg: playsBg4, icon: afIcon , width: '48.5%'},
                    { bg: playsBg5, icon: opIcon , width: '48.5%'},
                ],
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
    .plays{
        padding: 4.56vw 0;
        .content{
            width: 62.5vw;
            margin: 0 auto;
            div{
                display: inline-block;
                background-repeat: no-repeat;
                background-size: contain;
                text-align: center;
                height: 17.5vw;
                vertical-align: middle;
                margin: 1.7vw 1.7vw 0 0;
                &:nth-child(3),&:nth-child(5){
                    margin-right: 0;
                }
                &:nth-child(4){
                    margin-right: 2vw;
                }
                img{
                    width: 3.15vw;
                    margin-top: 5.5vw;
                    margin-bottom: 1.02vw;
                }
                p{
                    font-size: 1.6vw;
                    font-weight: 500;
                    color: rgba(255,255,255,1);
                    line-height: 2.28vw;
                }
            }

        }
    }
</style>
