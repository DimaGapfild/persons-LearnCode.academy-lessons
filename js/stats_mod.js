let stats=(function(){
	let people=0;
	//chache DOM
	let $stats=$('#statsModule'), template=$('#stats-template').html();
	// bind events listener from pubsub
	events.on('peopleChanged', setPeople)
	_render();

	function _render(){
		$stats.html(Mustache.render(template,{people:people}))
	}
	function setPeople(newPeople){
		people = newPeople;
		_render();
	}
	function destroy(){
		$stats.remove();
		events.off('peopleChanged',setPeople);
	}
	return{
		destroy:destroy
	}
})();