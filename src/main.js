import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入多语言支持
import i18n from './tools/i18n'
import './assets/style/animate.min.css'
new Vue({
    render: h => h(App),
    i18n,
}).$mount('#app')
