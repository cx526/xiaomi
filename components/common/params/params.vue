<template>
	<view>
		<view class="search-box">
			<view class="search">
				<view class="search-item"
				v-for="(item,index) in paramsList.list" :key="index"
				@tap="changeIndex(index,paramsList.type)"
				:class="paramsList.selectedIndex == index?'active': ''">
					<text>{{item.name}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			paramsList: Object
		},
		data() {
			return {
				
			};
		},
		methods:{
			changeIndex(index,type) {
				this.$emit('changeIndex',{index: index,type: type})
			},
		},
	}
</script>

<style lang="scss">
	.search-box {
		box-sizing: border-box;
		padding: 0 24rpx;
		.search {
			box-sizing: border-box;
			display: flex;
			.search-item {
				margin-right: 42rpx;
				width: calc(33.33% - 28rpx);
				flex-shrink: 0;
				box-sizing: border-box;
				font-size: 28rpx;
				background: #f8f9fb;
				color: 5a5a5e;
				line-height: 70rpx;
				text-align: center;
			}
			.search-item:nth-child(3n) {
				margin-right: 0;
			}
		}
	}
	.active {
		border: 1px solid #fd7110 !important;
		background: #fce0d5 !important;
		color: #fd7110 !important;
		border-radius: 6rpx !important;
	}
</style>
