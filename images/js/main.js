var app2 = new Vue({
	el: '#app2',
	data: {
		toggle: '',
		check:'',			
		items: [
			{title: 'Test1', desc: 'Test1'},
			{title: 'Test2', desc: 'Test2'},
			{title: 'Test3', desc: 'Test3'}
		]
	},
	methods: {
		addItem: function() {
			var input = document.getElementById('listsTitle');
			var input2 = document.getElementById('listsDesc');
			if(input.value !== '') {
				this.items.push({
					title:input.value,
					desc:input2.value
				})
				input.value = "";
				input2.value = "";
			}
		},
		deleteItem: function(index) {
			this.items.splice(index, 1);
		},
		checkfunction: function() {
			var checkbox = document.getElementByClass('checkbox');
			if(checkbox.value == true) {
				this.check = 'check'
			} 
		}
	}
})