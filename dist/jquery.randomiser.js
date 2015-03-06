$.fn.randomise = function() {
	this.each(function(i, el) {
		switch ($(el).attr('type')) {
    	case 'number':
				$(el).attr('value', random_number());
				break;
			case 'date':
				$(el).attr('value', random_date());
				break;
			case 'text':
				var randomisable_label = has_randomisable_label(el);

				if (randomisable_label) {
					$(el).attr('value', call_random(randomisable_label));
				} else {
					$(el).attr('value', random_string());
				}
				break;
			case 'email':
				$(el).attr('value', random_email());
				break;
		}
	});

	function call_random(type) {
		random = "";

		switch (type) {
			case 'email':
				random = random_email();
				break;
			default:
				random = random_string();
		}

		return random;
 	}

	function has_randomisable_label(el) {
  	var randomisable_labels = ['email'];
		var label = $(el).prevAll('label').text().toLowerCase();
		var randomisable_label = "";

		$.each(randomisable_labels, function (key, value) {
			if (label.indexOf(value) > -1) {
     		randomisable_label = value;
	   	}
		});

		return randomisable_label;
 	}

	function random_email() {
  	return random_string(random_number(10)) + '@' + random_string(random_number(10)) + '.com';
 	}

	function random_string(n) {
		if (!n) {
			n = random_number(20);
		}

		var text = '';
		var possible = 'abcdefghijklmnopqrstuvwxyz';

		for (var i = 0; i < n; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}

		return text;
	}

	function random_number(size) {
		if (!size) {
    	size = 1000;
  	}

		return Math.floor(Math.random() * size); 
	}

	function random_date() {
		var year = random_number(20) + 2000;
		var month = random_number(12);
		var day = random_number(31);

		return [year, (month === 0) ? pad(1, 2) : pad(month, 2), (day === 0) ? pad(1, 2) : pad(day, 2)].join('-');
	}

	function pad(n, width, z) {
		z = z || '0';
		n = n + '';
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}

	return this;
};

