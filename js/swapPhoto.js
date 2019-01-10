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
  "images/equip/pacific110/IMG_0770.jpg" ,
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
  "images/equip/bigPacific/bigpacific.jpg"
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

var miscEquipPictures = [
  "images/equip/miscEquip/IMG_0654.jpg",
  "images/equip/miscEquip/IMG_0643.jpg"
];




// THIS IS THE FUNCTIONS THAT CONTROL THE IMAGE GALLERY
function swapPhotos(i, mainImage, imageArray) {
  document.getElementById(mainImage).src= imageArray[i];
}
