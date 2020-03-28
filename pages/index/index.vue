<template>
	<view>
		<scroll-view scroll-x class="tabBars" :scroll-into-view="id" scroll-with-animation="true">
			<block v-for="(item, index) in tabList" :key="index">
				<view @click="changeTabBars(index)" :id="'tab' + index">
					<text :class="tabIndex == index ? 'active' : ''">{{ item.name }}</text>
				</view>
			</block>
		</scroll-view>

		<swiper 
		:style="'height:' + screenH" 
		:current="tabIndex" 
		@change="changeSwiper" 
		:duration="100"
		>
			<swiper-item v-for="(item,index) in tabItem" :key="index">
				<scroll-view scroll-y="true" :style="'height:' + screenH" @scrolltolower="loadMore(index)">
					<block v-for="(tab,listIndex) in item.list" :key="listIndex">
						<!-- swiper -->
						<SwiperC v-if="tab.type == 'swiperUrl'" :swiperUrl="tab.data"></SwiperC>
						<!-- nav -->
						<template v-else-if="tab.type == 'navList'">
							<Nav :navList="tab.data"></Nav>
							<!-- 分割线 -->
							<Line></Line>
						</template>
						<!-- 三图广告 -->
						<template v-else-if="tab.type == 'threeAdv'">
							<threeAdv :threeAdv="tab.data"></threeAdv>
							<!-- 分割线 -->
							<Line></Line>
						</template>
						<!-- 小卡片 -->
					<!-- 	<Card title="每日精选" bodyImg="/static/images/demo/demo4.jpg"></Card> -->
						<!-- 产品列表 -->
						<List v-else-if="tab.type == 'productList'" :productList="tab.data"></List>
					</block>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import SwiperC from '@/components/common/swiper/swiper.vue'
import Nav from '@/components/common/nav/nav.vue'
import Line from '@/components/common/line/line.vue'
import threeAdv from '@/components/index/three-adv/three-adv.vue'
import Card from '@/components/common/card/card.vue'
import List from '@/components/common/list/list.vue'
export default {

	data() {

		return {
			
			tabIndex: 0,
			screenH: '',
			id: '',
			tabList: [
				{
					name: '推荐'
				},
				{
					name: '体育'
				},
				{
					name: '热点'
				},
				{
					name: '财经'
				},
				{
					name: '娱乐'
				},
				{
					name: '军事'
				},
				{
					name: '历史'
				},
				{
					name: '本地'
				}
			],
			tabItem: [
				{
					name: '推荐',
					list: [
						{
							type: 'swiperUrl',
							data: [
								{
									src: '/static/images/demo/demo4.jpg'
								},
								{
									src: '/static/images/demo/demo4.jpg'
								},
								{
									src: '/static/images/demo/demo4.jpg'
								}
							]
						},
						{
							type: 'navList',
							data: [
								{
									src: '/static/images/indexnav/1.png',
									text: '新品发布'
								},
								{
									src: '/static/images/indexnav/2.gif',
									text: '小米众筹'
								},
								{
									src: '/static/images/indexnav/3.gif',
									text: '以旧换新'
								},
								{
									src: '/static/images/indexnav/4.gif',
									text: '1分拼团'
								},
								{
									src: '/static/images/indexnav/5.gif',
									text: '超级特卖'
								},
								{
									src: '/static/images/indexnav/6.gif',
									text: '小米秒杀'
								},
								{
									src: '/static/images/indexnav/7.gif',
									text: '真心想要'
								},
								{
									src: '/static/images/indexnav/8.gif',
									text: '电视热卖'
								},
								{
									src: '/static/images/indexnav/9.gif',
									text: '家电热卖'
								},
								{
									src: '/static/images/indexnav/10.gif',
									text: '米粉卡'
								},
							]
						},
						{
							type: 'threeAdv',
							data: {
								big: {
									src: '/static/images/demo/demo1.jpg'
								},
								smallTop: {
									src: '/static/images/demo/demo2.jpg'
								},
								smallBottom: {
									src: '/static/images/demo/demo2.jpg'
								}
							}
						},
						{
							type: 'productList',
							data: [
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
							]
						}
					]
				},
				{
					name: '体育',
					list: [
						{
							type: 'swiperUrl',
							data: [
								{
									src: '/static/images/demo/demo4.jpg'
								},
								{
									src: '/static/images/demo/demo4.jpg'
								},
								{
									src: '/static/images/demo/demo4.jpg'
								}
							]
						},
						{
							type: 'navList',
							data: [
								{
									src: '/static/images/indexnav/1.png',
									text: '新品发布'
								},
								{
									src: '/static/images/indexnav/2.gif',
									text: '小米众筹'
								},
								{
									src: '/static/images/indexnav/3.gif',
									text: '以旧换新'
								},
								{
									src: '/static/images/indexnav/4.gif',
									text: '1分拼团'
								},
								{
									src: '/static/images/indexnav/5.gif',
									text: '超级特卖'
								}
							]
						},
						{
							type: 'threeAdv',
							data: {
								big: {
									src: '/static/images/demo/demo1.jpg'
								},
								smallTop: {
									src: '/static/images/demo/demo2.jpg'
								},
								smallBottom: {
									src: '/static/images/demo/demo2.jpg'
								}
							}
						},
						{
							type: 'productList',
							data: [
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
							]
						}
					]
				},
				{
					name: '热点'
				},
				{
					name: '财经'
				},
				{
					name: '娱乐'
				},
				{
					name: '军事'
				},
				{
					name: '历史'
				},
				{
					name: '本地'
				}
			]
		}
	},
	components:{
		SwiperC,
		Nav,
		Line,
		threeAdv,
		Card,
		List
	},
	onLoad() {
		// 获取可是区域的高度
		uni.getSystemInfo({
			success: (res) => {
				this.screenH = (res.windowHeight - uni.upx2px(90)) + 'px';
			}
		})
	},
	methods: {
		// tab切换
		changeTabBars(index) {
			if(this.tabIndex == index) {
				return;
			}
			else {
				this.tabIndex = index;
				this.id = 'tab' + index;
			}
		},
		// 滑动轮播图
		changeSwiper(event) {
			this.changeTabBars(event.target.current)
		},
		// 上拉加载更多
		loadMore(index) {
			let loadData =
			{
				cover: '/static/images/demo/list/5.jpg',
				title: '米家空调',
				desc: '1.5匹直流变频',
				newPrice: 2100,
				oldPrice: 2999
			}
			// 防止多次触发上拉加载更多
			var flag = true;
			if(flag) {
				flag = false;
				for(let i = 0; i < this.tabItem[index].list.length;i++) {
					if(this.tabItem[index].list[i].type == 'productList') {
						uni.showToast({
							title: '加载中...',
							icon: 'none'
						})
						setTimeout(() => {
							uni.hideToast();
							flag = true;
							this.tabItem[index].list[i].data.push(loadData);
						},2000)
						
					}
				}
			}
		},
	}
}
</script>

<style lang="scss">
.tabBars {
	box-sizing: border-box;
	width: 100%;
	white-space: nowrap;
	border-bottom: 1px solid #ccc;
	view {
		display: inline-block;
		box-sizing: border-box;
		line-height: 90rpx;
		font-size: 30rpx;
		padding: 0 30rpx;
	}
}
.active {
	color: #e57228;
	border-bottom: 2px solid #e57228;
	padding-bottom: 20rpx;
}
// scroll-view 隐藏页面滚动条样式
::-webkit-scrollbar {
		width: 0;
		height: 0;
		background-color: transparent;
	} 
</style>
