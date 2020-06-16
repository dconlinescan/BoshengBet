<template>
    <div class="styles">
        <p class="title">{{ $t('styleTitle') }}</p>
        <p class="playsText1">{{ $t('styleText') }}</p>
        <ul v-if="isAnmate" class="styleImg">
            <li :class="isAnmate ? item.class : ''" v-for="(item, index) in styles[lang]" :key="index">
                <img :src="item.img" alt="">
                <div v-if="isPC" class="videoBox">
                    <img class="videoImg" src="~@/assets/images/home/styles/Gwinner-phone.png" alt="">
                    <video :src="'/video/'+ item.video +'.mov'" autoplay muted loop :poster="item.img">
                        您的浏览器不支持 video 标签。
                    </video>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
	import BlueStylecn from '@/assets/images/home2/styles/blue_cn.png'
	import BlueStyleen from '@/assets/images/home2/styles/blue_en.png'
	import BlueStyletw from '@/assets/images/home2/styles/blue_tw.png'
	import GoldenStylecn from '@/assets/images/home2/styles/golden_cn.png'
	import GoldenStyleen from '@/assets/images/home2/styles/golden_en.png'
	import GoldenStyletw from '@/assets/images/home2/styles/golden_tw.png'
	import WhiteStylecn from '@/assets/images/home2/styles/white_cn.png'
	import WhiteStyleen from '@/assets/images/home2/styles/white_en.png'
	import WhiteStyletw from '@/assets/images/home2/styles/white_tw.png'
	import scroll from '@/mixins/scroll'
	export default {
		mixins: [scroll],
		name: "styles",
        data() {
			return{
				styles: {
					cn: [
						{
							img: WhiteStylecn,
							name: 'whiteColor',
                            video: 'whiteCn',
                            class: 'animate__fadeInLeft animate__animated'
						},
						{
							img: BlueStylecn,
							name: 'blueColor',
							video: 'blueCn',
							class: 'animate__fadeInUp animate__animated'
						},
						{
							img: GoldenStylecn,
							name: 'goldenColor',
							video: 'goldenCn',
							class: 'animate__fadeInRight animate__animated'
						}
					],
					en: [
						{
							img: WhiteStyleen,
							name: 'whiteColor',
							video: 'whiteCn',
							class: 'animate__fadeInLeft animate__animated'
						},
						{
							img: BlueStyleen,
							name: 'blueColor',
							video: 'blueCn',
							class: 'animate__fadeInUp animate__animated'
						},
						{
							img: GoldenStyleen,
							name: 'goldenColor',
							video: 'goldenCn',
							class: 'animate__fadeInRight animate__animated'
						}
					],
					tw: [
						{
							img: WhiteStyletw,
							name: 'whiteColor',
							video: 'whiteCn',
							class: 'animate__fadeInLeft animate__animated'
						},
						{
							img: BlueStyletw,
							name: 'blueColor',
							video: 'blueCn',
							class: 'animate__fadeInUp animate__animated'
						},
						{
							img: GoldenStyletw,
							name: 'goldenColor',
							video: 'goldenCn',
							class: 'animate__fadeInRight animate__animated'
						}
					]
				},
				isAnmate: false
            }
        },
        mounted() {
	        if (this.isPC) {
		        window.addEventListener('scroll', () => {
			        let{x, y} = this.getPageScroll();//对象的解构赋值——ES6新增
			        //console.log(x, y);//答应水平与垂直方向的滚动距离
			        let clientTop = document.getElementsByClassName('styles')[0].offsetTop - y; //元素距离浏览器可视区高度
			        if (this.windowHeight - clientTop >= 300) {
				        this.isAnmate = true
			        } else {
				        this.isAnmate = false
			        }
		        }, true)
	        } else {
		        window.addEventListener('scroll', () => {
			        let{x, y} = this.getPageScroll();//对象的解构赋值——ES6新增
			        //console.log(x, y);//答应水平与垂直方向的滚动距离
			        let clientTop = document.getElementsByClassName('styles')[0].offsetTop - y; //元素距离浏览器可视区高度
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
    .styles{
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
        background: #ffffff;
        width: 100vw;

        @media screen and (max-device-width: 767px) {
            height: 70vw;
        }
        @media screen and (min-device-width: 768px) {
            height: 41vw;
        }
        position: relative;
        color: #ffffff;
        padding: 1.16vw 0 3vw;
        .styleImg{
            @media screen and (max-device-width: 767px) {
                transform: scale(1.5);
                bottom: 16vw;
            }
            @media screen and (min-device-width: 768px) {
                bottom: 8vw;
            }
            position: absolute;
            width: 100vw;
            text-align: center;
            li{
                position: relative;
                display: inline-block;
                margin: 0 1vw;
                img{
                    width: 15.6vw;
                    height: 27.8vw;
                }
                .videoBox{
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background: #ffffff;
                    position: relative;
                    top: 4vw;
                    left: 0;
                    display: none;
                }
                .videoImg{
                    position: absolute;
                    top: 0;
                    left: 0.5vw;
                    width: 15.6vw;
                    height: 27.8vw;
                    z-index: 2;
                }
                video{
                    width: 15.6vw;
                    height: 27.8vw;
                }
                p{
                    margin-top: 2.63vw;
                    text-align: center;
                    @media screen and (min-device-width: 768px){
                        font-size: 1.35vw;
                    }
                    @media screen and (max-device-width: 767px){
                        font-size: 2vw;
                    }
                }
                @media screen and (min-device-width: 768px){
                    width: 15.6vw;
                    transition: width 1s;
                    video{
                        position: relative;
                        width: 18.72vw;
                        height: 33.36vw;
                    }
                    &:hover{
                        width: 18.72vw;
                        img{
                            display: none;
                        }
                        .videoBox{
                            width: 18.72vw;
                            height: 34.36vw;
                            display: block;
                            .videoImg{
                                width: 18vw;
                                height: 34.5vw;
                                display: block;

                            }
                            video{
                                width: 19.72vw;
                                height: 32.6vw;
                                display: block;
                                top: 1vw;
                                left: -0.5vw;
                            }
                        }

                    }
                }
                @media screen and (max-device-width: 767px){
                    width: 18.72vw;
                }
            }
        }
    }
</style>
