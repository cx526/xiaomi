<template>
	<view style="position: relative;">
		<uni-nav-bar title="购物车" :rightText="isedit?'编辑':'完成'" statusBar :shadow="false" @click-right = "isedit = !isedit"></uni-nav-bar>
		<!-- 购物车为空 -->
		<view class="empty-cart" v-if="cartList.length <= 0">
			<view class="empty">
				<text class="icon iconfont icon-gouwuche"></text>
				<text style="margin: 0 20rpx;color: #ACACAC;">购物车还是空的</text>
				<view class="goShop" hover-class="click">去逛逛</view>
			</view>
		</view>
		<!-- 购物车不为空 -->
		<view class="cart-box" v-else>
			<block v-for="(item,index) in cartList" :key="index">
				<view class="cart" style="margin-bottom: 28rpx;">
					<label class="radio" @click="handleRadio(index)">
						<radio color="#F7842B" :value="item.id" :checked="item.checked"/>
					</label>
					<image :src="item.topic"></image>
					<view class="main">
						<text style="font-size: 28rpx;color: #444;">{{item.title}}</text>
						<!-- 属性选择 -->
						<view style="display: flex;">
							<block v-for="(attr,attrIndex) in item.attr" :key="attrIndex">
								<text 
								style="font-size: 26rpx;color: #C4C6C9;margin-top: 16rpx;margin-left: 8rpx;">
								{{ attr.list[attr.selected].name }}
								</text>
							</block>
						</view>
						<view class="total">
							<view><Price :price="item.price"></Price></view>
							<view>	
								<uniNumberBox :min="1" :max="item.max"
								@change="change($event,index)"></uniNumberBox>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
		<!-- 合计 -->
		<view class="add-box">
			<view>
				<label class="radio" style="padding-left: 40rpx;">
					<radio color="#F7842B"  :checked="len"
					@click="handleCheckedAll"
					:disabled="disabledSelctAll"/>
				</label>
				<view class="add">
					<text style="width: 200rpx;">合计：{{add}}</text>
					<!-- <Price price="3999"></Price> -->
				</view>
				<view class="btn">
					<button type="primary" style="background: #F7842B;">结算</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import uniNumberBox from '@/components/uni-number-box/uni-number-box'
	import Price from '@/components/common/price/price'
	import { mapState,mapMutations,mapGetters } from 'vuex'
	export default {
		data() {
			return {
				// 编辑完成状态切换
				isedit: true,
				// 控制全选全不选
				checkAll: false,
			};
		},
		components:{
			uniNavBar,
			uniNumberBox,
			Price
		},
		computed: {
			...mapState({
				cartList: state => state.cart.cartList
			}),
			...mapGetters(['add','len','disabledSelctAll'])
			
		},
		onLoad() {
			
		},
		methods: {
			// 增加数量
			change(event,index) {
				this.cartList[index].min = event;
				
			},
			...mapMutations(['checkedAll','checked']),
			// 全选/全不选
			handleCheckedAll() {
				this.checkAll = !this.checkAll;
				this.checkedAll({checked: this.checkAll})
			},
			// 单选
			handleRadio(index) {
				this.checked({index: index});
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F5F5F5;
	}
	// 购物车为空
	.empty-cart {
		box-sizing: border-box;
		background: #fff;
		.empty {
			box-sizing: border-box;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 28rpx;
			height: 200rpx;
			text {
				text-align: center;
			}
			.icon-gouwuche {
				font-size: 50rpx;
				color: #ACACAC;
			}
			.goShop {
				display: inline-block;
				padding: 8rpx;
				font-size: 32rpx;
				border: 1px solid #D6D8DF;
				color: #333333;
			}
			button {
				font-size: 28rpx;
				display: inline-block;
				text-align: center;
			}
		}
	}
	.click {
		background: #f1f1f1;
	}
	// 购物车不为空
	.cart-box {
		box-sizing: border-box;
		padding: 30rpx 20rpx;
		border-top: 1px solid #F0F0F0;
		border-bottom: 1px solid #F0F0F0;
		background: #fff;
		.cart {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			label {
				flex-shrink: 0;
				margin-right: 20rpx;
			}
			image {
				width: 150rpx;
				height: 150rpx;
				padding: 20rpx;
				border: 1px solid #f1f1f1;
				flex-shrink: 0;
				margin-right: 20rpx;
			}
			.main {
				display: flex;
				flex-direction: column;
				flex: 1;
				.total {
					display: flex;
					flex-direction: wrap;
					justify-content: space-between;
					align-content: center;
					margin-top: 16rpx;
				}
			}
		}
	}
	// 合计
	/*  #ifndef  H5  */
	.add-box {
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100%;
		height: 100rpx;
		background: #fff;
		border-top: 1px solid #f1f1f1;
		view {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			// padding-left: 40rpx;
			label {
				width: 66rpx;
			}
			.add {
				display: flex;
				align-items: center;
				flex: 1;
				font-size: 28rpx;
				text-align: center;
			}
			.btn {
				width: 300rpx;
				button {
					width: 100%;
					height: 100%;
					font-size: 28rpx;
					line-height: 100rpx;
				}
			}
		}
	}
	/*  #endif   */ 
	/*  #ifdef  H5  */
	.add-box {
		box-sizing: border-box;
		position: fixed;
		left: 0;
		bottom: 100rpx;
		right: 0;
		width: 100%;
		height: 100rpx;
		background: #fff;
		border-top: 1px solid #f1f1f1;
		view {
			width: 100%;
			height: 100%;
			display: flex;
			align-items: center;
			box-sizing: border-box;
			// padding-left: 40rpx;
			label {
				width: 66rpx;
			}
			.add {
				display: flex;
				align-items: center;
				flex: 1;
				font-size: 28rpx;
				text-align: center;
				text {
					display: inline-block;
					width: 120rpx;
				}
			}
			.btn {
				width: 300rpx;
				button {
					width: 100%;
					height: 100%;
					font-size: 28rpx;
					line-height: 100rpx;
				}
			}
		}
	}
	// .add-box uni-view[data-v-647ca051] {
	// 	width: 100% !important;
	// }
	/*  #endif   */
</style>
