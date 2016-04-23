$(document).ready(function() {


//$('.item-button').click(function(){
//	$('.list').append($('<li>'{
//		text: $('.input-field').val()
//	});
//	$('.list').append($('.checkboxes'));
	
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

//$('.item-button').click(function(){
//		$('.list').append($('.delete-button'));

//	});



//$('.list').on('click', 'li', function(event){
  // fires when any LIs are clicked on
  // including LIs that aren't on the page when it is initially loaded
});

