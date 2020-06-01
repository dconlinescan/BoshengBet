<template>
    <div class="styles">
        <p class="styleTitle">{{ $t('styleTitle') }}</p>
        <p class="styleText">{{ $t('styleText') }}</p>
        <ul class="styleImg">
            <li v-for="(item, index) in styles[lang]" :key="index">
                <img :src="item.img" alt="">
            </li>
        </ul>
    </div>
</template>

<script>
	import BlueStylecn from '@/assets/images/home/withdrawl/blue_cn.png'
	import BlueStyleen from '@/assets/images/home/withdrawl/blue_en.png'
	import BlueStyletw from '@/assets/images/home/withdrawl/blue_tw.png'
	import GoldenStylecn from '@/assets/images/home/withdrawl/golden_cn.png'
	import GoldenStyleen from '@/assets/images/home/withdrawl/golden_en.png'
	import GoldenStyletw from '@/assets/images/home/withdrawl/golden_tw.png'
	import WhiteStylecn from '@/assets/images/home/withdrawl/white_cn.png'
	import WhiteStyleen from '@/assets/images/home/withdrawl/white_en.png'
	import WhiteStyletw from '@/assets/images/home/withdrawl/white_tw.png'
	export default {
		name: "styles",
        data() {
			return{
				styles: {
					cn: [
						{
							img: WhiteStylecn,
							name: 'whiteColor'
						},
						{
							img: BlueStylecn,
							name: 'blueColor'
						},
						{
							img: GoldenStylecn,
							name: 'goldenColor'
						}
					],
					en: [
						{
							img: WhiteStyleen,
							name: 'whiteColor'
						},
						{
							img: BlueStyleen,
							name: 'blueColor'
						},
						{
							img: GoldenStyleen,
							name: 'goldenColor'
						}
					],
					tw: [
						{
							img: WhiteStyletw,
							name: 'whiteColor'
						},
						{
							img: BlueStyletw,
							name: 'blueColor'
						},
						{
							img: GoldenStyletw,
							name: 'goldenColor'
						}
					]
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
    .styles{
        background: url("../../../assets/images/home/withdrawl/styles.png") no-repeat;
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
                font-size: 2vw;
                width: 60vw;
                margin-left: 15vw;
            }

            display: block;
        }
        .styleImg{
            position: absolute;
            left: 20vw;
            width: 60vw;

            @media screen and (min-device-width: 768px){
                bottom: 8vw;
            }
            @media screen and (max-device-width: 767px){
                bottom: 8vw;
                transform: scale(1.2);

            }
            li{
                width: 15.6vw;
                display: inline-block;
                margin: 0 2vw;
                img{
                    width: 15.6vw;
                    height: 27.8vw;
                }
                p{
                    margin-top: 2.63vw;
                    text-align: center;
                    font-size: 1.35vw;
                    @media screen and (max-device-width: 767px){
                        font-size: 2vw;
                    }
                }
            }
        }
    }
</style>
