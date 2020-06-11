<template>
    <div class="plays">
        <p class="title">{{ $t('playsTitle') }}</p>
        <p class="playsText1">{{ $t('playsText1') }}</p>
        <div class="content">
            <div class="playsSec">
                <RotatePlays class="rotatePos left1" :size="'big'" :prev="plays1.ft" :next="plays2.sn" :timeOut="100" :isRotate="isRotate" />
                <RotatePlays class="rotatePos left2" :size="'sm'" :prev="plays1.bk" :next="plays2.bb" :timeOut="200" :isRotate="isRotate" />
                <RotatePlays class="rotatePos left3" :size="'sm'" :prev="plays1.tn" :next="plays2.pp" :timeOut="200" :isRotate="isRotate" />
                <RotatePlays class="rotatePos right1" :size="'big'" :prev="plays1.bd" :next="plays2.fh" :timeOut="100" :isRotate="isRotate" />
                <RotatePlays class="rotatePos right2" :size="'sm'" :prev="plays1.af" :next="plays2.hb" :timeOut="200" :isRotate="isRotate" />
                <RotatePlays class="rotatePos right3" :size="'sm'" :prev="plays1.op" :next="plays2.cs" :timeOut="200" :isRotate="isRotate" />
                <img class="playsBg" :src="PlaysBg" alt="">
            </div>
            <div class="swiper-button-prev" @click="isRotate = false" slot="button-prev"></div>
            <div class="swiper-button-next" @click="isRotate = true" slot="button-next"></div>
        </div>
    </div>
</template>

<script>
    import bg_af from '@/assets/images/home2/plays/bg/af.png'
    import bg_bb from '@/assets/images/home2/plays/bg/bb.png'
    import bg_bd from '@/assets/images/home2/plays/bg/bd.png'
    import bg_bk from '@/assets/images/home2/plays/bg/bk.png'
    import bg_cs from '@/assets/images/home2/plays/bg/cs.png'
    import bg_fh from '@/assets/images/home2/plays/bg/fh.png'
    import bg_ft from '@/assets/images/home2/plays/bg/ft.png'
    import bg_hb from '@/assets/images/home2/plays/bg/hb.png'
    import bg_op from '@/assets/images/home2/plays/bg/op.png'
    import bg_pp from '@/assets/images/home2/plays/bg/pp.png'
    import bg_sn from '@/assets/images/home2/plays/bg/sn.png'
    import bg_tn from '@/assets/images/home2/plays/bg/tn.png'

    import icon_af from '@/assets/images/home2/plays/icons/af.png'
    import icon_bb from '@/assets/images/home2/plays/icons/bb.png'
    import icon_bd from '@/assets/images/home2/plays/icons/bd.png'
    import icon_bk from '@/assets/images/home2/plays/icons/bk.png'
    import icon_cs from '@/assets/images/home2/plays/icons/cs.png'
    import icon_fh from '@/assets/images/home2/plays/icons/fh.png'
    import icon_ft from '@/assets/images/home2/plays/icons/ft.png'
    import icon_hb from '@/assets/images/home2/plays/icons/hb.png'
    import icon_op from '@/assets/images/home2/plays/icons/op.png'
    import icon_pp from '@/assets/images/home2/plays/icons/pp.png'
    import icon_sn from '@/assets/images/home2/plays/icons/sn.png'
    import icon_tn from '@/assets/images/home2/plays/icons/tn.png'
    import PlaysBg from '@/assets/images/home2/plays/plays_bg.png'
    import RotatePlays from '@/components/rotate'
    export default {
        name: "plays",
        components: {
            RotatePlays
        },
        data() {
            return {
	            isRotate: false,
	            PlaysBg: PlaysBg,
                plays1: {
                    bk: { bg: bg_bk, icon: icon_bk, text: this.$t('plays_bk')},
                    ft: { bg: bg_ft, icon: icon_ft, text: this.$t('plays_ft')},
                    tn: { bg: bg_tn, icon: icon_tn, text: this.$t('plays_tn')},
                    af: { bg: bg_af, icon: icon_af, text: this.$t('plays_af')},
                    op: { bg: bg_op, icon: icon_op, text: this.$t('plays_op')},
                    bd: { bg: bg_bd, icon: icon_bd, text: this.$t('plays_bd')},
                },
                plays2: {
                    sn: { bg: bg_sn, icon: icon_sn, text: this.$t('plays_sn')},
                    bb: { bg: bg_bb, icon: icon_bb, text: this.$t('plays_bb')},
                    pp: { bg: bg_pp, icon: icon_pp, text: this.$t('plays_pp')},
                    hb: { bg: bg_hb, icon: icon_hb, text: this.$t('plays_hb')},
                    cs: { bg: bg_cs, icon: icon_cs, text: this.$t('plays_cs')},
                    fh: { bg: bg_fh, icon: icon_fh, text: this.$t('plays_fh')}
                }
            }
        },
        mounted() {

        },
        computed: {
            lang() {
                return localStorage.getItem('LANG') || 'cn'
            }
        },
    }
</script>

<style lang="less" scoped>
    .plays{
        padding: 4.16vw 0 0;
        background-color: #ffffff;
        overflow: hidden;
        .playsText1{
            color: #666666;
            text-align: center;
            @media screen and (min-device-width: 768px){
                font-size: 1.144vw;
                line-height: 3vw;
            }
            @media screen and (max-device-width: 767px){
                font-size: 3vw;
                line-height: 4vw;
            }
        }
        .content{
            width: 60.5vw;
            margin: 4vw auto 0;
            position: relative;
            @media screen and (max-device-width: 767px){
                transform: scale(1.3);
                margin: 10vw auto 7vw;
            }
            .playsSec{
                position: relative;
                padding: 15vw;
                .playsBg{
                    width: 25vw;
                    display: block;
                    position: absolute;
                    top: -2vw;
                    left: 18vw;
                }
                .rotatePos{
                    position: absolute;
                    &.left1{
                        left: 0;
                        top: 7vw;
                    }
                    &.left2{
                        left: 14vw;
                        top: 5.3vw;
                    }
                    &.left3{
                        left: 14vw;
                        top: 14.7vw;
                    }
                    &.right1{
                        right: 0;
                        top: 7vw;
                    }
                    &.right2{
                        right: 14vw;
                        top: 5.3vw;
                    }
                    &.right3{
                        right: 14vw;
                        top: 14.7vw;
                    }
                }
            }

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
                @media screen and (max-device-width: 767px){
                    width: 5vw;
                    height: 5vw;
                }
            }
            .swiper-button-next{
                background-image: url("../../../assets/images/home2/plays/rt.png");
                @media screen and (min-device-width: 768px){
                    right: -3vw;
                }
                @media screen and (max-device-width: 767px){
                    right: -6vw;
                    margin-top: -2vw;
                }
            }
            .swiper-button-prev{
                background-image: url("../../../assets/images/home2/plays/lf.png");
                @media screen and (min-device-width: 768px){
                    left: -3vw;
                }
                @media screen and (max-device-width: 767px){
                    left: -6vw;
                    margin-top: -2vw;
                }
            }

        }
    }
</style>
