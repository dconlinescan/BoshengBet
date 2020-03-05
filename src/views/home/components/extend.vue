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
    import peopleImg from '@/assets/images/home/extend/people.png'
    import totalImg from '@/assets/images/home/extend/total.png'
    import friendImg from '@/assets/images/home/extend/friend.png'
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
        color: #ffffff;
        background: url("../../../assets/images/home/extend/extend_bg.jpg") no-repeat;
        background-size: 100% 100%;
        padding: 6vw 0 7.81vw 0;
        p.title{
            color: #ffffff;
            margin: 0 0 0.87vw 0;
        }
        p.title2{
            font-size: 1.63vw;
            width: 65vw;
            text-align: center;
            margin: 0 auto 4.3vw;
            @media screen and (max-device-width: 768px){
                transform: scale(1.5);
                margin: 2vw auto 6vw;
            }
        }
        .content{
            @media screen and (max-device-width: 768px){
                transform: scale(1.3);
            }
            text-align: center;
            ul{
                li{
                    vertical-align: bottom;
                    width: 20.72vw;
                     height: 20.65vw;
                    display: inline-block;
                    background-color: #ffffff;
                    margin-right: 3.37vw;
                    box-shadow: -0.06vw 0.12vw 0.29vw 0vw rgba(240,242,244,1);
                    border-radius: 0.29vw;
                    text-align: center;
                    p.extendLiTitle{
                        font-size: 1.25vw;
                        color: #333333;
                        margin-top: 2.083vw;
                    }
                    p.extendLiText{
                        font-size: 0.94vw;
                        color: #666666;
                        margin-bottom: 1.56vw;
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
                            width: 11.98vw;
                        }
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
