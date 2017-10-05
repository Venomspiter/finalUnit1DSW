$(document).ready(function() {
	var compArtPoints = 0;
	var points = 0;
	$(".ECS").click(function() {
	});
	$(".CompArt").click(function() {
		compArtPoints+=1;
	});
	$(".DSW").click(function() {
		points+=1;
	});
	
	$(".APCS").click(function() {
		points+=1;
	});
	$(".Mobile").click(function() {
		points+=1.5;
	});
	$(".q5").click(function() {
		if(points < 3 && compArtPoints < 1){
			$("#ECSAlert").fadeIn();
			//$("body").fadeOut();
			$("#quest2").fadeOut();
			$("#quest3").fadeOut();
			$("#quest4").fadeOut();
			$("#quest5").fadeOut();
		}
		if(points < 3 && compArtPoints > 0){
			$("#CompArtAlert").fadeIn();
			//$("body").fadeOut();
			$("#quest2").fadeOut();
			$("#quest3").fadeOut();
			$("#quest4").fadeOut();
			$("#quest5").fadeOut();
		}
		if((points > 3 || points == 3 )&& points < 6 && compArtPoints < 2){
			$("#APCSAlert").fadeIn();
			//$("body").fadeOut();
			$("#quest2").fadeOut();
			$("#quest3").fadeOut();
			$("#quest4").fadeOut();
			$("#quest5").fadeOut();
		}
		if((points > 3 || points == 3) && points < 6 && (compArtPoints > 2 || compArtPoints == 2)){
			$("#h1").fadeIn();
			//$("body").fadeOut();
		}
		if(points > 6 || points == 6){
			$("#MobileAlert").fadeIn();
			//$("body").fadeOut();
			$("#quest2").fadeOut();
			$("#quest3").fadeOut();
			$("#quest4").fadeOut();
			$("#quest5").fadeOut();
		}
		
	});
});