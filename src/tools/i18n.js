import Vue from 'vue'
import VueI18n from 'vue-i18n'
import CN from '../assets/i18n/cn'
import EN from '../assets/i18n/en'
import TW from '../assets/i18n/tw'
Vue.use(VueI18n)

// 以下为语言包单独设置的场景，单独设置时语言包需单独引入
const messages = {
    'cn': CN,   // 中文语言包
    'en': EN,   // 英文语言包
    'tw': TW    // 英文语言包
}

// 最后 export default，这一步肯定要写的。
export default new VueI18n({
    locale : localStorage.getItem('LANG') || 'cn', // set locale 默认显示英文
    messages : messages // set locale messages
})
