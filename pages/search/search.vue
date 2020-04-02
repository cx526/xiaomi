<template>
	<view>
		<Card title="热门搜索" bodyImg="/static/images/demo/search-banner.png"></Card>
		<Keywords :hot="hot"></Keywords>
		<Card title="常用分类"></Card>
		<Classify :classify="classify"></Classify>
		<cutLine></cutLine>
		<Card title="搜索记录" borderB="1px solid #F0F0F0"></Card>
		<Record :record="record"></Record>
	</view>
</template>

<script>
	import Card from '@/components/common/card/card.vue'
	import Keywords from '@/components/search/keywords/keywords.vue'
	import Classify from '@/components/search/classify/classify.vue'
	import cutLine from '@/components/common/line/line.vue'
	import Record from '@/components/search/record/record.vue'
	export default {
		data() {
			return {
				// 搜索关键词
				hot: [
					{name: '领券中心'},
					{name: 'Reami K20'},
					{name: 'ReamiBook 14'},
					{name: '智能积木，越野四驱车'},
					{name: '手环 腕带'}
				],
				// 常用分类
				classify: [
					{name: '耳机'},
					{name: '手机'},
					{name: '音箱'},
					{name: '手表'},
					{name: '配件'},
					{name: '网关/传感器'},
					{name: '健康'},
					{name: '酷玩'},
				],
				// 搜索记录
				record: [
					{name: '小米8'},
					{name: '小米'}
				]
			};
		},
		components:{
			Card,
			Keywords,
			Classify,
			cutLine,
			Record
		},
		// 点击原生导航栏上的搜索按钮
		onNavigationBarButtonTap(event) {
			if(event.index == 0) {
				uni.navigateTo({
					url: '../../components/search/result/result'
				})
			}
		},
	}
</script>

<style lang="scss">
	
</style>
