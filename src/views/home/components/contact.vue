<template>
    <div class="contact">
        <div class="content">
            <div class="content_lf">
                <p class="lf_text">{{ $t('downloadData') }}</p>
                <p class="lf_text">{{ $t('knowMore') }}</p>
                <a class="downloadBtn" href="#">{{ $t('download') }}</a>
                <p class="copyright">{{ $t('copyright') }}</p>
            </div>
            <div class="content_rt">
                <p class="rt_title">{{ $t('cooperation') }}</p>
                <p class="rt_text">telegram: @hengbobet</p>
                <p class="rt_text">WhatsApp{{ $t('whatsApp') }}: +63 945 197 0194</p>
                <p class="rt_text">{{ $t('phone') }}: +63 945 197 0194</p>
            </div>
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
            }
        },
    }
</script>

<style lang="less" scoped>
    .contact{
        overflow: hidden;
        width: 100%;
        @media screen and (min-device-width: 768px){
            height: 13.38vw;
        }
        @media screen and (max-device-width: 768px){
            height: 30vw;
        }
        background: linear-gradient(360deg,rgba(32,35,45,1) 0%,rgba(21,23,32,1) 100%);
        color: #ffffff;
        padding-top: 2.6vw;
        .content{
            @media screen and (max-device-width: 768px){
                transform: scale(2);
                margin: 10vw 0 0 40vw;
            }
            width: 58vw;
            margin: 0 auto;
            .content_lf{
                display: inline-block;
                width: 21.7vw;
                .lf_text{
                    font-size: 1.35vw;
                }
                .downloadBtn{
                    margin-top: 1.35vw;
                    width: 6.67vw;
                    height: 2.5vw;
                    display: block;
                    line-height: 2.5vw;
                    background: #ffffff;
                    color: #333333;
                    font-size: 0.94vw;
                    text-align: center;
                    border-radius: 0.3vw;
                }
                .copyright{
                    margin: 2.97vw 0 1.2vw 0;
                    font-size: 0.76vw;
                }
            }
            .content_rt{
                display: inline-block;
                vertical-align: top;
                .rt_title{
                    font-size: 1.145vw;
                    margin-bottom: 0.68vw;
                }
                .rt_text{
                    line-height: 2.2vw;
                    font-size: 0.94vw;
                }
            }
        }
    }
</style>
