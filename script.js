$( document ).ready(function() {
	var update = function(i){
		var checks = $('.check').toArray();
		var string = $('.hello').val();
		string += '\n\n\n';
		checks.forEach(function(check){
			if($(check).is(':checked')){
				string += $(check).data('nice');
				string += '\n\n';
			}
		});

		string += $('.signoff').val();
		string += '\n';

		string += $('.name').val();

		$('textarea').val(string);
		console.log(string);
	};
	$('.input').on('change keydown', update);

});