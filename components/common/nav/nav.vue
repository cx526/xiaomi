<template>
	<view>
		<view class="nav-box">
			<view class="nav">
				<block v-for="(item,index) in navList" :key="index">
					<view class="nav-item">
						<image :src="item.src" mode=""></image>
						<text>{{item.text}}</text>
					</view>
				</block>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			navList: {
				type: Array
			}
		},
		data() {
			return {
				
			};
		},
		created() {
			// console.log(JSON.stringify(this.navList))
		}
	}
</script>

<style lang="scss">
	.nav-box {
		box-sizing: border-box;
		padding: 20rpx;
		padding-bottom: 10rpx;
		.nav {
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;
			.nav-item {
				width: 20%;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-bottom: 10rpx;
				image {
					width: 60rpx;
					height: 60rpx;
				}
				text {
					font-size: 24rpx;
					margin-top: 10rpx;
				}
			}
		}
	}
</style>
