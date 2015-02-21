$.fn.randomise = function() {
	this.each(function(i, el) {
		switch ($(el).attr('type')) {
    	case 'number':
				$(el).val(random_number());
				break;
			default:
				$(el).val(random_string());
				break;
		}
	});

	function random_string() {
		return Math.random().toString(36).substring(7); 
	}

	function random_number() {
		return Math.random(); 
	}
};

