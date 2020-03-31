<template>
	<view>
		<view class="record">
				<view class="record-item" v-for="(item,index) in record" :key="index">
					<text>{{item.name}}</text>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			record: Array
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.record {
		box-sizing: border-box;
		.record-item {
			box-sizing: border-box;
			padding-left: 30rpx;
			line-height: 94rpx;
			border-bottom: 1px solid #F0F0F0;
			font-size: 26rpx;
		}
	}
</style>
