<template>
	<view>
		<view class="goods-info">
			<view class="title">{{goodsInfo.title}}</view>
			<view class="des">{{goodsInfo.des}}</view>
			<Price :price="goodsInfo.price" weight="700"></Price>
		</view>
	</view>
</template>

<script>
	import Price from '../../common/price/price'
	export default {
		props: {
			goodsInfo: {
				type: Object
			}
		},
		data() {
			return {
				
			};
		},
		components: {
			Price
		}
	}
</script>

<style lang="scss">
	.goods-info {
		box-sizing: border-box;
		padding: 40rpx 16rpx 0rpx 16rpx;
		.title {
			font-size: 36rpx;
		}
		.des {
			color: #c9c9c9;
			font-size: 26rpx;
			margin-top: 18rpx;
			margin-bottom: 20rpx;
			line-height: 44rpx;
		}
	}
</style>
