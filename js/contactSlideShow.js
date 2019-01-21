//Contact Page -- Pic for the Bins
var pictures = ["images/Ariel3.jpg", "images/team2.jpg"];

//Product Page -- Indexes for changeImage function
var imageIndex = 0;


//Product Page -- Change Image Function
function changeImage() {

	document.getElementById("contactSlide").src=pictures[imageIndex];

	imageIndex++;

	if (imageIndex>=pictures.length){
		imageIndex=0;
	}

}

//Product Page -- Timer that controls the Change Image Function
var myTimer = setInterval(changeImage,3000);
