<template>
	<view>
		<view class="user-appraise">
			<view><text>用户评价(3200)</text></view>
			<view>
				<text style="color: #FD8311;">99.2%</text>
				<text style="margin-left: 10rpx;">满意</text>
			</view>
		</view>
		<view class="apprasie-label">
			<view class="label-box">
				<block v-for="(item,index) in label" :key="index">
					<view class="label-item" @click="handleChangeTab(index)"
					:class="currentIndex == index? 'active':''">
						<text>{{item.name}}</text>
					</view>
				</block>
			</view>
		</view>
		<cut-line></cut-line>
		<view class="appraise-context" v-for="n in 3" :key="n">
			<view class="user-img">
				<image src="/static/images/demo/demo6.jpg" mode=""></image>
			</view>
			<view class="appraise-main">
				<view class="appraise-number">
					<text>23323323</text>
					<text class="icon iconfont icon-chaoaiwawa" style="color: #FD8311;"> 超爱</text>
				</view>
				<view class="appraise-comment">
					<text>评论内容</text>
					<view class="appraise-show">
						<image src="/static/images/demo/demo10.jpg" mode="widthFix"
						v-for="n in 6" :key="n">
						</image>
					</view>
				</view>
				<view class="appraise-time">
					<view><text>2020-04-06</text></view>
					<view class="browse">
						<view style="margin-right: 20rpx;">
							<text style="margin-right: 10rpx;">0</text>
							<text class="icon iconfont icon-like"></text>
						</view>
						<view>
							<text style="margin-right: 10rpx;">1</text>
							<text class="icon iconfont icon-huifu"></text>
						</view>
					</view>
				</view>
				<!-- 回复 -->
				<view class="appraise-reply">
					<text style="color: #FD8311;">官方回复：</text>
					<text>回复内容</text>
					<text class="icon iconfont icon-like" style="color: #DBDBDB;margin-left: 10rpx;"></text>
					<text style="color: #DBDBDB;">赞客服 10</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import cutLine from '@/components/common/line/line'
	export default {
		data() {
			return {
				currentIndex: 0,
				label: [
					{name: '全部'},
					{name: '有图24'},
					{name: '非常喜欢11'},
					{name: '拍照好13'},
					{name: '手感很棒22'},
					{name: '效果很好12'},
					{name: '性能很棒66'},
				]
			};
		},
		components:{
			cutLine
		},
		methods:{
			handleChangeTab(index) {
				this.currentIndex = index
			}
		}
	}
</script>

<style lang="scss">
.user-appraise {
	box-sizing: border-box;
	display: flex;
	font-size: 28rpx;
	border-bottom: 1px solid #EFEFEF;
	padding: 0 20rpx;
	line-height: 100rpx;
	justify-content: space-between;
	view {
		box-sizing: border-box;
		text {
			font-size: 28rpx;
		}
	}
}
.apprasie-label {
	box-sizing: border-box;
	padding: 20rpx;
	padding-bottom: 0;
	border-top: 1px solid #EFEFEF;
	.label-box {
		display: flex;
		flex-wrap: wrap;
		.label-item {
			font-size: 24rpx;
			margin-right: 20rpx;
			background: #FFF3EC;
			color: #B0A29C;
			padding: 12rpx 24rpx;
			margin-bottom: 20rpx;
		}
		.label-item.active {
			color: #fff;
			background: #FD8311;
		}
	}
}
.appraise-context {
	box-sizing: border-box;
	padding: 20rpx;
	display: flex;
	.user-img {
		width: 90rpx;
		height: 90rpx;
		margin-right: 20rpx;
		image {
			width: 100%;
			height: 100%;
			border-radius: 50%;
		}
	}
	.appraise-main {
		flex: 1;
		font-size: 28rpx;
		.appraise-number {
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 28rpx;
		}
		.appraise-comment {
			margin-top: 16rpx;
			.appraise-show {
				margin-top: 10rpx;
				display: flex;
				flex-wrap: wrap;
				image {
					margin-bottom: 10rpx;
					height: 100rpx;
					width: calc(33.33% - 8rpx);
					margin-right: 12rpx;
				}
				image:nth-child(3n) {
					margin-right: 0;
				}
			}
		}
		.appraise-time {
			margin-top: 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 20rpx;
			color: #CECBCC;
			.browse {
				box-sizing: border-box;
				display: flex;
				align-items: center;
			}
		}
		.appraise-reply {
			box-sizing: border-box;
			padding: 20rpx;
			margin-top: 30rpx;
			background: #EEEEEF;
			font-size: 26rpx;
		}
	}
}
</style>
