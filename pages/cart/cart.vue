<template>
	<view>
		<text>{{title}}</text>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'null'
			};
		},
		// 监听全局时需要先加载一次页面
		onLoad() {
			uni.$on('index',data => {
				this.title = data
			})
		}
	}
</script>

<style lang="scss">

</style>
