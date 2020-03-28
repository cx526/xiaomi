<template>
	<view>
		<swiper indicator-dots autoplay :interval="3000" :duration="1000" circular>
			<block v-for="(item,index) in swiperUrl" :key="index">
				<swiper-item>
					<view class="swiper-item">
						<image :src="item.src" mode=""></image>
					</view>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default {
		props:{
			swiperUrl: {
				type: Array
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	swiper-item {
		width: 100%;
		height: 350rpx;
		.swiper-item {
			width: 100%;
			height: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
		
	}
</style>
