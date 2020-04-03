<template>
	<view class="box">
		<scroll-view scroll-y="true" 
		:style="{height: screenHeight}"
		class="left">
			<block v-for="n in 100" :key="n">
				<view class="left-item">
					<text>{{n}}</text>
				</view>
			</block>
		</scroll-view>
		<scroll-view scroll-y="true" 
		:style="{height: screenHeight}"
		class="right">
			<view class="product">
				<block v-for="n in 100" :key="n">
					<view class="product-item">
						<image src="/static/images/demo/cate_05.png" mode=""></image>
						<text>分类一</text>
					</view>
				</block>
			</view>
		
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 储存页面高度
				screenHeight: ''
			};
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.screenHeight = res.windowHeight + 'px'
				}
			})
		},
	}
</script>

<style lang="scss">
	.box {
		display: flex;
		box-sizing: border-box;
		height: 100%;
		scroll-view {
			flex: 3.5;
			box-sizing: border-box;
		}
		.left {
			flex: 1;
			border-right: 1px solid #F3F3F3;
			margin-right: 34rpx;
			.left-item {
				box-sizing: border-box;
				padding: 36rpx 0;
				text-align: center;
				font-size: 32rpx;
				color: #2A2A2A;
				border-bottom: 1px solid #F3F3F3;
				text {
					display: block;
				}
			}
		}
		.right {
			box-sizing: border-box;
			padding-top: 14rpx;
			.product {
				box-sizing: border-box;
				flex-wrap: wrap;
				display: flex;
				.product-item {
					margin-right: 66rpx;
					margin-bottom: 66rpx;
					width: calc(33.33% - 66rpx);
					box-sizing: border-box;
					display: flex;
					flex-direction: column;
					align-items: center;
					image {
						width: 100%;
						height: 90rpx;
					}
					text {
						margin-top: 28rpx;
						font-size: 24rpx;
						color: #2A2A2A;
					}
				}
			}
		}
	}
	.active {
		color: #FC7512;
		border-left: 4px solid #FC7512;
	}
</style>
