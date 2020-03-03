<template>
    <div class="media">
        <p class="title">{{$t('mediaTitle')}}</p>
        <div class="content">
            <img :src="media.img1[lang]" alt="">
            <img :src="media.img2[lang]" alt="">
            <p>{{ $t('mediaText1') }}</p>
        </div>
        <div class="content">
            <img :src="media.img3[lang]" alt="">
            <img :src="media.img4[lang]" alt="">
            <p>{{ $t('mediaText2') }}</p>
        </div>
    </div>
</template>

<script>
    import media1Cn from '@/assets/images/home/media/1_cn.jpg'
    import media2Cn from '@/assets/images/home/media/2_cn.jpg'
    import media3Cn from '@/assets/images/home/media/3_cn.jpg'
    import media4Cn from '@/assets/images/home/media/4_cn.jpg'
    import media1En from '@/assets/images/home/media/1_en.jpg'
    import media2En from '@/assets/images/home/media/2_en.jpg'
    import media3En from '@/assets/images/home/media/3_en.jpg'
    import media4En from '@/assets/images/home/media/4_en.jpg'
    import media1Tw from '@/assets/images/home/media/1_tw.jpg'
    import media2Tw from '@/assets/images/home/media/2_tw.jpg'
    import media3Tw from '@/assets/images/home/media/3_tw.jpg'
    import media4Tw from '@/assets/images/home/media/4_tw.jpg'
    export default {
        name: "media",
        data() {
            return {
                media: {
                    img1: {
                        cn: media1Cn,
                        en: media1En,
                        tw: media1Tw
                    },
                    img2: {
                        cn: media2Cn,
                        en: media2En,
                        tw: media2Tw
                    },
                    img3: {
                        cn: media3Cn,
                        en: media3En,
                        tw: media3Tw
                    },
                    img4: {
                        cn: media4Cn,
                        en: media4En,
                        tw: media4Tw
                    },
                }
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
    .media{
        background: url("../../../assets/images/home/media/media_bg.jpg") no-repeat;
        background-size: cover;
        padding: 2vw 0 7vw 0;
        p.title{
            color: #ffffff;
            margin-top: 5vw;
        }
        .content{
            width:68.42vw;
            margin: 1.14vw auto;
            position: relative;
            &:nth-child(2){
                margin-top: 4vw;
            }
            img{
                width: 33.9vw;
                margin-right: 0.57vw;
                &:nth-child(2){
                    margin-right: 0;
                }
            }
            p{
                position: absolute;
                top: 12.85vw;
                left: 0;
                width: 100%;
                height: 4.56vw;
                background: rgba(0,0,0,0.5);
                font-size: 1.6vw;
                color: rgba(255,255,255,1);
                line-height: 4.56vw;
                text-indent: 2vw;
            }
            &:nth-child(3) {
                p{
                    width: calc(100% - 4vw);
                    line-height: 2.33vw;
                    height: 4.14vw;
                    top: 10.3vw;
                    padding: 1.5vw 2vw;
                    text-indent: 0;
                }
            }
        }
    }
</style>
