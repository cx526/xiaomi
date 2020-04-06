<template>
	<view>
		<view class="goods-property">
			<scroll-view scroll-x>
				<block v-for="(item,index) in goodsProperty" :key="index">
					<view class="property-item">
						<view>
							<text :class="item.icon" style="font-size: 38rpx;"></text>
							<text style="font-size: 28rpx;">{{item.title}}</text>
							<text style="font-size: 24rpx;color: #c9c9c9;">{{item.des}}</text>
						</view>
					</view>
				</block>
				
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			goodsProperty: Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.goods-property {
		box-sizing: border-box;
		padding: 0 16rpx;
		scroll-view {
			width: 100%;
			white-space: nowrap;
			.property-item {
				width: 170rpx;
				height: 110rpx;
				box-sizing: border-box;
				display: inline-block;
				margin-right: 18rpx;
				view {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
</style>
