$( document ).ready(function() {
	var update = function(i){
		var checks = $('.check').toArray();
		var mode = $('.slider').val();
		var string = ''
		string += $('.hello').val();
		if(checks.some(isChecked)){
			string += '\n\n\n';
			string += $('#tickmarks').data('hello'+mode);
			string += '\n\n';
		}

		checks.forEach(function(check){
			if($(check).is(':checked')){
				string += $(check).parent().text();
				string += '\n\n';
			}
		});

		setTimeout(function() {
			if($('.name').val().length > 0 && checks.some(isChecked)) {
				string += '\n';
				string += $('#tickmarks').data('goodbye'+mode);
				string += '\n';
				string += $('.name').val();
			}
			string = string.replace(/\\n/g, "\n");
			$('textarea').val(string);
		}, 10);

	};
	isChecked = function(element) {
		return $(element).is(':checked');
	};
	$('.input').on('change keydown', update);
	$('.enable').on('click', function(){
		$('textarea').removeAttr('disabled');
		$('textarea').focus();
		$('.inputGroup').animate({ 'opacity' : 0 });

	});
	$('.form').submit(function(e){
		e.preventDefault();
		$('textarea').removeAttr('disabled');
		$('.submit').addClass("submitted")
		$.ajax({
			url: "https://script.google.com/macros/s/AKfycbx8zIkb8P_s_sax-M3X2oSUw90uQIN3cwkOfoI9eCS1PHXj350/exec",
			type: "post",
			data: $( this ).serialize(),
			success: function() {
				$('.fieldset').hide();
				$('.header').hide();
				$('.nav').after('<div class="header"><h1>Tack!</h1></div>');
			}
		});
	});
	$('.hello').easyDropDown({
		onChange: update,
	})
	$.getJSON("https://jsonip.com?callback=?", function (data) {
			$.getJSON('https://ipapi.co/'+data.ip+'/json/', function (data) {
				$('.municipality').val(data.city)
			});
		});

});