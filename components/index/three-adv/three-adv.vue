<template>
	<view>
		<view class="product-box">
			<view class="product">
				<view class="prodct-left">
					<image :src="threeAdv.big.src" mode=""></image>
				</view>
				<view class="product-right">
					<view style="margin-bottom: 2rpx;">
						<image :src="threeAdv.smallTop.src" mode=""></image>
					</view>
					<view style="margin-top: 2rpx;">
						<image :src="threeAdv.smallBottom.src" mode=""></image>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			threeAdv: {
				type: Object
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.product-box {
		box-sizing: border-box;
		.product {
			box-sizing: border-box;
			display: flex;
			.prodct-left {
				flex: 1;
				box-sizing: border-box;
				width: 50%;
				margin-right: 2rpx;
				height: 530rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.product-right {
				flex: 1;
				width: 50%;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				view {
					height: 50%;
					box-sizing: border-box;
					image {
						width: 100%;
						height: 100%;
						display: block;
					}
				}
			}
		}
	}
</style>
