<template>
    <div class="strongSec">
        <p class="title">{{ isPC ? $t('strongTitle') : $t('strongTitle_wap')}}</p>
        <div class="strongSwip" v-if="isAnmate" :class="isAnmate ? 'animate__fadeInLeft animate__animated' : ''">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for="index in 7" :key="index">
                    <div class="strongItem">
                        <i :class="'strongImg strongImg'+index"></i>
                        <p  class="strongTitle">{{ $t('strongTitle'+index) }}</p>
                        <span class="strongText">{{ $t('strongText'+index) }}</span>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <!--<template v-if="isPC">-->
            <!--<ul class="strongUl">-->
                <!--<li>-->
                    <!--<i></i>-->
                    <!--<div :class="lang === 'en' ? 'enMobile' : ''">-->
                        <!--<p  class="strongTitle">{{ $t('strongTitle1') }}</p>-->
                        <!--<span>{{ $t('strongText1') }}</span>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<i></i>-->
                    <!--<div :class="lang === 'en' ? 'enMobile' : ''">-->
                        <!--<p class="strongTitle">{{ $t('strongTitle2') }}</p>-->
                        <!--<span>{{ $t('strongText2') }}</span>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<i></i>-->
                    <!--<div :class="lang === 'en' ? 'enMobile' : ''">-->
                        <!--<p class="strongTitle">{{ $t('strongTitle3') }}</p>-->
                        <!--<span>{{ $t('strongText3') }}</span>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<i></i>-->
                    <!--<div :class="lang === 'en' ? 'enMobile' : ''">-->
                        <!--<p class="strongTitle">{{ $t('strongTitle4') }}</p>-->
                        <!--<span>{{ $t('strongText4') }}</span>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<i></i>-->
                    <!--<div :class="lang === 'en' ? 'enMobile' : ''">-->
                        <!--<p class="strongTitle">{{ $t('strongTitle5') }}</p>-->
                        <!--<span>{{ $t('strongText5') }}</span>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<i></i>-->
                    <!--<div :class="lang === 'en' ? 'enMobile' : ''">-->
                        <!--<p class="strongTitle">{{ $t('strongTitle6') }}</p>-->
                        <!--<span>{{ $t('strongText6') }}</span>-->
                    <!--</div>-->
                <!--</li>-->
                <!--<li>-->
                    <!--<i></i>-->
                    <!--<div :class="lang === 'en' ? 'enMobile' : ''">-->
                        <!--<p class="strongTitle">{{ $t('strongTitle7') }}</p>-->
                        <!--<span>{{ $t('strongText7') }}</span>-->
                    <!--</div>-->
                <!--</li>-->
            <!--</ul>-->
        <!--</template>-->
        <!--<template v-else>-->
            <!--<ul class="wapStrongUl">-->
                <!--<li v-for="i in 7" :key="i">-->
                    <!--<i :class="lang === 'en' ? 'enMobile' : ''">{{ spiText[lang][i-1] }}</i>-->
                    <!--<p>{{ $t('strongTitle'+i) }}</p>-->
                <!--</li>-->
            <!--</ul>-->
        <!--</template>-->
    </div>
</template>

<script>
	import 'swiper/css/swiper.css'
	import {swiper, swiperSlide} from 'vue-awesome-swiper'
	import scroll from '@/mixins/scroll'
    export default {
        name: "strongSec",
        mixins: [scroll],
	    components: {
		    swiper,
		    swiperSlide
	    },
        data() {
            return{
	            swiperOption: {
		            effect: 'coverflow',
		            grabCursor: true,
		            centeredSlides: true,
		            slidesPerView: 'auto',
		            speed: 2500,
		            on: {
			            init: function () {
			            },
		            },
		            autoplay: {
			            delay: 3000,
			            stopOnLastSlide: false,
			            disableOnInteraction: false,
		            },
                    loop: true,
		            coverflowEffect: {
			            rotate: 50,
			            stretch: 0,
			            depth: 100,
			            modifier: 1,
			            slideShadows : true,
		            },
		            pagination: {
			            el: '.swiper-pagination',
		            },

                },
                hasShow: false,
	            isAnmate: false
            }
        },
        computed: {
            lang() {
                return localStorage.getItem('LANG')
            },
	        isPC() {
		        if (localStorage.getItem('isPC') === 'true') {
			        return true
		        } else {
			        return false
		        }
	        }
        },
	    mounted() {
		    if (this.isPC) {
			    window.addEventListener('scroll', () => {
				    let{x, y} = this.getPageScroll();//对象的解构赋值——ES6新增
				    let clientTop = document.getElementsByClassName('strongSec')[0].offsetTop - y; //元素距离浏览器可视区高度
				    if (this.windowHeight - clientTop >= 300) {
					    this.isAnmate = true
				    } else {
					    this.isAnmate = false
				    }
			    }, true)
		    } else {
			    this.isAnmate = true
		    }
	    }
    }
</script>

<style lang="less" scoped>
    .strongSec{
        overflow: hidden;
        width: 100%;
        background: #ffffff;
        padding-bottom: 1.92vw;
        @media screen and (max-device-width: 767px) {
            height: 94vw;
        }
        @media screen and (min-device-width: 768px) {
            height: 29.28vw;
        }
        .strongSwip{
            @media screen and (max-device-width: 767px) {
                width: 90vw;
                height: 80vw;
                margin: 8vw auto 2vw;
            }
            @media screen and (min-device-width: 768px) {
                width: 67.1vw;
                height: 25vw;
                margin: 4.2vw auto 2vw;
            }
            .swiper-slide{
                box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.20);
                @media screen and (max-device-width: 767px) {
                    width: 46.8vw;
                    height: 75vw;
                }
                @media screen and (min-device-width: 768px) {
                    width: 15.6vw;
                    height: 23.77vw;
                }
            }
            .strongItem{
                @media screen and (max-device-width: 767px) {
                    width: 46.8vw;
                    height: 71.31vw;
                }
                @media screen and (min-device-width: 768px) {
                    width: 15.6vw;
                    height: 23.77vw;
                }
                i{
                    @media screen and (max-device-width: 767px) {
                        width: 46.8vw;
                        height: 42.6vw;
                    }
                    @media screen and (min-device-width: 768px) {
                        width: 15.6vw;
                        height: 14.2vw;
                    }
                    display: block;
                    background-repeat: no-repeat;
                    background-size: contain;
                    &.strongImg1{
                        background-image: url("../../../assets/images/home2/strong/1.png");
                    }
                    &.strongImg2{
                        background-image: url("../../../assets/images/home2/strong/2.png");
                    }
                    &.strongImg3{
                        background-image: url("../../../assets/images/home2/strong/3.png");
                    }
                    &.strongImg4{
                        background-image: url("../../../assets/images/home2/strong/4.png");
                    }
                    &.strongImg5{
                        background-image: url("../../../assets/images/home2/strong/5.png");
                    }
                    &.strongImg6{
                        background-image: url("../../../assets/images/home2/strong/6.png");
                    }
                    &.strongImg7{
                        background-image: url("../../../assets/images/home2/strong/7.png");
                    }
                }
                .strongTitle{
                    color: #333333;
                    font-weight: bold;
                    @media screen and (max-device-width: 767px) {
                        font-size: 4vw;
                        line-height: 4.4vw;
                        padding: 2vw;
                    }
                    @media screen and (min-device-width: 768px) {
                        font-size: 1.04vw;
                        line-height: 1.4vw;
                        padding: 0.5vw;
                    }
                }
                .strongText{
                    display: block;
                    color: #666666;
                    @media screen and (max-device-width: 767px) {
                        padding: 0 1vw;
                        font-size: 3vw;
                        line-height: 3.2vw;
                    }
                    @media screen and (min-device-width: 768px) {
                        padding: 0 0.5vw;
                        font-size: 0.78vw;
                        line-height: 0.9vw;
                    }
                }

            }
        }
    }
</style>
