<template>
    <div class="langs">
        <p class="title" v-html="$t('langTitle')"></p>
        <p class="playsText1">{{$t('langText')}}</p>
        <ul v-if="isAnmate" class="langImg">
            <li :class="isAnmate ? item.class : ''" class="animate__animated" v-for="(item, index) in langPic" :key="index">
                <img :src="item.img" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
	import Img1 from '@/assets/images/home2/langs/1.png'
	import Img2 from '@/assets/images/home2/langs/2.png'
	import Img3 from '@/assets/images/home2/langs/3.png'
	import Img4 from '@/assets/images/home2/langs/4.png'
	import scroll from '@/mixins/scroll'
	export default {
		mixins: [scroll],
		name: "styles",
		data() {
			return{
				langPic: [
					{
						class: 'animate__bounceInLeft',
                        img: Img1
					},
					{
						class: 'animate__bounceInDown',
						img: Img2
					},
					{
						class: 'animate__bounceInUp',
						img: Img3
					},
					{
						class: 'animate__bounceInRight',
						img: Img4
					}
                ],
				isAnmate: false
			}
		},
		mounted() {
			if (this.isPC) {
				window.addEventListener('scroll', () => {
					let{x, y} = this.getPageScroll();//对象的解构赋值——ES6新增
					//console.log(x, y);//答应水平与垂直方向的滚动距离
					let clientTop = document.getElementsByClassName('langs')[0].offsetTop - y; //元素距离浏览器可视区高度
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
					let clientTop = document.getElementsByClassName('langs')[0].offsetTop - y; //元素距离浏览器可视区高度
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
    .langs{
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
            height: 75vw;
        }
        @media screen and (min-device-width: 768px) {
            height: 45vw;
        }
        position: relative;
        color: #ffffff;
        padding: 1.16vw 0 3vw;
        .langImg{
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
                @media screen and (min-device-width: 768px){
                    &:nth-child(1) img{
                        width: 15.81vw;
                    }
                    &:nth-child(2) img{
                        width: 14.2vw;
                    }
                    &:nth-child(3) img{
                        width: 15.81vw;
                    }
                    &:nth-child(4) img{
                        width: 14.4vw;
                    }
                }
                @media screen and (max-device-width: 767px){
                    &:nth-child(1) img{
                        width: 15.81vw;
                    }
                    &:nth-child(2) img{
                        width: 14.2vw;
                    }
                    &:nth-child(3) img{
                        width: 15.81vw;
                    }
                    &:nth-child(4) img{
                        width: 14.4vw;
                    }
                }
            }
        }
    }
</style>
