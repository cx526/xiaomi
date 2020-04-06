<template>
	<view>
		<view class="new">
			<text style="font-size: 20rpx;position: relative;top: -8rpx;">￥</text>
			<text :style="{fontWeight: weight}">{{price}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			price:[String,Number],
			weight: {
				type: String,
				default: 'normal'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
	.new {
		font-size: 28rpx;
		color: #E57228;
	}
</style>
