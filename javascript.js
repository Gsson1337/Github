
		var bildatm = 3;
		var auto;
		var autoknapp = true;
		var right = $("#right");
		var left = $("#left");
		var auton = $("#Auto");
		var nummer = $("#nummer");
		var sidleds = $("#sidleds");
		var första = $("#första");
		var andra = $("#andra");
		var tredje = $("#tredje");
		var nr1 = $("#nr1");
		var nr2 = $("#nr2");
		var nr3 = $("#nr3");
		var bilder = $("#bilder");
		$("hr").show();
		$("#js").hide();
		left.show()
		right.show();
		första.show();
		andra.hide();
		tredje.show();
		nr1.hide();
		nr3.hide();
		nummer.show();
		auton.show();

		right.click(function() {
		autoknapp = true;
		clearInterval(auto);				
			bilder.animate({left: "-=200px"},"slow",);
			bildatm++;
			console.log(bildatm);
			if(bildatm === 5){
				bilder.animate({left: "+=600px"}, 0);
				bildatm = 2;
			};	
			gömma();
		});

		left.click(function() {
			autoknapp = true;
		clearInterval(auto);
			bilder.animate({left: "+=200px"},"slow");
			bildatm--;
			console.log(bildatm);
			if(bildatm === 1){ 
				bilder.animate({left: "-=600px"}, 0);
				bildatm =4;
			};
			gömma();
		});
		första.click(function() {
			autoknapp = true;
			clearInterval(auto);				
			bilder.animate({"left": "-200px"},"slow",);
			bildatm = 2;
			console.log(bildatm);
			gömma();
	
		});
		andra.click(function() {
			autoknapp = true;
			clearInterval(auto);				
			bilder.animate({"left": "-400px"},"slow",);
			bildatm = 3;
			console.log(bildatm);
			gömma();
		});
		tredje.click(function() {
			autoknapp = true;
			clearInterval(auto);				
			bidler.animate({"left": "-600px"},"slow",);
			bildatm = 4;
			console.log(bildatm);
			gömma();
		});
		

		auton.click(function() {
			clearInterval(auto)
			auto = setInterval(byta, 1000);

		});
		function gömma(){
			if(bildatm  == 2){
				första.hide();
				andra.show();
				tredje.show();
				nr1.show();
				nr2.hide();
				nr3.hide();
			} else if( bildatm == 3){
				första.show();
				andra.hide();
				tredje.show();
				nr1.hide();
				nr2.show();
				nr3.hide();

			} else if( bildatm == 4){
				första.show();
				andra.show();
				tredje.hide();
				nr1.hide();
				nr2.hide();
				nr3.show();

			}
			if(autoknapp == true){
				auton.show();
			} else{
				auton.hide();
			}
		};
		function byta() {
			autoknapp = false;
			bilder.animate({left: "-=200px"},"slow");
			bildatm++;
			if(bildatm === 5){ 
				bilder.animate({left: "+=600px"}, 0);
				bildatm =2;
			};
			gömma();
		};