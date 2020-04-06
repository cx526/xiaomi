<template>
	<view>
		<!-- 状态栏占位符 -->
		<view :style="{height: statusHeight}"></view>
		<!-- 轮播图 -->
		<SwiperC :swiperUrl="imgUrl" height="750rpx" preview></SwiperC>
		<!-- 商品信息 -->
		<GoodsInfo :goodsInfo="goodsInfo"></GoodsInfo>
		<!-- 商品属性 -->
		<goodsProperty :goodsProperty="goodsProperty"></goodsProperty>
		<!-- 商品规格 -->
		<view class="goods-params">
			<view class="params">
				<view class="params-item" @click="markShow = true">
					<view>
						<text style="margin-right: 20rpx;">已选</text>
						<text>火焰红 64G 标配</text>
					</view>
					<view class="icon iconfont icon-more"></view>
				</view>
				<view class="params-item" @click="addShow = true">
					<view>
						<text style="margin-right: 20rpx;">配送</text>
						<text style="margin-right: 20rpx;">北京 东城区</text>
						<text style="color: #FC5E1C;">有现货</text>
					</view>
					<view class="icon iconfont icon-more"></view>
				</view>
				<view class="params-item" @click="serviceShow = true">
					<view>
						<radio :checked="true" color="#FC5E1C" style="transform: scale(0.6);"/><text>小米自营</text>
						<radio :checked="true" color="#FC5E1C" style="transform: scale(0.6);"/><text>小米发货</text>
						<radio :checked="true" color="#FC5E1C" style="transform: scale(0.6);"/><text>七天无理由退货</text>
					</view>
					<view class="icon iconfont icon-more"></view>
				</view>
			</view>
		</view>
		<!-- 商品评论 -->
		<goodsAppraise :goodsAppraise="goodsAppraise"></goodsAppraise>
		<!-- 更多评论 -->
		<view class="appraise-more" @click="goMoreAppraise">
			<text>更多评论</text>
			<text class="icon iconfont icon-more"></text>
		</view>
		<!-- 商品详情 -->
		<view>
			<uParse className="uParse" 
			:content="article" @preview="preview" @navigate="navigate" :imageProp="imageProp">
			</uParse>
		</view>
		<!-- card -->
		<Card title="为您推荐"></Card>
		<!-- 商品列表 -->
		<List :productList="goodsList"></List>
		<!-- 底部 -->
		<GoodsFooter></GoodsFooter>
		<!-- 商品属性选择弹出层 -->
		<Popup :markShow="markShow" type="markShow" @close="close">
			<view class="params-box">
				<view class="product-show">
					<image src="/static/images/demo/cate_01.png" mode=""></image>
					<view>
						<view><Price price="3999"></Price></view>
						<view style="font-size: 28rpx;"><text>火焰红 标配 64G</text></view>
					</view>
				</view>
				<view class="product-choose">
					<scroll-view scroll-y="true" style="height: 660rpx;">
						<view style="padding-bottom: 40rpx;">
							<Params :paramsList="productList" @changeIndex="changeIndex"></Params>
						</view>
						<view class="product-amount">
							<text>购买数量</text>
							<view>
								<uniNumberBox :min="1" :value="amount" @change="change"></uniNumberBox>
							</view>
							
						</view>
					</scroll-view>
				</view>
				<view class="product-btn">
					<button @click="markShow = false" hover-class="click">确定</button>
				</view>
			</view>
		</Popup>
		<!-- 地址选择弹出层 -->
		<Popup :markShow="addShow" type="addShow"  @close="close">
			<view class="address-box">
				<view class="address-title">
					<text>收货地址</text>
				</view>
				<view class="address-choose">
					<scroll-view scroll-y="true" style="height: 835rpx;padding: 0 20rpx;">
						<view class="address-item" style="border-bottom: 1px solid #F1F1EF;">
							<view>
								<text class="icon iconfont icon-dizhi"></text>
								<text>花和尚</text>
							</view>
							<view style="font-size: 24rpx;color: #A6A6A6;margin-top: 20rpx;">
								<text>广东省佛山市顺德区</text>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="address-btn">
					<button @click="addShow = false" hover-class="click">选择新的地址</button>
				</view>
			</view>
		</Popup>
		<!-- 服务说明弹出层 -->
		<Popup :markShow="serviceShow" type="serviceShow"  @close="close">
			<view class="address-box" style="display: block;">
				<view class="address-title">
					<text>服务说明</text>
				</view>
				<view class="address-choose">
					<scroll-view scroll-y="true" style="height: 835rpx;padding:20rpx 0;">
						<view class="address-item" style="height: auto;">
							<view class="item">
								<view>
										<radio :checked="true" color="#FC5E1C" style="transform: scale(0.6);"/><text>小米自营</text>
								</view>
							</view>
							<view class="item">
								<view>
										<radio :checked="true" color="#FC5E1C" style="transform: scale(0.6);"/><text>小米发货</text>
								</view>
								<view class="des">
									<text>小米发货，高效</text>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="address-btn">
					<button @click="serviceShow = false" hover-class="click">确定</button>
				</view>
			</view>
		</Popup>
	</view>
</template>

<script>
	var htmlString = `
	<img src="http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b219ebc4b74543a97443cd3918178a82b80114ee.jpg">
	<img src="http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b219ebc4b74543a97443cd3918178a82b80114ee.jpg">
	<img src="http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b219ebc4b74543a97443cd3918178a82b80114ee.jpg">
	`
	
	
	import SwiperC from '@/components/common/swiper/swiper'
	import GoodsInfo from '@/components/detail/goods-info/goods-info'
	import goodsProperty from '@/components/detail/goods-property/goods-property'
	import goodsAppraise from '@/components/detail/goods-appraise/goods-appraise'
	import uParse from '@/components/uParse/src/wxParse.vue'
	import Card from '@/components/common/card/card'
	import List from '@/components/common/list/list'
	import GoodsFooter from '@/components/detail/goods-footer/goods-footer'
	import Popup from '@/components/common/popup/popup'
	import Price from '@/components/common/price/price'
	import Params from '@/components/common/params/params'
	import uniNumberBox from '@/components/uni-number-box/uni-number-box'
	export default {
		data() {
			return {
				// 轮播图数据
				imgUrl:[
					{
						src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b219ebc4b74543a97443cd3918178a82b80114ee.jpg'
					},
					{
						src: 'http://i.gongxiao8.com/uploads/i_2_1781909666x1213977150_26.jpg'
					},
					{
						src: 'http://hiphotos.baidu.com/%CC%D8%C0%AD%D3%C8%CB%B9%C3%C9%C6%E6/pic/item/86e75b28c6a709c1023bf6df.jpg?v=tbs'
					}
				],
				// 状态栏占位符高度
				statusHeight: '',
				// 商品的信息
				goodsInfo: {
					title: '小米MIX3 6GB+128GB',
					des: '磁动力滑盖全名屏/前后期间AI双摄/四曲面彩色陶瓷机身/高效10W无线充电',
					price: 3500
				},
				// 商品属性
				goodsProperty: [
					{
						icon: 'icon iconfont icon-cpu',
						title: 'CPU',
						des: '骁龙845八核'
					},
					{
						icon: 'icon iconfont icon-cpu',
						title: 'CPU',
						des: '骁龙845八核'
					},
					{
						icon: 'icon iconfont icon-cpu',
						title: 'CPU',
						des: '骁龙845八核'
					},
					{
						icon: 'icon iconfont icon-cpu',
						title: 'CPU',
						des: '骁龙845八核'
					},
				],
				// 商品评论
				goodsAppraise: [
					{
						topic: '/static/images/demo/demo6.jpg',
						username: '花和尚',
						create_time: '2020-04-05',
						context: '评论内容',
						imgUrl: [
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg'
						]
					},
					{
						topic: '/static/images/demo/demo6.jpg',
						username: '花和尚',
						create_time: '2020-04-05',
						context: '评论内容',
						imgUrl: [
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg'
						]
					},
					{
						topic: '/static/images/demo/demo6.jpg',
						username: '花和尚',
						create_time: '2020-04-05',
						context: '评论内容',
						imgUrl: [
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg',
							'/static/images/demo/demo6.jpg'
						]
					}
				],
				// 富文本解析参数
				article: htmlString,
				imageProp: {
					padding: 0
				},
				// 相关推荐商品参数
				goodsList: [
					{
						cover: '/static/images/demo/list/5.jpg',
						title: '米家空调',
						desc: '1.5匹直流变频',
						newPrice: 2100,
						oldPrice: 2999
					},
					{
						cover: '/static/images/demo/list/5.jpg',
						title: '米家空调',
						desc: '1.5匹直流变频',
						newPrice: 2100,
						oldPrice: 2999
					},
					{
						cover: '/static/images/demo/list/5.jpg',
						title: '米家空调',
						desc: '1.5匹直流变频',
						newPrice: 2100,
						oldPrice: 2999
					},
					{
						cover: '/static/images/demo/list/5.jpg',
						title: '米家空调',
						desc: '1.5匹直流变频',
						newPrice: 2100,
						oldPrice: 2999
					}
				],
				// 控制下拉框显示隐藏
				markShow: false,
				// 产品规格参数
				productList: [
					{
						label: '颜色',
						params: [
							{name: '火焰红',active: true},
							{name: '炭黑',active: false},
							{name: '冰蓝川',active: false},
						]
					},
					{
						label: '容量',
						params: [
							{name: '64GB',active: true},
							{name: '128GB',active: false},
							{name: '256GB',active: false},
						]
					},
					{
						label: '套餐',
						params: [
							{name: '标配',active: true},
							{name: '套餐一',active: false},
							{name: '套餐二',active: false},
						]
					},
				],
				// 商品购买数量
				amount: 1,
				addShow: false,
				serviceShow: false
			};
		},
		components:{
			SwiperC,
			GoodsInfo,
			goodsProperty,
			goodsAppraise,
			uParse,
			Card,
			List,
			GoodsFooter,
			Popup,
			Price,
			Params,
			uniNumberBox
		},
		onLoad() {
			uni.getSystemInfo({
				success: res => {
					this.statusHeight = res.statusBarHeight + 'px'
				}
			})
		},
		methods: {
			preview(src, e) {
				
			},
			navigate(href, e) {
				uni.showModal({
					content : "点击链接为：" + href,
					showCancel:false
				})
			},
			// 关闭弹窗
			close(payload) {
				switch(payload.type) {
					case('markShow'):
					this.markShow = payload.status
					break;
					case('addShow'):
					this.addShow = payload.status
					break;
					case('serviceShow'):
					this.serviceShow = payload.status
					break
				}
			},
			// 监听选择侧滑栏的商品属性
			changeIndex(payload) {
				let index1 = payload.index1;
				let index = payload.index;
				for(let i = 0;i < this.productList[index1].params.length;i++) {
					this.productList[index1].params[i].active = false
				}
				this.productList[index1].params[index].active = true
			},
			// 改变商品购买数量
			change(num) {
				this.amount = num
			},
			// 监听页面原生导航栏返回按钮点击事件
			onBackPress() {
				if(!this.markShow && !this.addShow && !this.serviceShow) {
					console.log('返回了')
				}
				else {
					this.markShow = false;
					this.addShow = false;
					this.serviceShow = false;
					return true
				}
				
			},
			// 点击更多评论
			goMoreAppraise() {
				uni.navigateTo({
					url: '/pages/more-appraise/more-appraise'
				})
			}
		}
		
	}
</script>

<style lang="scss">
	// 商品规格
	.goods-params {
		box-sizing: border-box;
		padding: 0 16rpx;
		margin-top: 26rpx;
		.params {
			box-sizing: border-box;
			border: 1px solid #EEEEEF;
			border-radius: 8rpx;
			.params-item {
				line-height: 90rpx;
				box-sizing: border-box;
				border-bottom: 1px solid #F1F1EF;
				background: #F5F5F3;
				display: flex;
				padding: 0 28rpx;
				font-size: 28rpx;
				align-items: center;
				justify-content: space-between;
				color: #6C6C6D;
			}
		}
	}
	// 商品评价
	.uParse {
		line-height: 0;
		width: 100%;
		padding: 0 !important;
		image {
			width: 100% !important;
		}
		.p {
			padding: 0 !important;
		}
	}
	// 商品属性弹出层
	.params-box {
		box-sizing: border-box;
		padding: 20rpx;
		.product-show {
			box-sizing: border-box;
			display: flex;
			align-items: center;
			image {
				width: 180rpx;
				height: 180rpx;
			}
		}
		.product-amount {
			box-sizing: border-box;
			padding: 30rpx 20rpx;
			display: flex;
			justify-content: space-between;
			font-size: 28rpx;
			align-items: center;
			border-top: 1px solid #F2F2F2;
			}
		.product-btn {
			position: fixed;
			bottom: 0;
			left: 0;
			height: 100rpx;
			width: 100%;
			line-height: 100rpx;
			button {
				height: 100%;
				background: #FB710F;
				font-size: 28rpx;
				color: #fff;
				line-height: 100rpx;
			}
		}
	}
	// 地址选择弹出层
	.address-box {
		box-sizing: border-box;
		padding: 24rpx;
		.address-title {
			font-size: 28rpx;
			line-height: 100rpx;
			border-bottom: 1px solid #F7F7F7;
			text-align: center;
		}
		.address-item {
			box-sizing: border-box;
			height: 140rpx;
			font-size: 28rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			.item {
				display: flex;
				flex-direction: column;
				padding-bottom: 60rpx;
				.des {
					font-size: 24rpx;
					color: #B1B1B1;
					margin-top: 20rpx
				}
			}
		}
		.address-btn {
			position: fixed;
			bottom: 0;
			left: 0;
			height: 100rpx;
			width: 100%;
			line-height: 100rpx;
			button {
				height: 100%;
				background: #FB710F;
				font-size: 28rpx;
				color: #fff;
				line-height: 100rpx;
			}
		}
	}
	.click {
		background: #f1f1f1;
	}
	// 更多评论
	.appraise-more {
		font-size: 28rpx;
		display: flex;
		margin: 30rpx 0;
		color: #2B60C6;
		justify-content: center;
		align-items: center;
	}
</style>
