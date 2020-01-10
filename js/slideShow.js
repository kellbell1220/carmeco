// Author: Kelli Stasiak
//Updated:12/05/2019

//GreenInit page -- Pic for recycling
var GreenInitPics = ["images/pallets.jpg", "images/scrap.jpg", "images/IMG_0660.jpg", "images/cardboard.jpg", "images/scrap2.jpg", "images/scrap3.jpg"];
var ContactPics = ["images/Ariel3.jpg", "images/team4.jpg"];
var QualityPics =["images/quality/IMG_9037.jpg", "images/quality/IMG_9014.jpg", "images/quality/IMG_9018.jpg", "images/quality/IMG_9030.jpg","images/quality/IMG_9011.jpg"];

var i = 0;
var j = 0;

function changeImage(imageArray, imageIDToChange)
{
	document.getElementById(imageIDToChange).src = imageArray[i];
	i++;
	if (i >= imageArray.length)
	{
		i = 0;
	}
}

function DoubleSlideShow(imageArray1, mainImageToChange1, imageArray2, mainImageToChange2)
{
	document.getElementById(mainImageToChange1).src = imageArray1[i];
	i++;
	if (i >= imageArray1.length)
	{
		i = 0;
	}
	document.getElementById(mainImageToChange2).src = imageArray2[j];
	j++;
	if (j >= imageArray2.length)
	{
		j = 0;
	}
}

// function changeImage() {
// 	document.getElementById("slideShow").src=pictures[imageIndex];
//
// 	imageIndex++;
//
// 	if (imageIndex>=pictures.length){
// 		imageIndex=0;
// 	}
// }


//Timer that controls the Change Image Function
//var myTimer = setInterval(changeImage,3000);
