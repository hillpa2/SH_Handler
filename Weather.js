var weather = require('weather-js');

exports.SHFunction=function(){

	WeatherDataUp=require("./IO.js");
	WeatherData=WeatherDataUp.SHVar.SHVar;
	console.log("City Name (required): "+WeatherData[2]);
	console.log("Upper Locality (required): "+WeatherData[3]);
	console.log("User Name: "+WeatherData[4]);
	console.log("Degree Type: "+WeatherData[5]);
	console.log("---------------");

	if (WeatherData[2]===undefined && WeatherData[3]===undefined){
		console.log("Missing variables: Wrong data set or misstype")
	}
	else {
		searcher=WeatherData[2]+", "+WeatherData[3]
		degreeType=WeatherData[5]
		if (degreeType===undefined){
			degreeType="F";
		}
		weather.find({search: searcher, degreeType: degreeType}, function(err, result) {
  			if(err) console.log(err);
 
  			console.log(JSON.stringify(result, null, 2));
		});
	}
};