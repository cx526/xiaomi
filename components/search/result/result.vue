<template>
	<view>
		<view class="nav-box">
			<!-- 导航栏 -->
			<view class="nav">
				<view class="nav-item" 
				v-for="(item,index) in screen.list"
				:key="index">
					<text 
					:class="screen.currentIndex == index?'active': ''"
					@click="changeStatus(index)">
					{{item.name}}
					</text>
					<view class="nav-icon">
						<text class="icon iconfont icon-paixu-shengxu"
						:class="item.status == 1?'active': ''">
						</text>
						<text class="icon iconfont icon-paixu-jiangxu"
						:class="item.status == 2?'active': ''">
						</text>
					</view>
				</view>
				<view class="nav-item" @click="drawerShow = true">
					<text>筛选</text>			
				</view>
			</view>
			<!-- 产品列表 -->
			<List :productList="productList"></List>
			<!-- 侧拉框 -->
			<uni-drawer 
			:visible="drawerShow" mode="right" 
			@close="drawerShow = false"
			>
				<view>
						<Params :paramsList="productPrams" @changeIndex="changeIndex"></Params>
						<view class="drawer-bottom">
							<view class="drawer-btn">
								<view>重置</view>
								<view>确定</view>
							</view>
						</view>
				</view>
			</uni-drawer>
		</view>
	</view>
</template>

<script>
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	import Card from '@/components/common/card/card.vue'
	import Params from '@/components/common/params/params.vue'
	// import Price from '@/components/common/price/price.vue'
	import List from '@/components/search/list/list.vue'
	export default {
		data() {
			return {
				// 导航栏数据
				screen: {
					currentIndex : 0,
					list: [
						// 状态1代表升序，状态2代表降序
						{name: '综合',status: 1},
						{name: '销量',status: 0},
						{name: '价格',status: 0}
					]
				},
				// 抽屉数据
				drawerShow: false,
				// 分类数据
				// 产品规格参数
				productPrams: [
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
					}
				],
				// 搜索列表数据
				productList: [
					{
						title: '真无线蓝牙耳机',
						topic: '/static/images/demo/demo6.jpg',
						des: '雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作',
						price: 100,
						count: 1222,
						percent: '97%'
					},
					{
						title: '真无线蓝牙耳机',
						topic: '/static/images/demo/demo6.jpg',
						des: '雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作',
						price: 100,
						count: 1222,
						percent: '97%'
					},
					{
						title: '真无线蓝牙耳机',
						topic: '/static/images/demo/demo6.jpg',
						des: '雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作',
						price: 100,
						count: 1222,
						percent: '97%'
					},
					{
						title: '真无线蓝牙耳机',
						topic: '/static/images/demo/demo6.jpg',
						des: '雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作',
						price: 100,
						count: 1222,
						percent: '97%'
					}
				],
				
				
			}
		},
		components: {
			uniDrawer,
			Card,
			Params,
			List
			// Price
		},
		methods: {
			// tab切换
			changeStatus(index) {
				if(index != this.screen.currentIndex) {
					for(let i = 0;i < this.screen.list.length;i++) {
						this.screen.list[i].status = 0
					}
					this.screen.list[index].status = 1;
					this.screen.currentIndex = index
				}
				else {
					this.screen.list[index].status=this.screen.list[index].status == 1?2:1
				}
			},
			// 监听选择侧滑栏的商品属性
			changeIndex(payload) {
				let index1 = payload.index1;
				let index = payload.index;
				for(let i = 0;i < this.productPrams[index1].params.length;i++) {
					this.productPrams[index1].params[i].active = false
				}
				this.productPrams[index1].params[index].active = true
			},
		}
	}
</script>

<style lang="scss">
	// 导航栏
	.nav-box {
		box-sizing: border-box;
		.nav {
			box-sizing: border-box;
			line-height: 100rpx;
			border-top: 1px solid #F1F1F1;
			border-bottom: 1px solid #F1F1F1;
			display: flex;
			align-items: center;
			.nav-item {
				flex: 1;
				display: flex;
				align-items: center;
				justify-content: center;
				text {
					color: #7E8389;
					font-size: 28rpx;
					text-align: center;
				}
				.nav-icon {
					display: flex;
					flex-direction: column;
					line-height: 0;
					text-align: center;
				}
			}
		}
	}
	
	// 抽屉
	.drawer-bottom {
		box-sizing: border-box;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 90rpx;
		line-height: 90rpx;
		.drawer-btn {
			display: flex;
			line-height: 90rpx;
			view {
				flex: 1;
				text-align: center;
				font-size: 28rpx;
			}
			view:nth-child(1) {
				color: #444;
			}
			view:nth-child(2) {
				background: #fd6801;
				color: #fff;
			}
			
		}
	}
	
	.active {
		color: #E57228 !important;
	}
</style>
