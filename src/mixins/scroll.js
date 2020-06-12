export default {
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
		},
		windowHeight() {
			return document.body.clientHeight
		},
	},
	methods: {
		getPageScroll() {//获取网页滚动距离的方法
			let x, y;
			if (window.pageXOffset){//查看有无pageXOffset属性：IE9以及IE9以上的浏览器
				x = window.pageXOffset;
				y = window.pageYOffset;
			}else if (document.compatMode ===  "BackCompat"){//混杂（怪异）模式下浏览器
				x = document.body.scrollLeft;
				y = document.body.scrollTop;
			}else {//标准模式下浏览器
				x = document.documentElement.scrollLeft;
				y = document.documentElement.scrollTop;
			}
			return {//返回水平距离、垂直距离
				x:x,
				y: y
			}
		},
	}
}
