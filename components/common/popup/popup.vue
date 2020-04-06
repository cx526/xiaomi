<template>
	<view>
		<view class="prop-box">
				<view class="mark animated fadeIn" v-show="markShow" @click.stop="close"></view>
				<view class="body animated fadeInUp" v-show="markShow" >
					<slot></slot>
				</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			markShow: {
				type: Boolean,
				default: false
			},
			type: String
		},
		data() {
			return {
				
			};
		},
		methods:{
			close() {
				this.$emit('close',{status: false,type: this.type})
			}
		}
	}
</script>

<style lang="scss">
.prop-box {
		box-sizing: border-box;
		.mark {
			box-sizing: border-box;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,0.5);
			position: fixed;
			left: 0;
			bottom: 0;
			z-index: 9;
		}
		.body {
			position: fixed;
			height: 1035rpx;
			width: 100%;
			bottom: 0;
			left: 0;
			background: #fff;
			box-sizing: border-box;
			padding: 0 4%;
			border-radius: 24rpx;
			z-index: 10;
		}
	}
</style>
