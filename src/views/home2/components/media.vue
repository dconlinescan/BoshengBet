<template>
    <div class="media">
        <div class="content">
            <div class="textBar">
                <p class="media_title" :class="!isPC ? 'title' : ''" v-html="isPC ? $t('mediaTitle') : $t('mediaTitle_wap')"></p>
                <span>{{ $t('mediaText1') }}</span>
                <span>{{ $t('mediaText2') }}</span>
            </div>
            <div class="mediaBar">
                <template v-if="isPC">
                    <!--<div class="media1" :class="anima ? 'media1Playing' : ''">-->
                        <!--<div v-if="!anima" class="video-full" @click="fullScreen('media1')"></div>-->
                        <!--<div v-if="player1Hide && isPC" @click.stop="startMedia('media1')" class="video-img"></div>-->
                        <!--<video @click.stop="clickVideo('media1')" id="media1" ref="media1" src="/video/Gwinner2.mp4" poster="~@/assets/images/home2/media/video1.png">-->
                            <!--您的浏览器不支持 video 标签。-->
                        <!--</video>-->
                    <!--</div>-->
                    <!--<div class="media2" :class="anima ? 'media2Playing' : ''">-->
                        <!--<div v-if="anima" class="video-full" @click="fullScreen('media2')"></div>-->
                        <!--<div v-if="player2Hide && isPC" @click.stop="startMedia('media2')" class="video-img"></div>-->
                        <!--<video @click.stop="clickVideo('media2')" id="media2" ref="media2" src="/video/Gwinner.mp4" poster="~@/assets/images/home2/media/video2.png">-->
                            <!--您的浏览器不支持 video 标签。-->
                        <!--</video>-->
                    <!--</div>-->
                </template>
                <template v-else>
                    <!--<div class="media3">-->
                        <!--<video id="media3" ref="media3" src="/video/Gwinner.mp4" controls="controls" poster="~@/assets/images/home2/media/video1.png">-->
                            <!--您的浏览器不支持 video 标签。-->
                        <!--</video>-->
                    <!--</div>-->
                </template>
            </div>
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
	            player1Hide: true,
	            player2Hide: true,
                anima: false,
                isFull: false
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
		        let video1 = document.getElementById('media1')
		        let video2 = document.getElementById('media2')
		        // video1.ontimeupdate = () => {
			    //     if (!video1.paused) {
				//         this.player1Hide = false
			    //     } else {
				//         this.player1Hide = true
			    //     }
		        // }
		        // video2.ontimeupdate = () => {
			    //     if (!video2.paused) {
				//         this.player2Hide = false
			    //     } else {
				//         this.player2Hide = true
			    //     }
		        // }
            }
        },
        watch: {

        },
        methods: {
	        fullScreen(id) {
                if (this.isFull) {
	                this.exitFullscreen(id)
                } else {
	                this.videoFullScreen(id)
                }
            },
	        videoFullScreen(id) {
                var ele = document.getElementById(id);
                if (ele .requestFullscreen) {
                    ele .requestFullscreen();
                } else if (ele .mozRequestFullScreen) {
                    ele .mozRequestFullScreen();
                } else if (ele .webkitRequestFullScreen) {
                    ele .webkitRequestFullScreen();
                }
                this.isFull = true
            },
	        exitFullscreen(id) {
		        var de = document.getElementById(id);
		        if (de.exitFullscreen) {
			        de.exitFullscreen();
		        } else if (de.mozCancelFullScreen) {
			        de.mozCancelFullScreen();
		        } else if (de.webkitCancelFullScreen) {
			        de.webkitCancelFullScreen();
		        }
		        this.isFull = false
	        },
	        startMedia(ref) {
		        let video1 = document.getElementById('media1')
		        let video2 = document.getElementById('media2')
		        if (ref === 'media1') {
			        this.player1Hide = false
			        this.player2Hide = true
			        this.anima = false
			        video2.pause()
		        } else {
			        this.player1Hide = true
			        this.player2Hide = false
			        this.anima = true
			        video1.pause()
		        }
		        this.$refs[ref].play();
            },
	        clickVideo(id) {
	        	let video = document.getElementById(id)
	        	let video1 = document.getElementById('media1')
                let video2 = document.getElementById('media2')
		        if (!video.paused) {
			        if (id === 'media1') {
				        this.player1Hide = true
				        video1.pause();
			        } else {
				        this.player2Hide = true
				        video2.pause();
			        }
		        } else {
			        if (id === 'media1') {
				        this.player1Hide = false
				        this.anima = false
				        video1.play();
				        video2.pause();
			        } else {
				        this.player2Hide = false
                        this.anima = true
				        video2.play();
				        video1.pause();
			        }
		        }
            }
        }
    }
</script>

<style lang="less" scoped>
    .media {
        background: #ffffff;
        background-size: cover;
        padding: 4.16vw 0 3vw;
        overflow: hidden;
        .content{
            position: relative;
            margin: 1.14vw auto;
            @media screen and (max-device-width: 767px){
                margin: 10vw auto 5vw;
                width: 100vw;
            }
            @media screen and (min-device-width: 768px){
                width:68.42vw;
            }
            .textBar {
                vertical-align: top;
                @media screen and (max-device-width: 767px) {
                    display: block;
                    width: 100%;
                    text-align: center;
                    margin: 0 auto;
                }
                @media screen and (min-device-width: 768px) {
                    display: inline-block;
                    width: 20.13vw;
                }
                p.media_title {
                    color: #333333;
                    margin-top: 5vw;
                    font-weight: bold;
                    @media screen and (max-device-width: 767px) {
                        font-size: 5vw;
                        line-height: 7vw;
                        margin-bottom: 2vw;
                    }
                    @media screen and (min-device-width: 768px) {
                        font-size: 1.56vw;
                        line-height: 2.2vw;
                    }
                }
                span{
                    display: block;
                    color: #666666;
                    @media screen and (min-device-width: 768px) {
                        margin-top: 0.7vw;
                        font-size: 1.14vw;
                        line-height: 1.7vw;
                    }
                    @media screen and (max-device-width: 767px) {
                        width: 60vw;
                        font-size: 3vw;
                        line-height: 3.4vw;
                        margin: 0 auto;
                    }
                }
            }
            .mediaBar{
                background-image: url("~@/assets/images/home2/media/G-winner.png");
                background-size: contain;
                background-repeat: no-repeat;
                @media screen and (min-device-width: 768px) {
                    display: inline-block;
                    /*background: #2F54EB;*/
                    position: relative;
                    /*left: 5.77vw;*/
                    left: 3.77vw;
                    top: 0;
                    /*width: 44.25vw;*/
                    width: 48.25vw;
                    height: 26.05vw;
                }
                @media screen and (max-device-width: 767px) {
                    display: block;
                    margin: 5vw auto 0;
                    width: 80vw;
                    height: 50vw;
                    .media3{
                        width: 100%;
                        height: 100%;
                        background-image: url("~@/assets/images/home2/media/3_cn.jpg");
                        background-repeat: no-repeat;
                        background-size: cover;
                        /*video{*/
                            /*width: 100%;*/
                            /*height: 100%;*/
                        /*}*/
                    }
                }
                .media1.media1Playing{
                    width:16.7vw;
                    right: 0;
                    z-index: 10;
                }
                .media2.media2Playing{
                    width: 28.23vw;
                    right: 18.72vw;
                    z-index: 11;
                }
                .media1{
                    width: 28.23vw;
                    height: 15.86vw;
                    position: absolute;
                    right: 18.72vw;
                    top: 5.1vw;
                    z-index: 11;
                    transition: all 1s;
                    overflow: hidden;
                    background-image: url("~@/assets/images/home2/media/3_cn.jpg");
                    background-repeat: no-repeat;
                    background-size: cover;
                    &:hover{
                        .video-full{
                            display: block;
                        }
                    }
                }
                .media2{
                    width:16.7vw;
                    height: 15.86vw;
                    position: absolute;
                    overflow: hidden;
                    right: 0;
                    top: 5.1vw;
                    transition: all 1s;
                    background-image: url("~@/assets/images/home2/media/1_cn.jpg");
                    background-repeat: no-repeat;
                    background-size: cover;
                    &:hover{
                        .video-full{
                            display: block;
                        }
                    }
                }
                video{
                    width: 28.23vw;
                    height: 15.86vw;
                    outline:none;
                    object-fit: fill;
                    box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.20);
                }
                .video-img {
                    position: absolute;
                    top: calc(50% - 1vw);
                    left: 12.6vw;
                    width: 3vw;
                    height: 1.7vw;
                    z-index: 9;
                    background-image: url('~@/assets/images/home2/media/play-button.png');
                    background-repeat: no-repeat;
                    background-size: contain;
                    cursor: pointer
                }
                .video-full{
                    display: none;
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 1.5vw;
                    height: 1.5vw;
                    z-index: 9;
                    background-image: url('~@/assets/images/home2/media/fullscreen.png');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: right;
                    cursor: pointer
                }
            }
        }
    }
</style>
