<template>
	<view>
		<view class="keyword">
			<block v-for="(item,index) in hot" :key="index">
				<view class="keyword-item">
					<text>{{item.name}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			hot: Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.keyword {
		box-sizing: border-box;
		padding: 25rpx 20rpx;
		padding-bottom: 0;
		.keyword-item {
			border: 1px solid #4AFFFF;
			background: #E8F6F6;
			padding: 20rpx;
			margin-right: 20rpx;
			margin-bottom: 20rpx;
			font-size: 26rpx;
			display: inline-block;
		}
	}
</style>
