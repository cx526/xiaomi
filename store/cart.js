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
			}
		]
	},
	mutations: {
		// 全选
		checkedAll:(state,payload) => {
				state.cartList.map(item => {
					item.checked = payload.checked
				})
		},
		// 单选
		checked: (state,payload) => {
			state.cartList[payload.index].checked = !state.cartList[payload.index].checked;
		}
	},
	getters: {
		// 全选选中或没选中
		len:(state) => {
			let num = 0;
			if(state.cartList.length > 0) {
				for(let i = 0;i < state.cartList.length;i++) {
					if(state.cartList[i].checked) {
						num += 1
					}
				}
				return num == state.cartList.length ? true : false
			}
			else {
				return false
			}
			
		},
		// 总价格
		add: (state) => {
			let total = 0;
			for(let i = 0; i < state.cartList.length;i++) {
				if(state.cartList[i].checked) {
					total = total + state.cartList[i].price * state.cartList[i].min;
				}
			}
			return total
		},
		// 禁用全选按钮
		disabledSelctAll: (state) => {
			return state.cartList.length == 0
		},
		
	}
}