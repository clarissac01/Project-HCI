var slideIdx = 0;
var slides = document.getElementsByClassName("image-slide");
var points = document.getElementsByClassName("point");


        
function setSlide(n) {
    slideIdx = n;
    slideShow(n);
}
        
function slideShow(n) {

    if(n >= slides.length)slideIdx = 0;
    if(n < 0) slideIdx = slides.length-1;
    var i;
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        points[i].className = "point";
    }
    slides[slideIdx].style.display = "block";
    points[slideIdx].className += " active";
    
}

const interval = setInterval(function() {
    setSlide(slideIdx+1)
  }, 2000);
  slideShow(slideIdx);
