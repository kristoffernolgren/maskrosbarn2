$( document ).ready(function() {
	var update = function(i){
		var checks = $('.check').toArray();
		var string = $('.hello').val();
		var mode = $('.slider').val();

		string += '\n\n\n';
		checks.forEach(function(check){
			if($(check).is(':checked')){
				string += $(check).data('mode'+mode);
				string += '\n\n';
			}
		});

		string += $('.signoff').val();
		string += '\n';

		string += $('.name').val();

		$('textarea').val(string);
	};
	$('.input').on('change keydown', update);
	$('.enable').on('click', function(){
		$('textarea').removeAttr('disabled');
		$('.inputGroup').hide();
	});
	$('.form').submit(function(e){
		e.preventDefault();
		$.ajax({
			url: "https://script.google.com/macros/s/AKfycbx8zIkb8P_s_sax-M3X2oSUw90uQIN3cwkOfoI9eCS1PHXj350/exec",
			type: "post",
			data: $( this ).serialize()
	});
	});

});