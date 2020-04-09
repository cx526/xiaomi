export default {
	state:{
		cartList: [
			{
				id: "1",
				checked: false,
				topic: '/static/images/demo/cate_01.png',
				title: '商品标题',
				price: 3999,
				min: 1,
				max: 10,
				attr: [
					{
						label: '颜色',
						selected: 2,
						list: [
							{name: '火焰红'},
							{name: '冰川蓝'},
							{name: '炭黑'}
						]
					},
					{
						label: '容量',
						selected: 0,
						list: [
							{name: '64G'},
							{name: '128G'},
							{name: '254G'}
						]
					},
					{
						label: '套餐',
						selected: 0,
						list: [
							{name: '标配'},
							{name: '套餐一'},
							{name: '套餐二'}
						]
					},
					
				]
			},
			{
				id: "1",
				checked: false,
				topic: '/static/images/demo/cate_01.png',
				title: '商品标题',
				price: 3999,
				min: 1,
				max: 10,
				attr: [
					{
						label: '颜色',
						selected: 2,
						list: [
							{name: '火焰红'},
							{name: '冰川蓝'},
							{name: '炭黑'}
						]
					},
					{
						label: '容量',
						selected: 0,
						list: [
							{name: '64G'},
							{name: '128G'},
							{name: '254G'}
						]
					},
					{
						label: '套餐',
						selected: 0,
						list: [
							{name: '标配'},
							{name: '套餐一'},
							{name: '套餐二'}
						]
					},
					
				]
			},
			{
				id: "1",
				checked: false,
				topic: '/static/images/demo/cate_01.png',
				title: '商品标题',
				price: 3999,
				min: 1,
				max: 10,
				attr: [
					{
						label: '颜色',
						selected: 2,
						list: [
							{name: '火焰红'},
							{name: '冰川蓝'},
							{name: '炭黑'}
						]
					},
					{
						label: '容量',
						selected: 0,
						list: [
							{name: '64G'},
							{name: '128G'},
							{name: '254G'}
						]
					},
					{
						label: '套餐',
						selected: 0,
						list: [
							{name: '标配'},
							{name: '套餐一'},
							{name: '套餐二'}
						]
					},
					
				]
			}
		]
	},
	mutations: {
		// 全选
		checkedAll:(state,payload) => {
				state.cartList.map(item => {
					item.checked = payload.checked
				})
		}
	}
}