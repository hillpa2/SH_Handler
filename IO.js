//npm initial
var request = require('request');
var filesystem = require("fs");
//end npm initial

//initial functions and vars
var SHVar=[];
MemRunHand=process.argv[2];

if (MemRunHand==="Mem") {}
else if (MemRunHand==="Run") {}
else {process.exit()}

FunctUp=process.argv[3];
FunctLow=process.argv[4];

//setting SHVar
SHVar[0]=MemRunHand;
SHVar[1]=FunctUp;
SHVar[2]=FunctLow;
for (var x=5; x<process.argv.length; x++){
	SHVar[x-2]=process.argv[x];
}
//end setting SHVar

if (MemRunHand==="Run"){
	Run();
}

function Run() {
	FunctUp=SHVar[1];

	console.log("SH Variables: "+SHVar);
	console.log("---------------");

	inputMem="!"+SHVar
	filesystem.appendFile("memory.txt", inputMem, function(err){
		if (err){console.log(err);}
		//console.log("Added SHVar to memory")
	});

	exports.SHVar={SHVar};

	RunFunction=require("./"+FunctUp+".js");
	RunFunction.SHFunction();

};

if (MemRunHand==="Mem"){
	filesystem.readFile("memory.txt", "utf8", function(error, data) {
	
		var readData = data.split("!");

		console.log("Data in Memory:")
		for (var x=1; x<readData.length; x++){
			console.log(x+": "+readData[x]);
		}
		console.log("---------------");

		if (FunctUp) {
			console.log("Your Choice: "+readData[FunctUp]);
			console.log("---------------");
		}
		if (FunctLow==="Run"){
			SHVar=readData[FunctUp].split(",");
			console.log("Running From Memory: "+SHVar);
			console.log("---------------");
			Run();

		}

	});
}