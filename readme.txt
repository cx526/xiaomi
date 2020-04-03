	### 1.默认flex布局，且为方向为纵向;
	### 2.默认为盒模型;
	### 3.元素属性只能单一拆分写;
	### 4.字体必须被包裹在<text>标签中;
	### 5.样式引入格式<style src="@/static/font/iconfont.css"></style>
	### 6.全局事件uni.$emit('event',data);监听事件uni.$on('event',data => {});监听事件的页面需预先加载一次;且页面卸载时要用uni.$off('event')移除监听事件操作
	### 7.nvue中模拟生命周期函数onShow:(记得页面销毁前移除监听事件)
	### created() {
	### 	// 模拟onShow生命周期函数
	### 	const currentWebview = plus.webview.currentWebview();
	### 	currentWebview.addEventListener('show',() => {
	### 		console.log('show')
	### 	})
	### },
	### 8.nvue中的<text>组件不能换行也不能留空出来
	### 9.nvue中的所有<div>元素默认都是flex布局,合理应用flex布局能节省很多计算问题(常见的占据整屏剩余的部分)
	### 10.uni.showModal在ios端不会显示弹窗；需要给context一个随意字段值
	### 11.原生导航栏涉及到需要做页面跳转功能时要用相对路径
	### 12.uni中涉及@input的实时更新需要设置个延时(bug)
	### 13.ios虚拟键盘弹起不会触发屏幕尺寸变化事件,而安卓会,常见的情况有登录注册页底部按钮因键盘弹起造成页面布局错乱的原因,可以借助uni.onWindowResize解决(当虚拟键盘抬起时隐藏按钮)
	### 14.小程序组件读取全局变量如vuex,或者挂载在main.js上的全局变量时，需要先赋值给组件里的data再使用