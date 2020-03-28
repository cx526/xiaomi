<template>
	<view>
		<view class="product-list">
			<view class="product">
				<block v-for="(item,index) in productList" :key="index">
					<view class="product-item">
						<view class="product-img">
							<image :src="item.cover" mode=""></image>
						</view>
						<view class="product-context">
							<view class="product-title">
								<text>{{item.title}}</text>
							</view>
							<view class="product-des">
								<text>{{item.desc}}</text>
							</view>
							<view class="prodct-price">
								<Price :price="item.newPrice"></Price>
								<view class="old">
									<text>￥{{item.oldPrice}}</text>
								</view>
							</view>
						</view>
					</view>
				</block>
				
			</view>
		</view>
	</view>
</template>

<script>
	import Price from '@/components/common/price/price.vue'
	export default {
		props: {
			productList: {
				type: Array
			}
		},
		data() {
			return {
				
			};
		},
		components:{
			Price
		}
	}
</script>

<style lang="scss">
	.product-list {
		box-sizing: border-box;
		margin-top: 6rpx;
		.product {
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			.product-item {
				width: calc(50% - 3rpx);
				box-sizing: border-box;
				.product-img {
					height: 370rpx;
					image {
						width: 100%;
						height: 370rpx;
						display: block;
					}
				}
				.product-context {
					box-sizing: border-box;
					padding: 20rpx;
					.product-title {
						font-size: 28rpx;
						font-weight: 700;
					}
					.product-des {
						font-size: 24rpx;
						color: #C4C4C4;
						margin-top: 10rpx;
					}
					.prodct-price {
						box-sizing: border-box;
						display: flex;
						margin-top: 10rpx;
						align-items: center;
						
						.old {
							font-size: 20rpx;
							color: #C4C4C4;
							margin-left: 10rpx;
						}
					}
				}
			}
		}
	}
</style>
