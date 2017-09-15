$(document).ready(function() {
	var x = 0;
	$("p").click(function() {
		$("#Q1").slideDown("slow");
		$("h2").toggle();
		$("p").hide();
	});
	$("h2").click(function() {
		if (x<1){
		$("h3").fadeIn();
		$("h4").fadeIn();
		$("h2").toggle();
		x+=1
		}
		if (x>4){
		$("h5").fadeIn();
		$("h4").fadeIn();
		$("h2").toggle();
		}
		});
		$("h4").click(function() {
			if(x<4){
			$("h4").fadeOut();
			$("h2").toggle();
			$("h3").hide();
			$("#Q1").fadeOut("slow");
			$("#Q2").slideDown("slow");
			x+=2
			}
			if(x>4 && x<7){
				$("h4").fadeOut();
			$("h2").fadeIn();
			$("h6").hide();
			$("#Q2").fadeOut("slow");
			$("#Q3").slideDown("slow");
			x+=1
			}
			if(x>6){
				$("div").fadeIn();
				$("h6").hide();
				$("h4").hide();
				$("h2").hide();
				$("h5").hide();
				$("#Q3").fadeOut("slow");
				$("form").fadeIn();
			}
		});
	$("h2").click(function() {
		if(x>1 && x<4){
		$("h2").toggle();
		$("h6").fadeIn();
		$("h4").fadeIn();
		}
		});
});