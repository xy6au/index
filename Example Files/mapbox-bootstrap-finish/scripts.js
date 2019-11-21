// Scripting Civic Engagement 
// Fall 2019
// 10.10.19 jQuery tutorial

$(document).ready(function() {

	// Part 1: Click and Hover effects
	
		// Hover 
		$("h1").mouseenter(function() {
			$(this).css("color", "teal"); // Changes all H1 elements to teal when moused over
		});

		$("h1").mouseleave(function() {
			$(this).css("color", "#FFC107"); // Changes all H1 elements back to their original color ("#FFC107") when the mouse moves back out
		});

		// Click 
		$("p").click(function() {
			$(this).css("text-decoration", "underline"); // Underlines any p element that is clicked on
		});

		$(".jumbotron").click(function() {
			$(this).find("p").css("color", "teal"); // Changes the text color of all p elements inside the jumbotron to teal when the jumbotron element is clicked
		});

		$(".card-img-top").click(function() {
			$(this).parents(".card").find(".card-body").toggle(); // Hides/shows the card body when the card image is clicked
		});

		function clickToHide() {
			$(".card .btn-primary").click(function() {
				$(this).parents(".card").fadeOut();
			});
		}

		clickToHide();


	// Part 2: Dynamic content
		
		$("#more-cats").click(function() {

			for (i=0; i<8; i++) {
				$(".card-container").append('<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="card"><img src="assets/img/cat.jpg" class="card-img-top" alt="A picture of a cute, gray and white cat with yellow eyes." title="A picture of a cute, gray and white cat with yellow eyes."><div class="card-body"><h5 class="card-title">I\'m a cat!</h5><p class="card-text">Some quick example text to build on the card title and make up the bulk of the card\'s content.</p><button class="btn btn-primary">Hide Me</button></div></div>');
			}

			clickToHide();
		});
	
});
