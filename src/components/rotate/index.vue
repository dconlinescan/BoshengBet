<template>
    <div class="rotateSec" :class="size === 'big' ? 'bigPlay' : 'smPlay'">
        <div class="prev" :class="isRotating1 ? 'isRotating' : ''" :style="'background-image: url(' + prev.bg + ')'">
            <img :src="prev.icon" :alt="prev.text">
            <span>{{ prev.text }}</span>
        </div>
        <div class="next" :class="isRotating2 ? 'isRotating' : ''" :style="'background-image: url('+next.bg+')'">
            <img :src="next.icon" :alt="next.text">
            <span>{{ next.text }}</span>
        </div>
    </div>
</template>

<script>
    import BgsPlays from '@/assets/images/home2/public/bgs_plays.png'
	export default {
		props: {
			timeOut: {
				default: 100
            },
			isRotate: {
			    default: false
            },
			prev: {
				default: {
					bg: BgsPlays,
                    icon: '',
                    text: ''
                }
            },
            next: {
	            default: {
		            bg: BgsPlays,
		            icon: '',
		            text: ''
	            }
            },
            size: {
				default: 'big'
            }
        },
        data() {
			return {
				isRotating1: false,
                isRotating2: false,
                hasRotated: false
            }
        },
        watch: {
	        isRotate(nv, ov) {
	        	if (this.hasRotated) {
			        setTimeout(() => {
				        this.isRotating2 = nv
				        setTimeout(() => {
					        this.isRotating1 = nv
				        }, 900)
			        }, this.timeOut)
                } else {
			        setTimeout(() => {
				        this.isRotating1 = nv
				        setTimeout(() => {
					        this.isRotating2 = nv
				        }, 900)
			        }, this.timeOut)
                }
	        	this.hasRotated = !this.hasRotated
            }
        }
	}
</script>

<style lang="less" scoped>
    .rotateSec{
        &.bigPlay{
            width: 16.46vw;
            height: 16.46vw;
        }
        &.smPlay{
            width: 10.4vw;
            height: 10.4vw;
        }
        .prev,.next{
            position: absolute;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain;
            img{
                position: absolute;
                left: calc(50% - 1.04vw);
                top: calc(50% - 2.04vw);
                height: 2.08vw;
            }
            span{
                position: absolute;
                left: 0;
                top: calc(50%);
                display: block;
                text-align: center;
                width: 100%;
                font-size: 1.25vw;
                color: #ffffff;
            }
        }
        .prev{
            transition: all 1s;
            &.isRotating{
                transform: rotateY(90deg);
            }
        }
        .next{
            transform: rotateY(-90deg);
            transition: all 1s;
            &.isRotating{
                transform: rotateY(0deg);
            }
        }
    }

</style>
