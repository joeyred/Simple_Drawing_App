// Problem: User interaction triggers no action for functionality implied
// Solution: When user interacts cause changes appropriately

// .selected class should be assigned to color control when clicked

// Store current selected color on load
var color = $('.selected').css('background-color');

// when clicking color control list items
$( '.controls li' ).click(function() {
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
	// append that color as an option to color choices
	// select the new color

// On mouse events on the canvas
	// Draw lines