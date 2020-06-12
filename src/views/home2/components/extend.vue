<template>
    <div class="extend">
        <p class="title">{{ $t('extendTitle') }}</p>
        <p class="title2">{{ $t('extendTitle1') }}</p>
        <div class="content">
            <ul>
                <li>
                    <p class="extendLiTitle">{{ $t('extendLiTitle1') }}</p>
                    <p class="extendLiText">{{ $t('extendLiText1') }}</p>
                    <!--人人代理模型-->
                    <div v-if="isAnmate" class="agentModel1">
                        <!-- 一级代理-->
                        <div class="animate__animated animate__wobble agent1-1"></div>
                        <!--分叉1-->
                        <div v-if="delay.action1" class="animate__animated animate__flipInX line1 line1-1"></div>
                        <!--二级代理-->
                        <div v-if="delay.action2" class="animate__animated animate__rubberBand agent2-1 agentGreyOne"></div>
                        <div v-if="delay.action2" class="animate__animated  animate__rubberBand agent2-2 agentGreyOne"></div>
                        <!--分叉2-->
                        <div v-if="delay.action3" class="animate__animated animate__flipInX line2 line2-1"></div>
                        <div v-if="delay.action3" class="animate__animated animate__flipInX line2 line2-2"></div>
                        <!--三级代理-->
                        <div v-if="delay.action4" v-for="i in 6" :class="'animate__animated animate__rubberBand agentGreyOne agent3-'+i"></div>
                        <!--分叉3-->
                        <div v-if="delay.action5" class="animate__animated animate__flipInX line1 line3-1"></div>
                        <div v-if="delay.action5" class="animate__animated animate__flipInX line1 line3-2"></div>
                        <!--四级代理-->
                        <div v-if="delay.action6" v-for="i in 8" :class="'animate__animated  animate__rubberBand agentGreyTwo agent4-'+i"></div>
                    </div>
                </li>
                <li>
                    <p class="extendLiTitle">{{ $t('extendLiTitle2') }}</p>
                    <p class="extendLiText">{{ $t('extendLiText2') }}</p>
                    <!--总代推广模型-->
                    <div v-if="isAnmate" class="agentModel1">
                        <!-- 一级代理-->
                        <div v-for="i in 3" :class="'animate__animated animate__wobble agent2 agent2-'+i"></div>
                        <!--分叉1-->
                        <div v-if="delay.action1" v-for="i in 3" :class="'animate__animated animate__flipInX line2 lineTwo1-'+i"></div>
                        <!--二级代理-->
                        <div v-if="delay.action2" v-for="i in 9" :class="'animate__animated animate__rubberBand agentGreyTwo agentTwo2-'+i"></div>
                        <!--分叉2-->
                        <div v-if="delay.action3" v-for="i in 3" :class="'animate__animated animate__flipInX line4 lineTwo2-'+i"></div>
                        <!--三级代理-->
                        <div v-if="delay.action4" v-for="i in 9" :class="'animate__animated animate__rubberBand agentGreyTwo agentTwo3 agentTwo3-'+i"></div>
                        <!--分叉3-->
                        <div v-if="delay.action5" v-for="i in 3" :class="'animate__animated animate__flipInX line4 lineTwo3-'+i"></div>
                        <!--四级代理-->
                        <div v-if="delay.action6" v-for="i in 6" :class="'animate__animated animate__rubberBand agentGreyTwo agentTwo4-'+i"></div>
                    </div>
                </li>
                <li>
                    <p class="extendLiTitle">{{ $t('extendLiTitle3') }}</p>
                    <p class="extendLiText">{{ $t('extendLiText3') }}</p>
                    <div v-if="isAnmate" class="agentModel1">
                        <!-- 一级代理-->
                        <div class="animate__animated animate__fadeInDown agent3"></div>
                        <div class="chatBox animate__animated animate__fadeInDown">
                            <div v-if="delay.action1" v-for="i in 5" class="animate__animated animate__slideInLeft agentGreyThree"></div>
                            <div v-if="delay.action2" v-for="i in 5" class="animate__animated animate__slideInLeft agentGreyThree"></div>
                            <div v-if="delay.action3" v-for="i in 5" class="animate__animated animate__slideInLeft agentGreyThree"></div>
                            <div v-if="delay.action4" v-for="i in 5" class="animate__animated animate__slideInLeft agentGreyThree"></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import peopleImg from '@/assets/images/home2/extend/people.png'
    import totalImg from '@/assets/images/home2/extend/total.png'
    import friendImg from '@/assets/images/home2/extend/friend.png'
    import scroll from '@/mixins/scroll'
    export default {
        name: "extend",
	    mixins: [scroll],
        data() {
            return {
                extend:{
                    img:{
                        people: peopleImg,
                        total: totalImg,
                        friend: friendImg
                    }
                },
	            isAnmate: true,
                delay: {
                	action1: false,
                    action2: false,
                    action3: false,
                    action4: false,
                    action5: false,
                    action6: false,
                    action7: false
                },
                timer: null
            }
        },
        computed: {
	        isPC() {
		        if (localStorage.getItem('isPC') === 'true') {
			        return true
		        } else {
			        return false
		        }
	        },
        },
	    mounted() {
			    window.addEventListener('scroll', () => {
				    let{x, y} = this.getPageScroll();//对象的解构赋值——ES6新增
				    //console.log(x, y);//答应水平与垂直方向的滚动距离
				    let clientTop = document.getElementsByClassName('extend')[0].offsetTop - y; //元素距离浏览器可视区高度
				    if (this.windowHeight - clientTop >= 300) {
					    this.isAnmate = true
					    this.timeOutFn(1)
				    } else {
				    	clearTimeout(this.timer)
					    this.$set(this.delay, 'action1', false)
					    this.$set(this.delay, 'action2', false)
					    this.$set(this.delay, 'action3', false)
					    this.$set(this.delay, 'action4', false)
					    this.$set(this.delay, 'action5', false)
					    this.$set(this.delay, 'action6', false)
					    this.isAnmate = false
				    }
			    }, true)
	    },
	    methods: {
        	timeOutFn(i) {
		        clearTimeout(this.timer)
        		if (i > 6) {
        			return
                }
        		this.timer = setTimeout( () => {
			        this.$set(this.delay, 'action'+i, true)
                    this.timeOutFn(i+1)
                }, 200)
            },
            animateFn(delay) {
                setTimeout( () => {
                    return true
                }, delay)
            }
	    }
    }
</script>

<style lang="less" scoped>
    .extend{
        font-size: 0;
        overflow: hidden;
        background: url("../../../assets/images/home2/extend/extend_bg.png") no-repeat;
        background-size: 100% 100%;
        @media screen and (max-device-width: 767px){
            padding: 4.16vw 0 8vw;
        }
        @media screen and (min-device-width: 768px){
            padding: 4.16vw 0 3vw;
        }
        p.title{
            margin: 0 auto 0.87vw;
        }
        p.title2{
            color: #666666;
            text-align: center;
            margin: 0 auto 4.3vw;
            @media screen and (max-device-width: 767px){
                width: 65vw;
                margin: 2vw auto 6vw;
                font-size: 3vw;
            }
            @media screen and (min-device-width: 768px){
                font-size: 1.15vw;
                width: 65vw;
            }
        }
        .content{
            @media screen and (max-device-width: 767px){
                transform: scale(1.3);
            }
            text-align: center;
            ul{
                li{
                    position: relative;
                    vertical-align: bottom;
                    width: 20.72vw;
                    display: inline-block;
                    background-color: #ffffff;
                    margin-right: 3.37vw;
                    box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.20);
                    border-radius: 0.29vw;
                    text-align: center;
                    overflow: hidden;
                    @media screen and (max-device-width: 767px){
                        height: 25vw;
                    }
                    @media screen and (min-device-width: 768px){
                        height: 20.65vw;
                    }
                    p.extendLiTitle{
                        color: #333333;
                        margin-top: 2.083vw;
                        @media screen and (max-device-width: 767px){
                            font-size: 2vw;
                        }
                        @media screen and (min-device-width: 768px){
                            font-size: 1.25vw;
                        }
                    }
                    p.extendLiText{
                        color: #666666;
                        margin-bottom: 1.56vw;
                        @media screen and (max-device-width: 767px){
                            font-size: 1.5vw;
                            margin: 0 1.5vw 1.56vw;
                        }
                        @media screen and (min-device-width: 768px){
                            font-size: 0.94vw;
                        }
                    }
                    img{
                        display: block;
                        margin: 0 auto;
                    }
                    &:nth-child(1){
                        img{
                            width: 18.65vw;
                        }
                    }
                    &:nth-child(2){
                        img{
                            width: 18.85vw;
                        }
                    }
                    &:nth-child(3){
                        img{
                            @media screen and (min-device-width: 768px){
                                width: 11.98vw;
                            }
                            @media screen and (max-device-width: 767px){
                                width: 15vw;
                            }
                        }
                        margin-right: 0;
                    }
                }
            }
            .agentModel1{
                position: absolute;
                width: 18.65vw;
                height: 10vw;
                margin: 0 1vw;
                background: #ffffff;
            }
        }
        .agent1-1{
            background-image: url("~@/assets/images/home2/extend/agent1-1.png");
            background-repeat: no-repeat;
            background-size: contain;
            width: 1.4vw;
            height: 1.4vw;
            position: absolute;
            left: 50%;
            margin-left: -0.7vw;
        }
        .agent2{
            background-image: url("~@/assets/images/home2/extend/agent2-1.png");
            background-repeat: no-repeat;
            background-size: contain;
            width: 1.4vw;
            height: 1.4vw;
            position: absolute;
            &.agent2-1{
                left: 50%;
                margin-left: -7vw;
            }
            &.agent2-2{
                left: 50%;
                margin-left: -0.7vw;
            }
            &.agent2-3{
                right: 50%;
                margin-right: -7vw;
            }
        }
        .agent3 {
            background-image: url("~@/assets/images/home2/extend/agent3.png");
            background-repeat: no-repeat;
            background-size: contain;
            width: 8vw;
            height: 2.4vw;
            position: absolute;
            left: 3vw;
        }
        .line1{
            background-image: url("~@/assets/images/home2/extend/line1.png");
            background-repeat: no-repeat;
            background-size: contain;
            width: 6.3vw;
            height: 1.4vw;
            position: absolute;
            &.line1-1{
                left: 50%;
                top: 1.68vw;
                margin-left: -3.15vw;
            }
            &.line3-1{
                left: 50%;
                top: 7.2vw;
                margin-left: -8.5vw;
            }
            &.line3-2{
                right: 50%;
                top: 7.2vw;
                margin-right: -8.5vw;
            }
        }
        .line2{
            background-image: url("~@/assets/images/home2/extend/line2.png");
            background-repeat: no-repeat;
            background-size: contain;
            width: 4vw;
            height: 1vw;
            position: absolute;
            &.line2-1{
                left: 50%;
                top: 4.6vw;
                margin-left: -5.4vw;
            }
            &.line2-2{
                right: 50%;
                top: 4.6vw;
                margin-right: -5.4vw;
            }
            &.lineTwo1-1{
                left: 50%;
                top: 1.68vw;
                margin-left: -8.4vw;
            }
            &.lineTwo1-2{
                left: 50%;
                top: 1.68vw;
                margin-left: -2.1vw;
            }
            &.lineTwo1-3{
                right: 50%;
                top: 1.68vw;
                margin-right: -8.3vw;
            }
        }
        .line4{
            background-image: url("~@/assets/images/home2/extend/line4.png");
            background-repeat: no-repeat;
            background-size: contain;
            width: 4vw;
            height: 1.2vw;
            position: absolute;
            &.lineTwo2-1{
                left: 50%;
                top: 4vw;
                margin-left: -8.4vw;
                z-index: 6;
            }
            &.lineTwo2-2{
                left: 50%;
                top: 4vw;
                margin-left: -2.1vw;
                z-index: 6;
            }
            &.lineTwo2-3{
                right: 50%;
                top: 4vw;
                margin-right: -8.3vw;
                z-index: 6;
            }
            &.lineTwo3-1{
                left: 50%;
                top: 7vw;
                margin-left: -8.4vw;
            }
            &.lineTwo3-2{
                right: 50%;
                top: 7vw;
                margin-right: -2.3vw;
            }
            &.lineTwo3-3{
                right: 50%;
                top: 7vw;
                margin-right: -8.4vw;
            }
        }
        .agentGreyOne{
            background-image: url("~@/assets/images/home2/extend/agent1-2.png");
            background-repeat: no-repeat;
            background-size: contain;
            width: 1.3vw;
            height: 1.3vw;
            position: absolute;
            &.agent2-1{
                top: 3vw;
                left: 50%;
                margin-left: -4vw;
                z-index: 7;
            }
            &.agent2-2{
                top: 3vw;
                right: 50%;
                margin-right: -4vw;
                z-index: 7;
            }
            &.agent3-1{
                top: 5.5vw;
                left: 50%;
                margin-left: -6vw;
                z-index: 5;
            }
            &.agent3-2{
                top: 5.5vw;
                left: 50%;
                margin-left: -4vw;
                z-index: 5;
            }
            &.agent3-3{
                top: 5.5vw;
                left: 50%;
                margin-left: -2vw;
                z-index: 5;
            }
            &.agent3-4{
                top: 5.5vw;
                right: 50%;
                margin-right: -2vw;
                z-index: 5;
            }
            &.agent3-5{
                top: 5.5vw;
                right: 50%;
                margin-right: -4vw;
                z-index: 5;
            }
            &.agent3-6{
                top: 5.5vw;
                right: 50%;
                margin-right: -6vw;
                z-index: 5;
            }
        }
        .agentGreyTwo{
            background-image: url("~@/assets/images/home2/extend/agent1-3.png");
            background-repeat: no-repeat;
            background-size: contain;
            width: 1.7vw;
            height: 1.6vw;
            position: absolute;
            &.agent4-1{
                top: 8.5vw;
                left: 50%;
                margin-left: -9vw;
            }
            &.agent4-2{
                top: 8.5vw;
                left: 50%;
                margin-left: -7vw;
            }
            &.agent4-3{
                top: 8.5vw;
                left: 50%;
                margin-left: -5vw;
            }
            &.agent4-4{
                top: 8.5vw;
                left: 50%;
                margin-left: -3vw;
            }
            &.agent4-5{
                top: 8.5vw;
                right: 50%;
                margin-right: -3vw;
            }
            &.agent4-6{
                top: 8.5vw;
                right: 50%;
                margin-right: -5vw;
            }
            &.agent4-7{
                top: 8.5vw;
                right: 50%;
                margin-right: -7vw;
            }
            &.agent4-8{
                top: 8.5vw;
                right: 50%;
                margin-right: -9vw;
            }

            &.agentTwo2-1,&.agentTwo3-1{
                top: 2.7vw;
                left: 50%;
                margin-left: -9.5vw;
            }
            &.agentTwo2-2,&.agentTwo3-2{
                top: 2.7vw;
                left: 50%;
                margin-left: -7.5vw;
            }
            &.agentTwo2-3,&.agentTwo3-3{
                top: 2.7vw;
                left: 50%;
                margin-left: -5.5vw;
            }
            &.agentTwo2-4,&.agentTwo3-4{
                top: 2.7vw;
                left: 50%;
                margin-left: -3.1vw;
            }
            &.agentTwo2-5,&.agentTwo3-5{
                top: 2.7vw;
                right: 50%;
                margin-right: -0.5vw;
            }
            &.agentTwo2-6,&.agentTwo3-6{
                top: 2.7vw;
                right: 50%;
                margin-right: -2.5vw;
            }
            &.agentTwo2-7,&.agentTwo3-7{
                top: 2.7vw;
                right: 50%;
                margin-right: -5vw;
            }
            &.agentTwo2-8,&.agentTwo3-8{
                top: 2.7vw;
                right: 50%;
                margin-right: -7vw;
            }
            &.agentTwo2-9,&.agentTwo3-9{
                top: 2.7vw;
                right: 50%;
                margin-right: -9vw;
            }
            &.agentTwo4-1{
                top: 8.5vw;
                left: 50%;
                margin-left: -9vw;
            }
            &.agentTwo4-2{
                top: 8.5vw;
                left: 50%;
                margin-left: -6.5vw;
            }
            &.agentTwo4-3{
                top: 8.5vw;
                left: 50%;
                margin-left: -2.5vw;
            }
            &.agentTwo4-4{
                top: 8.5vw;
                right: 50%;
                margin-right: -2vw;
            }
            &.agentTwo4-5{
                top: 8.5vw;
                right: 50%;
                margin-right: -5.5vw;
            }
            &.agentTwo4-6{
                top: 8.5vw;
                right: 50%;
                margin-right: -8vw;
            }
            &.agentTwo3{
                top: 5.5vw;
            }
        }
        .chatBox{
            background-image: url("~@/assets/images/home2/extend/chatbox.png");
            background-repeat: no-repeat;
            background-size: contain;
            position: absolute;
            top: 1.5vw;
            left: 3vw;
            width: 12.65vw;
            height: 5.8vw;
            padding: 2vw 0;
        }
        .agentGreyThree {
            background-image: url("~@/assets/images/home2/extend/agent1-3.png");
            background-repeat: no-repeat;
            background-size: contain;
            width: 1.7vw;
            height: 1.6vw;
            display: inline-block;
            margin: 0 0.25vw;
        }
    }
</style>
