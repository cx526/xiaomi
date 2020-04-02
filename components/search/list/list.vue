<template>
	<view>
		<view class="product-box">
			<view class="product">
				<block v-for="(item,index) in productList" :key="index">
					<view class="product-item">
						<view class="product-img">
							<image :src="item.topic" mode=""></image>
						</view>
						<view class="product-message">
							<view class="product-title">
								<text>{{item.title}}</text>
							</view>
							<view class="product-des">
								<text>{{item.des}}</text>
							</view>
							<view class="product-price">
								<Price :price="item.price"></Price>
							</view>
							<view class="product-appraise">
								<text style="margin-right: 12rpx;">{{item.count}}条评论</text>
								<text>{{item.percent}}满意度</text>
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			productList: Array
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
			.product-item {
				border-bottom: 1px solid #F1F1F1;
				padding: 26rpx;
				display: flex;
				align-content: center;
			}
			.product-img {
				box-sizing: border-box;
				width: 250rpx;
				height: 250rpx;
				margin-right: 30rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.product-message {
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				justify-content: center;
				.product-title {
					font-size: 36rpx;
					font-weight: 700;
					margin-bottom: 12rpx;
				}
				.product-des {
					font-size: 24rpx;
					color: #babfc4;
					margin-bottom: 20rpx;
				}
				.product-price {
					margin-bottom: 12rpx;
				}
				.product-appraise {
					font-size: 24rpx;
					color: #babfc4;
	
				}
			}
		}
	}
</style>
