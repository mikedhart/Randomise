$.fn.randomise = function() {
	this.val(random_string());

	function random_string() {
		return Math.random().toString(36).substring(7); 
	}
};

