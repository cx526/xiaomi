<template>
	<view class="box">
		<scroll-view scroll-y="true" 
		:style="{height: screenHeight}"
		class="left">
			<block v-for="(item,index) in navList" :key="index">
				<view class="left-item" @click="changeCurrentIndex(index)">
					<text :class="currentIndex == index? 'active': ''">{{item.name}}</text>
				</view>
			</block>
		</scroll-view>
		<scroll-view scroll-y="true" class="right"
		:style="{height: screenHeight}"
		:scroll-top="rightScrollTop"
		:scroll-with-animation="true"
		@scroll="rightScroll">
			<view class="product">
				<view v-for="(item,index) in goodsList" :key="index" class="product-list">
					<view class="product-item"
					v-for="(goods,goodsIndex) in item.list" :key="goodsIndex">
						<image :src="goods.src" mode=""></image>
						<text>{{goods.name}}</text>
					</view>
				</view>
			</view>
		
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 储存页面高度
				screenHeight: '',
				// 左侧导航栏数据
				currentIndex: 0,
				leftDomData: [],
				navList: [],
				// 右侧商品数据
				goodsList: [],
				rightDomData: [],
				rightScrollTop: 0
			};
		},
		methods: {
			// tab切换
			changeCurrentIndex(index) {
				this.currentIndex = index;
				this.rightScrollTop = this.rightDomData[index];
			},
			// 实现右侧滚动左侧响应
			rightScroll(event) {
				let top = event.detail.scrollTop;
				this.rightDomData.forEach((item,index) => {
					if(item <= (top)) {
						this.currentIndex = index
					}
				})
			},
			// 获取模拟数据
			getData() {
				for(let i = 0;i < 20;i++) {
					this.navList.push({
						name: `分类${i}`
					})
					this.goodsList.push({
						list:[]
					})
				}
				for(let j = 0;j < this.goodsList.length;j++) {
					for(let z= 0;z < 12;z++) {
						this.goodsList[j].list.push({
							name: `分类${j}商品${z}`,
							src: `/static/images/demo/cate_05.png`
						})
					}
				}
			},
			// 获取节点信息
			getDomRect() {
				const query = uni.createSelectorQuery().in(this);
				// 获取左侧导航栏各元素距离顶部的位置
				query.selectAll('.left-item').boundingClientRect(data => {
					this.leftDomData = data.map(item => {
						return item.top
					});
				}).exec();
				// 获取右侧商品栏各元素距离顶部的位置
				query.selectAll('.product-list').boundingClientRect(data => {
					this.rightDomData = data.map(item => {
						return item.top
					});
				}).exec();
			},
		},
		onLoad() {
			// 获取当前设备屏幕的可视高度
			uni.getSystemInfo({
				success: res => {
					this.screenHeight = res.windowHeight + 'px'
				}
			});
			// 初始化数据
			this.getData();
		},
		mounted() {
			this.getDomRect()
		}
	}
</script>

<style lang="scss">
	.box {
		display: flex;
		box-sizing: border-box;
		height: 100%;
		scroll-view {
			flex: 3.5;
			box-sizing: border-box;
		}
		.left {
			flex: 1;
			border-right: 1px solid #F3F3F3;
			margin-right: 34rpx;
			.left-item {
				box-sizing: border-box;
				padding: 36rpx 0;
				text-align: center;
				font-size: 32rpx;
				color: #2A2A2A;
				border-bottom: 1px solid #F3F3F3;
				text {
					display: block;
				}
			}
		}
		.right {
			box-sizing: border-box;
			padding-top: 14rpx;
			.product {
				box-sizing: border-box;
				.product-list {
					flex-wrap: wrap;
					display: flex;
					.product-item {
						margin-right: 66rpx;
						margin-bottom: 66rpx;
						width: calc(33.33% - 66rpx);
						box-sizing: border-box;
						display: flex;
						flex-direction: column;
						align-items: center;
						image {
							width: 120rpx;
							height: 120rpx;
						}
						text {
							margin-top: 28rpx;
							font-size: 20rpx;
							color: #2A2A2A;
						}
					}
				}
				
			}
		}
	}
	.active {
		color: #FC7512;
		border-left: 4px solid #FC7512;
	}
</style>
