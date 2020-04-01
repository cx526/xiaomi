<template>
	<view>
		<view class="card-box" :style="{'border-bottom':borderB}">
			<view class="card-title" :class="fontWeight?'fontWeightActive':''">
				<slot name="title">
					<text>{{title}}</text>
				</slot>
			</view>
			<view class="card-img" v-if="bodyImg">
				<image :src="bodyImg" mode="widthFix"></image>		
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			title: String,
			bodyImg: String,
			borderB: {
				type: String,
				default: 'none'
			},
			fontWeight: {
				type: Boolean,
				default: true
			}
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
			font-size: 28rpx;
			
		}
		.card-img {
			width: 100%;
			image {
				width: 100%;
				display: block;
			}
		}
	}
	.fontWeightActive {
		font-weight: 700 !important;
	}
</style>
