<template>
  <div id="app">
    <HOME />
  </div>
</template>

<script>
import HOME from './views/home'

export default {
    name: 'App',
    components: {
        HOME
    },
    beforeMount() {
        if (!localStorage.getItem('LANG')) {
            localStorage.setItem('LANG', this.getLang())
        }
    },
    mounted() {
        // 禁用右键菜单
        document.oncontextmenu = function(){
            return false;
        }
        // 禁用网页上选取的内容
        document.onselectstart = function(){
            return false;
        }
        // 禁用复制
        document.oncopy = function(){
            return false;
        }
    },
    methods: {
        getLang() {
            const type = navigator.appName
            let lang
            if (type == "Netscape"){
                lang = navigator.language
            } else{
                lang = navigator.userLanguage
            }
            if (lang.toLowerCase().includes('zh')) {
                if (lang.toLowerCase().includes('tw')) {
                    return 'tw'
                } else {
                    return 'cn'
                }
            } else {
                return 'en'
            }
        }
    }
}
</script>

<style lang="less">
    @import "assets/style/base.less";
</style>
