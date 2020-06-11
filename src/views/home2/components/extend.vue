<template>
    <div class="extend">
        <p class="title">{{ $t('extendTitle') }}</p>
        <p class="title2">{{ $t('extendTitle1') }}</p>
        <div class="content">
            <ul>
                <li>
                    <p class="extendLiTitle">{{ $t('extendLiTitle1') }}</p>
                    <p class="extendLiText">{{ $t('extendLiText1') }}</p>
                    <img :src="extend.img.people" alt="">
                </li>
                <li>
                    <p class="extendLiTitle">{{ $t('extendLiTitle2') }}</p>
                    <p class="extendLiText">{{ $t('extendLiText2') }}</p>
                    <img :src="extend.img.total" alt="">
                </li>
                <li>
                    <p class="extendLiTitle">{{ $t('extendLiTitle3') }}</p>
                    <p class="extendLiText">{{ $t('extendLiText3') }}</p>
                    <img :src="extend.img.friend" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import peopleImg from '@/assets/images/home2/extend/people.png'
    import totalImg from '@/assets/images/home2/extend/total.png'
    import friendImg from '@/assets/images/home2/extend/friend.png'
    export default {
        name: "extend",
        data() {
            return {
                extend:{
                    img:{
                        people: peopleImg,
                        total: totalImg,
                        friend: friendImg
                    }
                }
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
                    vertical-align: bottom;
                    width: 20.72vw;

                    display: inline-block;
                    background-color: #ffffff;
                    margin-right: 3.37vw;
                    box-shadow: 2px 2px 8px 0 rgba(0,0,0,0.20);
                    border-radius: 0.29vw;
                    text-align: center;
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
        }
    }
</style>
