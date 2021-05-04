var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
} else {
    document.getElementById("navbar").style.top = "-490px";
}
prevScrollpos = currentScrollPos;
}

//Carosel JS
var slidePosition = 1;
SlideShow(slidePosition);
// forward/Back controls
function plusSlides(n) {
SlideShow(slidePosition += n);
}
//  images controls
function currentSlide(n) {
SlideShow(slidePosition = n);
}
var slidePosition = 0;
SlideShow();
function SlideShow() {
var i;
var slides = document.getElementsByClassName("Containers");
for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}
slidePosition++;
if (slidePosition > slides.length) {slidePosition = 1}
slides[slidePosition-1].style.display = "block";
setTimeout(SlideShow, 5000); // Change image every 2 seconds
} 