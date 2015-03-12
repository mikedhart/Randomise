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
console.log(type);
		switch (type) {
			case 'email':
				random = random_email();
				break;
			case 'first name':
				random = random_first_name();
				break;
			case 'last name':
				random = random_last_name();
				break;
			case 'full name':
				random = random_full_name();
				break;
			case 'name':
				random = random_full_name();
				break;
			case 'zip':
				random = random_zip_code();
				break;
			case 'post code':
				random = random_post_code();
				break;
			case 'city':
				random = random_town();
				break;
			case 'town':
				random = random_town();
				break;
			case 'address':
				random = random_address();
				break;
			default:
				random = random_string();
		}

		return random;
 	}

	function random_address() {
		var pieces = [random_number(100), random_street()];
		return pieces.join(' ');
	}

	function random_street() {
  	var names = ["High", "Low", "Church", "Chappel", "Arnold", "Ormskirk", "Ruby", "Victoria", "Hydes", "Hanover", "High Ridge", "Mount", "Bold"];
		return names[random_number(names.length)] + ' ' + random_road();
 	}

	function random_road() {
  	var names = ["Street", "Road", "Way", "Crescent"];
		return names[random_number(names.length)];
 	}

	function random_post_code() {
  	var pieces = [random_string(2).toUpperCase(), random_number(99).toString(), ' ', random_number(9).toString(), random_string(2).toUpperCase()];
		return pieces.join('');
 	}

	function random_zip_code() {
  	return random_number(99999).toString() + '-' + random_number(9999);
 	}

	function random_full_name() {
  	return random_first_name() + " " + random_last_name();
	}

	function random_last_name() {
  	var names = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Miller", "Davis", "Garcia", "Rodriguez", "Wilson"];
		return names[random_number(names.length)];
	}

	function random_first_name() {
  	var names = ["James", "Mary", "John", "Elizabeth", "Robert", "Patricia", "Michael", "Jennifer", "William", "Linda", "David", "Barbara", "Joseph", "Margaret", "Richard", "Susan", "Charles", "Dorothy", "Thomas"];
		return names[random_number(names.length)];
	}

	function random_town() {
  	var names = ['London', 'Liverpool', 'Manchester', 'Paris', 'Nice', 'Bordeaux', 'Madrid', 'Barcelona', 'Valencia', 'Berlin', 'Munich', 'Hanover'];
		return names[random_number(names.length)];
 	}

	function has_randomisable_label(el) {
  	var randomisable_labels = ['email', 'first name', 'last name', 'full name', 'zip', 'post code', 'city', 'town', 'address'];
		var label = $("label[for='"+$(el).attr('id')+"']").text().toLowerCase();
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

