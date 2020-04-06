<template>
	<view>
		<swiper indicator-dots autoplay :interval="3000" :duration="1000" circular
		:style="{height: height}">
			<block v-for="(item,index) in swiperUrl" :key="index">
				<swiper-item :style="{height: height}">
					<view class="swiper-item" @click="handleSwiperImg(item,index)">
						<image :src="item.src" mode="" :style="{height: height}"></image>
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
			},
			height: {
				type: String,
				default: '350rpx'
			},
			// 判定是否要有点击预览图片的功能
			preview: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				
			};
		},
		methods: {
			// 点击轮播图图片
			handleSwiperImg(item,index) {
				if(this.preview) {
					// 点击图片预览功能
					let url = [];
					url = this.swiperUrl.map(item => {
						return item.src;
					});
					// console.log(url)
					uni.previewImage({
						current:index,
						urls:url,
						indicator:"default"
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	swiper-item {
		width: 100%;
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
