var $search = $('#search');
var $gallery = $('.gallery');

function showResults(value) {
	// If search value is not empty
	if(value.length !== 0) {
		//Hide all images initially
		$gallery.hide();
		$gallery.removeAttr('data-lightbox');
		//If image title attribute contains search value, show image
		$('.gallery[data-title*=' + value + ']').show();
		$('.gallery[data-title*=' + value + ']').attr('data-lightbox', 'gallery');
	} else {
		// Show all images when search value is empty
		$gallery.show();
		$gallery.attr('data-lightbox', 'gallery');
	}
}

//When user changes search value
$search.keyup( function() {
	//Pass search value to showResults function
	var searchVal = $(this).val();
	showResults(searchVal);
});