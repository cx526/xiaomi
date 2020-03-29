	### 1.默认flex布局，且为方向为纵向;
	### 2.默认为盒模型;
	### 3.元素属性只能单一拆分写;
	### 4.字体必须被包裹在<text>标签中;
	### 5.样式引入格式<style src="@/static/font/iconfont.css"></style>
	### 6.全局事件uni.$emit('event',data);监听事件uni.$on('event',data => {});监听事件的页面需预先加载一次;且页面卸载时要用uni.$off('event')移除监听事件操作