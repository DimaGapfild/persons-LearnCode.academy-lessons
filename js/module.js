;let name = (function(){
	let person=['Dima','Juliya','Nika','Alisha'];

	//chache DOM
	let $namesModule=$('#names-module'),
		$button= $namesModule.find('button'),
		$input= $namesModule.find('input'),
		$ul= $namesModule.find('ul'),
		template= $namesModule.find('#people-names').html();
	//bind events
		$button.click(function(e){e.preventDefault()});
		$button.on('click', addName);
		$ul.delegate('i.del', 'click', deleteName);
	_render();
	//render function
	function _render() {
		$ul.html(Mustache.render(template, {name:person}));
		events.emit('peopleChanged', person.length);
	}
	//api add name
	function addName(value) {
		let newName = (typeof value ==='string') ? value: $input.val();
		person.push(newName);
		_render();
		$input.val('');
	}
	//api delete name
	function deleteName(e){
		if (typeof e === "string"){	
			spliceAndDel(person.indexOf(e));
		} else {
			let remove=$(e.target).closest('li');
			spliceAndDel($ul.find('li').index(remove));
		}
		function spliceAndDel(index){
			if (index>=0){	
			person.splice(index,1);
			_render();
			}
		}
	}
	//we return access only add and del function 
	return {
		addName:addName,
		deleteName:deleteName
	}

})();