<template>
    <div :style="lang==='en'?'padding: 9vw 0;':''" class="platform">
        <p class="title">{{ $t('platformTitle') }}</p>
        <div class="platformContent">
            <img class="platform4" :src="platform4" alt="">
            <template v-if="isAnmate">
                <div class="platform1 animate__fadeInLeft animate__animated">{{ isPC ? $t('platformText2') : $t('platformText2_wap') }}</div>
                <div class="platform2 animate__fadeInUp animate__animated">{{ isPC ? $t('platformText3') : $t('platformText3_wap') }}</div>
                <div class="platform3 animate__fadeInRight animate__animated">{{ isPC ? $t('platformText4') : $t('platformText4_wap') }}</div>
            </template>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    import platform1 from '@/assets/images/home2/platform/platform1.png'
    import platform2 from '@/assets/images/home2/platform/platform2.png'
    import platform3 from '@/assets/images/home2/platform/platform3.png'
    import platform4 from '@/assets/images/home2/platform/platform4.png'
    import scroll from '@/mixins/scroll'
    export default {
        name: "platform",
        mixins: [scroll],
        data() {
            return {
                platform1: platform1,
	            platform2: platform2,
	            platform3: platform3,
	            platform4: platform4,
	            isAnmate: false
            }
        },
        computed: {
            moduleHeiht() {
            	return document.getElementsByClassName('platform')[0].clientHeight
            }
        },
        mounted() {
        	if (this.isPC) {
		        window.addEventListener('scroll', () => {
			        let{x, y} = this.getPageScroll();//对象的解构赋值——ES6新增
			        //console.log(x, y);//答应水平与垂直方向的滚动距离
			        let clientTop = document.getElementsByClassName('platform')[0].offsetTop - y; //元素距离浏览器可视区高度
			        if (clientTop <= 362) {
				        this.isAnmate = true
			        } else {
				        this.isAnmate = false
			        }
                }, true)
            } else {
		        window.addEventListener('scroll', () => {
			        let{x, y} = this.getPageScroll();//对象的解构赋值——ES6新增
			        //console.log(x, y);//答应水平与垂直方向的滚动距离
			        let clientTop = document.getElementsByClassName('platform')[0].offsetTop - y; //元素距离浏览器可视区高度
			        if (this.windowHeight - clientTop >= 100) {
				        this.isAnmate = true
			        } else {
				        this.isAnmate = false
			        }
		        }, true)
            }
        }
    }
</script>

<style lang="less" scoped>
    .platform{
        width: 100%;
        padding: 4.16vw 0 3vw;
        background: #ffffff;
        position: relative;
        .platformContent{
            @media screen and (max-device-width: 767px){
                transform: scale(1.3);
                margin: 10vw auto 7vw;
            }
            .platform4{
                width: 50.23vw;
                height: 23.82vw;
                margin: 2.5vw auto;
                display: block;
            }
            .platform1{
                background-image: url("~@/assets/images/home2/platform/platform1.png");
                background-repeat: no-repeat;
                background-size: contain;
                position: absolute;
                left: 50%;
                margin-left: -32vw;
                color: #ffffff;
                @media screen and (min-device-width: 768px) {
                    top: 10.16vw;
                    width: 10.01vw;
                    height: 12.1vw;
                    font-size: 0.94vw;
                    padding: 3.2vw 1.5vw 0 1.8vw;
                }
                @media screen and (max-device-width: 767px) {
                    top: 1vw;
                    width: 12vw;
                    height: 16.9vw;
                    font-size: 1.8vw;
                    line-height: 2.3vw;
                    padding: 3.8vw 2vw 0;
                    text-align: center;
                }
            }
            .platform2{
                background-image: url("~@/assets/images/home2/platform/platform2.png");
                background-repeat: no-repeat;
                background-size: contain;
                position: absolute;
                left: 50%;
                margin-left: -6vw;
                color: #ffffff;

                @media screen and (min-device-width: 768px) {
                    top: 28.16vw;
                    width: 8.18vw;
                    height: 10.3vw;
                    font-size: 0.94vw;
                    padding: 3.5vw 1.5vw 0;
                }
                @media screen and (max-device-width: 767px) {
                    text-align: center;
                    top: 18vw;
                    width: 9.18vw;
                    height: 10.3vw;
                    font-size: 1.8vw;
                    line-height: 2.3vw;
                    padding: 3.5vw 1vw 0;
                }
            }
            .platform3{
                background-image: url("~@/assets/images/home2/platform/platform3.png");
                background-repeat: no-repeat;
                background-size: contain;
                position: absolute;
                left: 71%;
                margin-left: -2vw;
                color: #ffffff;
                font-size: 0.94vw;
                @media screen and (min-device-width: 768px) {
                    top: 16.66vw;
                    width: 11.1vw;
                    height: 13.33vw;
                    font-size: 0.94vw;
                    padding: 4.5vw 1.5vw 0;
                }
                @media screen and (max-device-width: 767px) {
                    text-align: center;
                    top: 6vw;
                    width: 12vw;
                    height: 17.9vw;
                    font-size: 1.8vw;
                    line-height: 2.3vw;
                    padding: 4vw 1.5vw 0;
                }
            }
        }
        .clear{
            clear: both;
        }
    }
</style>
