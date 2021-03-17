var i = 0;
var images = [];
var timeGap = 3000;

images[0] = 'image1.jpg';
images[1] = 'image2.png';
images[2] = 'image3.png';
images[3] = 'image4.png';
images[4] = 'image5.png';

function slideshow() {
    document.slide.src = images[i];

    if(i<images.length-1){
        i++;
    }else{
        i=0;
    }
    setTimeout(slideshow,timeGap);
}

window.onload = slideshow

function increase() {
  var x = document.getElementsByTagName("BODY")[0];
  x.style.fontSize = "large"
}
function decrease() {
  var x = document.getElementsByTagName("BODY")[0];
  x.style.fontSize = "medium"
}