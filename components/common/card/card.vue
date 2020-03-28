<template>
	<view>
		<view class="card-box">
			<view class="card-title">
				<slot name="title">
					<text>{{title}}</text>
				</slot>
			</view>
			<view class="card-img">
				<image :src="bodyImg" mode="widthFix"></image>		
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			bodyImg: String
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	.card-box {
		box-sizing: border-box;
		.card-title {
			box-sizing: border-box;
			line-height: 90rpx;
			padding-left: 18rpx;
			font-size: 24rpx;
			font-weight: 700;
		}
		.card-img {
			width: 100%;
			image {
				width: 100%;
				display: block;
			}
		}
	}
</style>
