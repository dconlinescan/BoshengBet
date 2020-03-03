<template>
    <div class="bgs-image">
        <img :src="bottom.img[lang]" alt="">
    </div>
</template>

<script>
    import bottomCnWeb from '@/assets/images/home/bgsImage/web/bottom_cn.jpg'
    import bottomEnWeb from '@/assets/images/home/bgsImage/web/bottom_en.jpg'
    import bottomTwWeb from '@/assets/images/home/bgsImage/web/bottom_tw.jpg'
    import bottomCnWap from '@/assets/images/home/bgsImage/wap/bottom_cn.jpg'
    import bottomEnWap from '@/assets/images/home/bgsImage/wap/bottom_en.jpg'
    import bottomTwWap from '@/assets/images/home/bgsImage/wap/bottom_tw.jpg'
    export default {
        name: "bgsImg",
        data() {
            return {}
        },
        computed: {
            lang() {
                return localStorage.getItem('LANG')
            },
            bottom() {
                if (this.isWeb()) {
                    return {
                        img: {
                            cn: bottomCnWeb,
                            en: bottomEnWeb,
                            tw: bottomTwWeb
                        }
                    }
                } else {
                    return {
                        img: {
                            cn: bottomCnWap,
                            en: bottomEnWap,
                            tw: bottomTwWap
                        }
                    }
                }
            }
        },
        methods: {
            isWeb() {
                const u = navigator.userAgent;
                const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
                const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                const dWidth = window.screen.width;
                if(isAndroid || isiOS || dWidth<768){
                    return false
                }else{
                    return true
                }
            }
        }
    }
</script>

<style lang="less" scoped>
    .bgs-image{
        width: 100%;
        img{
            display: block;
            width: 100%;
        }
    }
</style>
