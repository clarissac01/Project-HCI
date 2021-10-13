var slideIdx = 0;
var points = document.getElementsByClassName("point");


const image = $('.image-slider > .image-slide:first-child');
const images = $('.image-slider > .image-slide');
        
function setSlide(n) {
    slideIdx = n;
    slideShow(n);
}
        
function slideShow(n) {

    if(n >= images.length)slideIdx = 0;
    if(n < 0) slideIdx = images.length-1;
    var i;
    for(i = 0; i < points.length; i++) {
    //     slides[i].style.display = "none";  
        points[i].className = "point";
    }
    // slides[slideIdx].style.display = "block";
    points[slideIdx].className += " active";
    updateSlider();
}

function updateSlider() {
    console.log(slideIdx)
    image.animate({ marginLeft: slideIdx * image.width() * -1 });
}


const interval = setInterval(function() {
    setSlide(slideIdx+1)
  }, 2000);
