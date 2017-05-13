exports.SHFunction=function(){
	ImportDataUp=require("./IO.js");
	ImportData=ImportDataUp.SHVar.SHVar;

	searcherUp=ImportData[2];

	function writeString (inputString, callbackFunction){
			console.log(inputString);
			callbackFunction();
	}

	//function booleanFunc(booleanInput, fn) {
		//var fn =
		//if (booleanInput) {
			//callbackFunction();
		//}
	//}

	if (searcherUp==="Boolean"){
		//booleanFunc(true, function(){
		//console.log("Boolean callback was called")
		//});
	}
	else if (searcherUp==="String"){
		writeString("TEST STRING", function (){
			console.log("This callback was called");
		});
	}


};