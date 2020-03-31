<template>
	<view>
		<view class="nav-box">
			<view class="nav">
				<view class="nav-item">
					<text>综合</text>
					<view class="nav-icon">
						<text class="icon iconfont icon-paixu-shengxu"></text>
						<text class="icon iconfont icon-paixu-jiangxu"></text>
					</view>
				</view>
				<view class="nav-item">
					<text>销量</text>
					<view class="nav-icon">
						<text class="icon iconfont icon-paixu-shengxu"></text>
						<text class="icon iconfont icon-paixu-jiangxu"></text>
					</view>
				</view>
				<view class="nav-item">
					<text>价格</text>
					<view class="nav-icon">
						<text class="icon iconfont icon-paixu-shengxu"></text>
						<text class="icon iconfont icon-paixu-jiangxu"></text>
					</view>
				</view>
				<view class="nav-item">
					<text>筛选</text>			
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.nav-box {
		box-sizing: border-box;
		.nav {
			box-sizing: border-box;
			line-height: 100rpx;
			border-top: 1px solid #F1F1F1;
			border-bottom: 1px solid #F1F1F1;
			display: flex;
			align-items: center;
			.nav-item {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				text {
					color: #7E8389;
					font-size: 28rpx;
					text-align: center;
				}
				.nav-icon {
					display: flex;
					flex-direction: column;
					line-height: 0;
					text-align: center;
				}
			}
		}
	}
</style>
