<template>
    <div class="contact">
        <p class="title"><span>{{ $t('businessTitle1') }}</span><br v-if="!isPC && lang === 'en'" /><span>{{ $t('businessTitle2') }}</span></p>
        <div class="content">
            <ul class="stepUl">
                <li>
                    <img src="~@/assets/images/home/contact/step1.png" alt="">
                    <p>{{ $t('step1') }}</p>
                </li>
                <li>
                    <img src="~@/assets/images/home/contact/step2.png" alt="">
                    <p>{{ $t('step2') }}</p>
                </li>
                <li>
                    <img src="~@/assets/images/home/contact/step3.png" alt="">
                    <p>{{ $t('step3') }}</p>
                </li>
                <li>
                    <img src="~@/assets/images/home/contact/step4.png" alt="">
                    <p>{{ $t('step4') }}</p>
                </li>
                <li>
                    <img src="~@/assets/images/home/contact/step5.png" alt="">
                    <p>{{ $t('step5') }}</p>
                </li>
                <li>
                    <img src="~@/assets/images/home/contact/step6.png" alt="">
                    <p>{{ $t('step6') }}</p>
                </li>
            </ul>
            <ul class="stepUlSm">
                <li>
                    <img src="~@/assets/images/home/contact/step1.png" alt="">
                    <p>{{ $t('step1') }}</p>
                </li>
                <li>
                    <img src="~@/assets/images/home/contact/step2.png" alt="">
                    <p>{{ $t('step2') }}</p>
                </li>
                <li>
                    <img src="~@/assets/images/home/contact/step3.png" alt="">
                    <p>{{ $t('step3') }}</p>
                </li>
                <br />
                <li>
                    <img src="~@/assets/images/home/contact/step6.png" alt="">
                    <p>{{ $t('step6') }}</p>
                </li>

                <li>
                    <img src="~@/assets/images/home/contact/step5.png" alt="">
                    <p>{{ $t('step5') }}</p>
                </li>
                <li>
                    <img src="~@/assets/images/home/contact/step4.png" alt="">
                    <p>{{ $t('step4') }}</p>
                </li>
            </ul>
            <p class="downTitle">{{ $t('knowMore') }}</p>
            <a class="downloadBtn" href="/G-Winner_manual.pdf" target="_blank">{{ $t('download') }}</a>
            <ul class="contactType">
                <li>
                    <i class="contactIcon icon-telegram"></i>
                    <a href="http://t.me/hengbobet" target="_blank"> telegram: @hengbobet</a>
                </li>
                <li>
                    <i class="contactIcon icon-whatsapp"></i>
                    <a href="https://wa.me/639451970194" target="_blank"> WhatsApp{{ $t('whatsApp') }}: +63 945 197 0194</a>
                </li>
                <li>
                    <i class="contactIcon icon-phone"></i>
                    <a href="tel:+639451970194"> {{ $t('phone') }}: +63 945 197 0194</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "contact",
        data() {
          return {}
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
    .contact{
        overflow: hidden;
        width: 100%;
        @media screen and (min-device-width: 768px){
            padding-top: 2.11vw;
        }
        @media screen and (max-device-width: 767px){
            padding-top: 4.16vw;
        }
        background: linear-gradient(#080f1f, #0E0829);
        color: #ffffff;
        padding-bottom: 6vw;
        p.title{
            margin-bottom: 3vw;
            color: #ffffff;
            span{
                margin: 0 1vw;
            }
        }
        .content{
            text-align: center;
            .stepUl{
                @media screen and (max-device-width: 767px){
                    display: none;
                }
                text-align: center;
                li{
                    position: relative;
                    margin-right: 100px;
                    &:after{
                        content: '';
                        background-image: url("~@/assets/images/home/contact/stepLine1.png");
                        width: 80px;
                        height: 10px;
                        display: block;
                        position: absolute;
                        right: -90px;
                        top: 60px
                    }
                    display: inline-block;
                    p{
                        margin-top: 22px;
                        color: #FFFFFF;
                        font-size: 1.2vw;
                    }
                    &:last-child{
                        margin-right: unset;
                        &:after{
                            background-image: unset;
                        }

                    }
                }
            }
            .stepUlSm{
                @media screen and (min-device-width: 768px){
                    display: none;
                }
                text-align: center;
                li {
                    position: relative;
                    margin-right: 100px;
                    margin-bottom: 2vw;
                    img{
                        display: block;
                        width: 120px;
                        height: 139px;
                    }
                    &:after {
                        content: '';
                        background-image: url("~@/assets/images/home/contact/stepLine1.png");
                        background-repeat: no-repeat;
                        width: 80px;
                        height: 10px;
                        display: block;
                        position: absolute;
                        right: -90px;
                        top: 60px
                    }
                    display: inline-block;
                    p {
                        margin-top: 22px;
                        color: #FFFFFF;
                        font-size: 2.5vw;
                    }
                    &:last-child {
                        margin-right: unset;
                        &:after {
                            background-image: unset;
                        }
                    }
                    &:nth-child(3){
                        margin-right: unset;
                        &:after{
                            background-image: url("~@/assets/images/home/contact/stepLine2.png");
                            width: 80px;
                            height: 210px;
                            top: 32%;
                            background-size: contain;
                        }
                    }
                    &:nth-child(6){
                        &:after{
                            transform: rotate(180deg);
                        }
                    }
                    &:nth-child(5){
                        &:after{
                            transform: rotate(180deg);
                        }
                    }
                }
            }
            .downTitle{
                font-size: 26px;
                color: #FFFFFF;
                text-align: center;
                margin: 60px auto 30px;
            }
            .downloadBtn{
                display: inline-block;
                margin: 0 auto 60px;
                padding: 13px 42px;
                font-size: 24px;
                color: #ffffff;
                background: #222CE1;
                border-radius: 5px;
            }
            .contactType{
                li{
                    display: inline-block;
                    margin-right: 40px;
                    @media screen and (max-device-width: 767px){
                        display: block;
                        width: 100vw;
                        margin-bottom: 20px;
                        padding-left: calc(50% - 30vw);
                        text-align: left;
                    }
                    a{
                        @media screen and (max-device-width: 767px){
                            font-size: 22px;
                        }
                        @media screen and (min-device-width: 768px){
                            font-size: 1.2vw;
                        }
                        color: #FFFFFF;
                        text-decoration: underline;
                    }
                }
                .contactIcon{
                    display: inline-block;
                    @media screen and (max-device-width: 767px){
                        width: 28px;
                        height: 28px;
                    }
                    @media screen and (min-device-width: 768px){
                        width: 1.6vw;
                        height: 1.6vw;
                    }
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    vertical-align: bottom;
                    margin-right: 5px;
                    &.icon-telegram{
                        background-image: url("~@/assets/images/home/contact/Telegram.png");
                    }
                    &.icon-whatsapp{
                        background-image: url("~@/assets/images/home/contact/WhatsApp.png");
                    }
                    &.icon-phone{
                        background-image: url("~@/assets/images/home/contact/Iphone.png");
                    }
                }
            }
        }
    }
</style>
