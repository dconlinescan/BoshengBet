<template>
    <div class="platform">
        <div class="platform-img" :style="'background-image: url('+ platform.img[lang] +');'"></div>
        <div class="platform-text">
            <p class="title">{{ $t('platformTitle') }}</p>
            <ul>
                <li><i class="icon-1"></i><span>{{ $t('platformText2') }}</span></li>
                <li><i class="icon-2"></i><span>{{ $t('platformText3') }}</span></li>
                <li><i class="icon-3"></i><span>{{ $t('platformText4') }}</span></li>
            </ul>
        </div>
    </div>
</template>

<script>
    import platformCn from '@/assets/images/home/platform/platform_cn.png'
    import platformEn from '@/assets/images/home/platform/platform_en.png'
    import platformTw from '@/assets/images/home/platform/platform_tw.png'
    export default {
        name: "platform",
        data() {
            return {
                platform: {
                    img: {
                        cn: platformCn,
                        tw: platformTw,
                        en: platformEn
                    }
                },
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
    .platform{
        width: 100%;
        padding: 3vw 0;
        .platform-img{
            width: 53vw;
            height: 30.4vw;
            background-repeat: no-repeat;
            background-size: contain;
            display: inline-block;
        }
        .platform-text{
            width: 40vw;
            padding-top: 4vw;
            display: inline-block;
            vertical-align: top;
            ul{
                margin-top: 2.5vw;
                li{
                    font-size: 1.6vw;
                    font-weight: 400;
                    color: rgba(77,77,77,1);
                    line-height: 2.28vw;
                    margin-bottom: 0.7vw;
                    i{
                        width: 1.71vw;
                        height: 1.71vw;
                        display: inline-block;
                        vertical-align: top;
                        margin: 0.4vw 1.41vw 0 0.63vw;
                        background-size: contain;
                        background-repeat: no-repeat;
                        &.icon-1{
                            background-image: url('../../../assets/images/home/platform/1.png');
                        }
                        &.icon-2{
                            background-image: url("../../../assets/images/home/platform/2.png");
                        }
                        &.icon-3{
                            background-image: url("../../../assets/images/home/platform/3.png");
                        }
                    }
                    span{
                        display: inline-block;
                        width: 36vw;
                    }
                }
            }
        }
    }
</style>
