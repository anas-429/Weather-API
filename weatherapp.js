$(document).ready(function() {
	$("#submitCity").click(function() {
		return getWeather();
	});
});

function getWeather() {
	
	var city = $("city").val();
	
	if(city !='') {
		
		$.ajax({
			url: 'http://api.openweathermap.org/data/2.5/weather?q' + city + "&units=metric" + "&APPID=3a9d7873c18cb651d5d131e1eb075239",
			type: "GET",
			dataType: "jsonp",
			success: function(data) {
				console.log(data);
				$("#showWeather").html(data);
			}
		});
				
	} else {
		$("#error").html("<div>City field can't be empty</div>");
	}
	
}












