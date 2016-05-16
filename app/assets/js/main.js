(function($, window, document, undefined){
	var source = "data.json";
	console.log(url);
	$.ajax({
		url: source,
		cache: false,
		success: function(data){
			initialize(data);
		}
	});



	function initialize(data){
		
	}
}(jQuery, window, document, undefined));
