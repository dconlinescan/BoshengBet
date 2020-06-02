<template>
    <div class="styles">
        <p class="styleTitle">{{ $t('styleTitle') }}</p>
        <p class="styleText">{{ isPC ? $t('styleText') : $t('styleText_wap')}}</p>
        <ul class="styleImg">
            <li v-for="(item, index) in styles[lang]" :key="index">
                <img :src="item.img" alt="">
                <div class="videoBox">
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
	import BlueStylecn from '@/assets/images/home/styles/blue_cn.png'
	import BlueStyleen from '@/assets/images/home/styles/blue_en.png'
	import BlueStyletw from '@/assets/images/home/styles/blue_tw.png'
	import GoldenStylecn from '@/assets/images/home/styles/golden_cn.png'
	import GoldenStyleen from '@/assets/images/home/styles/golden_en.png'
	import GoldenStyletw from '@/assets/images/home/styles/golden_tw.png'
	import WhiteStylecn from '@/assets/images/home/styles/white_cn.png'
	import WhiteStyleen from '@/assets/images/home/styles/white_en.png'
	import WhiteStyletw from '@/assets/images/home/styles/white_tw.png'
	export default {
		name: "styles",
        data() {
			return{
				styles: {
					cn: [
						{
							img: WhiteStylecn,
							name: 'whiteColor',
                            video: 'whiteCn'
						},
						{
							img: BlueStylecn,
							name: 'blueColor',
							video: 'blueCn'
						},
						{
							img: GoldenStylecn,
							name: 'goldenColor',
							video: 'goldenCn'
						}
					],
					en: [
						{
							img: WhiteStyleen,
							name: 'whiteColor',
							video: 'whiteCn'
						},
						{
							img: BlueStyleen,
							name: 'blueColor',
							video: 'blueCn'
						},
						{
							img: GoldenStyleen,
							name: 'goldenColor',
							video: 'goldenCn'
						}
					],
					tw: [
						{
							img: WhiteStyletw,
							name: 'whiteColor',
							video: 'whiteCn'
						},
						{
							img: BlueStyletw,
							name: 'blueColor',
							video: 'blueCn'
						},
						{
							img: GoldenStyletw,
							name: 'goldenColor',
							video: 'goldenCn'
						}
					]
				}
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
	}
</script>

<style lang="less" scoped>
    .styles{
        background: url("../../../assets/images/home/styles/styles.png") no-repeat;
        background-size: cover;
        width: 100vw;
        height: 51vw;
        position: relative;
        color: #ffffff;
        padding-top: 10.16vw;
        @media screen and (min-device-width: 768px){
            margin: -4.2vw 0 0;
        }
        @media screen and (max-device-width: 767px){
            margin: -6vw 0 0;
            padding-bottom: 10vw;
        }
        .styleTitle{
            @media screen and (min-device-width: 768px){
                font-size: 2.08vw;
                margin-left: 22.81vw;
            }
            @media screen and (max-device-width: 767px){
                font-size: 5vw;
                margin-left: 15vw;
            }
            margin-bottom: 1.88vw;
        }
        .styleText{
            @media screen and (min-device-width: 768px){
                font-size: 1.46vw;
                width: 50vw;
                margin-left: 22.81vw;
            }
            @media screen and (max-device-width: 767px){
                font-size: 3vw;
                width: 62vw;
                margin-left: 15vw;
            }

            display: block;
        }
        .styleImg{
            position: absolute;
            width: 100vw;
            text-align: center;
            bottom: 8vw;
            li{
                position: relative;
                display: inline-block;
                margin: 0 2vw;
                img{
                    width: 15.6vw;
                    height: 27.8vw;
                }
                .videoBox{
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    /*border-radius: 5vw;*/
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
