var ninjaPictures = [
  "images/equip/ninja/IMG_0663.jpg",
  "images/equip/ninja/IMG_0664.jpg",
  "images/equip/ninja/ninja.jpg"
];

var bossPictures = [
  "images/equip/boss/IMG_0690.jpg",
  "images/equip/boss/IMG_0687.jpg",
  "images/equip/boss/_DSC2892.jpg"
];

var chiefPictures = [
  "images/equip/chief/IMG_0627.jpg",
  "images/equip/chief/IMG_0631.jpg",
  "images/equip/chief/IMG_0630.jpg"
];

var bravePictures = [
  "images/equip/brave/IMG_0646.jpg",
  "images/equip/brave/IMG_0647.jpg",
  "images/equip/brave/IMG_0644.jpg"
];

var blissPictures = [
  "images/equip/bliss/IMG_0665.jpg",
  "images/equip/bliss/IMG_Bliss.jpg",
  "images/equip/bliss/IMG_0667.jpg"
];

var aida150Pictures = [
  "images/equip/aida150/IMG_0650.jpg",
  "images/equip/aida150/IMG_0673.jpg",
  "images/equip/aida150/IMG_0674.jpg"
];

var aida160Pictures = [
  "images/equip/aida160/IMG_0679.jpg",
  "images/equip/aida160/IMG_0686.jpg",
  "images/equip/aida160/IMG_0503.jpg"
];

var E5HalfPictures = [
  "images/equip/E5Half/IMG_0683.jpg",
  "images/equip/E5Half/IMG_0658.jpg",
  "images/equip/E5Half/IMG_0685.jpg"
];

var E110Pictures = [
  "images/equip/niagaraE110/IMG_0678.jpg",
  "images/equip/niagaraE110/IMG_0675.jpg",
  "images/equip/niagaraE110/IMG_0649.jpg"
];

var spiritPictures = [
  "images/equip/spirit/IMG_0682.jpg",
  "images/equip/spirit/IMG_0652.jpg",
  "images/equip/spirit/IMG_0680.jpg"
];

var verson300Pictures = [
  "images/equip/verson300/IMG_0693.jpg",
  "images/equip/verson300/IMG_0694.jpg",
  "images/equip/verson300/IMG_0710.jpg"
];

var niagara400Pictures = [
  "images/equip/Niagara400/IMG_0703.jpg",
  "images/equip/Niagara400/IMG_0692.jpg",
  "images/equip/Niagara400/IMG_0704.jpg"
];

var verson200Pictures = [
  "images/equip/Verson200/IMG_0700.jpg",
  "images/equip/Verson200/IMG_0702.jpg",
  "images/equip/Verson200/IMG_0668.jpg"
];

var minster5Pictures = [
  "images/equip/minster5/IMG_0737.jpg",
  "images/equip/minster5/IMG_0739.jpg",
  "images/equip/minster5/IMG_0738.jpg"
]

var minsterPictures = [
  "images/equip/minster/IMG_0642.jpg",
  "images/equip/minster/IMG_0698.jpg",
  "images/equip/minster/IMG_0699.jpg"
];

var OBIWanPictures = [
  "images/equip/OBIWan/IMG_0705.jpg",
  "images/equip/OBIWan/IMG_0706.jpg",
  "images/equip/OBIWan/IMG_0632.jpg"
];

var amadaPictures = [
  "images/equip/amada/IMG_0600.jpg",
  "images/equip/amada/IMG_0616.jpg",
  "images/equip/amada/IMG_0625.jpg"
];

var pacific110Pictures = [
  "images/equip/pacific110/IMG_0617.jpg" ,
  "images/equip/pacific110/IMG_0598.jpg",
  "images/equip/pacific110/IMG_0619.jpg"
];

var pacific55Pictures = [
  "images/equip/pacific55/IMG_0777.jpg",
  "images/equip/pacific55/IMG_0776.jpg",
  "images/equip/pacific55/IMG_0597.jpg"
];

var bigPacificPictures = [
  "images/equip/bigPacific/IMG_0622.jpg",
  "images/equip/bigPacific/IMG_0623.jpg",
  "images/equip/bigPacific/IMG_0624.jpg"
];

var bliss45Pictures = [
  "images/equip/bliss45/IMG_0740.jpg",
  "images/equip/bliss45/IMG_0742.jpg",
  "images/equip/bliss45/IMG_0741.jpg"
];

var laserPictures = [
  "images/equip/laser/IMG_0604.jpg",
  "images/equip/laser/IMG_0620.jpg",
  "images/equip/laser/IMG_0621.jpg",
  "images/equip/laser/laser.jpg",
  "images/equip/laser/IMG_0764.jpg",
  "images/equip/laser/IMG_0759.jpg"
];

// This function takes in an elements ID and toggles the visability
var call = function toggleTheDiv(id){
  var x = document.getElementById(id);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


// THESE ARE THE FUNCTIONS THAT CONTROL THE IMAGE GALLERY
function swapPhotoNinja(i) {
  document.getElementById("ninjaMainImage").src=ninjaPictures[i];
}

function swapPhotoNiagara400Ton(i) {
  document.getElementById("Niagara400TonMainImage").src=niagara400Pictures[i];
}

function swapPhotoBoss(i) {
  document.getElementById("bossMainImage").src=bossPictures[i];
}

function swapPhotoChief(i) {
  document.getElementById("chiefMainImage").src= chiefPictures[i];
}

function swapPhotoBrave(i) {
  document.getElementById("braveMainImage").src= bravePictures[i];
}

function swapPhotoBliss(i) {
  document.getElementById("blissMainImage").src= blissPictures[i];
}

function swapPhotoAida150(i) {
  document.getElementById("adia150MainImage").src= aida150Pictures[i];
}

function swapPhotoAida160(i) {
  document.getElementById("adia160MainImage").src= aida160Pictures[i];
}

function swapPhotoE5Half(i) {
  document.getElementById("E5HalfMainImage").src= E5HalfPictures[i];
}

function swapPhotoE110(i) {
  document.getElementById("E110MainImage").src= E110Pictures[i];
}

function swapPhotoSpirit(i) {
  document.getElementById("spiritMainImage").src= spiritPictures[i];
}

function swapPhotoVerson300(i) {
  document.getElementById("verson300MainImage").src= verson300Pictures[i];
}

function swapPhotoVerson200(i) {
  document.getElementById("verson200MainImage").src= verson200Pictures[i];
}

function swapPhotoMinster5(i) {
  document.getElementById("minster5MainImage").src= minster5Pictures[i];
}

function swapPhotoMinster(i) {
  document.getElementById("minsterMainImage").src= minsterPictures[i];
}

function swapPhotoOBIWan(i) {
  document.getElementById("OBIWanMainImage").src= OBIWanPictures[i];
}

function swapPhotoAmada(i) {
  document.getElementById("amadaMainImage").src= amadaPictures[i];
}

function swapPhotoPacific110(i) {
  document.getElementById("pacific110MainImage").src= pacific110Pictures[i];
}

function swapPhotoPacific55(i) {
  document.getElementById("pacific55MainImage").src= pacific55Pictures[i];
}

function swapPhotoBigPacific(i) {
  document.getElementById("bigPacificMainImage").src= bigPacificPictures[i];
}

function swapPhotoBliss45(i) {
  document.getElementById("bliss45MainImage").src= bliss45Pictures[i];
}

function swapPhotoLaser(i) {
  document.getElementById("laserMainImage").src= laserPictures[i];
}
