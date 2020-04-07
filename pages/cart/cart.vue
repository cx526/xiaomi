<template>
	<view>
		<uni-nav-bar title="购物车" :rightText="isedit?'编辑':'完成'" statusBar :shadow="false" @click-right = "isedit = !isedit"></uni-nav-bar>
		<!-- 购物车为空 -->
		<view class="empty-cart">
			<view class="empty">
				<text class="icon iconfont icon-gouwuche"></text>
				<text style="margin: 0 20rpx;color: #ACACAC;">购物车还是空的</text>
				<view class="goShop" hover-class="click">去逛逛</view>
			</view>
		</view>
		<!-- 购物车不为空 -->
		<view class="cart-box">
				<view class="cart">
					<label class="radio">
						<radio color="#F7842B"/><text></text>
					</label>
					<image src="/static/images/demo/cate_01.png"></image>
					<view class="main">
						<text style="font-size: 28rpx;color: #444;">商品标题</text>
						<text style="font-size: 26rpx;color: #C4C6C9;margin-top: 16rpx;">火焰红 64G 标配</text>
						<view class="total">
							<view><Price price="3999"></Price></view>
							<view>	
								<uniNumberBox :min="1"></uniNumberBox>
							</view>
						</view>
					</view>
				</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniNumberBox from '@/components/uni-number-box/uni-number-box'
	import Price from '@/components/common/price/price'
	export default {
		data() {
			return {
				isedit: true
			};
		},
		components:{
			uniNavBar,
			uniNumberBox,
			Price
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
	page {
		background: #F5F5F5;
	}
	// 购物车为空
	.empty-cart {
		box-sizing: border-box;
		background: #fff;
		.empty {
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
			height: 200rpx;
			text {
				text-align: center;
			}
			.icon-gouwuche {
				font-size: 50rpx;
				color: #ACACAC;
			}
			.goShop {
				display: inline-block;
				padding: 8rpx;
				font-size: 32rpx;
				border: 1px solid #D6D8DF;
				color: #333333;
			}
			button {
				font-size: 28rpx;
				display: inline-block;
				text-align: center;
			}
		}
	}
	.click {
		background: #f1f1f1;
	}
	// 购物车不为空
	.cart-box {
		box-sizing: border-box;
		padding: 30rpx 20rpx;
		border-top: 1px solid #F0F0F0;
		border-bottom: 1px solid #F0F0F0;
		background: #fff;
		.cart {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			label {
				flex-shrink: 0;
				margin-right: 20rpx;
			}
			image {
				width: 150rpx;
				height: 150rpx;
				padding: 20rpx;
				border: 1px solid #f1f1f1;
				flex-shrink: 0;
				margin-right: 20rpx;
			}
			.main {
				display: flex;
				flex-direction: column;
				flex: 1;
				.total {
					display: flex;
					flex-direction: wrap;
					justify-content: space-between;
					align-content: center;
					margin-top: 16rpx;
				}
			}
		}
	}
</style>
