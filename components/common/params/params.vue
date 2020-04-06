<template>
	<view>
		<view class="search-box">
			<view class="search" v-for="(list,index1) in paramsList" :key="index1">
				<view><Card :title="list.label"></Card></view>
				<view style="display: flex;">
					<view class="search-item"
					v-for="(item,index) in list.params" :key="index"
					@tap="changeIndex({index1: index1,index: index})"
					:class="item.active ?'active': ''">
						<text>{{item.name}}</text>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import Card from '@/components/common/card/card'
	export default {
		props: {
			paramsList: Array
		},
		data() {
			return {
				
			};
		},
		components:{
			Card
		},
		methods:{
			changeIndex(payload) {
				this.$emit('changeIndex',payload)
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
			flex-direction: column;
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
