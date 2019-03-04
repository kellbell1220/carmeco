// Author: Kelli Stasiak
//Updated:03/01/2019

//GreenInit page -- Pic for recycling
var pictures = ["images/pallets.jpg", "images/scrap.jpg", "images/IMG_0660.jpg", "images/cardboard.jpg", "images/scrap2.jpg", "images/scrap3.jpg"];

//Product Page -- Indexes for changeImage function
var imageIndex = 0;

//Product Page -- Change Image Function
function changeImage() {
	document.getElementById("slideShow").src=pictures[imageIndex];

	imageIndex++;

	if (imageIndex>=pictures.length){
		imageIndex=0;
	}
}

//Product Page -- Timer that controls the Change Image Function
var myTimer = setInterval(changeImage,3000);
