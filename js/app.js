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
	// Show color creation options

// When sliders are manipulated
	// Take values and update color preview

// When add color is selected
	// append that color as an option to color choices
	// select the new color

// On mouse events on the canvas
	// Draw lines