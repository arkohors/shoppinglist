$(document).ready(function() {
	
//When a user enters an item, then clicks the "add item" button, append that item into an unordered list
	$('.item-button').click(function(){
		$('.list').append('<li>' + $('.input-field').val()+ '</li>');

	});
//Click on an item to cross it off the list
	$('.list').on('click', 'li', function(){
		$(this).css("text-decoration", 'line-through'); 

	});
//Double Click an Item to Remove it from the list
	$('.list').on('dblclick', 'li', function(){
		$(this).remove();
	

	});

});

