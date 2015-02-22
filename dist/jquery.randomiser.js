$.fn.randomise = function() {
	this.each(function(i, el) {
		switch ($(el).attr('type')) {
    	case 'number':
				$(el).attr('value', random_number());
				break;
			case 'date':
				$(el).attr('value', random_date());
				break;
			default:
				$(el).attr('value', random_string());
				break;
		}
	});

	function random_string(n) {
		if (!n) {
			n = 10;
		}

		var text = '';
		var possible = 'abcdefghijklmnopqrstuvwxyz';

		for (var i = 0; i < n; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return text;
	}

	function random_number() {
		return Math.floor(Math.random() * 1000); 
	}

	function random_date() {
		now = new Date();
		date = new Date(now.getTime() + Math.random() * Math.random());
		console.log(date);
		return date;
	}
};

