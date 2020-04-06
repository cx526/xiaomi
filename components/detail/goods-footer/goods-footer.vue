<template>
	<view class="footer-box">
		<view class="footer-min" hover-class="click">
			<text class="icon iconfont icon-shoucang" style="font-size: 36rpx;"></text>
			<text>收藏</text>
		</view>
		<view class="footer-min" hover-class="click">
			<text class="icon iconfont icon-gouwuche" ></text>
			<text>购物车</text>
		</view>
		<view class="footer-max">
			<button>加入购物车</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.footer-box {
		width: 100%;
		height: 110rpx;
		position: fixed;
		left: 0;
		background: #fff;
		bottom: 0;
		display: flex;
		font-size: 28rpx;
		justify-content: center;
		align-items: center;
		.footer-min {
			box-sizing: border-box;
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
		}
		.footer-max {
			box-sizing: border-box;
			flex: 2.5;
			height: 100%;
			button {
				font-size: 28rpx;
				color: #fff;
				height: 100%;
				background: #F26D0E;
				line-height: 110rpx;
				border-radius: 0;
			}
		}
	}
	.click {
		background: #f1f1f1;
	}
</style>
