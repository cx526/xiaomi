<template>
	<view>
		<view class="new">
			<text style="font-size: 20rpx;position: relative;top: -8rpx;">￥</text>
			<text>{{price}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			price:[String,Number]
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.new {
		font-size: 28rpx;
		color: #E57228;
	}
</style>
