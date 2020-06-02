<template>
    <div class="media">
        <p class="title" v-html="isPC ? $t('mediaTitle') : $t('mediaTitle_wap')"></p>
        <div class="content">
            <div v-if="!playerHide && isPC" @click.stop="startMedia" class="video-img"></div>
            <video @click.stop="clickVideo()" id="myVideo" ref="myVideo" src="/video/Gwinner.mp4" controls="controls" poster="~@/assets/images/home/media/G-winner.png">
                您的浏览器不支持 video 标签。
            </video>
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
                },
	            playerHide: false
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
        },
        methods: {
	        startMedia() {
	        	this.playerHide = true
		        this.$refs.myVideo.play();
            },
	        clickVideo() {
	        	let video = document.getElementById('myVideo')
		        if (!video.paused) {
			        video.play();
			        this.playerHide = false
		        } else {
			        video.pause();
			        this.playerHide = true
		        }
            }
        }
    }
</script>

<style lang="less" scoped>
    .media{
        background: url("../../../assets/images/home/media/media_bg.jpg") no-repeat;
        background-size: cover;
        padding: 1vw 0 7vw 0;
        overflow: hidden;
        p.title{
            color: #ffffff;
            margin-top: 5vw;
            @media screen and (max-device-width: 767px){
                margin-bottom: 8vw;
            }
        }
        .content{
            position: relative;
            video{
                outline:none;
                width: 100%;
            }
            .video-img {
                position: absolute;
                top: calc(50% - 3vw);
                left: calc(50% - 3vw);
                width: 6vw;
                height: 6vw;
                z-index: 999;
                background: url('~@/assets/images/home/media/play-button.png') no-repeat;
                background-size: 6vw;
                cursor: pointer
            }
            width:68.42vw;
            margin: 1.14vw auto;
            position: relative;
            @media screen and (max-device-width: 767px){
                transform: scale(1.4);
                margin: 10vw auto 5vw;
            }
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
                bottom: 0;
                left: 0;
                width: calc(100% - 4vw);
                height: 4.56vw;
                background: rgba(0,0,0,0.5);
                font-size: 1.6vw;
                color: rgba(255,255,255,1);
                line-height: 4.56vw;
                text-indent: 0;
                padding: 0 2vw;
            }
            &:nth-child(3){
                p{
                    width: calc(100% - 4vw);
                    line-height: 2.33vw;
                    height: 4.14vw;
                    bottom: 0;
                    padding: 1.5vw 2vw;
                    text-indent: 0;
                }
            }
            &:nth-child(2){
                p.isEn{
                    bottom: 0;
                    height: 3.5vw;
                    width: calc(100% - 4vw);
                    padding: 1.5vw 2vw;
                }

            }
        }
    }
</style>
