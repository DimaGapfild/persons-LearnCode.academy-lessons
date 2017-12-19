(function(){
	let name={
		name:['Dima','Juliya'],
		init: function() {
			this.chacheDOM();
			this.bindEvents();
			this.render();
			
		},
		chacheDOM: function() {
			this.$namesModule=$('#names-module');
			this.$button= this.$namesModule.find('button');
			this.$input= this.$namesModule.find('input');
			this.$ul= this.$namesModule.find('ul');
			this.template= this.$namesModule.find('#people-names').html();
		},
		bindEvents:function(){
			this.$button.click(function(e){e.preventDefault()});
			this.$button.on('click', this.addName.bind(this));
			this.$ul.delegate('i.del', 'click', this.deleteName.bind(this));
		},
		addName:function(){
			let value=this.$input.val();
			if (value!=='') {
			this.name.push(value);
			this.render();
			this.$input.val('');
			}
		},
		deleteName: function(e){
			let $remove = $(e.target).closest('li'),
				i = this.$ul.find('li').index($remove);
				this.name.splice(i, 1);
				this.render();
		},
		render: function() {
			let data = {
				name: this.name
			};
			this.$ul.html(Mustache.render(this.template, data));
		}
	};

	name.init();
})()
