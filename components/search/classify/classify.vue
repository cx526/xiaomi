<template>
	<view>
		<view class="keyword">
			<block v-for="(item,index) in classify" :key="index">
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
			classify: Array
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
			background: #F5F5F5;
			padding: 20rpx;
			margin-right: 20rpx;
			margin-bottom: 20rpx;
			font-size: 26rpx;
			display: inline-block;
			color: #737373;
		}
	}
</style>
