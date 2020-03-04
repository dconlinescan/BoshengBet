<template>
    <div class="plays">
        <p class="title">{{ $t('playsTitle') }}</p>
        <p class="playsText1">{{ $t('playsText1') }}</p>
        <div class="content">
            <swiper :options="swiperOption" ref="playsSwiper">
                <!-- slides -->
                <swiper-slide>
                    <ul>
                        <li v-for="(i, ind) in plays1" :key="ind" class="playsSec" :style="'background-image: url(' + i.bg + ');'">
                            <img :src="i.icon" alt="">
                            <p>{{ $t('plays_'+ind) }}</p>
                        </li>
                    </ul>
                </swiper-slide>
                <swiper-slide>
                    <ul>
                        <li v-for="(i, ind) in plays2" :key="ind" class="playsSec" :style="'background-image: url(' + i.bg + ');'">
                            <img :src="i.icon" alt="" :style="ind==='pp'?'marginBottom: 0':''" >
                            <p>{{ $t('plays_'+ind) }}</p>
                        </li>
                    </ul>
                </swiper-slide>
            </swiper>
            <div class="swiper-button-prev" @click="refs.playsSwiper.slidePrev()" slot="button-prev"></div>
            <div class="swiper-button-next" @click="refs.playsSwiper.slideNext()" slot="button-next"></div>
        </div>
    </div>
</template>

<script>
    import bg_af from '@/assets/images/home/plays/bg/af.jpg'
    import bg_bb from '@/assets/images/home/plays/bg/bb.jpg'
    import bg_bd from '@/assets/images/home/plays/bg/bd.jpg'
    import bg_bk from '@/assets/images/home/plays/bg/bk.jpg'
    import bg_cs from '@/assets/images/home/plays/bg/cs.jpg'
    import bg_fh from '@/assets/images/home/plays/bg/fh.jpg'
    import bg_ft from '@/assets/images/home/plays/bg/ft.jpg'
    import bg_hb from '@/assets/images/home/plays/bg/hb.jpg'
    import bg_ib from '@/assets/images/home/plays/bg/ib.jpg'
    import bg_op from '@/assets/images/home/plays/bg/op.jpg'
    import bg_pp from '@/assets/images/home/plays/bg/pp.jpg'
    import bg_sn from '@/assets/images/home/plays/bg/sn.jpg'
    import bg_tn from '@/assets/images/home/plays/bg/tn.jpg'
    import bg_vb from '@/assets/images/home/plays/bg/vb.jpg'

    import icon_af from '@/assets/images/home/plays/icons/af.png'
    import icon_bb from '@/assets/images/home/plays/icons/bb.png'
    import icon_bd from '@/assets/images/home/plays/icons/bd.png'
    import icon_bk from '@/assets/images/home/plays/icons/bk.png'
    import icon_cs from '@/assets/images/home/plays/icons/cs.png'
    import icon_fh from '@/assets/images/home/plays/icons/fh.png'
    import icon_ft from '@/assets/images/home/plays/icons/ft.png'
    import icon_hb from '@/assets/images/home/plays/icons/hb.png'
    import icon_ib from '@/assets/images/home/plays/icons/ib.png'
    import icon_op from '@/assets/images/home/plays/icons/op.png'
    import icon_pp from '@/assets/images/home/plays/icons/pp.png'
    import icon_sn from '@/assets/images/home/plays/icons/sn.png'
    import icon_tn from '@/assets/images/home/plays/icons/tn.png'
    import icon_vb from '@/assets/images/home/plays/icons/vb.png'
    import 'swiper/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "plays",
        components: {
            swiper,
            swiperSlide
        },
        data() {
            return {
                swiperOption: {
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                },
                plays1: {
                    bk: { bg: bg_bk, icon: icon_bk},
                    ft: { bg: bg_ft, icon: icon_ft},
                    tn: { bg: bg_tn, icon: icon_tn},
                    af: { bg: bg_af, icon: icon_af},
                    op: { bg: bg_op, icon: icon_op},
                    bd: { bg: bg_bd, icon: icon_bd},
                    vb: { bg: bg_vb, icon: icon_vb}
                },
                plays2: {
                    sn: { bg: bg_sn, icon: icon_sn},
                    bb: { bg: bg_bb, icon: icon_bb},
                    pp: { bg: bg_pp, icon: icon_pp},
                    hb: { bg: bg_hb, icon: icon_hb},
                    cs: { bg: bg_cs, icon: icon_cs},
                    ib: { bg: bg_ib, icon: icon_ib},
                    fh: { bg: bg_fh, icon: icon_fh}
                }
            }
        },
        mounted() {

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
        padding: 6vw 0 2vw;
        background: url("../../../assets/images/home/plays/plays_bg.jpg") no-repeat center;
        background-size: cover;
        .playsText1{
            font-size: 1.45vw;
            color: #666666;
            text-align: center;
            @media screen and (min-device-width: 768px){
                font-size: 1.45vw;
                line-height: 3vw;
            }
            @media screen and (max-device-width: 768px){
                font-size: 2vw;
                line-height: 4vw;
            }
        }
        .content{
            width: 60.5vw;
            margin: 4vw auto 6vw;
            position: relative;
            .swiper-button-next,.swiper-button-prev{
                outline:none;
                background-repeat: no-repeat;
                background-size: contain;
                &::after{
                    content: '';
                }
                @media screen and (min-device-width: 768px){
                    width: 3.33vw;
                    height: 3.33vw;
                }
                @media screen and (max-device-width: 768px){
                    width: 5vw;
                    height: 5vw;
                }
            }
            .swiper-button-next{
                background-image: url("../../../assets/images/home/plays/rt.png");
                @media screen and (min-device-width: 768px){
                    right: -3vw;
                }
                @media screen and (max-device-width: 768px){
                    right: -6vw;
                    margin-top: -2vw;
                }
            }
            .swiper-button-prev{
                background-image: url("../../../assets/images/home/plays/lf.png");
                @media screen and (min-device-width: 768px){
                    left: -3vw;
                }
                @media screen and (max-device-width: 768px){
                    left: -6vw;
                    margin-top: -2vw;
                }
            }
            ul{
                width: 62.5vw;
                .playsSec{
                    display: inline-block;
                    background-repeat: no-repeat;
                    background-size: contain;
                    text-align: center;
                    height: 11.04vw;
                    width: 13.54vw;
                    vertical-align: middle;
                    margin: 0.78vw;
                    &:nth-child(2){
                        width: 28.54vw;
                    }
                    img{
                        width: 3.15vw;
                        margin-top: 2.5vw;
                        margin-bottom: 1.02vw;
                    }
                    p{
                        font-size: 1.6vw;
                        font-weight: 500;
                        color: rgba(255,255,255,1);
                        line-height: 1.5vw;
                        @media screen and (max-device-width: 768px){
                            font-size: 2vw;
                            line-height: 1.7vw;
                        }
                    }
                }
            }


        }
    }
</style>
