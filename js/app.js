// Problem: User interaction triggers no action for functionality implied
// Solution: When user interacts cause changes appropriately

// .selected class should be assigned to color control when clicked

// Store current selected color on load
var color = $('.selected').css('background-color');
var $canvas = $('canvas');
// $('canvas')[0] is the same as document.getElementByTagName('canvas')[0]
var context = $canvas[0].getContext('2d');
var lastEvent;
var mouseDown = false;


// when clicking color control list items
$( '.controls' ).on('click', 'li', function() {
	// deselect sibling elements
	$(this).siblings().removeClass('selected');
	// add .select class to selected element
	$(this).addClass('selected');
	// update color value
	color = $(this).css('background-color');
});



// When "New Color" is clicked
$('#revealColorSelect').click(function(){
	changeColor();
	// Show color creation options
	$('#colorSelect').toggle();
});

// Take values and update color preview
function changeColor() {

	var red = $('#red').val();
	var green = $('#green').val();
	var blue = $('#blue').val();

	var newColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

	$('#newColor').css('background-color', newColor);
}

// When sliders are manipulated
$('input[type=range]').on('input', changeColor);

// When add color is selected
$('#addNewColor').click(function() {

	// append that color as an option to color choices
	var $newColor = $('<li></li>');
	$newColor.css('background-color', $('#newColor').css('background-color'));
	$('.controls ul').append($newColor);

	// select the new color
	$newColor.click();
});

	// select the new color

// On mouse events on the canvas
$canvas.mousedown(function(e){

	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e){
	if (mouseDown) {
		context.beginPath();
		context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
		context.lineTo(e.offsetX, e.offsetY);
		context.strokeStyle = color;
		context.stroke();
		lastEvent = e;
	}
}).mouseup(function(){
	mouseDown = false;
}).mouseleave(function(){
	$canvas.mouseup();
});












