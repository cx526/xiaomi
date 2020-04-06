<template>
	<view>
		<view class="goods-appraise">
			<scroll-view scroll-x="true" class="appraise-box">
				<block v-for="(item,index) in goodsAppraise" :key="index">
					<view class="appraise-item">
						<view class="user-info">
							<view style="display: flex;align-items: center;">
								<image :src="item.topic" mode=""></image>
								<view class="user">
									<text style="color: #5C5C5C;">{{item.username}}</text>
									<text>{{item.create_time}}</text>
								</view>
							</view>
							<view class="link">
								<text class="icon iconfont icon-like"></text>
								<text>120</text>
							</view>
						</view>
						<view class="user-context">
							<text>{{item.context}}</text>
						</view>	
						<view class="user-show">
							<image :src="list" mode="widthFix" v-for="(list,index) in item.imgUrl" :key="index"></image>
						</view>
					</view>
				</block>
			</scroll-view>
			
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			goodsAppraise: {
				type: Array
			}
		},
		data() {
			return {
				
			};
		},
		methods:{
		}
	}
</script>

<style lang="scss">
	.goods-appraise {
		box-sizing: border-box;
		padding: 20rpx;
		.appraise-box {
			white-space: nowrap;
			width: 100%;
			.appraise-item {
				box-sizing: border-box;
				border: 1px solid #EEEEEF;
				margin-right: 20rpx;
				width: 620rpx;
				display: inline-block;
				border-radius: 12rpx;
				background: #F5F5F3;
				padding: 30rpx 20rpx 40rpx 20rpx;
				.user-info {
					box-sizing: border-box;
					display: flex;
					align-items: center;
					font-size: 28rpx;
					justify-content: space-between;
					color: #B3B3B3;
					image {
						width: 70rpx;
						height: 70rpx;
						border-radius: 50%;
					}
					.user {
						margin-left: 20rpx;
						display: flex;
						flex-direction: column;
					}
				}
				.user-context {
					font-size: 28rpx;
					color: #5C5C5C;
					padding: 20rpx 0;
				}
				.user-show {
					display: flex;
					image {
						height: 115rpx;
						margin-right: 20rpx;
					}
					image:last-child {
						margin-right: 0;
					}
				}
			
			}
			.appraise-item:last-child {
				margin-right: 0;
			}
		}
		
	}
</style>
